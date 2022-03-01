import "./hotels.scss";
import CardHotel from "../cardhotel/cardHotel";

function Hotels(props) {
  return props.data.length === 0 ? (
    <div className="notAvailable">
      <h3>¡NO SE ENCONTRARON RESULTADOS!</h3>
      <h3>¡POR FAVOR, REALIZA OTRA BUSQUEDA!</h3>
    </div>
  ) : (
    <div className="hotels">
      {props.data.map((hotel, index) => {
        return (
          <CardHotel
            name={hotel.name}
            country={hotel.country}
            city={hotel.city}
            rooms={hotel.rooms}
            price={hotel.price}
            photo={hotel.photo}
            description={hotel.description}
            availabilityFrom={hotel.availabilityFrom}
            availabilityTo={hotel.availabilityTo}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default Hotels;
