import React, {Component,useState} from 'react';

class PersonCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            age: props.age,
        };
    }

    happyBirthday = () =>{
        this.setState({age : this.state.age + 1});
    };

    render() {
        const {firstName, lastname, hairColor} = this.props;
        return(
            <div>
                <h1>
                    {lastname}, {firstName}
                </h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={this.happyBirthday}>Happy Birthday Button</button>
            </div>
        );
    }
}


export default PersonCard;