import React, { useState } from 'react';

const Formulario = (props) => {
    const { añadirPropDeNuevaCaja } =  props;

const onSubmit = (e) =>{
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const payload = {};
    for (const [key, val] of formData.entries()) payload[key] = val;
    if(payload['color'].trim()==='')
        return alert('Tienes que ingresar un color!');
    if(payload['tamaño'].trim==='')
        return alert('Tienes que ingresar el tamaño!');
    
    añadirPropDeNuevaCaja(payload);
    form.querySelectorAll('input[type="text"]').forEach((input,index) => {
        input.value = ''; 
        if (index === 0) input.focus()
    });
};

    return(
        <form onSubmit={onSubmit} className="formulario-de-color">
            <label htmlFor="color-texto">Color</label>
            <input id="color-texto"  type="text" name="color"/>
            <label htmlFor="tamaño-texto">Tamaño</label>
            <input id="tamaño" name="tamaño" type="text"/>
            <input type="submit" value="añadir" />
        </form>
    );
}

export default Formulario;