import AddFoodForm from "./AddFoodForm"
import FoodBox from "./FoodBox"

export default function FoodList(props) {
  // console.log(props.food)
  return (
    <>
      <AddFoodForm food={props.food} setFoods={props.setFoods} />
      <FoodBox food={props.food} setFoods={props.setFoods} />
    </>
  )
}
