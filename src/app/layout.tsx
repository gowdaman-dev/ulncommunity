import { ReactNode } from "react";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/utils/NavBar";
import { Metadata } from "next";
import Footer from "@/components/utils/Footer";
import { Analytics } from "@vercel/analytics/react";
export const metadata: Metadata = {
  title: "Ulncommunity | Software Development Company",
  description:
    "Ulncommunity is a software development company that provides web development, mobile app development, and digital marketing services. We are a team of experienced developers and designers who are passionate about creating high-quality software solutions for our clients. Contact us today to learn more about how we can help your business grow and succeed online. founded by I Jahangeer , Gowdaman Poovaragavan (gttps://gowdaman.tech) , S Deepath , K Hariharan (https://haridev.tech) , M Lokeshkumar",
  applicationName: "ulncommunity",
  authors: [
    { name: "I Jahangeer" },
    { name: "Gowdaman Poovaragavan" },
    { name: "Sathish Kumar" },
    { name: "S Deepath" },
    { name: "K Hariharan" },
    { name: "M Lokeshkumar" },
  ],
  generator:
    "Ulncommunity , Software Development Company , Web Development , Mobile App Development , Digital Marketing Services , Experienced Developers , Designers , High-Quality Software Solutions , Clients , Business Grow , Succeed Online , I Jahangeer , Gowdaman Poovaragavan , Sathish Kumar , S Deepath , K Hariharan , M Lokeshkumar , https://gowdaman.tech , https://jaridev.tech , ulc community uln community ulncommunity , uln labs , ulnlabs",
  keywords:
    "ULNCommunity, Gowdaman P, Gowdaman Poovaragavan, Jahangeer I, unified Logic and nexus, Deepath S, K Hariharan, ULN Labs, ULCLabs, ULN Community, UL Solutions, UL Solutions India, software development, web development, mobile app development, digital marketing services, custom software solutions, affordable software development, responsive web design, custom mobile apps, iOS app development, Android app development, ERP solutions, digital transformation services, SaaS development, cloud solutions, business software, tech solutions, innovative software, experienced developers, professional designers, user experience design, frontend development, backend development, ecommerce solutions, content management systems, CRM development, data analysis services, AI integration, machine learning solutions, big data solutions, automation solutions, web applications, mobile applications, full-stack development, cross-platform development, startup tech solutions, business growth services, tech consulting, business success online, IT consulting, website development, UI/UX design, JavaScript development, Python development, React development, Node.js development, PHP development, custom APIs, scalable software, secure applications, digital presence, SEO services, PPC advertising, social media marketing, content creation, brand strategy, product development, user-centric solutions, cloud hosting, tech innovation, digital agency, software agency, India tech agency, Pondicherry developers, Cuddalore software solutions, Tamil Nadu tech company, software company, ULN software development, skilled developers, trusted solutions, reliable tech partner, top development agency, high-quality software, cloud computing, application development, custom software products, innovative tech solutions, full-service agency, business applications, technology consulting, custom app development, tech-driven growth, tailored solutions, digital growth, efficient development, data-driven solutions, performance-driven results, personalized solutions, integrated marketing, growth strategy, online success, tech expertise, technology solutions, business software solutions, cloud-based solutions, next-gen technology, agile development, custom CRM, high-performance software, ULN marketing services, product design, software engineering, application programming, scalable development, tech partnerships, UI design, UX optimization, website optimization, secure coding, project management, digital ecosystem, app store optimization, growth marketing, B2B solutions, enterprise solutions, small business tech solutions, tech transformation, smart solutions, digital experience, interactive solutions, tech innovation, business consulting, tech consulting India, ULN digital services, innovative tech solutions, tech experts, modern solutions, UI improvements, web app solutions, app integration, legacy modernization, digital branding, web presence, client satisfaction, software expertise, global tech solutions, comprehensive services, targeted marketing, interactive design, user-friendly solutions, data security, reliable software, development solutions, custom software design, startup solutions, digital presence building, branding solutions, SEO-optimized websites, PPC management, digital advertising, content strategy, web hosting, mobile app UI, mobile app UX, digital product development, ULN digital solutions, tech consultation, digital engagement, conversion-focused solutions, interactive websites, app security, startup growth, next-gen applications, user-focused design, seamless experience, digital solutions India, marketing optimization, modern branding, cutting-edge technology, comprehensive tech solutions, cost-effective solutions, long-term partnerships, user-focused strategy, tech consulting solutions, advanced development, secure web solutions, ULN digital transformation, strategic development, full-cycle development, ULN software agency, multi-platform solutions, branding and marketing, agile methodology, product launch strategy, digital transformation experts, app design, customer engagement, India-based developers, software agency India, business-driven solutions, tech-enhanced growth, scalable cloud solutions, market research, UI improvements, mobile-first development, high-performance applications, tailored tech solutions, UX/UI strategy, efficient digital solutions, brand growth, sustainable development, cutting-edge applications, creative solutions, impactful results, global presence, high-impact software, innovative development, business-enhancing solutions, online growth strategy, tech expertise, cross-functional team, ULN experts, tech innovation, high-impact solutions, long-lasting partnerships, product success, full-service digital agency, client-driven solutions, business tech, cross-platform apps, user engagement, secure digital solutions, cost-efficient tech, transformative solutions, startup digital strategy, web app development, end-to-end solutions, data-driven development, performance optimization, custom business solutions, tech solutions for growth, interactive software solutions, tailored applications, professional tech services, client-focused agency, business expansion, enterprise-grade software, interactive design solutions, tech consulting firm, business scalability, brand development, digital marketing strategy, ULN developers, professional web development, brand consulting, brand growth solutions, tech solutions India, tech professionals, strategic branding, experienced tech team, mobile-friendly design, effective branding, robust solutions, technical expertise, customer-focused services, industry-leading solutions, trusted tech advisors, online business growth, app deployment, market-ready solutions, impactful branding, high-tech solutions, efficient processes, market-driven solutions, client satisfaction focus, design innovation, ULN expertise, India digital agency, sustainable tech solutions, scalable business applications, ULN services, business growth consultants, optimized digital solutions, ULN India, ULN web solutions, cross-platform solutions, business software development, reliable tech services, future-ready applications, client-driven development, tech growth partner, data security focus, digital transformation partner, cost-effective software solutions, innovative branding, software quality assurance, app store solutions, market-leading tech solutions, client-centered strategies, advanced tech solutions, mobile-optimized software, UI/UX experts, business solution experts, adaptive technology, strategic growth, tech excellence, ULN digital success, creative marketing, business technology partner, trusted tech partner India, user-centric strategies, impactful software solutions, brand elevation, personalized tech solutions, development experts, customer-first approach, digital service experts, client-driven approach, ULN software agency, global tech company, optimized UX/UI, advanced tech agency, business growth digital agency, customized solutions, business success-driven solutions, premium digital services, transformative digital solutions, smart business solutions, industry-focused agency, cutting-edge digital marketing, innovative business solutions, tech partner for growth, technology-driven success, professional software agency, full-service tech partner, business consulting firm, scalable tech agency, high-growth tech solutions, long-term digital success, industry-leading tech agency, high-performance business solutions, app strategy experts, sustainable software solutions, global development agency, cloud software solutions, optimized digital products, high-impact tech agency, tech-powered growth, innovative applications, digital growth agency, agile digital partner, comprehensive digital services, strategic tech solutions, digital marketing experts, global digital solutions, data-driven business strategies, innovative app solutions, digital business growth, user-friendly web solutions, creative development agency, tech-driven branding, ULN tech solutions.",
};
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/icons/fav.png" type="image/x-icon" />
        <meta
          name="google-site-verification"
          content="fe5eLpjlLJgUW_mGQL67MeXf4nscZLmsfl3L0Aoqj0M"
        />
        <meta
          property="og:description"
          content="Ulncommunity is a software development company that provides web development, mobile app development, and digital marketing services. We are a team of experienced developers and designers who are passionate about creating high-quality software solutions for our clients. Contact us today to learn more about how we can help your business grow and succeed online. founded by I Jahangeer , Gowdaman Poovaragavan (gttps://gowdaman.tech) and , S Deepath , K Hariharan (https://jaridev.tech) , M Lokeshkumar"
        />
        <meta property="og:image" content="/icons/fav.png"></meta>
        <meta property="og:url" content="https://ulncommunity.me/"></meta>
        <meta property="og:site_name" content="ulncommunity | ulnlabs"></meta>
      </head>
      <body className={`${spaceGrotesk.className} antialiased`}>
        <main className="relative flex flex-col items-center px-10 max-w-screen">
          <div className="lg:w-[1044px] md:w-[760px] w-full">
            <NavBar />
            {children}
            <Footer />
          </div>
        </main>
        <Analytics />
      </body>
    </html>
  );
}
