import React, { Component } from "react";

export default class CloudInfraImg extends Component {
  render() {
    return (
      <img
        src={require("../../assets/images/cloudimg.png")}
        alt="Cloud"
        style={{ width: "85%", height: "auto",objectFit: "contain" }}
      />
  );
}

}