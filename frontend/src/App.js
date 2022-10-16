import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from "./context/AuthContext";
import axios from "axios";
import DarkmodeContext, { DarkmodeContextProvider } from './context/DarkmodeContext';
import { useContext } from 'react';
axios.defaults.withCredentials = true;

function App() {
  const { isChecked } = useContext(DarkmodeContext);
  const mystyle = {
    color: "white",
    backgroundColor: "#292c35"
  };
  return (
    <AuthContextProvider>
    <BrowserRouter>
    <div style={isChecked ?mystyle:{backgroundColor: "white"}}>
      <Header/>
      <Body/>
      <Footer/>
    </div>
    </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
