import { createContext, useState } from 'react';

const UsersContext = createContext();

const UsersProvider = ({ children }) => {
  const [usuarios, setUsuarios] = useState([]);

  const agregarUsuario = (usuario) => {
    setUsuarios((prevUsuarios) => [...prevUsuarios, usuario]);
  };

  return (
    <UsersContext.Provider value={{ usuarios, agregarUsuario }}>
      {children}
    </UsersContext.Provider>
  );
};

export { UsersContext, UsersProvider };
