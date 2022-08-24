import { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import mealsImg from "../../assets/meals.jpg";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        {/* <button>Cart</button> */}
        {/* tạo sự kiện cho nut button (đóng cửa sổ Cart),lấy onShowCart từ App */}
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="A tabel full..." />
      </div>
    </Fragment>
  );
};

export default Header;
