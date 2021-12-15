import React from 'react';

function Buscador(props) {

    const handleFilter = props.handleFilter;

    return (
        <div className="buscador_proyectos">
            <div className="contenedor_buscador_proyectos">

                <input type="text" name="txtProyecto" id="txtProyecto" placeholder="(Título del Proyecto)"></input>

                <input type="button" name="btnBuscar" id="btnBuscar" value="Buscar Proyecto" onClick={handleFilter}></input>

            </div>
        </div>
      );
}

export default Buscador