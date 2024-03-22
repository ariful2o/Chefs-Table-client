import { useState } from "react";

import "./App.css";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import OurRecipes from "./Components/OurRecipes/OurRecipes";
import Cards from "./Components/Cards/Cards";
import WantCook from "./Components/CookSummary/WantCook/WantCook";
import CurrentlyCook from "./Components/CurrentlyCook/CurrentlyCook";

function App() {
  const [cookitem, setCookitem] = useState([]);
  const [currentlyCook,setCurrentlyCook]=useState([])
  const [cookSerial, setCookSerial] = useState(0);

  const handleCookTiem = (item) => {
    setCookitem([...cookitem,item]);
  };

  const handleCurrentlyCook = (addItem ,id) => {
    // console.log(addItem)
    setCurrentlyCook([...currentlyCook,addItem]);
    //remove cookitem list
    setCookitem(cookitem.filter((item) => item.id!== addItem.id));
    console.log(currentlyCook.length)
    setCookSerial(cookSerial+1)
  }

  

  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <OurRecipes></OurRecipes>
      <div className="flex flex-col lg:flex-row">
        <Cards handleCookTiem={handleCookTiem} ></Cards>
        <div className="w-full lg:w-2/6">
          <WantCook cookitem={cookitem} handleCurrentlyCook={handleCurrentlyCook}></WantCook>
          <CurrentlyCook currentlyCook={currentlyCook} cookSerial={cookSerial}></CurrentlyCook>
        </div>
      </div>
    </>
  );
}

export default App;
