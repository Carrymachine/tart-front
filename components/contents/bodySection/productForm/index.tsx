import { IProducts } from "utils/interface/products";
import { LogoView, ImgView, OpenText, CardForm, CardWrap, ImgWrap, InfoContainer, InfoWrap, InfoTag, InfoNameContainer, PriceTable, TableItem } from "styles/contents/bodySection/public.style";
import RenderNFT from "components/contents/bodySection/productForm/NFT";
import RenderSneakers from "components/contents/bodySection/productForm/Sneakers";
import RenderPiece from "components/contents/bodySection/productForm/Piece";
import RenderP2P from "components/contents/bodySection/productForm/P2P";
import RenderStartup from "components/contents/bodySection/productForm/Startup";
import RenderStock from "components/contents/bodySection/productForm/Stock";

type Product = {
  data: IProducts[];
};

const RenderProductCard = ({ data }: Product): JSX.Element => {
  const render = data.map((product) => {
    let categorizedCard;

    switch (product?.tag) {
      case "NFT":
        categorizedCard = RenderNFT(product);
        break;
      case "스니커즈 리셀":
        categorizedCard = RenderSneakers(product);
        break;
      case "조각투자":
        categorizedCard = RenderPiece(product);
        break;
      case "P2P 투자":
        categorizedCard = RenderP2P(product);
        break;
      case "스타트업 펀딩":
        categorizedCard = RenderStartup(product);
        break;
      case "비상장주식":
        categorizedCard = RenderStock(product);
        break;
    }
    console.log(product?.tag);
    return (
      <CardWrap style={{ paddingBottom: "10px" }}>
        <CardForm>
          <ImgWrap tags={product?.tag}>
            <ImgView tags={product?.tag} src={product?.imageSrc} />
            <LogoView src={product?.logoSrc} />
          </ImgWrap>
        </CardForm>
        <InfoWrap>{categorizedCard}</InfoWrap>
      </CardWrap>
    );
  });
  return <>{render}</>;
};

export default RenderProductCard;
