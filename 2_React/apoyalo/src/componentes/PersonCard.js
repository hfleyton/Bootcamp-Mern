import React, {Component} from 'react';

class PersonCard extends Component{
    render(){
        const {firstName, lastname, age, hairColor} = this.props;
        return(
            <div>
                <h1>{lastname}, {firstName}</h1>
                <p>Age: {age}</p>
                <p>Hair Color: {hairColor}</p>
            </div>
        );
    }
}

export default PersonCard;