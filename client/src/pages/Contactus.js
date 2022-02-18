import React from "react";
import Navbar from "./Navbar";

const Contactus = () => {
  return (
    <div>
      <Navbar />
      <div
        style={{
          width: "60%",
          height: "500px",
          marginLeft: "20%",
          marginTop: "120px",
          display: "block",
          float: "left",
        }}
      >
        <div>
          <input
            type="text"
            placeholder="name"
            style={{
              width: "300px",
              height: "40px",
              backgroundColor: "white",
              borderRadius: "10px",
              border: "2px black solid",
            }}
          />
          <input
            type="text"
            placeholder="lastname"
            style={{
              width: "300px",
              height: "40px",
              backgroundColor: "white",
              borderRadius: "10px",
              border: "2px black solid",
            }}
          />
        </div>
        <input
          type="text"
          placeholder="email"
          style={{
            width: "550px",
            height: "40px",
            backgroundColor: "white",
            borderRadius: "10px",
            border: "2px black solid",
          }}
        />
        <textarea
          type="text"
          placeholder="object"
          style={{
            width: "550px",
            height: "200px",
            marginLeft: "20%",
            backgroundColor: "white",
            borderRadius: "10px",
            border: "2px black solid",
          }}
        />
        <a href="/" style={{ textDecoration: "none" }}>
          <button>send</button>
        </a>
      </div>
    </div>
  );
};

export default Contactus;
