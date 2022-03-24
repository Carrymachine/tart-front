import { useQuery } from "react-query";
import React, { useState, useEffect } from "react";
import { IBannerList } from "utils/interface/bannerList";
import { Swiper, CarouselBannerContainer, BannerItemContainer, Banner, TextWrap, ImgWrap, DueData } from "styles/contents/bodySection/slideBanner.style";

const getData = () => {
  const response = useQuery("http://localhost:3000/api/getBannerItems", ({ queryKey }) => fetch(queryKey.join("")).then((res) => res.json()));

  return response;
};

const renderCarouselBanner = () => {
  const [currentSlide, setSlide] = useState<number>(0);
  const { isLoading, error, data } = getData();

  useEffect(() => {
    const Ref = document.getElementById("ref") as HTMLElement;
    if (Ref) {
      Ref.style.transition = "all 0.5s ease-in-out";
      // ${(-100 / slideList.length) * (0.5 + currentSlide)}
      Ref.style.transform = `translateX(-${25 * currentSlide}%)`;
    }
  }, [currentSlide]);

  if (isLoading) return <></>;
  let slideList = [...data, data[0]];

  const interval = setInterval(() => {
    if (currentSlide === 2) {
      setSlide(0);
      clearInterval(interval);
    } else {
      setSlide(currentSlide + 1);
      clearInterval(interval);
    }
  }, 3000);

  const renderBanner = slideList.map((banner: IBannerList, i: number) => {
    return (
      <Banner key={i}>
        <TextWrap>
          <div>
            <p style={{ color: "rgb(107, 229, 182)", fontSize: "18px", lineHeight: "27px", fontWeight: "400", margin: "0" }}>NOW</p>
            <p>{banner.text}</p>
          </div>
          <DueData>{banner.dueData}</DueData>
        </TextWrap>
        <ImgWrap>
          <img src={banner.imageSrc} />
        </ImgWrap>
      </Banner>
    );
  });

  return (
    <Swiper>
      <CarouselBannerContainer id="ref">
        <BannerItemContainer>{renderBanner}</BannerItemContainer>
      </CarouselBannerContainer>
    </Swiper>
  );
};

export default renderCarouselBanner;
