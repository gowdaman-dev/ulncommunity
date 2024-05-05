import Image from "next/image";

export default function Home() {
  return (
    <div className="container w-screen mx-auto">
      <section className="bg-gradient-to-r from-[#f56565] to-[#f0932b] text-white p-6 rounded-b-lg">
        <div className="mx-auto flex flex-col items-center justify-center gap-6">
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Improve your learning experience with Uln Community.
          </h1>
          <a
            href="#"
            className="inline-block px-6 py-3 rounded-lg bg-white text-[#f0932b] font-bold transition-all hover:scale-105 hover:bg-[#f56565] hover:text-white"
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
}
