import { useCart } from "../provider/CartProvider";

const Factor = () => {
  const cart = useCart();

  console.log(cart);
  return <div></div>;
};

export default Factor;
