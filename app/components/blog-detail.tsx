"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import FirstSection from "../components/blog-first-section";

import Image from "next/image";
import Script from "next/script";
import { useState } from "react";
import { LinkedinIcon } from "lucide-react";
import Link from "next/link";
import HeroSection from "./common/hero";
import ContactSection from "./contact-section";
import NewsletterSection from "./newsletter";
export const dynamic = "force-dynamic";

const schemaData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blogs",
    "description": "Blogs from Spawn Point",
    "provider": {
        "@type": "Organization",
        "name": "SpawnPoint Studio",
        "url": "https://spawnpointstudio.com/",
        logo: "link",
        contactPoint: {
            "@type": "ContactPoint",
            telephone: "+971 5456 17052",
            contactType: "service",
            areaServed: "AE",
            availableLanguage: "en"
        },
        "email": "play@spawnpointstudio.com",
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "09:00",
            "closes": "18:00"
        },
        "priceRange": "AED",
        "areaServed": {
            "@type": "Place",
            "name": "Gulf Cooperation Council"
        },
        sameAs: [
            "https://www.linkedin.com/company/spawnpointstudio/",
            "https://www.instagram.com/spawnpointstudio.play/"
        ]
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.5",
        "reviewCount": "30",
        "bestRating": "5",
        "worstRating": "1"
    },
    "serviceType": "Game Marketing",
    "areaServed": {
        "@type": "Place",
        "name": "Gulf Cooperation Council"
    }
};

const getSchemaData = (blog: any, slug: string) => {
    if (!blog) return null;

    return {
        "@context": "https://schema.org",
        "@graph": [
            // BLOG POSTING SCHEMA
            {
                "@type": "BlogPosting",
                "@id": `https://spawnpointstudio.com/blog/${slug}#article`,
                "headline": blog.title,
                "description": blog.metaDescription || blog.description,
                "datePublished": blog.publishedDate,
                "dateModified": blog.publishedDate,
                "mainEntityOfPage": {
                    "@id": `https://spawnpointstudio.com/blog/${slug}`,
                },
                "image": blog.bannerImageURL
                    ? {
                        "@type": "ImageObject",
                        "url": blog.bannerImageURL,
                        "width": 1200,
                        "height": 600,
                    }
                    : undefined,
                "author": { "@id": "https://spawnpointstudio.com/#person" },
                "publisher": { "@id": "https://spawnpointstudio.com/#organization" },
                "articleSection": blog.category || blog.blogCategory,
                "keywords": blog.keywords || "",
            },

            // AUTHOR (You can edit name here)
            {
                "@type": "Person",
                "@id": "https://spawnpointstudio.com/#person",
                "name": blog.authorName || "SpawnPoint Content Team",
                "description":
                    blog.authorBio ||
                    "SpawnPoint Studio is a leading game marketing and creative strategy agency helping brands grow through powerful storytelling, design, and immersive experiences.",
                "url": blog.authorURL || "https://www.linkedin.com/company/spawnpointstudio/",
                "jobTitle": blog.authorRole || "Writer & Content Strategist",
            },

            // ORGANIZATION SCHEMA
            {
                "@type": "Organization",
                "@id": "https://spawnpointstudio.com/#organization",
                "name": "SpawnPoint Studio",
                "url": "https://spawnpointstudio.com",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://spawnpointstudio.com/logo.png",
                },
                "email": "play@spawnpointstudio.com",
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+971 5456 17052",
                    "contactType": "customer support",
                    "availableLanguage": "en",
                },
                "sameAs": [
                    "https://www.linkedin.com/company/spawnpointstudio/",
                    "https://www.instagram.com/spawnpointstudio.play/"
                ]
            },

            // BREADCRUMBS
            {
                "@type": "BreadcrumbList",
                "@id": "https://spawnpointstudio.com/#breadcrumb",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://spawnpointstudio.com/"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Blogs",
                        "item": "https://spawnpointstudio.com/blog"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": blog.title,
                        "item": `https://spawnpointstudio.com/blog/${slug}`
                    }
                ]
            },

            // OPTIONAL: FAQ SCHEMA
            blog.faqs?.length
                ? {
                    "@type": "FAQPage",
                    "mainEntity": blog.faqs.map((faq: any) => ({
                        "@type": "Question",
                        "name": faq.question,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": faq.answer
                        }
                    }))
                }
                : null
        ].filter(Boolean)
    };
};


interface BlogDetailProps {
    blog: any;
    slug: string;
}

