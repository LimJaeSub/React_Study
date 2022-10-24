// @ Context data관리 및 접근하는 component에게 데이터 제공
import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const updatedItems = state.items.concat(action.value);
      // @ 기존 배열을 변형하지 않고 새 배열 반환
      // @ 현재 상태의 객체 내부값인 items배열에 dispatch함수로 item값을 얻은 value를 삽입해서 새로운 배열 return
      const newTotalAmount =
        state.totalAmount + action.value.price * action.value.amount;
      return {
        items: updatedItems,
        totalAmount: newTotalAmount,
      };

    case "REMOVE":
      return 1;
    default:
      break;
  }
  return defaultCartState;
};
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  // @ [state객체,dispatch함수] = useReducer(reducer함수,초기상태)
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", value: item });
  }; // @ 이 함수가 실행될 때마다 장바구니에 추가해야 할 항목을 얻음

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", value: id });
  }; // @ 이 함수가 실행될 때마다 장바구니에

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  }; // @ 해당 객체를 context파일에 value값으로 직접 보내줌
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
  // @ 이 context에 접는하는 모든 compoenent를 provider로 감쌈
};

export default CartProvider;
