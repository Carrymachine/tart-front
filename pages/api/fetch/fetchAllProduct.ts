import { useQuery } from "react-query";
import { IProducts } from "utils/interface/products";

const fetchAllProduct = async (tag: string) => {
  const response = await (await fetch("http://localhost:3000/api/getAllProduct")).json();
  let result;

  switch (tag) {
    case "모든 투자상품" || "":
      return (result = response);
      break;
    case "NFT":
      return (result = response.filter((product: IProducts) => product.tag === "NFT"));
      break;
    case "스니커즈 리셀":
      return (result = response.filter((product: IProducts) => product.tag === "스니커즈 리셀"));
      break;
    case "조각투자":
      return (result = response.filter((product: IProducts) => product.tag === "조각투자"));
      break;
    case "P2P 투자":
      return (result = response.filter((product: IProducts) => product.tag === "P2P 투자"));
      break;
    case "스타트업 펀딩":
      return (result = response.filter((product: IProducts) => product.tag === "스타트업 펀딩"));
      break;
    case "비상장주식":
      return (result = response.filter((product: IProducts) => product.tag === "비상장주식"));
      break;
  }

  return result;
};

const useAllProduct = (ctx: string) => {
  return useQuery(["allProduct", ctx], ({ queryKey }) => fetchAllProduct(queryKey[1]), {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    cacheTime: Infinity,
    staleTime: Infinity,
    retry: false,
  });
};

export { useAllProduct, fetchAllProduct };
