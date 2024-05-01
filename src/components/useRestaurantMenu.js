import { useEffect, useState } from "react";
import { MENU_URL } from "../Constants/data";

    
const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState([]);


    const fetchData = async () => {
        const data  = await fetch(MENU_URL+resId);
        const json = data.json();
        setResInfo(json);
    };

useEffect(() => {

fetchData();
}, );


return resInfo;



     

}

export default useRestaurantMenu;