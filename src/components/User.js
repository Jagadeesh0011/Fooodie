import { useState } from "react";


const User = (props) => {

    const { name, Location} = {props}
    const[count] = useState(0);
    const[count2] = useState(1);


        return (
        <div className="user-card">
            <h1> Name:{name} </h1>
            <h3>Location: {Location}</h3>
            <h3>Location: {count}</h3>
            <h3>Location: {count2}</h3>
            <h4> Contact: akkenapallyjagadeesh@gmail.com</h4>

        </div>
    )
}

export default User;