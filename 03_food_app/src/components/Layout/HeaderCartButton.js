import React, { useContext, useEffect,useState } from "react";
import CartIcon from "../Cart/CartIcon.js";
import classes from "./HeaderCartButton.module.css";
import CardContext from "../../store/cart-context";

function HeaderCartButton(props) {
  const [btnHighlited,setBtnHighlited]=useState(false);

  const ctx = useContext(CardContext);
  const numberOfCartItems = ctx.items.reduce((cur, item) => {
    return cur + item.amount;
  }, 0);
  const btnClasses = `${classes.button} ${btnHighlited ? classes.bump : ''}`;

  useEffect(() => {
    if(ctx.items.length===0){ 
      // 항목이 0 이상일 경우에만 button 효과 나타내기
      // 항목이 없으면 return시켜서 useEffect 탈출
      return;
    }
    setBtnHighlited(true);

    const timer = setTimeout(()=>{
      setBtnHighlited(false);
    },300);
    // 애니메이션이 끝나고 다시 지워줘야 하기 때문에 setTimeout을 통해 삭제시켜줌

    return ()=>{
      clearTimeout(timer);
    };
    // 타이머를 끝내는 cleanup함수
  }, [ctx.items]);

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
