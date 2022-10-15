const quantityLabel = {
  1: "peu",
  2: "modérément",
  3: "beaucoup",
};

function CareScale({ scaleValue, careType }) {
  const densite = [1, 2, 3];

  const scaleType = careType === "cute" ? "😀" : "🙄";

  return (
    <div
      onClick={() =>
        alert(
          `Ce chat requiert ${quantityLabel[scaleValue]} ${
            careType === "cute" ? "de carresse" : "de brossage"
          }`
        )
      }
    >
      {densite.map((densiteElem) =>
        scaleValue >= densiteElem ? (
          <span key={densiteElem.toString()}>{scaleType}</span>
        ) : null
      )}
    </div>
  );
}

export default CareScale;
