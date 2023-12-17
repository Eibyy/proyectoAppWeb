import React from "react";
import { usePublicaciones } from "../context/PublicacionesContext";
import PublicacionesCards from "./PublicacionesCards";

const MisPublicaciones = () => {
  const { publicaciones } = usePublicaciones();

  return (
    <div className="flex">
      <ul>
        <div className="flex">
        {publicaciones.map((publicacion, index) => (
          <div className=" m-5">
          <li key={index}>
            <PublicacionesCards
              titulo={publicacion.titulo}
              descripcion={publicacion.descripcion}
            />
          </li>
          </div>
        ))}
        </div>
      </ul>
    </div>
  );
};

export default MisPublicaciones;
