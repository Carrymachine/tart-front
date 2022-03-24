import { IProducts } from "utils/interface/products";
import { ProductViewContainer, CardContainer } from "styles/contents/bodySection/public.style";
import { SwipWrap, Swiper } from "styles/contents/bodySection/recommendProduct.style";
import RenderCard from "components/contents/bodySection/productForm/index";
import { useState, memo } from "react";
import { fetchRecommendProduct, useRecommendProduct } from "pages/api/fetch/fetchRecommendProduct";

type Products = {
  recommended: IProducts[];
};

const renderRecommendProduct = () => {
  const { isLoading, error, data } = useRecommendProduct();

  if (isLoading) return <></>;
  let recommend: IProducts[] = [];
  for (let i = 0; i <= 8; i++) {
    recommend.push(data.splice(Math.floor(Math.random() * data.length), 1)[0]);
  }
  console.log(data);
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

export default memo(renderRecommendProduct);
