import React from "react";
import "./home.css"

function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col1">
          <h1 className="text-white text-9xl">La nuevo en IA!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            tempore nemo commodi maiores similique nostrum tempora at expedita
            distinctio explicabo assumenda architecto magnam sapiente quaerat
            exercitationem, quis totam quae reiciendis.
          </p>
          <button type="button" className="w-180px text-black text-sm py-3 px-0 bg-white border-0 rounded-full outline-none mt-8 cursor-pointer">Saber más</button>
        </div>
        <div className="col2">
          <div className="card card1">
            <h5 className="font-bold">Articulo 1</h5>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus,
              porro!
            </p>
          </div>
          <div className="card card2">
            <h5 className="font-bold">Articulo 2</h5>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus,
              porro!
            </p>
          </div>
          <div className="card card3">  
            <h5 className="font-bold">Articulo 3</h5>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus,
              porro!
            </p>
          </div>
          <div className="card card4">
            <h5 className="font-bold">Articulo 4</h5>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus,
              porro!
            </p>
          </div>
          <div className="card card5">
            <h5 className="font-bold">Articulo 5</h5>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus,
              porro!
            </p>
          </div>
          <div className="card card6">
            <h5 className="font-bold">Articulo 6</h5>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus,
              porro!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
