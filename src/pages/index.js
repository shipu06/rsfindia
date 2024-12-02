import BrandOne from "@/components/BrandOne/BrandOne";
import CausesOne from "@/components/CausesOne/CausesOne";
import CausesTwo from "@/components/CausesTwo/CausesTwo";
import Charity from "@/components/Charity/Charity";
import Counters from "@/components/Counters/Counters";
import FourIcon from "@/components/FourIcon/FourIcon";
import GalleryOne from "@/components/GalleryOne/GalleryOne";
import HelpingOne from "@/components/HelpingOne/HelpingOne";
import HelpThem from "@/components/HelpThem/HelpThem";
import JoinOne from "@/components/JoinOne/JoinOne";
import Layout from "@/components/Layout/Layout";
import MainSlider from "@/components/MainSlider/MainSlider";
import NewsOne from "@/components/NewsOne/NewsOne";
import TestimonialOne from "@/components/TestimonialOne/TestimonialOne";
import ThreeBoxes from "@/components/ThreeBoxes/ThreeBoxes";
import WeInspire from "@/components/WeInspire/WeInspire";

const Home = () => {
  return (
    <Layout pageTitle="Home Two">
      <MainSlider />
      <Charity />
      <FourIcon />
      <WeInspire />
      {/* <CausesOne /> */}
      <CausesTwo />
      <Counters />
      <JoinOne />
      {/* <ThreeBoxes /> */}
      <HelpingOne />
      <GalleryOne />
      <TestimonialOne />
      <HelpThem />
      <NewsOne />
      <BrandOne />
    </Layout>
  );
};

export default Home;
