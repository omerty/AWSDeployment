import React, { Component, useEffect, } from "react";
import { init } from "ityped";

export default class Hello extends Component {

  componentDidMount() {
    const myElement = document.querySelector("#myElement") as Element;
    if (myElement) {
      init(myElement, {
        showCursor: false,
        strings: [" Omer Mohiuddin", " A Software Developer "],
      });
    }
  }
  
  render() {
    return <div id="myElement"></div>;
  }
}

