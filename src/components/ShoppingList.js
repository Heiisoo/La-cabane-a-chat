import { catList } from "../datas/catList";
import CatItem from "./CatItem";
import "../styles/ShoppingList.css";
import Categories from "./Categories";
import { useState } from "react";

function ShoppingList({ cart, updateCart }) {
  const [activeCategorie, setCategorie] = useState("");
  const categories = catList.reduce(
    (acc, cat) => (acc.includes(cat.category) ? acc : acc.concat(cat.category)),
    []
  );

  function addToCart(name, price) {
    const chatAjouterDernierement = cart.find((cat) => cat.name === name);

    if (chatAjouterDernierement) {
      const cartFiltrerChatCurrent = cart.filter((cat) => cat.name !== name);

      updateCart([
        ...cartFiltrerChatCurrent,
        { name, price, amount: chatAjouterDernierement.amount + 1 },
      ]);
    } else {
      updateCart([...cart, { name, price, amount: 1 }]);
    }
  }

  return (
    <div className="shopping-list">
      <Categories
        categories={categories}
        activeCategorie={activeCategorie}
        setCategorie={setCategorie}
      />

      <ul className="cat-list">
        {catList.map(({ id, cover, name, poils, cute, price, category }) =>
          !activeCategorie || activeCategorie === category ? (
            <div key={id}>
              <CatItem cover={cover} name={name} poils={poils} cute={cute} />
              <button
                className="cart-add-button"
                onClick={() => addToCart(name, price)}
              >
                Ajouter
              </button>
            </div>
          ) : null
        )}
      </ul>
    </div>
  );
}

export default ShoppingList;
