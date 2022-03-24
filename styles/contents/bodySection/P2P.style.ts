import styled from "@emotion/styled";
const P2PInfo = styled("div")`
  font-size: 14px;
  line-height: 21px;
  font-weight: 400;
  margin: 0px 0px 24px;
  display: flex;
  gap: 16px;
  -webkit-box-align: center;
  align-items: center;
  color: rgb(179, 180, 183);

  & > span {
    display: inline-flex;
    gap: 6px;

    justify-content: center;

    align-items: center;
    font-size: 11px;
    line-height: 16.5px;
    font-weight: 400;
    color: rgb(104, 105, 107);
    margin-bottom: 8px;

    & > svg {
      width: 14px;
      height: 14px;
      fill: none;
    }
  }
`;

export { P2PInfo };
