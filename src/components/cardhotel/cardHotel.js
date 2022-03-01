import "./cardHotel.css";

function CardHotel(props) {
  return (
    <div className="cardhotel">
      <img className="cardhotel-img" src={props.photo} alt={props.nombre} />
      <h3 className="cardhotel-h3">{props.name}</h3>
      <p className="cardhotel-p"> {props.description} </p>
      {/* <div>
        <p>{props.availabilityFrom} </p>
      </div>
      <div>
        <p>{props.availabilityTo} </p>
      </div> */}
      <h5 className="cardhotel-h5">
        {props.city}, {props.country}
      </h5>

      <p> #{props.rooms} Habitaciones</p>
      <p> ${props.price}</p>
      <button className="buttons">Reservar</button>
    </div>
  );
}

export default CardHotel;
