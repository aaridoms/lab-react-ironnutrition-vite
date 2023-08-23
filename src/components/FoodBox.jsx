// Your code here
import { Card, Col, Button, Row } from "antd"

export default function FoodBox(props) {
  // console.log(props.food)
  
  const handleDelete = (id) => {
    // console.log("delete")
    const foodClone = JSON.parse(JSON.stringify(props.food))

    foodClone.splice(id, 1)
    props.setFoods(foodClone)
  }

  return (
    <>
      {props.food.map(eachFood => {
        let totalCalories = eachFood.servings * eachFood.calories
        return (
          <Row gutter={[16, 16]} key={eachFood.id}>
            <Col span={3}>
              <Card title={eachFood.name} style={{ width: 230, height: 300, margin: 10 }} className="cardMod">
                <img src={eachFood.image} alt={eachFood.name} height={60} />
                <p>Calories: {eachFood.calories}</p>
                <p>Servings {eachFood.servings}</p>
                <p>
                  <b>Total Calories: {totalCalories}</b> kcal
                </p>
                <Button type="primary" onClick={ () => handleDelete(eachFood.id) }>Delete</Button>
              </Card>
            </Col>
          </Row>
        )
      })}
    </>
  )
}
