import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UsersContext } from '../context/UsersContext';

function Registro() {
  const { usuarios, agregarUsuario } = useContext(UsersContext);

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirm: '',
  });

  const [passwordMatch, setPasswordMatch] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar que la contraseña y la confirmación sean iguales
    if (formData.password !== formData.confirm) {
      setPasswordMatch(false);
      return;
    }

    // Crear un nuevo objeto de usuario con los datos del formulario
    const nuevoUsuario = { ...formData };

    // Agregar el nuevo usuario al array de usuarios utilizando el contexto
    agregarUsuario(nuevoUsuario);

    // Limpiar los campos del formulario y restablecer la validación
    setFormData({
      username: '',
      email: '',
      password: '',
      confirm: '',
    });
    setPasswordMatch(true);
  };

  return (
    <div className="h-screen bg-indigo-100 flex justify-center items-center">
      <div className="lg:w-2/5 md:w-1/2 w-2/3">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-10 rounded-lg shadow-lg min-w-full"
        >
          <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">
            Formulario de Registro
          </h1>
          <div>
            <label
              className="text-gray-800 font-semibold block my-3 text-md"
              htmlFor="username"
            >
              Nombre de usuario
            </label>
            <input
              className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
              type="text"
              name="username"
              id="username"
              placeholder="Ingrese su usuario"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="text-gray-800 font-semibold block my-3 text-md"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
              type="text"
              name="email"
              id="email"
              placeholder="Ingrese su email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="text-gray-800 font-semibold block my-3 text-md"
              htmlFor="password"
            >
              Contraseña
            </label>
            <input
              className={`w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none ${
                !passwordMatch ? 'border-red-500' : ''
              }`}
              type="password"
              name="password"
              id="password"
              placeholder="Ingrese su contraseña"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="text-gray-800 font-semibold block my-3 text-md"
              htmlFor="confirm"
            >
              Confirmar Contraseña
            </label>
            <input
              className={`w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none ${
                !passwordMatch ? 'border-red-500' : ''
              }`}
              type="password"
              name="confirm"
              id="confirm"
              placeholder="Repita su contraseña"
              value={formData.confirm}
              onChange={handleChange}
            />
            {!passwordMatch && (
              <p className="text-red-500 text-sm mt-1">
                Las contraseñas no coinciden
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans"
          >
            Register
          </button>
        </form>
        <NavLink to="/">
          <button
            type="button"
            className="w-full mt-6 mb-3 bg-indigo-100 rounded-lg px-4 py-2 text-lg text-gray-800 tracking-wide font-semibold font-sans bg-teal-400"
          >
            Inicia sesión si ya tienes cuenta
          </button>
        </NavLink>

        
      </div>
    </div>
  );
}

export default Registro;
