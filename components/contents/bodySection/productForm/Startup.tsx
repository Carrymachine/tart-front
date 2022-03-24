import { OpenText, CardForm, CardWrap, ImgWrap, InfoContainer, InfoWrap, InfoTag, InfoNameContainer, PriceTable, TableItem } from "styles/contents/bodySection/public.style";
import { IProducts } from "utils/interface/products";
const renderStartupCard = (product: IProducts) => {
  return (
    <>
      <InfoTag>{product?.tag}</InfoTag>
      <InfoContainer>
        <InfoNameContainer>
          <h3>{product?.title}</h3>
        </InfoNameContainer>
      </InfoContainer>

      {product?.open ? (
        <OpenText>
          <h3>{product?.open}</h3>
        </OpenText>
      ) : null}
    </>
  );
};

export default renderStartupCard;
