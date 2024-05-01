//import Body from "./Body.js";
import {API_URL} from "../Constants/data.js";

const RestaurantCard = (props) => {

    const {resData} = props;

    const {
        
        cloudinaryImageId,
        name,
        cuisines,
        areaName,
        costForTwo,
        avgRating,} = resData?.info;
    

    return (
      <div className="res-card">
        <img
        className="res-logo"
        alt="res-img"
        src={API_URL+ "cloudinaryImageId" }
        />
        <h2> {name}</h2>
        <h4> {cuisines}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{areaName}</h4>
  
  
      </div>
    )
  } 
  export default RestaurantCard;