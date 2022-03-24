import styled from "@emotion/styled";

const PickProductContainer = styled("div")`
  padding: 0 120px;
  position: relative;
  height: 310px;
  display: flex;
  justify-content: center;

  & > a {
    text-decoration: none;
    & > button {
      position: absolute;
      bottom: 88px;
      left: calc(50% - 108px);
      width: 235px;
      height: 45px;
      border-radius: 52px;
      border: none;
      cursor: pointer;
      font-size: 16px;
      line-height: 24px;
      font-weight: 400;
      background-color: rgb(107, 229, 182);
    }
`;

const ProductListContainer = styled("div")`
  max-width: 1200px;
  width: calc(100% - 240px);
  position: absolute;
  top: -180px;
  padding: 32px 60px 40px;
  background-color: rgb(254, 254, 254);
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 15px 0px;
  border-radius: 8px;
  text-align: center;

  
  }
`;

const ListWrap = styled("ul")`
  display: flex;

  justify-content: space-between;
  padding: 0px;
  list-style: none;
`;

const ListItem = styled("li")`
  cursor: pointer;
`;

const ItemWrap = styled("div")`
  & > svg {
    width: 124px;
    height: 124px;
    fill: none;
  }
`;

const TextWrap = styled("div")`
  margin: 16px 0px 0px;
  font-size: 18px;
  line-height: 27px;
  font-weight: 400;
  width: 100%;
  text-align: center;
`;

export { PickProductContainer, ProductListContainer, ListWrap, ListItem, ItemWrap, TextWrap };
