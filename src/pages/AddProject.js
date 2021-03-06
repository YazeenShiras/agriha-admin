import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "./AddProject.css";
import axios from "axios";

const AddProject = () => {
  const [requirements, setRequirements] = useState([]);
  const [location, setLocation] = useState("");

  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const addRequirements = () => {
    document.getElementById("plusIconContainer").style.display = "none";
    document.getElementById("inputFieldHidden").style.display = "flex";
  };

  const cancelRequirements = () => {
    document.getElementById("plusIconContainer").style.display = "flex";
    document.getElementById("inputFieldHidden").style.display = "none";
  };

  const storeLocation = () => {
    setLocation(document.getElementById("location").value);
  };

  const storeValues = () => {
    const inputValue = document.getElementById("inputField").value;
    if (inputValue !== "") {
      setRequirements([...requirements, inputValue]);
    }
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
    <div className="addProject">
      <Header />
      <div className="add__ProjectContainer">
        <div className="AddProjectsContainer">
          <h2>Add Project</h2>
          <div className="projectidContainer">
            <h3>
              Project ID : <span>ARC001</span>
            </h3>
          </div>
          <div className="dropdown__container">
            <h3>Project Type : </h3>
            <div className="select__dropdowns">
              <select id="selects" name="categories">
                <option value="product__category">
                  Residential Architecture
                </option>
                <option value="product__category">Interior Design</option>
                <option value="product__category">Refurbishment</option>
                <option value="product__category">Cultural Architecture</option>
                <option value="product__category">Commercial & Ofiices</option>
                <option value="product__category">
                  Hospitality Architecture
                </option>
              </select>
            </div>
          </div>
          <div className="total__area">
            <h3>Total Area : </h3>
            <input type="text" />
          </div>
          <div className="total__area budget">
            <h3>Total budget : </h3>
            <input type="text" />
          </div>
          <div className="location">
            <h3>Project Location : </h3>
            <input onChange={storeLocation} id="location" type="text" />
          </div>
        </div>
        <div className="requirementsContainer">
          <div className="dateSection">
            <h3>Initiated Date : </h3>
            <input type="date" />
          </div>
          <div className="dateSection duedate">
            <h3>Due Date : </h3>
            <input type="date" />
          </div>
          <div className="requirements">
            <h3>Space Requirements</h3>
            <div
              onClick={addRequirements}
              id="plusIconContainer"
              className="requirements__image__container"
            >
              <img
                src="https://cdn-icons.flaticon.com/png/512/3524/premium/3524388.png?token=exp=1655804548~hmac=bdf1ed5385d391bb3ed2bcc7b464b04a"
                alt=""
              />
            </div>
            <div id="inputFieldHidden" className="inputFieldsContainer">
              <input id="inputField" type="text" />
              <div onClick={storeValues} className="checkImageContainer">
                <img
                  src="https://cdn-icons.flaticon.com/png/512/1055/premium/1055183.png?token=exp=1655806011~hmac=271cc99a6e558489c8710d2859e7df1a"
                  alt=""
                />
              </div>
              <div
                onClick={cancelRequirements}
                className="checkImageContainer cancelImageContainer"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1828/1828778.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="display__requirements">
            {requirements.map((requirements, index) => {
              return (
                <div key={index}>
                  <span>{index + 1}. </span> <p key={index}> {requirements}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="submitContainer">
        <div className="submitButton">SUBMIT</div>
      </div>
    </div>
  );
};

export default AddProject;
