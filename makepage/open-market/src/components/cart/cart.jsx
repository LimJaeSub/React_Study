import styles from "./cart.module.css";
import SelectCart from "./SelectCart";
import CartHeader from "./CartHeader";
import CartFooter from "./CartFooter";
import { useState } from "react";
import { useEffect } from "react";
export const Cart = ({ cart, convertPrice, setCart }) => {
  const [checkLists, setCheckLists] = useState([]);
  const [sum, setSum] = useState(0);
  // @ 장바구니에서 수량 조정 해주는 함수
  const cartHandler = (id, countType) => {
    let updatedcart = [...cart];
    // cart 배열 복사
    const sameIndex = cart.findIndex((it) => it.id == id);
    // SelectCart의 상품 id를 가져온 뒤, cart 배열의 몇 번쨰 인덱스인지 가져옴
    const sameItem = cart[sameIndex];

    let updated = {
      ...sameItem,
      count: sameItem.count + countType,
    };
    // 해당 상품의 count를 변경시킴
    updatedcart[sameIndex] = updated;
    // cart 복사배열에서의 해당 상품의 index를 수정함
    setCart(updatedcart);
  };

  const handleCheckList = (id, checked) => {
    if (checked) {
      setCheckLists([...checkLists, id]);
    } else if (!checked) {
      // checkLists에서 입력된 id랑 같은걸 찾아서 같지 않은거만 filter
      const tmp = checkLists;
      const newarr = tmp.filter((it) => it !== id);
      setCheckLists(newarr);
    }
  };

  useEffect(() => {
    let tmp = 0;
    for (let i = 0; i < checkLists.length; i++) {
      const tmparr = cart;
      const findobj = tmparr.find((it) => it.id == checkLists[i]);
      tmp = tmp + findobj.price * findobj.count;
    }
    setSum(tmp);
  }, [checkLists, cart]);

  return (
    <>
      <header className={styles.header}>
        <h1>장바구니</h1>
      </header>
      <CartHeader />
      {cart.length === 0 ? (
        <div className={styles.not}>
          <h2>장바구니에 담긴 상품이 없습니다.</h2>
          <p>원하는 상품을 장바구니에 담아보세요 </p>
        </div>
      ) : (
        cart.map((cart) => {
          return (
            <SelectCart
              key={`key-${cart.id}`}
              cart={cart}
              convertPrice={convertPrice}
              cartHandler={cartHandler}
              handleCheckList={handleCheckList}
            />
          );
        })
      )}

      {cart.length === 0 ? (
        ""
      ) : (
        <CartFooter checkLists={checkLists} cart={cart} sum={sum} />
      )}
    </>
  );
};

// checkList의 id와 같은 id를 가지고있는 cart의 요소를 추출해서
// cart의 금액과 수량을 곱해서 총 금액을 추출해야함
// checkList.id == cart.id를 비교할떄 checkList의 배열을 전부 순회해야함
// 순회 후 누산기를 이용해서 총 금액을 추출한다 !
