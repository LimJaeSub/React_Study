import React from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
function MealItem(props) {
  const price = `$${props.price.toFixed(2)}`; //소수점 이하 두 자리 수까지 렌더링
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{props.price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} />
      </div>
    </li>
  );
}

export default MealItem;
