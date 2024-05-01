//import {useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import Shimmer from "./Shimmer";
//import { MENU_URL } from "../Constants/data";
import useRestaurantMenu from "./useRestaurantMenu";

const RestaurantMenu = () => {

    /*const [resInfo, setResInfo] = useState(null);*/
   // const [listOfRestaurant, setListOfRestaurant] = useState(null);

   const {resId} = useParams();

   const resInfo = useRestaurantMenu(resId);

    /*useEffect(() => {
        fetchMenu();
    }, );

    const fetchMenu = async () => {
        const data = await fetch(MENU_URL+resId+"&catalog_qa=undefined&submitAction=ENTER");
    
        const json = data.json();

        console.log(json);
        setResInfo(json);
    
    }; */

    if (resInfo === null) return <Shimmer/>;
    
    const {name, cuisines, cloudinaryImageId, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;


return (

    <div className="menu">
      <h1>{name}</h1>
      <h1>{cuisines.join(",")}</h1>
      <h1> {costForTwoMessage} </h1>
       <h2> Menu</h2>
       <ul>
       {itemCards.map((item) =>  ( 

        
          
        <li key = {itemCards.id}>
          {itemCards.card.info.name} - Rs. 
           {itemCards.card.info.price / 100  || itemCards.card.info.defaultPrice / 100}
         </li>
))}


      </ul>
    </div>
);


};

export default RestaurantMenu;
