import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "./AddClient.css";
import axios from "axios";

const AddClient = () => {
  const [location, setLocation] = useState("");

  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const storeLocation = () => {
    setLocation(document.getElementById("location").value);
  };

  useEffect(() => {
    async function getLocationDetails() {
      const endpoint = `https://api.geoapify.com/v1/geocode/autocomplete?text=${location}%20&format=json&apiKey=41ff15ef6d914c4aa4d53d1c7c848744`;

      await axios.get(endpoint).then((res) => {
        const data = res.data;
        console.log(data);
        if (data.results) {
          setLatitude(data.results[0].lat);
          setLongitude(data.results[0].lon);
        }
      });
    }

    if (location.length > 2) {
      getLocationDetails();
    }
  }, [location]);

  return (
    <div className="addClient">
      <Header />
      <div className="add__client">
        <h2>Add Client</h2>
        <div className="inputFieldContainer__addClient">
          <div className="leftInputContainer">
            <h3>Customer Name</h3>
            <input type="text" />
            <h3>Business Name</h3>
            <input type="text" />
            <h3>Contact Person Name</h3>
            <input type="text" />
            <h3>Contact Number</h3>
            <input type="tel" />
            <h3>Email</h3>
            <input type="email" />
          </div>
          <div className="rightInputContainer">
            <h3>Office Address</h3>
            <textarea rows="5" cols="50" />
            <h3>Location</h3>
            <input onChange={storeLocation} id="location" type="text" />
            <h3>Reference</h3>
            <input type="text" />
            <div className="submitButton submitButton__addClient">SUBMIT</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddClient;
