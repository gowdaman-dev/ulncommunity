import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Proposal from "@/components/home/Proposal";
import CaseStudy from "@/components/home/CaseStudy";
import WorkingProcess from "@/components/home/WorkingProcess";
import Team from "@/components/home/Team";
import Testimonials from "@/components/home/Testimonials";
import Contact from "@/components/home/Contact";
import BannerImg from "@/components/home/BannerImg";

//The data/*.js files are objects for default data, use the component with prop values of your choice/requirement

const Component = () => {
  return (
    <>
      <Hero />
      <BannerImg />
      <Services/>
      <Proposal/>
      <CaseStudy/>
      <WorkingProcess/>
      <Team/>
      <Testimonials/>
      <Contact/>
    </>
  );
};
export default Component;
