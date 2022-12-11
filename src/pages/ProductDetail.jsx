import { useParams } from "react-router";
import { useDetailProduct } from "../components/home/hooks/useProducts";

const ProductDetail = () => {
  const { id } = useParams();

  const { product } = useDetailProduct(id);

  return (
    <>
      {product && (
        <div className="flex flex-col border drop-shadow-lg justify-between">
          <div className="p-4">
            <img
              className="object-cover w-48 h-auto mx-auto"
              src={product.imageUrl}
            />
            <p className=" font-bold my-2">{product.title}</p>
            <p>{product.description}</p>
          </div>

          <div className="flex  my-6 items-center justify-end">
            <p className="text-end text-white p-2 rounded-r-full bg-red-500">{`${product.selling_price.toLocaleString(
              undefined,
              { minimumFractionDigits: 0 }
            )} ریال`}</p>
          </div>
          <div>
            <button
              className="p-2 border bg-gray-100 w-full text-gray-500 hover:bg-gray-50"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              اضافه به سبد خرید
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
