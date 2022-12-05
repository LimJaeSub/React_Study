import { Cart } from "../components/cart/cart";

const Basket = ({ cart, convertPrice, setCart }) => {
  return <Cart cart={cart} convertPrice={convertPrice} setCart={setCart} />;
};

export default Basket;
