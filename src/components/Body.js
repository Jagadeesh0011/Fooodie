
import RestaurantCard from "./RestaurantCard";
import './../App.js'
import './Header.js'
import { useState, useEffect } from "react";
//import resList from "../Utils/mockData";
import Shimmer from "./Shimmer";
import {API_URL} from "../Constants/data.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Constants/useOnlineStatus.js";


const Body = () => {

    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
      
    //If no dependency array in useEffect, useEffect will be called on very render i.e if any thing changes in component, useEffct will be called.

    //If dependency array present in useEffect, useEffect will be called on initial render only i.e if any thing changes in component, useEffct will not be called after initial render.

    //If dependency array is filled with any function/component, useEffect will be called whenever function/component gets updated/changed.
    
    useEffect(() => {  
        fetchData()
    }, []);

  const onlineStatus = useOnlineStatus();

    const fetchData = async () => {
      const data  = await fetch(API_URL);
        // update the swiggy url in above
        
        const json = await data.json();

        console.log("Body Rendered");
        console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
         setListOfRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
         setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
         console.log(listOfRestaurant);

    };
    //setListOfRestaurants(resList); -- this is wrong, set function to be used in fetchData constant only

   /*if (listOfRestaurant.length === 0){ 
          return <shimmer />   //_____ This if block is modified as below to ternary block
       } */

       

       if (onlineStatus === false) return (<h1> Looks like you're Offline!!!!, PLease check you Internet Connection..</h1>)

    return (listOfRestaurant.length === 0) ? < Shimmer/> : 
    
    (
    <div className="body">
      <div className="filter flex"> 
         <div className="search m-4 p-4">
            <input type="text" className="px-4 py-2 bg-gray-100" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>

            <button className="search-button" onClick={() =>{

                 console.log(searchText);

                 const filteredRestaurant = listOfRestaurant.filter((resList) => resList.data.name.toLowerCase.includes(searchText.toLowerCase));

                 setFilteredRestaurant(filteredRestaurant);
                 
                 
                 } }> search</button>

         </div>     
         <button className="filter-button" 
         onClick={() => {
         const filter = listOfRestaurant.filter( res => res.data.rating > 4.0)
          
           setListOfRestaurant(filter);
          }}
          />
          Top Restaurants
          <button/>
         
         </div>
      <div className="res-container">

       {
        filteredRestaurant.map((restaurant) => (
          <Link   
          key={restaurant.info.id} 
          to = {"/restaurants/" + restaurant.info.id}
          >

         <RestaurantCard   resData={restaurant}/>
        
                 
          </Link>
          ))
       /*  setListOfRestaurant(resList); */
          }; 
      
  
      </div>
  
    </div>
  )}

export default Body;