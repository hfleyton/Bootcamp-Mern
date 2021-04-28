import React, { useState } from 'react';

const Counter = props => {
    const [state, setState] = useState({  
            clickCount : 0
    });

    const handleClick= () => {
        setState({
            clickCount: state.clickCount + 1
        });
    }

    return(
        <div>
            
            <button onClick={ handleClick }>Click Me : { state.clickCount }</button>
        </div>
    );
}

export default Counter;
