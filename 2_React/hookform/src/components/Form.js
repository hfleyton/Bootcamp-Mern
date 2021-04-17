import React from 'react';

const Form = props =>{
    const { inputs, setInputs } = props;

    const onChange = e =>{
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    }
    
    return(
        <form>
            <div>
            <label htmlFor="firstName">First Name</label>
            <input onChange={onChange} type="text" name="firstName"/>
            </div>
            <div>
            <label htmlFor="lastName">Last Name</label>
            <input onChange={onChange} type="text" name="lastName"/>
            </div>
            <div>
            <label htmlFor="email">Email</label>
            <input onChange={onChange} type="text" name="email"/>
            </div>
            <div>
            <label htmlFor="password">Password</label>
            <input onChange={onChange} type="password" name="password"/>
            </div>
            <div>
            <label htmlFor="confirmPassword">confirm Password</label>
            <input onChange={onChange} type="password" name="confirmPassword"/>
            </div>
        </form>
    )
}

export default Form;

