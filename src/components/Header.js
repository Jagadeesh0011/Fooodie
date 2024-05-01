import { useState } from "react";
//import Body from "./Body";
import {Link} from "react-router-dom";
import useOnlineStatus from "../Constants/useOnlineStatus";
//import Groceries from "./Groceries";

const Header = () => {

    const[btnName, setBtnName] = useState("login");

    const onlineStatus = useOnlineStatus();

    return(
    <div className="flex justify-between bg-grey">
    <div className="logo-container">
   
    <img className="w-56"
    src="/food.jpg"
    alt="logo"
     />
  
    </div>
    <div className="nav-items">
      <ul className="flex p-4 m-8">
        <li> OnlineStatus: {onlineStatus ? "yes" : "No"}</li>
        <li> Home</li>
        <li>
          <Link to="/About"> About Us </Link> 
          </li>
          <li>
            <Link to="/Groceries">
              Groceries
            </Link>
          </li>
        <li>Contact Us</li>
        <li> Cart</li>
        <button className="login-button"
         onClick={() => {
            btnName === "login"
            ?setBtnName("Logout")
            : setBtnName("login");
         }}>
             {btnName}
        </button>
      </ul>
  
    </div>
  
    </div>
  )}

  export default Header;