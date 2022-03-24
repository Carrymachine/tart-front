import { useQuery } from "react-query";

const fetchPickProduct = async () => {
  const response = await (await fetch("http://localhost:3000/api/getPickProduct")).json();
  console.log(response);
  return response;
};

const usePickProduct = () => {
  return useQuery("pickProduct", async () => await fetchPickProduct());
};

export { usePickProduct, fetchPickProduct };
