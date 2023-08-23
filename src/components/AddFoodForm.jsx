import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

import { Button, Input, Form, Card } from "antd"

// Your code here
export default function AddFoodForm(props) {

  // const [ nameInput, setnameInput ] = useState("")
  // const [ imageInput, setImageInput ] = useState("")
  // const [ caloriesInput, setCaloriesInput ] = useState(0)
  // const [ servingsInput, setServingsInput ] = useState(0)
  const [ formGlobal, setFormGlobal ] = useState({
    name: "",
    image: "",
    calories: 0,
    servings: 0
  })

  const handleAddForm = (e) => {
    e.preventDefault()
    // console.log(formGlobal.name)

    let newFood = JSON.parse(JSON.stringify(formGlobal))
    let foodClone = JSON.parse(JSON.stringify(props.food))
    // console.log(newFood)
  
    newFood.id = uuidv4()

    console.log(newFood)
    
    foodClone.unshift(newFood)
    props.setFoods(foodClone)

    // Cuando añado una comida dejo el formulario con el valor inicial
    setFormGlobal({
      name: "",
      image: "",
      calories: 0,
      servings: 0
    })
  }

  const handleFormChange = (e) => {
    setFormGlobal({
      ...formGlobal,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Card title="Add Food" className="cardMod">
      <Form>
        <label htmlFor="name">Name</label>
        <Input type="text" name="name" onChange={ handleFormChange } value={ formGlobal.name }/>
        <br />
        <label htmlFor="image">Image</label>
        <Input type="text" name="image" onChange={ handleFormChange } value={ formGlobal.image } />
        <br />
        <label htmlFor="calories">Calories</label>
        <Input type="number" name="calories" onChange={ handleFormChange } value={ formGlobal.calories } />
        <br />
        <label htmlFor="servings">Servings</label>
        <Input type="number" name="servings" onChange={ handleFormChange } value={ formGlobal.servings } />
        <br />
        <Button type="submit" onClick={ handleAddForm }>Create</Button>
      </Form>
    </Card>
  )
}
