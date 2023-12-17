import React, { createContext, useContext, useState } from "react";

const PublicacionesContext = createContext();

export const PublicacionesProvider = ({ children }) => {
  const [publicaciones, setPublicaciones] = useState([]);

  const agregarPublicacion = (nuevaPublicacion) => {
    setPublicaciones([...publicaciones, nuevaPublicacion]);
  };

  return (
    <PublicacionesContext.Provider
      value={{ publicaciones, agregarPublicacion }}
    >
      {children}
    </PublicacionesContext.Provider>
  );
};

export const usePublicaciones = () => {
  return useContext(PublicacionesContext);
};
