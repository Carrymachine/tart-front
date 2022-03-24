import { useQuery } from "react-query";
import { IProducts } from "utils/interface/products";

const fetchNFTProduct = async () => {
  const response = await (await fetch("http://localhost:3000/api/getAllProduct")).json();

  const NFTProduct = response.filter((product: IProducts) => {
    return product.tag === "NFT";
  });

  return NFTProduct;
};

const useNFTProduct = () => {
  return useQuery("NFTProduct", async () => await fetchNFTProduct(), {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    cacheTime: Infinity,
    staleTime: Infinity,
    retry: false,
  });
};

export { useNFTProduct, fetchNFTProduct };
