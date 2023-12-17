import React from 'react';

const InformacionPersonal = () => {
  return (
    <div className='p-8'>
        <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-6 ">
          <h1 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Informacion del autor</h1>

          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input type="text" placeholder="Nombre" className="border p-2 rounded w-full" />
              <input type="text" placeholder="Apellido" className="border p-2 rounded w-full" />
            </div>
            <div className="mb-4">
              Fecha del articulo:    
              <input type="date" placeholder="fecha" className="border p-2 rounded w-50%" />
            </div>
           

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <input type="text" placeholder="Pais" className="border p-2 rounded w-full" />
              <input type="text" placeholder="Ciudad" className="border p-2 rounded w-full" />
            </div>
            <div className="mb-4">
              <p className='text-black text-2x1'>¿De donde lo sube?</p>
              <select className="border p-2 rounded w-full">
                <option>ULEAM MANTA</option>
                <option>ULEAM EXT BAHIA</option>
                <option>ULEAM EXT CHONE</option>
                {/* Add more countries as needed */}
              </select>
            </div>

          </form>
        </div>
        </div>
      );
};

export default InformacionPersonal;
