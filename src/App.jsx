import { useState } from "react";

import "./App.css";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import OurRecipes from "./Components/OurRecipes/OurRecipes";
import Cards from "./Components/Cards/Cards";
import WantCook from "./Components/CookSummary/WantCook/WantCook";

function App() {
  const [cookitem, setCookitem] = useState([]);

  const handleCookTiem = (item) => {
    setCookitem([...cookitem,item]);
  };


  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <OurRecipes></OurRecipes>
      <div className="flex">
        <Cards handleCookTiem={handleCookTiem} ></Cards>
        <div className="w-2/6">
          <WantCook cookitem={cookitem}></WantCook>
        </div>
      </div>
    </>
  );
}

export default App;
