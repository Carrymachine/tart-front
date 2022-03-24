import { useQuery } from "react-query";
import store from "pages/api/fetch/store";

const fetchRecommendProduct = async () => {
  const response = await (await fetch("http://localhost:3000/api/getAllProduct")).json();
  console.log(response);
  store.data = response;
  return response;
};

const useRecommendProduct = () => {
  return useQuery("recommendProduct", async () => await fetchRecommendProduct(), {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    cacheTime: Infinity,
    staleTime: Infinity,
    retry: false,
  });
};

export { useRecommendProduct, fetchRecommendProduct };
