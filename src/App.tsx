import React from "react";
import "./App.css";
import Content from "./components/UI/molecules/Content";
import Footer from "./components/UI/molecules/Footer";
import Header from "./components/UI/molecules/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
