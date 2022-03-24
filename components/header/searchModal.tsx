import { ModalSearchInputWrap, InputContainer, ModalInput, RecommendWrap, RecommendItemForm } from "styles/contents/headSection/modal.style";
import { useState } from "react";
import { useSearchProduct, fetchSearchProduct } from "pages/api/fetch/fetchSearchProduct";
import { IProducts } from "utils/interface/products";
const renderModal = () => {
  const [typedKeyWord, setTyped] = useState<string>("");
  const { isLoading, error, data } = useSearchProduct();
  const body = document.querySelector("body") as HTMLBodyElement;
  body.style.overflow = "hidden";
  console.log(body);
  let recommend: IProducts[] = [];
  if (isLoading) return <></>;

  const changeInputValue = () => {};
  const removeInputValue = () => {
    const input = document.getElementsByClassName("search-input")[0] as HTMLInputElement;
    setTyped("");
    input.value = "";
    console.log(data);
  };

  console.log(typedKeyWord);

  return (
    <>
      <ModalSearchInputWrap>
        <InputContainer>
          <ModalInput className="search-input" placeholder="브랜드나 상품명으로 찾아보세요." onChange={(e) => setTyped(e.target.value)} />
          {typedKeyWord === "" ? (
            <svg width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19.725 17.438h-1.204l-.427-.412a9.867 9.867 0 0 0 2.394-6.449c0-5.474-4.437-9.91-9.91-9.91-5.474 0-9.911 4.436-9.911 9.91s4.437 9.91 9.91 9.91c2.455 0 4.711-.9 6.45-2.393l.411.427v1.204l7.624 7.608 2.271-2.271-7.608-7.624Zm-9.148 0a6.852 6.852 0 0 1-6.86-6.86 6.852 6.852 0 0 1 6.86-6.862 6.852 6.852 0 0 1 6.861 6.861 6.852 6.852 0 0 1-6.86 6.861Z"
                fill="#B3B4B7"
              ></path>
            </svg>
          ) : (
            <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ cursor: "pointer" }} onClick={() => removeInputValue()}>
              <circle cx="10" cy="10" r="10" fill="#B3B4B7"></circle>
              <path d="M13.75 5 10 8.75 6.25 5 5 6.25 8.75 10 5 13.75 6.25 15 10 11.25 13.75 15 15 13.75 11.25 10 15 6.25 13.75 5Z" fill="#F8F8F8"></path>
            </svg>
          )}
        </InputContainer>
      </ModalSearchInputWrap>
      <div>
        <p style={{ margin: "42px 0px 24px", fontSize: "14px", lineHeight: "21px", fontWeight: "400", color: "rgb(179, 180, 183)" }}>최근 검색어</p>
      </div>
      <div>
        <p style={{ margin: "42px 0px 24px", fontSize: "14px", lineHeight: "21px", fontWeight: "400", color: "rgb(179, 180, 183)" }}>이런 투자 상품은 어때요?</p>
        <RecommendWrap>
          {data.map((product: IProducts) => {
            return (
              <RecommendItemForm>
                <img src={product.imageSrc} style={{ width: "124px", height: "123px", marginRight: "37px" }} />
              </RecommendItemForm>
            );
          })}
        </RecommendWrap>
      </div>
    </>
  );
};

export default renderModal;
