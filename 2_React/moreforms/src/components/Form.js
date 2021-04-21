import React, { useState } from 'react';

const Form = props =>{
    const { stateForm, setStateForm } = props;
    const [ stateValidation, setStateValidation ] = useState(' ');
    const [ hasBeenSubmitted,setHasBeenSubmitted ]= useState(false);

    const onChange = e =>{
        setStateForm({
            ...stateForm,
            [e.target.name]: e.target.value
        });
        switch(e.target.name){
            case 'firstName':
                if(e.target.value.length < 2){
                    setStateValidation("El campo firstName es requerido!")   
                } else if(e.target.value.length > 10){
                    setStateValidation("El campo ingresado no puede ser mayor a 10 caracteres")
                }else{
                    setStateValidation("")
                }
                break;

            default:
                break;
        }
    }   

    const handleSubmit = (e) => {
        e.preventDefault();
        const form =e.target.closest('form');
        const formData =new FormData(form);
        const data = {};
        for (let [key, value] of formData.entries()) data[key] = value;
        console.log({ formData, formDataEntries: formData.entries(), data });

        console.log(stateValidation)

        if(stateValidation == ''){
            setHasBeenSubmitted(true)
        } else{
            setHasBeenSubmitted(false)
        }

       /*  const newUser = { firstName, lastName }; */
            console.log(hasBeenSubmitted)
       /*  props.messageFormDisplay(data); */
     
       /*  e.target.reset() */
    };

    const formMessage =()=>{
        if( hasBeenSubmitted ) {
            return "Thank you for submitting the form!";

        } else {
            return "Welcome, please submit the form";
        }
        
    };

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                <h3>{formMessage()}</h3>
                <label htmlFor="firstName">First Name</label>
                <input onChange={onChange} type="text" name="firstName"/>
                {stateValidation ? <p>{stateValidation}</p>: ''}
                </div>
                <input type="submit" value="Send Message"/>
            </form>
            <div>
                <p>First Name : {stateForm.firstName}</p>
            </div>
        </div>
    )
}

export default Form;