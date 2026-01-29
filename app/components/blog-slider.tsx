"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { createClient } from "@sanity/client";

/* ===============================
   SANITY CLIENT
================================ */
const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: "production",
    apiVersion: "2025-01-01",
    useCdn: true,
    token: process.env.SANITY_TOKEN,
});

export default function BlogCarousel() {
    const [blogs, setBlogs] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        client
            .fetch(`
        *[_type == "blog"] | order(publishedDate desc) {
          title,
          slug,
          publishedDate,
          "bannerImageURL": bannerImage.asset->url,
          description
        }
      `)
            .then((data) => {
                setBlogs(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });
    }, []);


    return (
        <section className="w-full md:pt-16 py-10">
            <div className="2xl:max-w-[1440px] md:w-[85%] w-[90%] mx-auto flex flex-col gap-12 items-center">

                {/* ================= LEFT CONTENT ================= */}
                <div className="w-full flex md:flex-row flex-col md:items-center justify-between">
                    <div>
                        <p className="mb-4 text-[16px] md:text-[20px] tracking-[10px] md:tracking-[12px] text-[#FF1586] uppercase">
                            Our Blogs
                        </p>

                        <h2 className="text-[40px] lg:text-[60px] font-bold uppercase text-white leading-[1.1] tracking-[2px] font-fks mb-6 max-w-[650px]">
                            Recent <span className="text-[#BBFC00]">Blogs</span>
                        </h2>

                    </div>

                    <Link href="/blog">
                        <button className="px-6 md:px-6 py-2 rounded-[5px] bg-[#BBFC00] text-[#031347] font-bold hover:bg-transparent hover:text-white hover:border-white border border-transparent transition font-hel md:text-base text-sm">
                            Explore Blogs
                        </button>
                    </Link>
                </div>

                {/* ================= RIGHT CAROUSEL ================= */}
                <div className="w-full ">

                    {/* LOADER */}
                    {loading && (
                        <div className="h-[300px] flex justify-center items-center">
                            <div className="w-12 h-12 border-4 border-[#BBFC00] border-t-transparent rounded-full animate-spin" />
                        </div>
                    )}

                    {/* ERROR */}
                    {!loading && error && (
                        <div className="text-red-500 text-center font-semibold py-20">
                            Something went wrong: {error || "Unable to fetch blogs."}
                        </div>
                    )}

                    {/* NO BLOGS */}
                    {!loading && !error && blogs.length === 0 && (
                        <div className="text-red-500 text-center font-semibold py-20">
                            No Blogs Found
                        </div>
                    )}

                    {!loading && !error && (
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            autoplay={{
                                delay: 3500,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                            }}
                            pagination={{
                                clickable: true,
                                dynamicBullets: true,
                                dynamicMainBullets: 5,
                            }}
                            spaceBetween={20}
                            slidesPerView={3}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1280: { slidesPerView: 3 },
                            }}
                            className="pb-24"
                        >
                            {blogs.map((blog, index) => (
                                <SwiperSlide key={index}>
                                    <div className="border border-[#0a3f7f] rounded-lg overflow-hidden transition-colors group p-5 grad h-full">

                                        {/* Image */}
                                        <div className="relative overflow-hidden rounded-[10px]">
                                            <Image
                                                src={blog.bannerImageURL || "/placeholder.svg"}
                                                alt={blog.title}
                                                width={500}
                                                height={500}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="mt-4">
                                            <h3 className="text-white font-fks font-bold text-[22px] md:text-2xl mb-3 leading-tight tracking-wide min-h-[72px]">
                                                {blog.title}
                                            </h3>

                                            <div className="text-white text-[15px] font-hel mb-6 leading-tight line-clamp-3">
                                                <PortableText value={blog.description} />
                                            </div>

                                            <Link href={`/blog/${blog.slug.current}`}>
                                                <button className="w-full py-2 px-4 border-2 text-white hover:border-[#BBFC00] hover:text-[#BBFC00] transition-colors font-semibold">
                                                    See More
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                    )}
                </div>

            </div>
        </section>
    );
}
