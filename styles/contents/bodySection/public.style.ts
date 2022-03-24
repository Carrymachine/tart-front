import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

type Case = {
  tags: string;
};

const ProductViewContainer = styled("div")`
  padding: 0px 120px;
  max-width: 1440px;
  margin: 0px auto;

  & > h2 {
    display: flex;

    justify-content: center;

    align-items: center;
    font-size: 28px;
    line-height: 42px;
    font-weight: 700;
    margin: 96px 0px 24px;
  }
`;

const CardContainer = styled("div")`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  box-sizing: content-box;
`;

const CardWrap = styled("div")`
  flex-shrink: 0;
  max-width: 390px;
  width: 33%;
  margin-right: 15px;
  height: 100%;
  position: relative;
  top: 0;

  transition: all 0.25s ease-in;
  transform: translateY(10px);

  &:hover {
    transition: all 0.25s ease-in;
    transform: translateY(-10px);
  }
`;

const CardForm = styled("div")`
  position: relative;
  flex: 1 1 0%;
  cursor: pointer;
  transition: top 0.25s ease 0s;
  top: 0px;
`;

const ImgWrap = styled("div")`
  width: 100%;
  padding: ${({ tags }: Case) => (tags === "NFT" || tags === "P2P 투자" || tags === "스타트업 펀딩" ? "0" : "78px")};
  background-color: rgb(244, 244, 244);
  height: 275px;
  border-radius: 4px;
  display: flex;
  align-items: center;
`;

const ImgView = styled("img")`
  position: relative;
  width: 100%;
  height: ${({ tags }: Case) => (tags === "NFT" || tags === "P2P 투자" || tags === "스타트업 펀딩" ? "275px" : "141px")};
  object-fit: ${({ tags }: Case) => (tags === "NFT" || tags === "P2P 투자" || tags === "스타트업 펀딩" ? "cover" : "contain")};
`;
const LogoView = styled("img")`
  height: 18px;
  position: absolute;
  left: 20px;
  top: 20px;
  z-index: 1;
`;

const InfoWrap = styled("div")`
  width: 100%;
  padding-top: 16px;
`;

const InfoContainer = styled("div")`
  & > p {
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    color: rgb(179, 180, 183);
    overflow: hidden;
  }
`;

const InfoTag = styled("div")`
  color: rgb(63, 160, 120);
  background-color: rgb(196, 245, 226);
  padding: 4px 8px;
  border-radius: 55px;
  font-size: 14px;
  line-height: 21px;
  font-weight: 400;
  width: fit-content;
`;

const InfoNameContainer = styled("div")`
  display: flex;
  margin: 0px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;

  justify-content: space-between;
  color: rgb(179, 180, 183);

  & > h3 {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 8px 0px 0px;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    font-style: normal;
    font-size: 18px;
    line-height: 27px;
    font-weight: 400;
    color: rgb(33, 34, 35);
  }
  & > span {
    color: rgb(88, 121, 236);
    display: inline-flex;
    gap: 6px;
    align-items: center;

    & > svg {
      height: 6px;
      fill: none;
    }
  }
`;

const PriceTable = styled("div")`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  min-height: 36px;
`;

const TableItem = styled("span")`
  color: rgb(179, 180, 183);
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
`;

const OpenText = styled("div")`
  & > h3 {
    color: rgb(95, 206, 163);
    font-size: 24px;
    line-height: 36px;
    font-weight: 500;
    margin: 0px auto;
  }
  & > p {
    font-size: 24px;
    line-height: 36px;
    font-weight: 500;
    margin: 8px 0px 0px;
    float: right;
  }
`;

export { LogoView, ImgView, OpenText, PriceTable, TableItem, ProductViewContainer, CardContainer, CardForm, CardWrap, ImgWrap, InfoContainer, InfoWrap, InfoTag, InfoNameContainer };
