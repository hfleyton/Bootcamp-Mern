import React, { useState } from 'react';
import postNewForm from '../actions/postNewForm';

const Form = () => {
    const [ error, setError ] = useState(false);
    const [ enviado, setEnviado ] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        const form = event.target.closest('form');
        const formData = new FormData(form);
        const data = {};
        for (const [key, value] of formData.entries()) data[key] = value;
        const { success, data : postData } = await postNewForm(data);
        if(success){
            form.querySelectorAll('input').forEach(
                (input) => (input.value = ''),
            );
            setEnviado(true);
        }else{
            setError(true)
            console.error({postData})
        }
    }
    
    const message = error ? (
        <div>Mierda! ha ocurrido un error!</div>
    ) : enviado ? (
        <div>Enviado!</div>
    ) : (
        ''
    );

    return (
        <div>
            <h2>{message}</h2>
            <form className="new-product" onSubmit={onSubmit}>
                <h2>Product Manager</h2>
                <label>
                    Title
                    <input name="title"/>
                    <br/>
                </label>
                <label>
                    Price
                    <input name="price" type="number"/>
                    <br/>
                </label>
                <label>
                    Description
                    <input name="description"/>
                    <br/>
                </label>
                <button>Create</button>
            </form>
        </div>
    );
}

export default Form;
