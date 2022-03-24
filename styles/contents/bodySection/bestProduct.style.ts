import styled from "@emotion/styled";

const CategoryContainer = styled("div")`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 60px;
  font-size: 28px;
  line-height: 42px;
  font-weight: 700;
  font-size: 28px;
  border-bottom: none;
  color: rgb(63, 160, 120);
  height: 60px;

  & > svg {
    margin-left: 18px;

    width: 14px;
    height: 8px;
    fill: none;
    & > path {
      d: path("M 1.68 0.22 L 0.5 1.4 L 7.1 8 l 6.6 -6.6 L 12.52 0.22 L 7.1 5.64 L 1.68 0.22 Z");
      fill: rgb(179, 180, 183);
    }
  }
`;
const ModalCategoryContainer = styled("div")`
  width: 162px;
  background: #fff;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 50px;
  z-index: 10;
  display: none;
`;
const ModalCategoryWrap = styled("div")`
  display: inline-block;
  width: 100%;
`;
const CategoryItemForm = styled("div")`
  font-size: 14px;
  font-weight: 400;

  & > svg {
    width: 20px;
    height: 20px;
    fill: none;
  }
  &:hover {
    background: #f3f3f3;
  }
`;

const CategoryWrap = styled("div")`
  position: relative;
  width: max-content;
  margin-left: 8px;
  cursor: pointer;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  flex-direction: column;
`;

export { ModalCategoryContainer, CategoryContainer, CategoryWrap, ModalCategoryWrap, CategoryItemForm };
