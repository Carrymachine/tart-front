import styled from "@emotion/styled";

const Swiper = styled("div")`
  width: 100%;
  overflow: hidden;
`;
const CarouselBannerContainer = styled("div")`
  width: 400%;
  overflow: hidden;
`;

const BannerItemContainer = styled("div")`
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

const Banner = styled("div")`
  display: flex;
  width: 100%;
  gap: 100px;
  height: 182px;
  align-items: center;
  justify-content: center;
  background-color: rgb(76, 93, 94);
  color: rgb(254, 254, 254);
`;

const TextWrap = styled("div")`
  display: flex;
  gap: 32px;
  & > div {
    display: flex;
    flex-direction: column;

    & > p {
      font-size: 24px;
      line-height: 36px;
      font-weight: 500;
      margin: 0px;
      color: rgb(254, 254, 254);
    }
  }
`;
const ImgWrap = styled("div")``;

const DueData = styled("p")`
  font-size: 36px;
  line-height: 54px;
  font-weight: 700;
  text-align: center;
  color: rgb(254, 254, 254);
  border-bottom: 1px solid rgb(254, 254, 254);
  margin: 0px;
`;

export { Swiper, CarouselBannerContainer, BannerItemContainer, Banner, TextWrap, ImgWrap, DueData };
