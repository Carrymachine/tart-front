import { IProducts } from "utils/interface/products";
import { ProductViewContainer, CardContainer } from "styles/contents/bodySection/public.style";
import { SwipWrap, Swiper } from "styles/contents/bodySection/recommendProduct.style";
import RenderCard from "components/contents/bodySection/productForm/index";
import { useState, useEffect } from "react";
import { fetchAllProduct, useAllProduct } from "pages/api/fetch/fetchAllProduct";
import { CategoryContainer, CategoryWrap } from "styles/contents/bodySection/bestProduct.style";

type Products = {
  best: IProducts[];
};

const renderBestProduct = () => {
  const { isLoading, error, data } = useAllProduct();
  const [currentBest, setBest] = useState<string>("모든 투자상품");
  const [toggle, setToggle] = useState<boolean>(false);
  const [state, setState] = useState();

  console.log(state);

  useEffect(() => {
    data ? setState(data) : null;
  }, [data]);
  let recommend: IProducts[] = [];
  let CategoryList = new Set<string>([]);
  data?.map((product: IProducts) => {
    CategoryList.add(product.tag);
  });

  console.log(CategoryList);
  if (recommend.length === 0) {
    for (let i = 0; i <= 2; i++) {
      recommend.push(data.splice(Math.floor(Math.random() * data.length), 1)[0]);
    }
  }
  console.log(toggle);
  if (!isLoading)
    return (
      <ProductViewContainer>
        <h2>
          인기가 많은
          <CategoryWrap id="category" onMouseEnter={() => setToggle(true)} onMouseLeave={() => setToggle(false)}>
            <CategoryContainer>
              {currentBest}
              <svg>
                <path></path>
              </svg>
            </CategoryContainer>
          </CategoryWrap>
        </h2>
        <CardContainer>
          <SwipWrap>
            <Swiper>
              <CardContainer>
                <RenderCard data={recommend} />
              </CardContainer>
            </Swiper>
          </SwipWrap>
        </CardContainer>
      </ProductViewContainer>
    );
};

export default renderBestProduct;
