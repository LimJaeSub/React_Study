// @ 상품 세부정보 페이지
import axios from "axios";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./detail.module.css";

export const Detail = ({convertPrice,setCart,cart}) => {

  const {id} = useParams();
  const [selectProduct,setselectProduct] = useState({});
  const [count,setCount] = useState(1);

  useEffect(()=>{
    axios.get("/data/products.json").then(function(response){
      setselectProduct(response.data.products.find((product)=>product.id==id))
      // 상품 목록(배열) 중에서 찾는것. useParams로 가져온 id랑 같은 id인 요소를 반환
      // 그 요소를 selectProduct에 setState를 이용해 넣음

      // * 처음에 === 를 사용해서 조건을 부여했는데 useParams로 받아오는 id의 type이 string이라 product.id===id 가 false가 되는 실수가 있었음.
    });
  },[]);

  // @ + - Counter함수
  const upCountHandler = ()=>{
    let tmp = count;
    setCount(tmp+1);
  }
  const downCountHandler = ()=>{
    let tmp = count;
    if(tmp==0){
      alert("음수는 사용할 수 없습니다.");
      return
    }
    else{
      setCount(tmp-1);
    }
  }

  // @ 장바구니 이동 함수(중복아님)
  const cartHandler = ()=>{
    const takecartItem = {
      id:selectProduct.id,
      image:selectProduct.image,
      name:selectProduct.name,
      price:selectProduct.price,
      provider:selectProduct.provider,
      count:count
    }
    if(cart.find((it)=>it.id==takecartItem.id)){
      // @ 중복일 경우

      let updatedItems = [...cart];
      // 기존 배열 복사

      const takecareItemid = takecartItem.id;
      const sameIndex = cart.findIndex((it)=>it.id==takecareItemid);
      const sameItem = cart[sameIndex];
      let updated = {
        ...sameItem,
        count:sameItem.count+takecartItem.count,
      }
      // 중복 인덱스의 count를 수정함
      updatedItems[sameIndex] = updated;
      setCart(updatedItems);
    }
    else{ // @ 중복이아닐경우
      setCart([...cart,takecartItem]);
      // @ 기존 cart에 새로운 item을 배열 병합시킴
    }
    alert("장바구니에 추가되었어용");
  }
  // @ 장바구니 
  return (
    selectProduct && (
      <>
      <main className={styles.main}>
        <section className={styles.product}>
          <div className={styles.product_img}>
            <img src={selectProduct.image} alt="product" />
          </div>
        </section>
        <section className={styles.product}>
          <div className={styles.product_info}>
            <p className={styles.seller_store}>{selectProduct.provider}</p>
            <p className={styles.product_name}>{selectProduct.name}</p>
            <span className={styles.price}>
              {convertPrice(selectProduct.price)}
              <span className={styles.unit}>원</span>
            </span>
          </div>

          <div className={styles.delivery}>
            <p>택배배송 / 무료배송</p>
          </div>

          <div className={styles.line}></div>

          <div className={styles.amount}>
            <img
              className={styles.minus}
              src="/images/icon-minus-line.svg"
              alt="minus"
              onClick={downCountHandler}
            />

            <div className={styles.count}>
              <span>{count}</span>
            </div>

            <img
              className={styles.plus}
              src="/images/icon-plus-line.svg"
              alt="plus"
              onClick={upCountHandler}
            />
          </div>

          <div className={styles.line}></div>

          <div className={styles.sum}>
            <div>
              <span className={styles.sum_price}>총 상품 금액</span>
            </div>

            <div className={styles.total_info}>
              <span className={styles.total}>
                총 수량 <span className={styles.total_count}>{count}개</span>
              </span>
              <span className={styles.total_price}>
                {convertPrice(count*selectProduct.price)}
                <span className={styles.total_unit}>원</span>
              </span>
            </div>
          </div>

          <div className={styles.btn}>
            <button className={styles.btn_buy}>바로 구매</button>
            <button className={styles.btn_cart} onClick={cartHandler}>장바구니</button>
          </div>
        </section>
      </main>
    </>
    )
    
  );
};
