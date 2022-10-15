import { useState, useEffect } from "react";
import "../styles/Cart.css";

function Cart({ cart, updateCart }) {
  const [isOpen, setIsOpen] = useState(true);
  const total = cart.reduce(
    (acc, catType) => acc + catType.amount * catType.price,
    0
  );

  useEffect(() => {
    document.title = `CAC: ${total}€ d'achats`;
  }, [total]);

  return isOpen ? (
    <div className="cart">
      <button className="cart-toggle-button" onClick={() => setIsOpen(false)}>
        Fermer
      </button>

      <h2>Panier</h2>
      {cart.map(({ name, price, amount }, index) => (
        <div key={`${name}-${index}`}>
          {name} {price}€ x {amount}
        </div>
      ))}

      <p>Total : {total} €</p>
      <button onClick={() => updateCart([])}>Vider le panier</button>
    </div>
  ) : (
    <div className="cart-closed">
      <button className="cart-toggle-button" onClick={() => setIsOpen(true)}>
        Ouvrir le panier
      </button>
    </div>
  );
}

export default Cart;
