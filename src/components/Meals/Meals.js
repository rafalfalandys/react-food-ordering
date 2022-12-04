import { Fragment } from "react";
import AvailableMeals from "./AvailableMeals";
import MealSumamry from "./MealsSummary";

const Meals = () => {
  return (
    <Fragment>
      <MealSumamry />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
