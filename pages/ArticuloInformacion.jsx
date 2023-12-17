import React from "react";
import { useState } from "react";
import "./article.css";

function ArticuloInformacion({ titulo, setTitulo, descripcion, setDescripcion, onPublicar }) {
  const [pdfFiles, setPdfFiles] = useState([]);

  const handleFileChange = (event) => {
    const fileList = event.target.files;
    const newPdfFiles = Array.from(fileList).map((file) => ({
      name: file.name,
      size:
        file.size > 1024
          ? file.size > 1048576
            ? Math.round(file.size / 1048576) + "mb"
            : Math.round(file.size / 1024) + "kb"
          : file.size + "b",
    }));
    setPdfFiles(newPdfFiles);
  };

  const handlePdfRemove = (index) => {
    const updatedPdfFiles = [...pdfFiles];
    updatedPdfFiles.splice(index, 1);
    setPdfFiles(updatedPdfFiles);
  };

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 bg-white rounded'>
      <div className="bg-white shadow p-4 py-5 my-9 rounded ">
        <div className="heading text-center font-bold text-2xl m-5 text-gray-800 bg-white">Nuevo Articulo</div>
        <div className="article-title ">
          <input
            type="text"
            placeholder="Título del Artículo"
            id="titulo"
            name="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>
        <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl m-5">
          <textarea
            className="description bg-gray-100 sec p-3 h-40 border border-gray-300 outline-none"
            spellCheck="false"
            placeholder="Breve descripción del artículo"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          ></textarea>

          {/* icons */}
          <div className="icons flex text-gray-500 m-2">
            <label id="select-pdf">
              <svg
                className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                />
              </svg>
              <input
                hidden
                type="file"
                multiple
                onChange={handleFileChange}
                accept=".pdf"
              />
            </label>
          </div>

          <div id="preview" className="my-4 flex">
            {pdfFiles.map((pdf, index) => (
              <div
                className="relative w-32 h-32 object-cover rounded"
                key={index}
              >
                <div className="relative w-32 h-32 object-cover rounded">
                  <svg
                    className="fill-current w-32 h-32 ml-auto pt-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M15 2v5h5v15h-16v-20h11zm1-2h-14v24h20v-18l-6-6z" />
                  </svg>
                  <button
                    onClick={() => handlePdfRemove(index)}
                    className="w-6 h-6 absolute text-center flex items-center top-0 right-0 m-2 text-white text-lg bg-red-500 hover:text-red-700 hover:bg-gray-100 rounded-full p-1"
                  >
                    <span className="mx-auto">×</span>
                  </button>
                  <div className="text-xs text-center p-2">
                    {pdf.name} ({pdf.size})
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="buttons flex justify-end">
            <div className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500"
            onClick={onPublicar}>
              Post
            </div>
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-6 ">
          <h1 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Informacion del autor
          </h1>

          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Nombre"
                className="border p-2 rounded w-full"
              />
              <input
                type="text"
                placeholder="Apellido"
                className="border p-2 rounded w-full"
              />
            </div>
            <div className="mb-4">
              Fecha del articulo:
              <input
                type="date"
                placeholder="fecha"
                className="border p-2 rounded w-50%"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <input
                type="text"
                placeholder="Pais"
                className="border p-2 rounded w-full"
              />
              <input
                type="text"
                placeholder="Ciudad"
                className="border p-2 rounded w-full"
              />
            </div>
            <div className="mb-4">
              <p className="text-black text-2x1">¿De donde lo sube?</p>
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
    </div>
  );
}

export default ArticuloInformacion;
