import { createClient } from "@sanity/client";
import type { Metadata } from "next";
import BlogDetail from "../../../components/blog-detail";

export const dynamic = "force-dynamic";

/* ---------------------------
   ✅ PUBLIC SANITY CLIENT
   (NO TOKEN – SAFE FOR METADATA)
---------------------------- */
const publicClient = createClient({
  projectId: "u98a2a3q",
  dataset: "production",
  apiVersion: "2025-01-01",
  useCdn: true,
});

/* ---------------------------
   ✅ METADATA (ASYNC PARAMS)
---------------------------- */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  try {
    const { id } = await params;

    const blog = await publicClient.fetch(
      `*[_type == "blog" && slug.current == $slug][0]{
        title,
        description,
        metaDescription,
        "bannerImageURL": bannerImage.asset->url
      }`,
      { slug: id }
    );

    if (!blog) {
      return {
        title: "Blog not found | Spawn Point",
        description: "The blog you are looking for could not be found.",
        alternates: {
          canonical: "https://spawnpointstudio.com/blog",
        },
      };
    }

    return {
      title: blog.title,
      description: blog.metaDescription || blog.description,
      openGraph: {
        title: blog.title,
        description: blog.metaDescription || blog.description,
        type: "article",
        url: `https://spawnpointstudio.com/blog/${id}`,
        images: blog.bannerImageURL
          ? [
              {
                url: blog.bannerImageURL,
                width: 1200,
                height: 630,
                alt: blog.title,
              },
            ]
          : [],
      },
      twitter: {
        card: "summary_large_image",
        title: blog.title,
        description: blog.metaDescription || blog.description,
        images: blog.bannerImageURL ? [blog.bannerImageURL] : [],
      },
      alternates: {
        canonical: `https://spawnpointstudio.com/blog/${id}`,
      },
    };
  } catch (error) {
    console.error("Metadata fetch error:", error);
    return {
      title: "Error loading blog | Spawn Point",
      description: "There was an error fetching the blog content.",
    };
  }
}

/* ---------------------------
   ✅ PAGE COMPONENT
---------------------------- */
export default async function BlogDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <BlogDetail ids={id} />;
}
