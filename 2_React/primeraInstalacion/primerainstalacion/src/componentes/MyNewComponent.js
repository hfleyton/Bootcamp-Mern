import React, { Component } from 'react';

class MyNewComponent extends Component{
    render(){
        return(
            <div>
                <h1>My name is {this.props.sometext}</h1>
            </div>
        );
    }
}

export default MyNewComponent;