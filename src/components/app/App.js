import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import CartProvider from "../../provider/CartProvider";
import { queryClient } from "../../util/reactQuery";
import Loading from "./Loading";
import MainRouter from "./MainRouter";
import UpdateDialog from "../base/UpdateDialog";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <button
            id="install_button"
            hidden
            className=" w-full text-white bg-red-500 p-2"
          >
            نصب PWA
          </button>

          <UpdateDialog />

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
