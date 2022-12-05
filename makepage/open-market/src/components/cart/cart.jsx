import styles from "./cart.module.css";
import SelectCart from "./SelectCart";
import CartHeader from "./CartHeader";
import CartFooter from "./CartFooter";
export const Cart = ({ cart, convertPrice, setCart }) => {
  return (
    <>
      <header className={styles.header}>
        <h1>장바구니</h1>
      </header>
      <CartHeader />
      {cart.map((it) => {
        return <SelectCart cart={cart} convertPrice={convertPrice} />;
      })}
      <CartFooter />
    </>
  );
};
