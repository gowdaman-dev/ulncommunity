import Image from "next/image";
import Link from "next/link";
import React from "react";

const services = [
  {
    title: "Web Development",
    img: "/images/image1.png",
    link: "/web-development",
  },
  {
    title: "Mobile Development",
    img: "/images/image2.png",
    link: "/mobile-development",
  },
  {
    title: "Web Hosting",
    img: "/images/image3.png",
    link: "/hosting",
  },
  {
    title: "SEO Service",
    img: "/images/image4.png",
    link: "/seo",
  },
  {
    title: "Ui/UX Design",
    img: "/images/image5.png",
    link: "/digital-marketing",
  },
  {
    title: "Social Media Marketing",
    img: "/images/image5.png",
    link: "/social-media-marketing",
  },
];

function Services() {
  return (
    <div id="services" className="flex flex-col w-full md:border-t-[0] border-t-[1px]">
      <div className="flex md:flex-row flex-col w-full justify-start gap-8 p-4 py-8">
        <h3 className="bg-primary text-ulndark w-fit font-black text-2xl p-2 rounded-lg h-fit">
          Services
        </h3>
        <p className="md:w-2/3 text-justify">
          At our company, we offer a comprehensive range of development and
          hosting services to support business growth in the digital age. Our
          expertise includes:
        </p>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 py-8">
        {services.map((service, index) => (
          <div
            key={index}
            className={`md:flex-row flex-col-reverse flex w-full justify-between items-center ${
              index % 2 === 0 ? "bg-ulngray" : "bg-primary"
            } border border-ulndark border-b-8 rounded-2xl p-4`}
          >
            <div className="flex flex-col justify-between md:items-start gap-4">
              <h3
                className={`bg-${
                  index % 2 === 0 ? "primary" : "white"
                } text-ulndark w-fit p-2 rounded-lg text-xl font-black`}
              >
                {service.title}
              </h3>
              <div className="flex items-center justify-center gap-2">
                <div className="bg-ulndark p-2 rounded-full">
                  <Image
                    src={"/graphics/graphics41.png"}
                    alt={"BGR"}
                    height={20}
                    width={20}
                  />
                </div>
                <Link
                  href={service.link}
                  className={`rounded-lg ${
                    index % 2 === 0 ? "" : ""
                  }`}
                >
                  Learn More
                </Link>
              </div>
            </div>
            <Image
              src={service.img}
              alt={service.title}
              width={200}
              height={200}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
