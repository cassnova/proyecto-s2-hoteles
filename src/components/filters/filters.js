import React, { useState, useEffect } from "react";
import "./filters.css";
import { hotelsData } from "../../hotelsData";

function Filters({
  country,
  size,
  price,
  dateFrom,
  dateTo,
  clickManage,
  setCountry,
  setSize,
  setPrice,
  setDateFrom,
  setDateTo,
  selectFilter,
  data,
  setData
}) {
  //useEffect(() => {
  //  console.log(dateFrom, dateTo, country, price, size);
  //}, [country, size, price, dateFrom, dateTo]);

  function clickManage() {
    // console.log("Reset Filters");
    // setCountry("Selecciona un Pais");
    // setSize("Tamaños");
    //  setPrice("Precios");
    // setDateFrom("");
    // setDateTo("");
  }

  // function filterByCountry(value) {
  //   console.log(value, data);
  //   return hotelsData.filter((element) => {
  //     return element.country === value;
  //   });
  // }

  // function filterByPrice(value) {
  //   return hotelsData.filter((element) => {
  //     return element.price === value;
  //   });
  // }

  // function filterBySize(value) {
  //   return hotelsData.filter((element) => {
  //     return element.rooms === value;
  //   });
  // }

  function selectFiltered(e, filterType) {
    let listUpdated = [];

    switch (filterType) {
      // COUNTRY FILTER
      // COUNTRY FILTER
      // COUNTRY FILTER
      case "Country":
        listUpdated = hotelsData
          .filter((value) => {
            return e.target.value === "todos"
              ? value
              : e.target.value.toLowerCase() === value.country.toLowerCase();
          })
          .filter((value) => {
            return price === "Precios"
              ? value
              : convertPrice(price) === value.price;
          })
          .filter((value) => {
            return size === "Tamaños"
              ? value
              : size === convertSize(value.rooms);
          });

        break;
      // PRICE FILTER
      // PRICE FILTER
      // PRICE FILTER
      case "Price":
        // const hotelsData2 = filterByPrice(e.target.value);
        // console.log(hotelsData2);
        // setData(hotelsData2);

        listUpdated = hotelsData
          .filter((value) => {
            return e.target.value === "Precios"
              ? value
              : convertPrice(e.target.value) === value.price;
          })
          .filter((value) => {
            return country === "todos"
              ? value
              : country.toLowerCase() === value.country.toLowerCase();
          })
          .filter((value) => {
            return size === "Tamaños"
              ? value
              : size === convertSize(value.rooms);
          });

        break;
      // SIZE FILTER
      // SIZE FILTER
      // SIZE FILTER
      case "Size":
        // const hotelsData3 = filterBySize(e.target.value);
        // console.log(hotelsData3);
        // setData(hotelsData3);
        listUpdated = hotelsData
          .filter((value) => {
            return e.target.value === "Tamaños"
              ? value
              : e.target.value === convertSize(value.rooms);
          })
          .filter((value) => {
            return price === "Precios"
              ? value
              : convertPrice(price) === value.price;
          })
          .filter((value) => {
            return country === "todos"
              ? value
              : country.toLowerCase() === value.country.toLowerCase();
          });

        break;

      default:
        listUpdated = hotelsData;
    }

    selectFilter(e.target.value, filterType, listUpdated);
  }

  function convertPrice(price) {
    let originalPrice = 0;
    switch (price) {
      case "$":
        originalPrice = 1;
        break;
      case "$$":
        originalPrice = 2;
        break;
      case "$$$":
        originalPrice = 3;
        break;
      case "$$$$":
        originalPrice = 4;
        break;
      default:
    }

    return originalPrice;
  }

  function convertSize(rooms) {
    let roomType = "";
    if (rooms <= 10) {
      roomType = "Pequeño";
    } else if (rooms <= 20) {
      roomType = "Mediano";
    } else {
      roomType = "Grande";
    }
    return roomType;
    // let listUpdated = hotelsData;
    // if (rooms === "Pequeño") {
    //   listUpdated = hotelsData.filter((hotel) => hotel.rooms <= 10);
    // } else if (rooms === "Mediano") {
    //   listUpdated = hotelsData.filter(
    //     (hotel) => hotel.rooms > 10 && hotel.rooms <= 20
    //   );
    // } else if (rooms === "Grande") {
    //   listUpdated = hotelsData.filter((hotel) => hotel.rooms > 20);
    // }
    // return listUpdated;
  }

  // function countrySelect(e, country) {
  //   setCountry(e.target.value);
  // }

  function dateSelectFrom(e) {
    let listUpdated = [];
    let dateToLocal = new Date(dateTo).getTime() + 100000;
    let dateFromLocal = new Date(e.target.value).getTime() + 100000;
    //console.log(dateFromLocal, hotelsData[0].availabilityFrom);
    listUpdated = hotelsData.filter((value) => {
      if (dateTo) {
        return (
          dateFromLocal > value.availabilityFrom &&
          dateToLocal < value.availabilityTo
        );
      }
      return value;
    });

    selectFilter(e.target.value, "dateFrom", listUpdated);
  }

  function dateSelectTo(e) {
    let dateToLocal = new Date(e.target.value).getTime() + 100000;
    let dateFromLocal = new Date(dateFrom).getTime() + 100000;

    let listUpdated = [];

    dateToLocal <= dateFromLocal
      ? alert("SELECCIONA UNA FECHA CORRECTA")
      : (listUpdated = hotelsData.filter((value) => {
          if (dateFrom) {
            //console.log(dateFrom, dateToLocal);
            //console.log(value.availabilityFrom, value.availabilityTo);
            return (
              dateFromLocal > value.availabilityFrom &&
              dateToLocal < value.availabilityTo
            );
          }
          return value;
        }));

    selectFilter(e.target.value, "dateTo", listUpdated);
  }

  // function priceSelect(e) {
  //   setPrice(e.target.value);
  // }

  // function sizeSelect(e) {
  //   setSize(e.target.value);
  // }

  return (
    <div className="filters">
      <div>
        <h1>¡Encuentra tu destino favorito!</h1>
      </div>
      <div className="filter-list">
        {/* date filters */}
        <div className="filters-dates">
          <div>
            <span>Desde </span>
            <input
              onChange={dateSelectFrom}
              type="datetime-local"
              value={dateFrom}
              className="filters-dates-inputs"
            />
          </div>
          <div>
            <span>Hasta </span>
            <input
              onChange={dateSelectTo}
              type="datetime-local"
              value={dateTo}
              className="filters-dates-inputs"
            />
          </div>
        </div>
        {/* country filters */}
        <select
          className="filters-dates-country"
          onChange={(e) => selectFiltered(e, "Country")}
          value={country}
        >
          <option value="todos">Selecciona un Pais</option>
          <option value="Argentina">Argentina</option>
          <option value="Brasil">Brasil</option>
          <option value="Chile">Chile</option>
          <option value="Uruguay">Uruguay</option>
        </select>
        {/* price filters */}
        <select
          className="filters-dates-prices"
          onChange={(e) => selectFiltered(e, "Price")}
          value={price}
        >
          <option value="Precios">Precios</option>
          <option value="$">$</option>
          <option value="$$">$$</option>
          <option value="$$$">$$$</option>
          <option value="$$$$">$$$$</option>
        </select>
        {/* size filters */}
        <select
          className="filters-dates-sizes"
          onChange={(e) => selectFiltered(e, "Size")}
          value={size}
        >
          <option value="Tamaños">Tamaños</option>
          <option value="Pequeño">Pequeño</option>
          <option value="Mediano">Mediano</option>
          <option value="Grande">Grande</option>
        </select>
        <div>
          <button className="btnFilters" onClick={(e) => selectFiltered(e, "")}>
            Reset Filtros
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filters;
