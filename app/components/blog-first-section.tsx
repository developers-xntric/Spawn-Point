import Image from "next/image";
import { PortableText } from "@portabletext/react";

const BlogFirstSection = ({ data }: { data: any }) => {
  // PortableText components configuration for FirstSection
  const portableTextComponents = {
    block: {
      normal: ({ children }: any) => <p className="text-white [&>a]:text-[#BBFC00] lg:text-xl leading-relaxed tracking-wider my-4">{children}</p>,
      h1: ({ children }: any) => <h1 className="text-2xl font-bold my-4">{children}</h1>,
      h2: ({ children }: any) => <h2 className="text-xl font-semibold my-3">{children}</h2>,
      h3: ({ children }: any) => <h3 className="text-lg font-semibold my-2">{children}</h3>,
      blockquote: ({ children }: any) => <blockquote className="border-l-4 border-gray-400 pl-4 italic my-4">{children}</blockquote>,
    },
    list: {
      bullet: ({ children }: any) => <ul className="list-disc list-inside my-4">{children}</ul>,
      number: ({ children }: any) => <ol className="list-decimal list-inside my-4">{children}</ol>,
    },
    listItem: {
      bullet: ({ children }: any) => <li className="pl-2">{children}</li>,
      number: ({ children }: any) => <li className="pl-2">{children}</li>,
    },
    marks: {
      link: ({ children, value }: any) => (
        <a
          href={value?.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          {children}
        </a>
      ),
      strong: ({ children }: any) => <strong className="font-bold">{children}</strong>,
      em: ({ children }: any) => <em className="italic">{children}</em>,
    },
  };

  return (
    <section className="sm:pt-40 lg:pt-60 xl:pt-40 2xl:pt-32 mb-10 font-hel ">
      <div className="2xl:max-w-[1440px] w-[90%] lg:w-[85%] mx-auto">
        <div className="flex justify-between items-center mb-20 gap-10 xl:gap-0 flex-col lg:flex-row">
          <div className="flex items-center gap-6 md:w-[40%]">
            <Image
              src={"/spn.png"}
              alt="Blog"
              width={500}
              height={500}
              className="object-contain w-16 h-16 rounded-2xl"
            />
            <div className="flex flex-col gap-2">
              <span className="text-gray-400 text-sm font-hel">Written By</span>
              <div className=" gap-4 items-center text-white font-fks text-xl md:text-2xl tracking-wider leading-">
                <span>Tehreem Fazal Qureshi</span> <br />
                <span className="mt-2">{new Date(data.publishedDate).toDateString()}</span>
                <span>{data.min}</span>
              </div>
            </div>
          </div>
          {/* <div className="lg:w-[60%] w-[96%]">
            <p className="xl:text-4xl text-2xl text-white">
              {data.desc ||
                "Learn to define a products identity and perception with branding essentials. Shape how a brand stands out with this brief overview from the agencys top pros."}
            </p>
          </div> */}
        </div>
        <Image
          src={data.bannerImageURL || ""}
          alt="Blog"
          width={1200}
          height={1200}
          className="object-contain w-full h-full"
        />
        <div className="mt-10">
          <span className="bg-[#ffffff1a] px-4 py-2 rounded-3xl text-sm text-white font-hel">
            {data.category || "Development"}
          </span>
          <article className="">
            {/* <p
              className="text-white [&>a]:text-[#BBFC00]  lg:text-xl leading-relaxed tracking-wider mt-8"
              dangerouslySetInnerHTML={{
                __html:
                  data.p1 ||
                  "The project, details of which have not been previously reported, comes as the Microsoft-backed startup races to show that the types of models it offers are capable of delivering advanced reasoning capabilities.",
              }}
            ></p> */}
            <h2 className="lg:text-2xl text-xl lg:max-w-[80%] text-white mt-6 mb-3">
              {data.h1
                ? data.h1
                  .split(" ")
                  .map((word: any, index: any) =>
                    word.toLowerCase() === "ui"
                      ? "UI"
                      : index === 0
                        ? word.charAt(0).toUpperCase() +
                        word.slice(1).toLowerCase()
                        : word.toLowerCase()
                  )
                  .join(" ")
                : ""}
            </h2>
            {data.description && Array.isArray(data.description) ? (
              <PortableText
                value={data.description}
                components={portableTextComponents}
              />
            ) : (
              <div dangerouslySetInnerHTML={{ __html: data.description || "" }} className="text-white [&>a]:text-[#BBFC00] lg:text-xl leading-relaxed tracking-wider"/>

            )}

            {data.p2 && Array.isArray(data.p2) ? (
              <PortableText
                value={data.p2}
                components={portableTextComponents}
              />
            ) : (
              <span
                className="text-white lg:text-xl leading-relaxed tracking-wider [&>a]:text-[#BBFC00] my-4"
              >
                {data.p2?.[7] || ""}
              </span>
            )}
          </article>
        </div>
      </div>
    </section>
  );
};

export default BlogFirstSection;
