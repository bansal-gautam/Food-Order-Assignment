import { useEffect, useState } from "react";
import "./App.css";
import CartContainer from "./components/Cart/CartContainer";
import CategoryContainer from "./components/Categories/CategoryContainer";
import MealContainer from "./components/Meals/MealContainer";
import CartProvider from "./store/CartProvider";

function App() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState("All");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://gist.githubusercontent.com/RudarDaman/39349c73d0693a5cd082a47818981a59/raw/c4fedf7ac2a23cb32bf37c83f7af7f5efc08828f/menu.json"
      );
      const result = await response.json();
      setData(result);
    };

    if (data.length === 0) {
      fetchData();
    }
  }, [data]);

  const uniqueArray = data.filter((value, index, self) => {
    return index === self.findIndex((obj) => obj.category === value.category);
  });

  const categoryArray = uniqueArray.map((obj) => obj.category);

  const clickHandler = (value) => {
    setSelected((prev) => value.title);
    let elements = document.getElementsByClassName("category-item");
    elements = Array.from(elements);
    elements.map((element) => (element.style.backgroundColor = "white"));
    document.getElementById(`${value.id}`).style.backgroundColor = "yellow";
  };

  return (
    <CartProvider>
      <div className="container border border-5 app-container px-4 pt-3">
        <div className="row align-items-start">
          <CategoryContainer array={categoryArray} onClick={clickHandler} />
          <MealContainer data={data} filter={selected} forAll={categoryArray} />
          <CartContainer />
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
