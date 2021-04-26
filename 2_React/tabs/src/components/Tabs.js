import React, { useRef, useState } from 'react';
import Contenido from './Contenido';
import Etiqueta from './Etiqueta';

const Tabs = props =>{
    const { tabs } = props;
    const [ seleccionado, setSeleccionado ] = useState(0);
    const padreDeEtiquetas = useRef();

    const changeButtonColor = (btn) =>{
        padreDeEtiquetas.current
            .querySelectorAll('button')
            .forEach((b) => b.classList.remove('selected'))
        btn.classList.add('selected')
    }

    const etiquetas = tabs.map(({ etiqueta } ,index) => (
    <Etiqueta 
    texto={etiqueta} 
    index={index} 
    setSeleccionado={setSeleccionado} 
    callback={changeButtonColor}
    key={index} />
    ));

    const contenidos = tabs.map(({ contenido } ,index) => {
        const isSelected = index === seleccionado;
        return <Contenido 
        texto={contenido} 
        index={index} 
        key={index} />
    });
    

    return(
        <div>
            <div ref={padreDeEtiquetas}>{etiquetas}</div>
            <div className="contenido-de-tabs">{contenidos[seleccionado]}</div>
        </div>
    );
}

export default Tabs;