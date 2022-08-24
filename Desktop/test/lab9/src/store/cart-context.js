//thêm bối cảnh cho giỏ hàng

import React from "react";
//tạo một useContext object
const CartContext = React.createContext({
  items: [],
  totalAmount: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
