import React, { useState } from "react";
import ArticuloInformacion from "./ArticuloInformacion";
import { usePublicaciones } from "../context/PublicacionesContext";

const Publicar = () => {
  const { agregarPublicacion } = usePublicaciones();

  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handlePublicar = () => {
    if (titulo.trim() === "" || descripcion.trim() === "") {
      alert("Por favor, ingresa un título y una descripción para el artículo");
      
      return;
    }

    const nuevaPublicacion = {
      titulo: titulo,
      descripcion: descripcion,
    };

    agregarPublicacion(nuevaPublicacion);

    // Limpia los campos después de agregar la publicación
    setTitulo("");
    setDescripcion("");
  };

  return (
    <div className="container mx-auto">
      <div>
        <ArticuloInformacion
          titulo={titulo}
          setTitulo={setTitulo}
          descripcion={descripcion}
          setDescripcion={setDescripcion}
          onPublicar={handlePublicar}
        />
      </div>
    </div>
  );
};

export default Publicar;
