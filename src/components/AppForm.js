import React, { useState } from "react";
import axios from "axios";

import AppTable from "./AppTable.js";
import './AppForm.css';

function AppForm(props) {
  const baseUrl = "https://opentable.herokuapp.com/api";
  const [city, setCity] = useState("");
  const [data, setData] = useState([]);
  const [any, setAny] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    fetchCity(city);
  };

  const fetchCity = (city) => {
    axios.get(baseUrl + "/restaurants?city=" + city)
    .then((response) => {
      { response &&
      setData(response.data.restaurants);}
    })
    .catch((response) => {
      alert("Enter valid related city Name");
    })
  };

  const handleChange = (value) => {
    setAny(value);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="City Name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button>Submit</button>
        <br></br>
        <br></br>
        <b>Refine Results By restaurant name, street, area : </b>
        <input
          type="text"
          placeholder="Refine Results"
          value={any}
          onChange={(e) => handleChange(e.target.value)}
        />
      </form>
      {data && <AppTable data={data} any={any} />}
    </>
  );
}

export default AppForm;
