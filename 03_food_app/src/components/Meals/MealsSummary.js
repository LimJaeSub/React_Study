import React from "react";
import classes from "./MealsSummary.module.css";
function MealsSummary() {
  return (
    <section className={classes.summary}>
      <h2>제목적을꺼임</h2>
      <p>요약1</p>
      <p>요약2</p>
    </section>
  );
}

export default MealsSummary;
