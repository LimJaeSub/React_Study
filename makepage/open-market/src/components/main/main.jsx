import styles from "./main.module.css";
import { EventBanner } from "../eventBanner/eventBanner";
import { Product } from "../products/product";
import { useEffect } from "react";
import axios from "axios";

export const Main = ({products,setProducts,convertPrice}) => {
  useEffect(()=>{
    axios.get("/data/products.json").then(function(response){
      setProducts(response.data.products);
      // @ axios로 얻은 data를 setProducts로 app.js의 state로 설정
    })
  },[setProducts])

  const returnProduct = products.map((data)=>{
    return (
      <Product key={data.id} product={data} convertPrice={convertPrice}/>
    )
  })
  // @ products 배열을 mapping해서 arrayLength만큼 <Product> 컴포넌트를 return함
  // @ product에 data(정보)를 담아서 Product 컴포넌트에 props로 전달해줌.

  return (
    <>
      <EventBanner />
      <div className={styles.filter}>
        <p>최신순</p>
        <p>낮은 가격</p>
        <p>높은 가격</p>
      </div>
      <main className={styles.flex_wrap}>
        {returnProduct}
      </main>
    </>
  );
};
