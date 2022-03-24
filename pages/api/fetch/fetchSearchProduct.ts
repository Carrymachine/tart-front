import { useQuery } from "react-query";
import { IProducts } from "utils/interface/products";

const fetchSearchProduct = async () => {
  const response = await (await fetch("http://localhost:3000/api/getAllProduct")).json();
  console.log(response);

  const filteredRes = response.filter((product: IProducts) => product.tag === "NFT");

  return filteredRes;
};

const useSearchProduct = () => {
  return useQuery("searchProduct", async () => await fetchSearchProduct(), {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    cacheTime: Infinity,
    staleTime: Infinity,
    retry: false,
  });
};

export { useSearchProduct, fetchSearchProduct };
