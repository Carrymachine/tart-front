import { IProducts } from "utils/interface/products";
import { ProductViewContainer, CardContainer } from "styles/contents/bodySection/public.style";
import { SwipWrap, Swiper } from "styles/contents/bodySection/recommendProduct.style";
import RenderCard from "components/contents/bodySection/productForm/index";
import { useRecommendProduct } from "pages/api/fetch/fetchRecommendProduct";

const renderRecommendProduct = () => {
  const { isLoading, error, data } = useRecommendProduct();

  if (isLoading) return <></>;
  let recommend: IProducts[] = [];
  for (let i = 0; i <= 8; i++) {
    recommend.push(data.splice(Math.floor(Math.random() * data.length), 1)[0]);
  }

  return (
    <ProductViewContainer>
      <h2>이 상품은 어떤가요?</h2>
      <SwipWrap>
        <Swiper>
          <CardContainer>
            <RenderCard data={recommend} />
          </CardContainer>
        </Swiper>
      </SwipWrap>
    </ProductViewContainer>
  );
};

export default renderRecommendProduct;
