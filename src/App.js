import React, { useState } from "react";
import "./styles.css";
import Header from "./components/header/header";
import Filters from "./components/filters/filters";
import Hotels from "./components/hotels/hotels";
import { hotelsData } from "./hotelsData";
import Footer from "./components/footer/footer";

export default function App() {
  let [country, setCountry] = useState("Selecciona un Pais");
  let [size, setSize] = useState("Tamaños");
  let [price, setPrice] = useState("Precios");
  let [dateFrom, setDateFrom] = useState("");
  let [dateTo, setDateTo] = useState("");
  let [filterHotelList, setFilterHotelList] = useState(hotelsData);
  let [data, setData] = useState(hotelsData);

  function selectFiltered(filter, filterType, listUpdated) {
    switch (filterType) {
      case "dateFrom":
        setDateFrom(filter);
        break;
      case "dateTo":
        setDateTo(filter);
        break;
      case "Country":
        setCountry(filter);
        //console.log("Im on Country");
        break;
      case "Price":
        setPrice(filter);
        //console.log("Im on Price");
        break;
      case "Size":
        setSize(filter);
        //console.log("Im on Size ");
        break;
      default:
        setCountry("Selecciona un Pais");
        setSize("Tamaños");
        setPrice("Precios");
        setDateFrom("");
        setDateTo("");
      //console.log("None");
    }
    setFilterHotelList(listUpdated);
  }
  return (
    <div className="App">
      <Header
        dateFrom={dateFrom}
        dateTo={dateTo}
        country={country}
        price={price}
        size={size}
      />
      <Filters
        country={country}
        size={size}
        price={price}
        dateFrom={dateFrom}
        dateTo={dateTo}
        selectFilter={selectFiltered}
        setCountry={setCountry}
        setSize={setSize}
        setPrice={setPrice}
        setDateFrom={setDateFrom}
        setDateTo={setDateTo}
        data={data}
        setData={setData}
      />
      <Hotels data={filterHotelList} />
      <Footer />
    </div>
  );
}
