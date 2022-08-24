import { useContext } from "react";

import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/Cartlcon";
import classes from "./HeaderCartButton.module.css";
//nút button trên heard
const HeaderCartButton = (props) => {
  // sử dụng bối cảnh
  const cartCtx = useContext(CartContext);
  //đưa nút span trong button của heard về 0
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    //dùng props đưa onclick từ comp Heard vào button
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      {/* <span className={classes.badeg}>{numberOfCartItems}</span> */}
      <span className={classes.badeg}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
