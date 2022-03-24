import styled from "@emotion/styled";

const FooterWrap = styled("footer")`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  margin: 0px;
  padding-top: 104px;
  padding-bottom: 30px;
  ackground-color: #f7f8f9;
  padding-top: 30px;
  bottom: 0px;
  background-color: #f7f8f9;
  padding-top: 30px;
  bottom: 0px;
`;

const FooterMenuWrap = styled("div")`
  padding: 0px 120px;
  width: 100%;
  max-width: 1440px;
`;

const FooterMenuContainer = styled("div")`
  display: flex;
  width: 100%;
  gap: 66px;
  max-width: 1440px;
}
`;

const FooterMenuItem = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 8px;
  & > a {
    color: rgb(104, 105, 107);
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    cursor: pointer;
  }
  & > h3 {
    margin: 0px 0px 4px;
    font-size: 18px;
    line-height: 27px;
    font-weight: 400;
  }
  & > svg {
    margin-bottom: 10px;
  }
`;

const FooterAddress = styled("div")`
  margin-top: 7px;
  color: rgb(179, 180, 183);

  & > span {
    font-size: 12px;
    line-height: 18px;
    font-weight: 400;
  }
`;

export { FooterWrap, FooterMenuWrap, FooterMenuContainer, FooterMenuItem, FooterAddress };
