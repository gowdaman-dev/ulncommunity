"use client";
import React from "react";

interface quotationProps {
  name?: string | undefined;
  email?: string | undefined;
  request?:
    | "training"
    | "web"
    | "mobile"
    | "design"
    | "branding"
    | "seo"
    | undefined;
  college?: string | undefined;
  course?:
    | "web development basics"
    | "mern stack"
    | "nextjs"
    | "anvanced react"
    | "figma ui/ux"
    | "seo"
    | "branding"
    | undefined;
  projectType?:
    | "static"
    | "dynamic"
    | "e-commerce"
    | "blog"
    | "portfolio"
    | "saas"
    | "custom"
    | "templete"
    | undefined;
  message?: string | undefined;
}

function page() {
  const [quotation, setQuotation] = React.useState<quotationProps>();
  return (
    <div className="mt-[4rem] min-h-screen py-6">
      <div className="flex flex-col">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-center">
          Amazing! We are ready to connect with you.
        </h1>
        <p className="text-center text-gray-600 mt-2">
          We are excited to hear from you. Please fill out the form below and we
          will get back to you as soon as possible.
        </p>
      </div>
      <div className="flex flex-col gap-4 mt-4 max-w-3xl mx-auto bg-zinc-50 p-4 rounded-md shadow-md">
        <form action="" method="post">
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={(e) =>
                setQuotation({ ...quotation, name: e.target.value })
              }
              className="border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) =>
                setQuotation({ ...quotation, email: e.target.value })
              }
              className="border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="request">Request</label>
            <select
              name="request"
              id="request"
              onChange={(e) =>
                setQuotation({
                  ...quotation,
                  request: e.target.value as
                    | "training"
                    | "web"
                    | "mobile"
                    | "design"
                    | "branding"
                    | "seo"
                    | undefined,
                })
              }
              className="border border-gray-300 rounded-md p-2"
              required
            >
              <option value="">Select</option>
              <option value="training">Training</option>
              <option value="web">Web Development</option>
              {/* <option value="mobile">Mobile Development</option> */}
              {/* <option value="design">Design</option> */}
              {/* <option value="branding">Branding</option> */}
              <option value="seo">SEO</option>
            </select>
          </div>
          {quotation?.request === "training" && (
            <>
              <div className="flex flex-col gap-2">
                <label htmlFor="college">College</label>
                <input
                  type="text"
                  name="college"
                  id="college"
                  onChange={(e) =>
                    setQuotation({ ...quotation, college: e.target.value })
                  }
                  className="border border-gray-300 rounded-md p-2"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="course">Course</label>
                <select
                  name="course"
                  id="course"
                  onChange={(e) =>
                    setQuotation({
                      ...quotation,
                      course: e.target.value as
                        | "web development basics"
                        | "mern stack"
                        | "nextjs"
                        | "anvanced react"
                        | "figma ui/ux"
                        | "seo"
                        | "branding"
                        | undefined,
                    })
                  }
                  className="border border-gray-300 rounded-md p-2"
                  required
                >
                  <option value="web development basics">
                    Web Development Basics
                  </option>
                  <option value="mern stack">MERN Stack</option>
                  <option value="nextjs">NextJS</option>
                  <option value="anvanced react">Advanced React</option>
                  <option value="figma ui/ux">Figma UI/UX</option>
                  <option value="seo">SEO</option>
                  <option value="branding">Branding</option>
                </select>
              </div>
            </>
          )}
          {quotation?.request === "web" && (
            <div className="flex flex-col gap-2">
              <label htmlFor="projectType">Project Type</label>
              <select
                name="projectType"
                id="projectType"
                className="border border-gray-300 rounded-md p-2"
              >
                <option value="static">Static</option>
                <option value="dynamic">Dynamic</option>
                <option value="e-commerce">E-commerce</option>
                <option value="blog">Blog</option>
                <option value="portfolio">Portfolio</option>
                <option value="saas">SAAS</option>
                <option value="custom">Custom</option>
                <option value="templete">Templete</option>
              </select>
            </div>
          )}
          <div className="flex flex-col gap-2">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              className="border border-gray-300 rounded-md p-2"
              required
            ></textarea>
          </div>
          <div className="flex justify-center w-full mt-3">
            <button
              type="submit"
              className="bg-primary text-white px-4 py-2 rounded-md w-full"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default page;
