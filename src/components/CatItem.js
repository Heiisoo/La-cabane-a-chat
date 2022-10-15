import CareScale from "./CareScale";
import "../styles/CatItem.css";

function click(name) {
  alert(`Vous voulez acheter 1 ${name} ? Très bon choix 🌱✨`);
}

function CatItem({ name, cover, id, poils, cute }) {
  return (
    <li key={id} className="cat-item">
      <img
        onClick={() => click(name)}
        className="cat-item-cover"
        src={cover}
        alt={`${name} cover`}
      />
      {name}
      <div>
        <CareScale careType="poils" scaleValue={poils} />
        <CareScale careType="cute" scaleValue={cute} />
      </div>
    </li>
  );
}

export default CatItem;
