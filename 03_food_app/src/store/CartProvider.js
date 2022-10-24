// @ Context data관리 및 접근하는 component에게 데이터 제공
import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {

    if(action.type==="ADD"){
      const newTotalAmount =
        state.totalAmount + action.value.price * action.value.amount;
      //총 가격, 현재 totalAmount에 action으로 받아온 item의 가격과 양의 곱을 더한다
      
      const checkItemIndex = state.items.findIndex((item)=>item.id===action.value.id); 
      // 현재 상태의 items 배열에 해당 값이 있는지 체크
      // 항목이 존재한다면, 그 항목의 인덱스를 반환한다.
      // 없으면, undefined 반환

      const checkItem = state.items[checkItemIndex];

      let updatedItem;
      let updatedItems;
      if(checkItem){ // undefined이면 false, 아니면 true
        //항목이 존재했을때 실행하는 if문
        updatedItem={
          ...checkItem,
          amount:checkItem.amount + action.value.amount,
        }
        //updateItem은 기존 배열을 수정하지 않고 spread연산자를 통해 새로운 배열을 만든 뒤 값을 수정한다.
        // * 불변성 *


        updatedItems=[...state.items];
        //메모리에 있는 이전의 배열을 수정하지 않고, 이전 객체를 복사하는 새 배열
        updatedItems[checkItemIndex]=updatedItem;
        //새로 update한 item을 이전 배열을 복사한 updateItems에 덮어씌움
      }
      else{
        updatedItem={...action.value};
        updatedItems = state.items.concat(updatedItem);
        // @ 기존 배열을 변형하지 않고 새 배열 반환
      // @ 현재 상태의 객체 내부값인 items배열에 dispatch함수로 item값을 얻은 value를 삽입해서 새로운 배열 return
      }
      return {
        items: updatedItems,
        totalAmount: newTotalAmount,
      };
    }



    if(action.type==='REMOVE'){
      // const checkItemIndex = state.items.findIndex((item)=>item.id===action.id); 
      // const checkItem = state.items[checkItemIndex];
      //const newTotalAmount = state.totalAmount-checkItem.price;
      
      // let updatedItems;
      // if(checkItem.amount===1){ // 삭제할 요소의 amount가 1일경우
        // updatedItems=state.items.filter((item)=>item.id!==action.id)
        // filter를 통해 true인 것만 배열로 반환시키고 나머지는 삭제한다.
        // REMOVE 액션을 취했을 때의 받아오는 요소의 id와 다르면 true를 반환한다.

      //}
      // else{
      //   const updatedItem = {...checkItem,amount:checkItem.amount -1};
      //   updatedItems = [...state.items];
      //   updatedItems[checkItemIndex] = updatedItem
      // }

      // return{
      //   items:updatedItems,
      //   totalAmount:newTotalAmount,
      // }
    }
  //return defaultCartState;
};


const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  // @ [state객체,dispatch함수] = useReducer(reducer함수,초기상태)

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type:"ADD", value: item });
  }; // @ 이 함수가 실행될 때마다 장바구니에 추가해야 할 항목을 얻음

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type:"REMOVE", value: id });
  }; // @ 이 함수가 실행될 때마다 장바구니에서 삭제

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  }; // @ 해당 객체를 context파일에 value값으로 직접 보내줌, 값은 state가 관리하고 reducer로 수정된다.


  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
  // @ 이 context에 접는하는 모든 compoenent를 provider로 감쌈
};

export default CartProvider;
