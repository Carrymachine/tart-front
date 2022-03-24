import styled from "@emotion/styled";

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

export { CategoryContainer, CategoryWrap };
