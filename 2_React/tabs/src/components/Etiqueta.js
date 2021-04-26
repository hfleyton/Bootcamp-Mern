import React, { useCallback } from 'react'


const Etiqueta = (props) => {
    const {texto, index, setSeleccionado, callback} = props;

    const onClick = (e) => {
        setSeleccionado(index);
        callback(e.target);

    }


  return(
        <button className="etiqueta" onClick={onClick}>
            {texto}
        </button>
   );
 }

export default Etiqueta;