import { QueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const queryErrorHandler = (error) => {
  toast.error(error.response.data.message);
  console.log(error);
};

export function generateQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        onError: queryErrorHandler,
        staleTime: 0, // 10 minutes
        cacheTime: 900000, // default cacheTime is 5 minutes; doesn't make sense for staleTime to exceed cacheTime
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        retry: false,
      },
      mutations: {
        onError: queryErrorHandler,
      },
    },
  });
}

export const queryClient = generateQueryClient();
