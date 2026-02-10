import { createClient } from "@sanity/client";
import type { Metadata } from "next";
import BlogDetail from "../../../components/blog-detail";

export const dynamic = "force-dynamic";

const publicClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2025-01-01",
  useCdn: true,
});

const BLOG_DETAIL_QUERY = `*[_type == "blog" && slug.current == $slug][0]{
  title,
  description,
  metaDescription,
  publishedDate,
  readTime,
  slug,
  category,
  "bannerImageURL": bannerImage.asset->url,
  blogCategory,
  subsections[] {
    subtitle,
    subdescription,
    lists[] {
      listTitle,
      listDescription,
      items[] {
        title,
        description
      }
    }
  },
  conclusion,
  faqs[] {
    question,
    answer
  }
}`;

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;

  // Fetch blog data for metadata
  const blog = await publicClient.fetch(BLOG_DETAIL_QUERY, { slug: id });

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
    alternates: {
      canonical: `https://spawnpointstudio.com/blog/${id}`,
    },
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
  };
}

export default async function BlogDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  // Fetch blog data **once** and pass it down
  const blogData = await publicClient.fetch(BLOG_DETAIL_QUERY, { slug: id });

  if (!blogData) {
    return <div className="p-10 text-red-500 h-screen flex items-center justify-center">Blog not found</div>;
  }

  return <BlogDetail blog={blogData} slug={id} />;
}
