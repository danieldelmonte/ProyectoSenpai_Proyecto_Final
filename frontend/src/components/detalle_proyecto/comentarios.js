import React, { useState }  from 'react';
import Item_Comentario from './item_comentario';

function Comentarios(props) {    

    const [ comentarioInput, setComentarioInput ] = useState('');
    
    const agregarComentario = (e) => {
        
        const textoComentario = document.getElementById("txtComentario");
        const nomUsuario = "Daniel Delmonte"; //Este valor luego lo obtendremos del Login....por ahora es fijo
        const idUsuario = 1; //Este valor luego lo obtendremos del Login....por ahora es fijo

        const tiempoTranscurrido = Date.now();
        const hoy = new Date(tiempoTranscurrido);


        if (textoComentario.value !== "") {

            let nuevoComentario = {
                contenido: textoComentario.value,
                usuario: nomUsuario,
                fecha: hoy.toUTCString(),
            };                        
                        
            props.proyecto.comentarios.push(nuevoComentario);
            
            nuevoComentario.usuario = idUsuario;
           
            guardarComentario(nuevoComentario);

            textoComentario.value = "";

        } else {
            alert("No ha ingresado un comentario....");
        }
        
    }


    const guardarComentario = async(comentario) => {
        try {            
            const promesa = await fetch(
                `http://localhost:3000/proyecto/comentario/add`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        contenido: comentario.contenido,
                        fecha: comentario.fecha,
                        usuario: comentario.usuario,
                        idProyecto: props.proyecto.id,
                    }),
                }
            );
    
            const resultado = await promesa.json();
    
            if (resultado.success === true) {
    
                console.log("OK!");
                setComentarioInput(comentario.contenido);
    
            } else {
                console.log("ERROR!");
            }
    
        } catch (error) {
            console.log(error);
        } finally {
            //Hacer algo?
        }
    };

    return (
        <>            
            <section className="comentarios_detalle">
                <div className="item_comentarios_header">
                    COMENTARIOS
                </div>
                <section id="zona_comentarios">
                    {                                              
                        props.proyecto.comentarios.map(function(comentario){
                            return <Item_Comentario comentario={comentario}></Item_Comentario>
                        })
                    }
                </section>

                <div className="item_ingreso_comentario">

                    <textarea id="txtComentario" rows="4" name="txtComentario"></textarea>

                    <input type="button" name="btnAgregarComentario" id="btnAgregarComentario" value="Agregar Comentario" onClick={agregarComentario}></input>

                </div>
            </section> 
        </>
      );
}

export default Comentarios