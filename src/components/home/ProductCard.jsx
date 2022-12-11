import { useNavigate } from "react-router";
import { useCartDispatch } from "../../provider/CartProvider";

const ProductCard = ({
  imageUrl,
  title,
  description,
  _id,
  selling_price,
  rrp_price,
  discount_percent,
}) => {
  const navigate = useNavigate();
  const dispatch = useCartDispatch();

  const addToBasket = (e) => {
    e.stopPropagation();
    dispatch({ type: "ADD_PRODUCT", payload: _id });
  };

  return (
    <div
      className="flex flex-col border drop-shadow-lg justify-between"
      onClick={() => navigate(`/product/${_id}`)}
    >
      <div className="p-4">
        <img className="object-cover w-48 h-auto mx-auto" src={imageUrl} />
        <p className=" font-bold my-2">{title}</p>
        <p>{description?.substring(0, 50)}</p>
      </div>

      <div className="flex  my-6 items-center justify-end">
        <p className="text-end text-white p-2 rounded-r-full bg-red-500">{`${selling_price.toLocaleString(
          undefined,
          { minimumFractionDigits: 0 }
        )} ریال`}</p>
      </div>
      <div>
        <button
          className="p-2 border bg-gray-100 w-full text-gray-500 hover:bg-gray-50"
          onClick={addToBasket}
        >
          اضافه به سبد خرید
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
