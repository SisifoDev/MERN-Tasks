import React, { Fragment } from "react";
import Tarea from "./Tarea";

const ListadoTareas = () => {
  const tareasProyecto = [
    {
      nombre: "Elegir plataforma",
      estado: true,
    },
    {
      nombre: "Elegir colores",
      estado: false,
    },
    {
      nombre: "Elegir Plataformas de pago",
      estado: false,
    },
    {
      nombre: "Elegir Hosting",
      estado: true,
    },
  ];
  return (
    <Fragment>
      <h2>Proyecto: Tienda virtuale</h2>
      <ul className="listado-tareas">
        {tareasProyecto.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          tareasProyecto.map((tarea) => <Tarea tarea={tarea} />)
        )}
        <button type="button" className="btn btn-eliminar">
          Eliminar proyecto &times;
        </button>
      </ul>
    </Fragment>
  );
};

export default ListadoTareas;
