import React from "react";

import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
function Header() {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1></h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        {/* 안에 - 가 있으므로 대괄호 표기법 사용 */}
        <img src={mealsImage} alt="음식이미지" />
      </div>
    </React.Fragment>
  );
}

export default Header;
