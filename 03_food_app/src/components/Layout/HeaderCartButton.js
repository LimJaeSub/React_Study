import React, { useContext, useEffect } from "react";
import CartIcon from "../Cart/CartIcon.js";
import classes from "./HeaderCartButton.module.css";
import CardContext from "../../store/cart-context";

function HeaderCartButton(props) {
  const ctx = useContext(CardContext);
  const numberOfCartItems = ctx.items.reduce((cur, item) => {
    return cur + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${classes.bump}`;

  useEffect(() => {}, []);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;
