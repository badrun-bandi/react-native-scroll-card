import React, { Component } from "react";
import ScrollCard from "./components/scroll-card/scroll-card";
import { data } from "./assets/data/data";

export default class App extends Component {
  render() {
    return (
      <ScrollCard title={'New releases'} data={data}></ScrollCard>
    );
  }
}