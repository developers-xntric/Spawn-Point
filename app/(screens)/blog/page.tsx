import BlogSecond from "@/app/components/blog-second"
import HeroSection from "@/app/components/common/hero"
import PartnersSection from "@/app/components/common/partners-section"
import ContactSection from "@/app/components/contact-section"
import NewsletterSection from "@/app/components/newsletter"
import Script from "next/script"

/* -------------------- SCHEMA: BREADCRUMB -------------------- */

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://spawnpointstudio.com/",
        },
    ],
};

const Blogs = () => {
    return (
        <>
            <Script
                id="breadcrumb-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema),
                }}
            />
            <div>
                <HeroSection
                    h1="OUR"
                    h2="BLOGS"
                    icon1="/icons/pacman.png"
                    icon2="/icons/burger.png"
                    paraclass="hidden"
                    buttonText="Let’s Started"
                    hWidth='max-w-md'
                    icon1Style="absolute left-[13%] md:left-[15%] xl:left-[40%] top-[24%] md:top-[40%] 2xl:top-[28%] 2xl:left-[40.5%]"
                    icon2Style="absolute right-[4%] md:right-[37%] top-[70%] md:top-[65%] 2xl:right-[35%] 2xl:top-[65%]"
                    icon1Width={55}
                />
                <div className="-mt-28 pt-10">
                    <PartnersSection isSecond={false} />
                </div>
                <BlogSecond/>
                <ContactSection />
                <NewsletterSection />
            </div>
        </>
    )
}

export default Blogs
