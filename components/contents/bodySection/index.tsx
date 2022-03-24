import CarouselBanner from "components/contents/bodySection/carouselBanner";
import RecommendProduct from "components/contents/bodySection/recommendProduct";
import BestProduct from "components/contents/bodySection/bestProduct";
import NotableNFT from "components/contents/bodySection/notableNFT";
import ServiceSection from "components/contents/bodySection/serviceSection";

const renderBodySection = () => {
  return (
    <div>
      <CarouselBanner />
      <RecommendProduct />
      <BestProduct />
      <NotableNFT />
      <ServiceSection />
    </div>
  );
};

export default renderBodySection;
