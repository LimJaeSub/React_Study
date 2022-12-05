import React from "react";
import styles from "./cart.module.css";
function CartHeader() {
  return (
    <div>
      <div className={styles.cart_title_wrap}>
        <div className={styles.tab_title}>
          <input type="checkbox" />
          <span>상품정보</span>
          <span>수량</span>
          <span>상품금액</span>

          <p>전체선택</p>
        </div>
      </div>
    </div>
  );
}

export default CartHeader;
