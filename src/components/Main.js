import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="mainContainer">
      <div className="greetingContainer">
        <h1>
          Hi, <span>admin</span>
        </h1>
      </div>
      <div className="cardContainer">
        <div className="card users">
          <img
            src="https://cdn-icons-png.flaticon.com/512/633/633781.png"
            alt=""
          />
          <p>Total Users</p>
          <h3>10000</h3>
        </div>
        <div className="card payments">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1019/1019709.png"
            alt=""
          />
          <p>Total Payment</p>
          <h3>10000000.00</h3>
        </div>
        <div className="card projects">
          <img
            src="https://cdn-icons.flaticon.com/png/512/3286/premium/3286768.png?token=exp=1655288749~hmac=4d1576af2853d407996bde371f1deb8d"
            alt=""
          />
          <p>Total Projects</p>
          <h3>1000</h3>
        </div>
      </div>
      <div className="addContainer">
        <Link to="/add/client" className="add">
          <p>Add Client</p>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1237/1237946.png"
            alt=""
          />
        </Link>
        <Link to="/add/projects" className="add">
          <p>Add Project</p>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1237/1237946.png"
            alt=""
          />
        </Link>
      </div>
      <div className="latestActivityContainer">
        <h2>Latest Activity</h2>
        <div className="activityCardsContainer">
          <div className="activityCard">
            <h5>LOGIN</h5>
            <p>UserName</p>
            <p>9876543210</p>
            <h6>07 Jun 2022</h6>
          </div>
          <div className="activityCard">
            <h5>LOGIN</h5>
            <p>UserName</p>
            <p>9876543210</p>
            <h6>07 Jun 2022</h6>
          </div>
          <div className="activityCard">
            <h5>LOGIN</h5>
            <p>UserName</p>
            <p>9876543210</p>
            <h6>07 Jun 2022</h6>
          </div>
          <div className="activityCard">
            <h5>LOGIN</h5>
            <p>UserName</p>
            <p>9876543210</p>
            <h6>07 Jun 2022</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
