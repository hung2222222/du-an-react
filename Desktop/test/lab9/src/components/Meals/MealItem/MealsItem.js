import { useContext } from "react";

import classes from "./MealsItem.module.css";
import MetalitemForm from "./MetalItemForm";
import CartContext from "../../../store/cart-context";

//component  cho thẻ li
const MealsItem = (props) => {
  //làm tròn đến 2 số thập phân (toFixed)
  // const price = `$${props.price.toFixed(2)}`;
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3 className={classes}>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>$ {props.price}</div>
      </div>
      {/* lấy nút input từ comp MetalItemForm */}
      <div className={classes.input}>
        <MetalitemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealsItem;
