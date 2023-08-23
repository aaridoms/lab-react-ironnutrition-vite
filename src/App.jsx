import { useState } from "react";
import { Row, Divider } from "antd";
import "./App.css";


import foodsJson from "./foods.json";
import FoodList from "./components/FoodList";

function App() {

  const [ foods, setFoods ] = useState(foodsJson)

  return (
    <div className="App">
      <Divider>Food List</Divider>
      <Row style={{ width: "100%", justifyContent: "center" }}>
        <FoodList food={foods} setFoods={setFoods} />
      </Row>
    </div>
  );
}

export default App;
