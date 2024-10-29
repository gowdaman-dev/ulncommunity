import Hero from "@/components/home/Hero";
import BannerImg from "@/components/home/BannerImg";
import Services from "@/components/home/Services";
import Proposal from "@/components/home/Proposal";

//The data/*.js files are objects for default data, use the component with prop values of your choice/requirement

const Component = () => {
  return (
    <>
      <Hero />
      <BannerImg />
      <Services/>
      <Proposal/>
    </>
  );
};
export default Component;
