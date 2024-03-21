import { useState } from "react";

import "./App.css";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import OurRecipes from "./Components/OurRecipes/OurRecipes";
import Cards from "./Components/Cards/Cards";

function App() {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <OurRecipes></OurRecipes>
      <Cards></Cards>
    </>
  );
}

export default App;
