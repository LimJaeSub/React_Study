import React, { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem.js";

function Cart(props) {
  const ctx = useContext(CartContext);

  const totalAmount = `$${ctx.totalAmount.toFixed(2)}`; // @ context에서 받아온 totalAmount
  const hasItems = ctx.items.length > 0; // @ context의 item의 배열이 0 이상일때 true

  const cartItemRemoveHandler = (id) => {
    ctx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    ctx.addItem({ ...item, amount: 1 });
    // spread를 통해 기존 객체를 복사하고 amount를 1로 수정 해줘야 하나씩 늘어난다.
    // 만약 기존 객체 그대로 넣어주면 함수가 작동할때마다 이전 값이 더해져서 두배가 됨.
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {ctx.items.map((it) => (
        <CartItem
          key={it.id}
          name={it.name}
          amount={it.amount}
          price={it.price}
          onRemove={cartItemRemoveHandler.bind(null, it.id)}
          onAdd={cartItemAddHandler.bind(null, it)}
        />
      ))}
    </ul>
  );
  // @ function.bind()를 통해 함수와 인자 모두를 넘겨줄수 있다.
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>order</button>}
      </div>
    </Modal>
  );
}

export default Cart;
