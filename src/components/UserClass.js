
import React from "react";

class UserClass extends React.Component {

    // eslint-disable-next-line no-useless-constructor
    constructor (props){
        super(props);

        this.state = {
            count1: 0,
            count2: 1,        }


    }
    render() {
        const{ name , Location} = this.props;
        const{ count1, count2} = this.state;
        return (
            <div className="user-card">
            <h1> Name: {name} </h1>
            <h3>Count: {count1} </h3>
            <h3>Location: {Location} </h3>
            <h3>Count: {count2} </h3>
            <h4> Contact: akkenapallyjagadeesh@gmail.com</h4>

        </div>
        );
    }
}

export default UserClass;