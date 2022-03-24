import { PickProductContainer, ProductListContainer, ListWrap, ListItem, ItemWrap, TextWrap } from "styles/contents/headSection/pickProduct.style";
import { IProductList } from "utils/interface/productList";
import { useState } from "react";
import { usePickProduct } from "pages/api/fetch/fetchPickProduct";

const renderPickProduct = () => {
  const { isLoading, error, data } = usePickProduct();
  const [toggle, setToggle] = useState<boolean[]>([false, false, false, false, false, false]);
  if (isLoading) return <></>;

  const renderProductList = data.map((product: IProductList, i: number) => {
    const renderCircle = () => {
      let check = toggle[i] ? false : true;
      let editableToggle = [...toggle];
      const circle = document.getElementsByClassName(`circle-${i}`)[0];

      editableToggle[i] = check;
      console.log(circle);

      setToggle(editableToggle);
    };
    return (
      <ListItem className={`list-${i}`} key={i} onClick={() => renderCircle()}>
        <ItemWrap>
          <svg>
            {toggle[i] ? <circle className={`circle-${i}`} cx={product.circle.cx} cy={product.circle.cy} r={product.circle.r} fill={product.circle.fill} /> : null}
            {product.svgPath.map((path, i) => (
              <path d={path} fill={product.fill} key={i} />
            ))}
          </svg>
        </ItemWrap>
        <TextWrap>{product.name}</TextWrap>
      </ListItem>
    );
  });

  return (
    <PickProductContainer>
      <ProductListContainer>
        <h2>관심 가는 투자상품을 모두 골라보세요.</h2>
        <ListWrap>{renderProductList}</ListWrap>
      </ProductListContainer>
      <a>
        <button>모든 투자상품 확인하기</button>
      </a>
    </PickProductContainer>
  );
};

export default renderPickProduct;
