import classes from "./Card.module.css";
//tạo from cho ul của AvailabelMeals
const Cart = (props) => {
  return <div className={classes.cart}>{props.children}</div>;
};

export default Cart;
