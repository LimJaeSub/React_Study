import React, {useContext} from "react";
import CartIcon from "../Cart/CartIcon.js";
import classes from "./HeaderCartButton.module.css";
import CardContext from '../../store/cart-context';


function HeaderCartButton(props) {

  const ctx = useContext(CardContext);
  const numberOfCartItems = ctx.items.reduce((cur,item)=>{
    return cur+item.amount;
  },0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;
