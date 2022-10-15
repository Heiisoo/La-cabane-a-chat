import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import Footer from "./Footer";
import logo from "../assets/logo.png";
import "../styles/Layout.css";
import { useEffect, useState } from "react";

function App() {
  const panierSauvegarder = localStorage.getItem("Panier");
  const [cart, updateCart] = useState(
    panierSauvegarder ? JSON.parse(panierSauvegarder) : []
  );

  useEffect(() => {
    localStorage.setItem("Panier", JSON.stringify(cart));
  }, [cart]);

  return (
    <div>
      <Banner>
        <img src={logo} alt="la cabane à chat" className="logo" />
        <h1 className="title">La cabane à chats</h1>
      </Banner>

      <div className="layout-inner">
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
