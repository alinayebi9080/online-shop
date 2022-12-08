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
    <div className="flex flex-col border shadow-sm p-4">
      <img className="object-cover w-48 h-auto" src={imageUrl} />
      <p>{title}</p>
      <p>{description?.substring(0, 50)}</p>
      <div>
        <p>{selling_price}</p>
        <button>اضافه به سبد خرید</button>
      </div>
    </div>
  );
};

export default ProductCard;
