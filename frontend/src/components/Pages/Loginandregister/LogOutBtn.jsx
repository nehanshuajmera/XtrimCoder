import axios from "axios";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom"
import AuthContext from "../../../context/AuthContext";
import DarkmodeContext from "../../../context/DarkmodeContext";

function LogOutBtn() {
  const { getLoggedIn } = useContext(AuthContext);
  const { isChecked } = useContext(DarkmodeContext);
  const history = useNavigate()

  async function logOut() {
    // await axios.get("http://localhost:5000/auth/logout");
    await axios.get("/auth/logout");
    await getLoggedIn();
    history('/');
  }
  return <button className={isChecked ?"btn btn-outline-light":"btn btn-outline-dark"} onClick={logOut}>Logout</button>;
}

export default LogOutBtn;