import React, { Component } from "react";

export default function FullStackImg() {
  return (
    <img
      src={require("../../assets/images/fullstack.svg")}
      alt="Full Stack"
      style={{ width: "90%", height: "auto",objectFit: "contain" }}
    />
  );
}


