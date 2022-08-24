import { useRef, useState } from "react";

import classes from "./MetalItemForm.module.css";
import Input from "../../Ui/Input";

const MetalitemForm = (props) => {
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    //lấy onAddToCart từ comp MealsItems
    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        ref={amountInputRef}
        input={{
          id: "amount",
          type: "Number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>please enter a valid amount (1-5).</p>}
    </form>
  );
};
//tạo nút đặt hàng và input số lượng cần mua
// const MetalitemForm = (props) => {s

//   return (
//     <form className={classes.form}>
//       <div>
//         <label>Amount</label>
//         <input type="number" min="1" max="5" step="1" defaultValue="1" />
//       </div>
//       <button>+ Add</button>
//     </form>
//   );
// };
export default MetalitemForm;
