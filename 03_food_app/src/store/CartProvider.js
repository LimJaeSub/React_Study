// @ Context data관리 및 접근하는 component에게 데이터 제공
import CartContext from "./cart-context";

const CartProvider = props=>{
    const addItemToCartHandler = (item)=>{

    };

    const removeItemFromCartHandler = (id)=>{

    };


    const cartContext = {
        items:[],
        totalAmount:0,
        addItem:addItemToCartHandler,
        removeItem:removeItemFromCartHandler
    }// @ 해당 객체를 context파일에 value값으로 직접 보내줌
    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
    // @ 이 context에 접는하는 모든 compoenent를 provider로 감쌈
}

export default CartProvider;