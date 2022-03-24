import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
type Scroll = {
  scroll: boolean;
};
const HeaderWrap = styled("header")`
  position: fixed;
  width: 100%;
  top: 0px;
  height: 72px;
  color: rgb(254, 254, 254);
  border: none;
  z-index: 99;

  background: ${({ scroll }: Scroll) => (scroll ? "#fff" : "")};
  transition: ${({ scroll }: Scroll) => (scroll ? "background-color 0.25s ease;" : "")};
  border-bottom: ${({ scroll }: Scroll) => (scroll ? "1px solid rgb(239, 240, 243)" : "")};
`;

const Header = styled("div")`
  display: flex;
  padding: 0px;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  margin: 0px calc((100% - 1440px) / 2);
`;

const NavWrap = styled("nav")`
  display: flex;
  gap: 36px;
  height: 72px;
  -webkit-box-align: center;
  align-items: center;
  margin-left: 30px;
`;

const Nav = styled("div")`
  display: flex;
  gap: 24px;

  & > a {
    display: block;
    text-decoration: none;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    width: 72px;
    text-align: center;
    cursor: pointer;
    color: ${({ scroll }: Scroll) => (scroll ? "#000" : "rgb(254, 254, 254)")};
  }
`;

const SearchWrap = styled("div")`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const Search = styled("div")`
  border-bottom: 1px solid rgb(204, 205, 208);
  display: flex;
  justify-content: space-between;

  & > input {
    width: 240px;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    background-color: inherit;
    border: none;
    outline: none;
  }
`;

const Login = styled("div")`
  margin-right: 90px;

  & > button {
    background-color: inherit;
    border: none;
    cursor: pointer;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    color: ${({ scroll }: Scroll) => (scroll ? "#000" : "rgb(254, 254, 254)")};
  }
`;

export { Header, HeaderWrap, NavWrap, Nav, SearchWrap, Search, Login };
