import { OpenText, CardForm, CardWrap, ImgWrap, InfoContainer, InfoWrap, InfoTag, InfoNameContainer, PriceTable, TableItem } from "styles/contents/bodySection/public.style";
import { IProducts } from "utils/interface/products";
const renderStockCard = (product: IProducts) => {
  return (
    <>
      <InfoTag>{product?.tag}</InfoTag>
      <InfoContainer>
        <InfoNameContainer>
          <h3>{product?.title}</h3>
          {product?.range ? (
            <span>
              <svg viewBox="0 0 10 6">
                <path></path>
              </svg>
              {product?.range}%
            </span>
          ) : null}
        </InfoNameContainer>
        {product?.subTitle ? <p>{product?.subTitle}</p> : null}
      </InfoContainer>
      {product?.tag === "비상장주식" || product?.tag === "스니커즈 리셀" ? (
        <div style={{ marginTop: "9px" }}>
          {product?.prices?.map((options, i) => {
            if (i === 0) {
              return (
                <PriceTable>
                  <TableItem>{options.optionName}</TableItem>
                  <TableItem style={{ color: "rgb(33, 34, 35)", fontSize: "24px", lineHeight: "36px", fontWeight: "500" }}>{options.price}</TableItem>
                </PriceTable>
              );
            }
            return (
              <PriceTable>
                <TableItem>{options.optionName}</TableItem>
                <TableItem>{options.price}</TableItem>
              </PriceTable>
            );
          })}
        </div>
      ) : null}
    </>
  );
};

export default renderStockCard;
