import { useQuery, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../../../util/axiosInstance";
import { productKeys } from "../../../util/reactQuery/constants";

const getProductsCall = async ({ queryKey: [, , page] }) => {
  const { data } = await axiosInstance.get(`/product/all?page=${page}`);
  return data;
};

const getProductDetailCall = async ({ queryKey: [, , id] }) => {
  const { data } = await axiosInstance.get(`/product/${id}`);
  return data;
};

export const useProducts = (page) => {
  const { data = { data: [], totalPage: 0 } } = useQuery({
    queryKey: productKeys.all(page),
    queryFn: getProductsCall,
    keepPreviousData: true,
  });

  const queryClient = useQueryClient();
  const prefetchId = data?.data[0]?._id;
  if (prefetchId) {
    //1

    // queryClient.prefetchQuery({
    //   queryKey: productKeys.one(prefetchId),
    //   queryFn: getProductDetailCall,
    // });

    //2
    queryClient.setQueryData(productKeys.one(prefetchId), data?.data[0]);
  }
  return { products: data?.data, pageCount: data?.totalPage };
};

export const useDetailProduct = (id) => {
  const { data: product } = useQuery({
    queryKey: productKeys.one(id),
    queryFn: getProductDetailCall,
  });

  return { product };
};
