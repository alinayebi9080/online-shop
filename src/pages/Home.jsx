import useProducts from "../components/home/hooks/useProducts";
import ProductCard from "../components/home/ProductCard";
import Pagination from "../components/base/Pagination";
import { useState } from "react";

const Home = () => {
  const [selectedPage, setSelectedPage] = useState(0);
  const { products, pageCount } = useProducts(selectedPage);

  return (
    <div className="container">
      <div className="grid grid-cols-5 gap-4 ">
        {products.map((item) => (
          <ProductCard {...item} key={item._id} />
        ))}
      </div>
      <div className="mx-auto">
        <Pagination
          onPageChange={(data) => setSelectedPage(data.selected)}
          pageCount={pageCount}
        />
      </div>
    </div>
  );
};

export default Home;
