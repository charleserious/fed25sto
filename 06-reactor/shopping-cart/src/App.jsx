import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Root from "./pages/Root";
import Shop from "./pages/Shop";
import ItemPage from "./pages/ItemPage";
import { BASENAME } from "./context";

function App() {
  const [cartItems, setCartItems] = useState({});

  const handleAddToCart = (id) => {
    const quantity = cartItems[id] ? cartItems[id] + 1 : 1;
    setCartItems({ ...cartItems, [id]: quantity });
  };

  return (
    <BrowserRouter basename={BASENAME}>
      <Routes>
        <Route path="/" element={<Root cartItems={cartItems} />}>
          <Route index element={<Shop handleAddToCart={handleAddToCart} />} />
          <Route
            path="/product/:id"
            element={<ItemPage handleAddToCart={handleAddToCart} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
