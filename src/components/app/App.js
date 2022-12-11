import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import CartProvider from "../../provider/CartProvider";
import { queryClient } from "../../util/reactQuery";
import Loading from "./Loading";
import MainRouter from "./MainRouter";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <MainRouter />
          <Toaster />
          <Loading />
          <ReactQueryDevtools />
        </QueryClientProvider>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
