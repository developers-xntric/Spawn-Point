"use client"
import { useEffect, useState } from "react"
import Pagination from "@/app/(screens)/blogs/pagination"
import { createClient } from "@sanity/client"
import Image from "next/image"

const BLOGS_PER_PAGE = 6

const client = createClient({
    projectId: "u98a2a3q",
    dataset: "production",
    apiVersion: "2025-01-01",
    useCdn: true,
    token: process.env.SANITY_TOKEN,
})

export default function BlogSecond() {
    const [blogs, setBlogs] = useState<any[]>([])
    const [currentPage, setCurrentPage] = useState(1)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchBlogs() {
            try {
                const data = await client.fetch(`
          *[_type == "blog"] | order(publishedDate desc) {
            _id,
            title,
            description,
            "bannerImageURL": bannerImage.asset->url,
            "slug": slug.current,
            publishedDate,
            readTime,
            category,
            blogCategory
          }
        `)

                const filtered = data.filter(
                    (b: any) => b.blogCategory?.toLowerCase() === "xntric ae"
                )

                setBlogs(filtered)
            } catch (e) {
                console.error(e)
            } finally {
                setLoading(false)
            }
        }

        fetchBlogs()
    }, [])

    const totalPages = Math.ceil(blogs.length / BLOGS_PER_PAGE)
    const start = (currentPage - 1) * BLOGS_PER_PAGE
    const currentBlogs = blogs.slice(start, start + BLOGS_PER_PAGE)

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    if (loading) {
        return (
            <div className="py-20 flex justify-center">
                <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin" />
            </div>
        )
    }

    if (!blogs.length) {
        return <p className="py-20 text-center text-red-500">No Blogs Found</p>
    }

    return (
        <div className="w-full flex flex-col items-center">
            {/* BLOG GRID */}
            <div className="w-[90%] grid grid-cols-1 md:grid-cols-2  gap-6 mb-16">
                {currentBlogs.map((blog, index) => (
                    //   <BlogListingCards
                    //     key={index}
                    //     title={blog.title}
                    //     desc={blog.description}
                    //     date={blog.publishedDate}
                    //     min={blog.readTime}
                    //     image={blog.bannerImageURL}
                    //     id={blog.slug}
                    //     blog={blog}
                    //     border
                    //     isBlog
                    //   />
                    <div
                        key={index}
                        className="border border-[#0a3f7f] rounded-lg overflow-hidden transition-colors group p-5 grad"
                    >
                        {/* Image */}
                        <div className="relative overflow-hidden rounded-[10px]">
                            <Image
                                src={blog.bannerImageURL || "/placeholder.svg"}
                                alt={blog.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                width={500}
                                height={500}
                            />
                        </div>

                        {/* Content */}
                        <div className="mt-2">
                            <p className="text-white text-md mb-3">{blog.publishedDate}</p>
                            <h3 className="text-white font-fks font-bold text-lg md:text-3xl tracking-wide mb-3 leading-tight min-h-10  " >{blog.title}</h3>
                            <p className="text-white text-lg font-hel mb-6 leading-tight">{blog.description}</p>

                            {/* See More Button */}
                            <button className="w-full py-2 px-4 border-2 border-[#white] text-white hover:border-[#BBFC00] hover:text-[#BBFC00] transition-colors font-semibold">
                                See More
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* PAGINATION */}
            {totalPages > 1 && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                    showPrevNext={false}
                />
            )}
        </div>
    )
}
