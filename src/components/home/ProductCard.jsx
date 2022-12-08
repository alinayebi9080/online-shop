const ProductCard = ({
  imageUrl,
  title,
  description,
  _id,
  selling_price,
  rrp_price,
  discount_percent,
}) => {
  return (
    <div className="flex flex-col border shadow-sm justify-between">
      <div className="p-4">
        <img className="object-cover w-48 h-auto mx-auto" src={imageUrl} />
        <p className=" font-bold my-2">{title}</p>
        <p>{description?.substring(0, 50)}</p>
        <p className="text-end mt-6">{`${selling_price} ریال`}</p>
      </div>
      <div>
        <button className="p-2 border bg-gray-100 w-full text-gray-500 hover:bg-gray-50">
          اضافه به سبد خرید
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
