import react, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function Home() {
  const [underline, setUnderline] = useState([
    { part: "about", style: { textDecoration: "underline", textDecorationColor: "whitesmoke", textDecorationThickness: "5px" } },
    { part: "stat", style: undefined },
    { part: "evolution", style: undefined },
    { part: "moves", style: undefined },
  ]);
  const [pokemons, setPokemons] = useState([]);

  const navigate = useNavigate();

  const detailHandler = (e) => {
    if (e.target.name === "about") {
      navigate("/");
    } else if (e.target.name === "stat") {
      navigate("/stats");
    } else if (e.target.name === "evolution") {
      navigate("/evolution");
    } else if (e.target.name === "moves") {
      navigate("/moves");
    }
    let newUnderline = [...underline];
    newUnderline.forEach((el) => {
      if (el.part === e.target.name) {
        el.style = { textDecoration: "underline", textDecorationColor: "whitesmoke", textDecorationThickness: "5px" };
      } else el.style = undefined;
    });
    setUnderline(newUnderline);
  };
  return (
    <div className="Home bg-slate-400 flex flex-row">
      <div className="bg-white">
        <div id="sidebar-header" className="text-5xl text-left ml-4 text-black">
          POKEDEX
        </div>
        <div id="sidebar" style={{ height: "790px", width: "600px", backgroundColor: "white", overflow: "auto" }}>
          <div id="sidebar-body" className="grid grid-cols-2 gap-1">
            <button>
              <div id="card" className="rounded-box flex flex-col bg-green-400 border-2 h-52 w-72">
                <div id="name" className="pt-5 ml-4 text-left text-white text-xl">
                  Bulbasaur
                </div>
                <div id="info" className="flex flex-row pb-0 ml-4">
                  <div id="type" className="mt-3">
                    <p className="bg-white bg-opacity-40 rounded-box px-2 text-white">Grass</p>
                    <p className="bg-white bg-opacity-40 rounded-box px-2 text-white mt-2">Poison</p>
                  </div>
                  <div id="image">
                    <img
                      style={{ height: "150px", width: "220px" }}
                      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                      alt="Bulbasaur"
                    />
                  </div>
                </div>
              </div>
            </button>
            <div id="card" className="rounded-box flex flex-col bg-green-400 border-2 h-52 w-72">
              <div id="name" className="pt-5 ml-4 text-left text-white text-xl">
                Bulbasaur
              </div>
              <div id="info" className="flex flex-row pb-0 ml-4">
                <div id="type" className="mt-3">
                  <p className="bg-white bg-opacity-40 rounded-box px-2 text-white">Grass</p>
                  <p className="bg-white bg-opacity-40 rounded-box px-2 text-white mt-2">Poison</p>
                </div>
                <div id="image">
                  <img
                    style={{ height: "150px", width: "220px" }}
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                    alt="Bulbasaur"
                  />
                </div>
              </div>
            </div>
            <div id="card" className="rounded-box flex flex-col bg-green-400 border-2 h-52 w-72">
              <div id="name" className="pt-5 ml-4 text-left text-white text-xl">
                Bulbasaur
              </div>
              <div id="info" className="flex flex-row pb-0 ml-4">
                <div id="type" className="mt-3">
                  <p className="bg-white bg-opacity-40 rounded-box px-2 text-white">Grass</p>
                  <p className="bg-white bg-opacity-40 rounded-box px-2 text-white mt-2">Poison</p>
                </div>
                <div id="image">
                  <img
                    style={{ height: "150px", width: "220px" }}
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                    alt="Bulbasaur"
                  />
                </div>
              </div>
            </div>
            <div id="card" className="rounded-box flex flex-col bg-green-400 border-2 h-52 w-72">
              <div id="name" className="pt-5 ml-4 text-left text-white text-xl">
                Bulbasaur
              </div>
              <div id="info" className="flex flex-row pb-0 ml-4">
                <div id="type" className="mt-3">
                  <p className="bg-white bg-opacity-40 rounded-box px-2 text-white">Grass</p>
                  <p className="bg-white bg-opacity-40 rounded-box px-2 text-white mt-2">Poison</p>
                </div>
                <div id="image">
                  <img
                    style={{ height: "150px", width: "220px" }}
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                    alt="Bulbasaur"
                  />
                </div>
              </div>
            </div>
            <div id="card" className="rounded-box flex flex-col bg-green-400 border-2 h-52 w-72">
              <div id="name" className="pt-5 ml-4 text-left text-white text-xl">
                Bulbasaur
              </div>
              <div id="info" className="flex flex-row pb-0 ml-4">
                <div id="type" className="mt-3">
                  <p className="bg-white bg-opacity-40 rounded-box px-2 text-white">Grass</p>
                  <p className="bg-white bg-opacity-40 rounded-box px-2 text-white mt-2">Poison</p>
                </div>
                <div id="image">
                  <img
                    style={{ height: "150px", width: "220px" }}
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                    alt="Bulbasaur"
                  />
                </div>
              </div>
            </div>
            <div id="card" className="rounded-box flex flex-col bg-green-400 border-2 h-52 w-72">
              <div id="name" className="pt-5 ml-4 text-left text-white text-xl">
                Bulbasaur
              </div>
              <div id="info" className="flex flex-row pb-0 ml-4">
                <div id="type" className="mt-3">
                  <p className="bg-white bg-opacity-40 rounded-box px-2 text-white">Grass</p>
                  <p className="bg-white bg-opacity-40 rounded-box px-2 text-white mt-2">Poison</p>
                </div>
                <div id="image">
                  <img
                    style={{ height: "150px", width: "220px" }}
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                    alt="Bulbasaur"
                  />
                </div>
              </div>
            </div>
            <div id="card" className="rounded-box flex flex-col bg-green-400 border-2 h-52 w-72">
              <div id="name" className="pt-5 ml-4 text-left text-white text-xl">
                Bulbasaur
              </div>
              <div id="info" className="flex flex-row pb-0 ml-4">
                <div id="type" className="mt-3">
                  <p className="bg-white bg-opacity-40 rounded-box px-2 text-white">Grass</p>
                  <p className="bg-white bg-opacity-40 rounded-box px-2 text-white mt-2">Poison</p>
                </div>
                <div id="image">
                  <img
                    style={{ height: "150px", width: "220px" }}
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                    alt="Bulbasaur"
                  />
                </div>
              </div>
            </div>
            <div id="card" className="rounded-box flex flex-col bg-green-400 border-2 h-52 w-72">
              <div id="name" className="pt-5 ml-4 text-left text-white text-xl">
                Bulbasaur
              </div>
              <div id="info" className="flex flex-row pb-0 ml-4">
                <div id="type" className="mt-3">
                  <p className="bg-white bg-opacity-40 rounded-box px-2 text-white">Grass</p>
                  <p className="bg-white bg-opacity-40 rounded-box px-2 text-white mt-2">Poison</p>
                </div>
                <div id="image">
                  <img
                    style={{ height: "150px", width: "220px" }}
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                    alt="Bulbasaur"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="details" className="flex mx-auto w-1/2">
        <div className="card full ml-0 h-full bg-base-100 w-full shadow-xl">
          <div id="info" className="bg-green-400">
            <h2 className="text-left text-5xl text-white font-semibold ml-3">Bulbasaur</h2>
            <p className="text-right text-white text-xl font-semibold mr-4">#001</p>
            <div id="type" className="flex flex-row">
              <p className="bg-white text-white rounded-box bg-opacity-50 px-2 mx-3">Grass</p>
              <p className="bg-white text-white rounded-box bg-opacity-50 px-2">Poison</p>
            </div>
          </div>
          <figure className="bg-green-400">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <div id="upper-bar" className="mx-auto">
              <ul className="flex flex-row gap-4 text-center">
                <li>
                  <button onClick={detailHandler} name="about" className="btn btn-ghost" style={underline[0].style}>
                    About
                  </button>
                </li>
                <li>
                  <button onClick={detailHandler} name="stat" className="btn btn-ghost" style={underline[1].style}>
                    Base Stats
                  </button>
                </li>
                <li>
                  <button onClick={detailHandler} name="evolution" className="btn btn-ghost" style={underline[2].style}>
                    Evolution
                  </button>
                </li>
                <li>
                  <button onClick={detailHandler} name="moves" className="btn btn-ghost" style={underline[3].style}>
                    Moves
                  </button>
                </li>
              </ul>
            </div>
            <div id="content" className="mx-auto">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
