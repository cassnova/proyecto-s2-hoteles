import "./header.css";

function Header({
  country,
  dateFrom,
  dateTo,
  price,
  size,
  setCountry,
  setPrice,
  setSize
}) {
  const options = {
    week: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  let fromNatural = new Date(dateFrom).toLocaleDateString("es-CH", options);
  let toNatural = new Date(dateTo).toLocaleDateString("es-CH", options);

  return (
    <div className="header">
      <h1>
        Earth N<span>B</span>N
      </h1>

      {dateFrom ? (
        <h2 className="header-h2">Desde el: {fromNatural} </h2>
      ) : (
        <p className="header-h2">¡Selecciona una fecha para tu viaje!</p>
      )}
      {dateTo ? (
        <h2 className="header-h2">Hasta el: {toNatural} </h2>
      ) : (
        <p>¡No esperes más!</p>
      )}
      <h2 className="header-h2">El pais seleccionado es: {country} </h2>
      <h2 className="header-h2">El precio seleccionado es: {price} </h2>
      <h2 className="header-h2">El tamaño seleccionado es: {size} </h2>
    </div>
  );
}

export default Header;
