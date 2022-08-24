import classes from "./AvailableMeals.module.css";
import Cart from "../Ui/Card";
import MealsItem from "./MealItem/MealsItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  // gán dữ liệu theo name,sử dụng div từ comp0nent MealsItem
  const mealslist = DUMMY_MEALS.map((meal) => (
    <MealsItem
      key={meal.id}
      id={meal.name}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.section}>
      <Cart>
        <ul>{mealslist}</ul>
      </Cart>
    </section>
  );
};
export default AvailableMeals;
