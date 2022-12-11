import { QueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const queryErrorHandler = (error) => {
  if (error.response.status !== 403) toast.error(error.response.data.message);
};

export function generateQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        onError: queryErrorHandler,
        staleTime: 0,
        cacheTime: 90000, // default cacheTime is 5 minutes; doesn't make sense for staleTime to exceed cacheTime
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
