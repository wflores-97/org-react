import { useState } from "react";
import "./formulario.css";
import CampoTexto from "./campoTexto";
import ListaOpciones from "./listaOpciones";
import Boton from "./boton";

const Formulario=()=>{

    const [nombre, actualizarNombre] = useState("");
    const [puesto, actualizarPuesto] = useState("");
    const [foto, actualizarfoto] = useState("");
    const [equipo, actualizarEquipo] = useState("");

    const manejarEnvio=(e)=>{
        e.preventDefault();
        let datosAEnviar={
            nombre,
            puesto,
            foto,
            equipo,
        }
        console.log(datosAEnviar)
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <CampoTexto 
                titulo="Nombre" 
                placeholder="Ingrese nombre" 
                required 
                valor={nombre} 
                actualizarValor={actualizarNombre}
            />
            <CampoTexto 
                titulo="Puesto" 
                placeholder="Ingrese puesto"
                required 
                valor={puesto} 
                actualizarValor={actualizarPuesto}
            />
            <CampoTexto 
                titulo="Foto" 
                placeholder="Ingrese enlace de foto" 
                required 
                valor={foto} 
                actualizarValor={actualizarfoto}
            />
            <ListaOpciones
                valor={equipo}
                actualizarEquipo={actualizarEquipo}
            />
            <Boton text="Crear"/>
        </form>
    </section>
};


export default Formulario;