import { OpenText, InfoContainer, InfoTag, InfoNameContainer } from "styles/contents/bodySection/public.style";
import { IProducts } from "utils/interface/products";
const renderNFTCard = (product: IProducts) => {
  return (
    <>
      <InfoTag>{product?.tag}</InfoTag>
      <InfoContainer>
        <InfoNameContainer>
          <h3>{product?.title}</h3>
        </InfoNameContainer>
        {product?.subTitle ? product?.open ? <p style={{ marginBottom: "32px" }}>{product?.subTitle}</p> : <p>{product?.subTitle}</p> : null}
      </InfoContainer>
      <div style={{ marginTop: "9px" }}></div>
      <OpenText>
        <p>{product?.price}</p>
      </OpenText>
    </>
  );
};

export default renderNFTCard;