const BlogDetail = ({ blog, slug }: BlogDetailProps) => {
    const [loading, setLoading] = useState(true);

    const tableOfContents: { id: string; title: string }[] = [];
    if (blog?.title) {
        tableOfContents.push({ id: "main-title", title: blog.title });
    }
    if (blog?.subsections?.length > 0) {
        blog.subsections.forEach((sub: any, index: number) => {
            if (sub.subtitle) {
                tableOfContents.push({
                    id: `subsection-${index}`,
                    title: sub.subtitle,
                });
            }
        });
    }
    if (blog?.conclusion) {
        tableOfContents.push({ id: "conclusion", title: "Conclusion" });
    }
    if (blog?.faqs?.length > 0) {
        tableOfContents.push({ id: "faqs", title: "Frequently Asked Questions" });
    }

    if (!blog) {
        return (
            <div className="p-10 text-red-500 h-screen flex items-center justify-center">
                Blog not found
            </div>
        );
    }

    return (
        <>
            {!loading ? (
                <div className="flex justify-center h-screen items-center py-20 mb-10">
                    <div className="w-12 h-12 border-4 border-[#BBFC00] border-t-transparent rounded-full animate-spin"></div>
                </div>
            ) : (
                <main className="font-hel ">
                    {/* Schema Scripts */}
                    <Script
                        id="dynamic-schema"
                        type="application/ld+json"
                        strategy="afterInteractive"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify(getSchemaData(blog, slug)),
                        }}
                    />

                    {/* Blog Header */}
                    <div className="w-full p-4 rounded-[10px]  ">
                        <HeroSection
                            heroclass="bg-[#031347]  flex items-center justify-center relative pb-20 md:pb-0 pt-22 md:pt-60"
                            h1={blog.title}
                            h1class="text-white text-[40px] md:text-[70px] lg:text-[80px] leading-[50px] md:leading-[90px] font-fks font-bold uppercase tracking-wide"
                            h2=" "
                            icon1="/icons/pacman.png"
                            icon2="/icons/burger.png"
                            paraclass="hidden"
                            buttonText="Let’s Started"
                            hWidth='max-w-md'
                            icon1Style="absolute left-[13%] md:left-[15%] xl:left-[40%] top-[24%] md:top-[40%] 2xl:top-[28%] 2xl:left-[33.5%] hidden"
                            icon2Style="absolute right-[4%] md:right-[37%] top-[70%] md:top-[65%] 2xl:right-[30%] 2xl:top-[65%] hidden"
                            icon1Width={55}

                        />
                    </div>

                    {/* First Section */}
                    <FirstSection data={blog} />

                    <div className="2xl:max-w-[1440px] w-[90%] lg:w-[85%] relative mx-auto flex flex-col lg:flex-row gap-8 pt-12 ">
                        {/* Table of Contents */}
                        {tableOfContents.length > 0 && (
                            <div className="lg:w-[30%] lg:sticky text-white lg:top-20 lg:self-start">
                                <div className="table-of-contents rounded-lg">
                                    <h3 className="text-xl font-semibold mb-4">
                                        Table of Content
                                    </h3>
                                    <ul className="toc-list border-l-2 border-[#BBFC00] pl-4 space-y-2">
                                        {tableOfContents.map((item) => (
                                            <li key={item.id}>
                                                <a
                                                    href={`#${item.id}`}
                                                    className="toc-link  xl:trackin 2xl:text-lg text-white hover:text-[#091b56] hover:bg-[#BBFC00] px-2 py-1 rounded block"
                                                >
                                                    {item.title}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}

                        {/* Main Content */}
                        <div className="lg:w-[70%] space-y-12 mb-10 ">
                            {blog.subsections?.map((sub: any, i: number) => (
                                <div key={i} className="space-y-6">
                                    {/* Subtitle */}
                                    {sub.subtitle && (
                                        <h2
                                            id={`subsection-${i}`}
                                            dangerouslySetInnerHTML={{ __html: sub.subtitle }}
                                            className="text-2xl lg:text-3xl leading-[39px] lg:leading-[49px] font-semibold text-white [&>a]:text-[#BBFC00] font-fks tracking-wider"
                                        />
                                    )}

                                    {/* Subdescription */}
                                    {sub.subdescription?.map((desc: string, j: number) => (
                                        <div
                                            key={j}
                                            className="text-lg text-white blog-content  tracking-wider [&>a]:text-[#BBFC00]"
                                            dangerouslySetInnerHTML={{ __html: desc }}
                                        />
                                    ))}

                                    {/* Lists */}
                                    {sub.lists?.length > 0 && (
                                        <div className="space-y-6">
                                            {sub.lists.map((list: any, k: number) => (
                                                <div key={k} className="space-y-1">
                                                    <div className="-space-y-5">
                                                        {list.listTitle && (
                                                            <p
                                                                dangerouslySetInnerHTML={{
                                                                    __html: list.listTitle,
                                                                }}
                                                                className={`text-xl font-medium text-white [&>a]:text-[#BBFC00]`}
                                                            ></p>
                                                        )}
                                                    </div>
                                                    {list.listDescription && (
                                                        <p
                                                            dangerouslySetInnerHTML={{
                                                                __html: list.listDescription,
                                                            }}
                                                            className="text-white text-[20px] [&>a]:text-[#BBFC00]"
                                                        ></p>
                                                    )}

                                                    {/* Items inside the list */}
                                                    {list.items?.length > 0 && (
                                                        <ul className="list-disc pl-6 text-white space-y-1">
                                                            {list.items.map((item: any, m: number) => (
                                                                <li key={m}>
                                                                    <span
                                                                        dangerouslySetInnerHTML={{
                                                                            __html: item.title,
                                                                        }}
                                                                        className="font-medium [&>a]:text-[#BBFC00]"
                                                                    ></span>
                                                                    {item.description && (
                                                                        <span
                                                                            dangerouslySetInnerHTML={{
                                                                                __html: item.description,
                                                                            }}
                                                                            className="ml-2 text-gray-300 [&>a]:text-[#BBFC00]"
                                                                        ></span>
                                                                    )}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            {/* Conclusion */}
                            {blog.conclusion && (
                                <div>
                                    <h6 className="lg:text-3xl text-3xl lg:max-w-[80%] text-white mt-6 mb-3 font-semibold font-fks tracking-wide ">
                                        Conclusion
                                    </h6>
                                    <span
                                        className="text-white lg:text-lg leading-relaxed tracking-wider my-4 [&>a]:text-[#BBFC00] "
                                        dangerouslySetInnerHTML={{ __html: blog.conclusion || "" }}
                                    ></span>
                                </div>
                            )}
                            {blog.faqs?.length > 0 && (
                                <div className="space-y-6">
                                    <h2
                                        id="faqs"
                                        className="text-2xl lg:text-3xl font-semibold text-white font-fks tracking-wide"
                                    >
                                        Frequently Asked Questions
                                    </h2>
                                    {blog.faqs.map((faq: any, i: number) => (
                                        <div key={i} className="space-y-2">
                                            <h3 className="text-[19px] md:text-[32px] font-medium text-white tracking-wide  font-fks">
                                                {i + 1}. {faq.question}
                                            </h3>
                                            <div
                                                className="text-lg text-white blog-content tracking-wider [&>a]:text-[#BBFC00] "
                                                dangerouslySetInnerHTML={{ __html: faq.answer }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Author Section */}
                            <div className="w-full border-t pt-6">
                                <div className="flex justify-between items-center mb-4">
                                    <div className="flex items-center gap-4">
                                        <Image
                                            src="/tehreem-pic.jpeg"
                                            alt="Tehreem"
                                            width={55}
                                            height={55}
                                            className="rounded-full"
                                        />
                                        <h4 className="text-lg md:text-3xl font-medium text-white font-fks tracking-wide">Tehreem Fazal Qureshi</h4>
                                    </div>
                                    <div className="bg-[#004182] p-1 rounded-md">
                                        <Link
                                            target="_blank"
                                            href="https://www.linkedin.com/in/tehreem-fazal-592902192/"
                                        >
                                            <LinkedinIcon color="white" size={24} />
                                        </Link>
                                    </div>
                                </div>
                                <p className="text-sm  md:text-base text-justify text-white">
                                    Tehreem Fazal is a creative strategist, content marketer, and freelance writer with over six years of experience crafting impactful stories for local and international brands. She specializes in content strategy, brand storytelling, and SEO-driven writing across industries like fashion, real estate, food, digital marketing, lifestyle, and automotive etc. Her words have shaped the voice of leading names including Master Group, LUMS, Metropolitan Properties UAE, and more. With a background in English Literature, Tehreem blends creativity with strategy to make every piece of content resonate and convert. When she’s not writing, she’s exploring new ideas, brands, and narratives that inspire.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <ContactSection />
                    <NewsletterSection />
                </main>
            )}
        </>
    );
};

export default BlogDetail;