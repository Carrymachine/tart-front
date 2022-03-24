import styled from "@emotion/styled";

const ServiceWrap = styled("div")`
  margin-top: 48px;
  text-align: center;
  background-color: rgb(243, 244, 245);
  padding: 72px 138px 0px;

  & > h2 {
    font-size: 36px;
    line-height: 54px;
    font-weight: 700;
    margin: 0px 0px 16px;
  }
  & > p {
    margin: 0px auto 48px;
    padding: 0px;
    width: 540px;
    word-break: keep-all;
    text-align: center;
    white-space: pre-wrap;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
  }
`;

const ServiceItemContainer = styled("div")`
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  gap: 24px;
  padding-bottom: 68px;
  margin: 0 auto;
  max-width: 1200px;
`;

const ServiceItem = styled("div")`
  text-align: center;
  background-color: rgb(254, 254, 254);
  width: 100%;

  & > svg {
    width: 308px;
    height: 190px;
    fill: none;
  }
`;

const ItemText = styled("div")`
  & > h2 {
    font-size: 24px;
    line-height: 36px;
    font-weight: 700;
    margin: 27px 0px 16px;
  }
  & > span {
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    white-space: pre-wrap;
  }
`;

export { ItemText, ServiceWrap, ServiceItemContainer, ServiceItem };
