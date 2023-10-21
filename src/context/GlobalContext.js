import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [items, setItems] = useState([]);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setItems(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  const handleQuantityChange = (itemId, value) => {
    setQuantities((prev) => ({ ...prev, [itemId]: parseInt(value) }));
  };

  function AddToCart(item) {
    const existingItemIndex = cart.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    if (existingItemIndex > -1) {
      const newCart = [...cart];
      newCart[existingItemIndex].quantity += quantities[item.id] || 1;
      setCart(newCart);
    } else {
      item.quantity = quantities[item.id] || 1;
      setCart((prevCart) => [...prevCart, item]);
    }
  }

  function RemoveFromCart(id) {
    const inCart = [...cart];
    const index = inCart.findIndex((item) => item.id === id);
    if (index > -1) {
      inCart.splice(index, 1);
      setCart(inCart);
    }
  }
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalItemsInCart = cart.reduce((acc, item) => acc + item.quantity, 0);

  /********************************************************************************************/

  const [inputGirdi, setInputGirdi] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (e) => {
    const inputDegeri = e.target.value.toLowerCase();
    setInputGirdi(inputDegeri);
    if (inputDegeri) {
      const results = items.filter(
        (item) =>
          item.title.toLowerCase().includes(inputDegeri) ||
          item.description.toLowerCase().includes(inputDegeri)
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <AppContext.Provider
      value={{
        items,
        cart,
        AddToCart,
        RemoveFromCart,
        handleQuantityChange,
        quantities,
        total,
        totalItemsInCart,
        inputGirdi,
        handleSearchChange,
        searchResults,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
