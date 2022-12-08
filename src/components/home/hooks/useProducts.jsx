import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../../util/axiosInstance";
import { productKeys } from "../../../util/reactQuery/constants";

const getProductsCall = async ({ queryKey: [, , page] }) => {
  const { data } = await axiosInstance.get(`/product/all?page=${page}`);
  return data;
};

const useProducts = (page) => {
  const { data = { data: [], totalPage: 0 } } = useQuery({
    queryKey: productKeys.all(page),
    queryFn: getProductsCall,
    keepPreviousData: true,
  });

  return { products: data?.data, pageCount: data?.totalPage };
};

export default useProducts;
