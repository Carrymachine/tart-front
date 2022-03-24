import { FooterWrap, FooterMenuWrap, FooterMenuContainer, FooterMenuItem, FooterAddress } from "styles/footer.style";
import Logo from "components/logo";
const renderFooter = () => {
  return (
    <FooterWrap>
      <FooterMenuWrap>
        <FooterMenuContainer>
          <FooterMenuItem>
            <Logo />

            <a>회사소개</a>
            <a>프랩 합류하기</a>
            <a>제휴제안</a>
          </FooterMenuItem>
          <FooterMenuItem>
            <h3>안내</h3>
            <a>공지사항</a>
            <a>이벤트</a>
          </FooterMenuItem>
          <FooterMenuItem>
            <h3>정책</h3>
            <a>이용약관</a>
            <a>개인정보처리방침</a>
          </FooterMenuItem>
        </FooterMenuContainer>
        <FooterAddress>
          <span style={{ fontWeight: "700" }}>대표이사 </span>
          <span>박아윤</span>
          <span> | </span>
          <span style={{ fontWeight: "700" }}>사업자등록번호 </span>
          <span>622-88-01428</span>
          <span style={{ fontWeight: "700" }}>주소 </span>
          <span>서울특별시 강남구 역삼로 172, 8층</span>
          <span> | </span>
          <span style={{ fontWeight: "700" }}>문의 </span>
          <span>hello@prap.kr</span>
        </FooterAddress>
        <FooterAddress></FooterAddress>
        <FooterAddress>
          <span style={{ fontWeight: "700" }}>©All rights reserved. 2022. (주)타르트</span>
        </FooterAddress>
      </FooterMenuWrap>
    </FooterWrap>
  );
};

export default renderFooter;
