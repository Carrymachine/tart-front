import styled from "@emotion/styled";

const ModalSearchInputWrap = styled("div")`
  display: flex;
  gap: 16px;
  -webkit-box-align: center;
  align-items: center;
`;
const InputContainer = styled("div")`
  width: 636px;
  height: 72px;
  border-top: none;
  border-right: none;
  border-left: none;
  border-image: initial;
  border-bottom: 1px solid rgb(179, 180, 183);
  margin: 0px auto;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
`;
const ModalInput = styled("input")`
  font-size: 28px;
  line-height: 54px;
  font-weight: 400;
  height: 42px;
  width: 500px;
  border: none;
  outline: none;
  color: rgb(33, 34, 35);
`;

const lateWork = styled("div")`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  margin-bottom: 24px;

  & > a {
    font-size: 18px;
    line-height: 27px;
    font-weight: 400;
    cursor: pointer;
  }
`;

const RecommendWrap = styled("div")`
  margin-bottom: 56px;
`;
const RecommendItemForm = styled("div")`
  height: 148px;
  padding-top: 16px;
  padding-bottom: 8px;
  display: flex;
  border-bottom: 1px solid rgb(179, 180, 183);
`;

export { ModalSearchInputWrap, InputContainer, ModalInput, RecommendWrap, RecommendItemForm };
