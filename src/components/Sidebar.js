import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarCard">
        <img
          src="https://cdn-icons-png.flaticon.com/512/747/747891.png"
          alt=""
        />
        <p>DASHBOARD</p>
      </div>
      <div className="sidebarCard">
        <img
          src="https://cdn-icons.flaticon.com/png/512/4596/premium/4596358.png?token=exp=1655353163~hmac=1d7ed9249e2816bdd61187d4c269ee3f"
          alt=""
        />
        <p>USERS LIST</p>
      </div>
      <div className="sidebarCard">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2660/2660279.png"
          alt=""
        />
        <p>PRICE PLANS</p>
      </div>
      <div className="sidebarCard">
        <img
          src="https://cdn-icons-png.flaticon.com/512/7686/7686188.png"
          alt=""
        />
        <p>ADDON SERVICES</p>
      </div>
      <div className="sidebarCard">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1388/1388855.png"
          alt=""
        />
        <p>REFERRAL</p>
      </div>
      <div className="sidebarCard">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1545/1545606.png"
          alt=""
        />
        <p>QUESTIONS</p>
      </div>
      <div className="sidebarCard">
        <img
          src="https://cdn-icons-png.flaticon.com/512/5426/5426665.png"
          alt=""
        />
        <p>JOBS</p>
      </div>
      <div className="sidebarCard">
        <img
          src="https://cdn-icons.flaticon.com/png/512/5679/premium/5679146.png?token=exp=1655354462~hmac=3b5967bf033f395874d6d57d376d096d"
          alt=""
        />
        <p>EVENTS</p>
      </div>
      <div className="sidebarCard">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1001/1001296.png"
          alt=""
        />
        <p>COURSES</p>
      </div>
    </div>
  );
};

export default Sidebar;
