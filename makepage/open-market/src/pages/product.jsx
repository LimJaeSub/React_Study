import { Detail } from "../components/product_detail/detail";

const Product = ({convertPrice,setCart,cart}) => {
  return <Detail convertPrice={convertPrice} setCart={setCart} cart={cart}/>;
};

export default Product;
