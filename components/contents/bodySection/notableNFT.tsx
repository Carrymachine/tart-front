import { ProductViewContainer, CardContainer } from "styles/contents/bodySection/public.style";
import { SwipWrap, Swiper } from "styles/contents/bodySection/recommendProduct.style";
import RenderCard from "components/contents/bodySection/productForm/index";
import { useNFTProduct } from "pages/api/fetch/fetchNFTProduct";

const renderNotableNFT = () => {
  const { isLoading, error, data } = useNFTProduct();

  if (isLoading) return <></>;

  return (
    <ProductViewContainer>
      <h2>주목받고 있는 NFT 작가와 컬렉션</h2>
      <SwipWrap>
        <Swiper>
          <CardContainer>
            <RenderCard data={data} />
          </CardContainer>
        </Swiper>
      </SwipWrap>
    </ProductViewContainer>
  );
};

export default renderNotableNFT;
