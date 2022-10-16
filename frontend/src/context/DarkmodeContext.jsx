import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const DarkmodeContext = createContext();

function DarkmodeContextProvider(props) {
  
    const [isChecked, setIsChecked] = useState(JSON.parse(localStorage.getItem("DarkMode")));
    function  handleOnChange(){
     setIsChecked(!isChecked);
     localStorage.setItem("DarkMode",JSON.stringify(!isChecked));
    };
  return (
    <DarkmodeContext.Provider value={{isChecked, handleOnChange}}>
      {props.children}
    </DarkmodeContext.Provider>
  );
}

export default DarkmodeContext;
export { DarkmodeContextProvider };