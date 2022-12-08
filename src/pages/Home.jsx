import useProducts from "../components/home/hooks/useProducts";
import ProductCard from "../components/home/ProductCard";
import Pagination from "../components/base/Pagination";
import { useState } from "react";

const Home = () => {
  const [selectedPage, setSelectedPage] = useState(0);
  const { products, pageCount } = useProducts(selectedPage);

  return (
    <div className="container my-4">
      <div className="grid grid-cols-3 gap-4 ">
        {products.map((item) => (
          <ProductCard {...item} key={item._id} />
        ))}
      </div>
      <div className="mx-auto my-8">
        <Pagination
          onPageChange={(data) => setSelectedPage(data.selected)}
          pageCount={pageCount}
        />
      </div>
    </div>
  );
};

export default Home;
