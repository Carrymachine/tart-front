import { Header, HeaderWrap, NavWrap, Nav, SearchWrap, Search, Login } from "../../styles/header.style";
import Logo from "components/logo";
import { useScroll } from "utils/useScroll";
import { useEffect, useState } from "react";
const renderHeader = () => {
  const { scroll } = useScroll();
  const [scrolled, setScrolled] = useState<boolean>(false);

  console.log(scroll);

  useEffect(() => {
    if (scroll >= 233) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, [scroll]);
  return (
    <HeaderWrap scroll={scrolled}>
      <Header>
        <NavWrap id="nav">
          <a style={{ marginLeft: "90px" }}>
            <Logo />
          </a>
          <Nav scroll={scrolled}>
            <a className="item">홈</a>
            <a className="item">탐색하기</a>
          </Nav>
        </NavWrap>
        <SearchWrap>
          <Search>
            <input placeholder="브랜드나 상품명으로 찾아보세요." />
            <svg width="28" height="28">
              <path
                d="M19.725 17.438h-1.204l-.427-.412a9.867 9.867 0 0 0 2.394-6.449c0-5.474-4.437-9.91-9.91-9.91-5.474 0-9.911 4.436-9.911 9.91s4.437 9.91 9.91 9.91c2.455 0 4.711-.9 6.45-2.393l.411.427v1.204l7.624 7.608 2.271-2.271-7.608-7.624Zm-9.148 0a6.852 6.852 0 0 1-6.86-6.86 6.852 6.852 0 0 1 6.86-6.862 6.852 6.852 0 0 1 6.861 6.861 6.852 6.852 0 0 1-6.86 6.861Z"
                fill="#B3B4B7"
              ></path>
            </svg>
          </Search>
          <Login scroll={scrolled}>
            <button>로그인</button>
          </Login>
        </SearchWrap>
      </Header>
    </HeaderWrap>
  );
};

export default renderHeader;
