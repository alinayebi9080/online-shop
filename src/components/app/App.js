import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import { queryClient } from "../../util/reactQuery";
import Loading from "./Loading";
import MainRouter from "./MainRouter";

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <MainRouter />
        <Toaster />
        <Loading />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
