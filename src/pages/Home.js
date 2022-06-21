import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Payments from "../components/Payments";
import Sidebar from "../components/Sidebar";
import "../App.css";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="bodyContainer">
        <Sidebar />
        <Main />
        <Payments />
      </div>
    </div>
  );
};

export default Home;
