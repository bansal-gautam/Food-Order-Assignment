import { useEffect, useState } from "react";
import "./App.css";
import CartContainer from "./components/Cart/CartContainer";
import CategoryContainer from "./components/Categories/CategoryContainer";
import MealContainer from "./components/Meals/MealContainer";

function App() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState("All");
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addToCart = (item) => {
    setTotalAmount((prev) => prev + item.price);
    const foundItemIndex = cartItems.findIndex(
      (prevItem) => prevItem.name === item.name
    );
    const foundItem = cartItems[foundItemIndex];
    let updatedItems;
    if (foundItem) {
      const updatedItem = { ...foundItem, quantity: foundItem.quantity + 1 };
      updatedItems = [...cartItems];
      updatedItems[foundItemIndex] = updatedItem;
    } else {
      updatedItems = cartItems.concat({ ...item, quantity: 1 });
    }
    setCartItems(updatedItems);
  };

  const removeFromCart = (item) => {
    const foundItemIndex = cartItems.findIndex(
      (prevItem) => prevItem.name === item.name
    );
    const foundItem = cartItems[foundItemIndex];
    let updatedItems;
    if (foundItem) {
      setTotalAmount((prev) => prev - foundItem.price);
      if (foundItem.quantity === 1) {
        updatedItems = [
          ...cartItems.filter((prevItem) => prevItem.name !== foundItem.name),
        ];
      } else {
        const updatedItem = { ...foundItem, quantity: foundItem.quantity - 1 };
        updatedItems = [...cartItems];
        updatedItems[foundItemIndex] = updatedItem;
      }
    } else {
      return;
    }
    setCartItems(updatedItems);
  };

  const clearCart = () => {
    setCartItems([]);
    setTotalAmount(0);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://gist.githubusercontent.com/RudarDaman/39349c73d0693a5cd082a47818981a59/raw/c4fedf7ac2a23cb32bf37c83f7af7f5efc08828f/menu.json"
      );
      const result = await response.json();
      result.map((item) => (item.quantity = 0));
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
  };

  return (
    <div className="container border border-5 app-container px-4 pt-3">
      <div className="row align-items-start">
        <CategoryContainer array={categoryArray} onClick={clickHandler} />
        <MealContainer
          data={data}
          filter={selected}
          forAll={categoryArray}
          addHandler={addToCart}
          removeHandler={removeFromCart}
        />
        <CartContainer
          cartCtx={cartItems}
          clearHandler={clearCart}
          amount={totalAmount}
        />
      </div>
    </div>
  );
}

export default App;
