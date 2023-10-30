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
      newCart[existingItemIndex].quantity += quantities[item.id];
      setCart(newCart);
    } else {
      item.quantity = quantities[item.id];
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
  const toplamFiyat = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const sepetToplam = cart.reduce((total, item) => total + item.quantity, 0);

  /********************************************************************************************/

  const [inputGirdi, setInputGirdi] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (e) => {
    const inputDegeri = e.target.value.toLowerCase();
    setInputGirdi(inputDegeri);
    if (inputDegeri) {
      const results = items.filter((item) =>
        item.title.toLowerCase().includes(inputDegeri)
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  /********************************************************************************************/

  const [kategoriler, setKategoriler] = useState([]);
  const kategoriList = () => {
    let c = new Set();
    for (const item of items) {
      c.add(item.category);
    }
    setKategoriler([...c]);
  };

  const [secilenKategori, setSecilenKategori] = useState(null);

  return (
    <AppContext.Provider
      value={{
        items,
        cart,
        AddToCart,
        RemoveFromCart,
        handleQuantityChange,
        quantities,
        toplamFiyat,
        sepetToplam,
        inputGirdi,
        handleSearchChange,
        searchResults,
        kategoriler,
        kategoriList,
        setSecilenKategori,
        secilenKategori,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
