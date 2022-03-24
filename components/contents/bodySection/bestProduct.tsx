import { IProducts } from "utils/interface/products";
import { ProductViewContainer, CardContainer } from "styles/contents/bodySection/public.style";
import { SwipWrap, Swiper } from "styles/contents/bodySection/recommendProduct.style";
import RenderCard from "components/contents/bodySection/productForm/index";
import { useState, useEffect } from "react";
import { fetchAllProduct, useAllProduct } from "pages/api/fetch/fetchAllProduct";
import { ModalCategoryContainer, CategoryContainer, CategoryWrap, ModalCategoryWrap, CategoryItemForm } from "styles/contents/bodySection/bestProduct.style";
import { usePickProduct, fetchPickProduct } from "pages/api/fetch/fetchPickProduct";
type Products = {
  best: IProducts[];
};

const renderBestProduct = () => {
  const [currentBest, setBest] = useState<string>("모든 투자상품");
  const { isLoading, error, data } = useAllProduct(currentBest);
  const productLogo = usePickProduct();

  const [toggle, setToggle] = useState<boolean>(false);

  if (isLoading) return <></>;

  let recommend: IProducts[] = [];
  let CategoryList = new Set<string>([]);

  const tags: string[] = ["모든 투자상품", "NFT", "스니커즈 리셀", "조각투자", "P2P 투자", "스타트업 펀딩", "비상장주식"];

  const mouseOn = () => {
    const dropdown = document.getElementsByClassName("dropdown")[0] as HTMLDivElement;

    dropdown.style.display = "block";
  };

  const mouseOut = () => {
    const dropdown = document.getElementsByClassName("dropdown")[0] as HTMLDivElement;

    dropdown.style.display = "none";
  };

  // if (recommend.length === 0) {
  //   for (let i = 0; i <= 2; i++) {
  //     recommend.push(data.splice(Math.floor(Math.random() * data.length), 1)[0]);
  //   }
  // }
  console.log(productLogo.data);
  return (
    <ProductViewContainer>
      <h2>
        인기가 많은
        <CategoryWrap id="category" onMouseLeave={() => mouseOut()} onMouseEnter={() => mouseOn()}>
          <CategoryContainer>
            {currentBest}
            <svg width="20" height="20">
              <path></path>
            </svg>
          </CategoryContainer>
          <ModalCategoryContainer className="dropdown">
            <ModalCategoryWrap>
              {tags.map((tag, i) => {
                return (
                  <CategoryItemForm onClick={() => setBest(tag)}>
                    <svg>
                      {productLogo.data[i]?.svgPath.map((path: any, i: number) => (
                        <path d={path} fill="rgb(76, 93, 94)" key={i} />
                      ))}
                    </svg>
                    <a>{tag}</a>
                  </CategoryItemForm>
                );
              })}
            </ModalCategoryWrap>
          </ModalCategoryContainer>
        </CategoryWrap>
      </h2>
      <CardContainer>
        <SwipWrap>
          <Swiper>
            <CardContainer>
              <RenderCard data={data} />
            </CardContainer>
          </Swiper>
        </SwipWrap>
      </CardContainer>
    </ProductViewContainer>
  );
};

export default renderBestProduct;
