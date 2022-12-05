// @ home 화면에서 보여주는 상품 component
import { Link } from "react-router-dom";
import styles from "./product.module.css";

export const Product = ({product,convertPrice}) => {
  return (
    <div className={styles.product}>
      <Link to={`/product/${product.id}`}>
        {/* app.js 에서 /product/:id 가 detail page로 route되어있음.  */}
        <div className={styles.product_image}>
          <img src={product.image} alt="product" />
        </div>
      </Link>
      <div className={styles.store}>
        <span>{product.provider}</span>
      </div>

      <div className={styles.product_name}>
        <span>{product.name}</span>
      </div>

      <div className={styles.product_price}>
        <span className={styles.price}>{convertPrice(product.price)}</span>
        <span className={styles.unit}>원</span>
      </div>
    </div>
  );
};
