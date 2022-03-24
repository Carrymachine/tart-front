import { OpenText, CardForm, CardWrap, ImgWrap, InfoContainer, InfoWrap, InfoTag, InfoNameContainer, PriceTable, TableItem } from "styles/contents/bodySection/public.style";
import { IProducts } from "utils/interface/products";
const renderPieceCard = (product: IProducts) => {
  return (
    <>
      <InfoTag>{product?.tag}</InfoTag>
      <InfoContainer>
        <InfoNameContainer>
          <h3>{product?.title}</h3>
        </InfoNameContainer>
        {product?.subTitle ? <p>{product?.subTitle}</p> : null}
      </InfoContainer>
      {product?.open ? (
        <OpenText>
          <h3>{product?.open}</h3>
        </OpenText>
      ) : null}
    </>
  );
};

export default renderPieceCard;
