function Categories({ activeCategorie, setCategorie }) {
  function handleChange(event) {
    setCategorie(event.target.value);
  }

  return (
    <select
      value={activeCategorie}
      name="catego"
      id="categorie-select"
      onChange={handleChange}
    >
      <option value="">--Choisie une catégorie</option>
      <option value="mâle">Mâle</option>
      <option value="femelle">Femelle</option>
    </select>
  );
}

export default Categories;
