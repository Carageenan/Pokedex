import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Home() {
  const [underline, setUnderline] = useState([
    { part: "about", style: { textDecoration: "underline", textDecorationColor: "whitesmoke", textDecorationThickness: "5px" } },
    { part: "stat", style: undefined },
    { part: "evolution", style: undefined },
    { part: "moves", style: undefined },
  ]);
  const [pages, setPages] = useState(1);
  const [pokemons, setPokemons] = useState([]);
  const [details, setDetails] = useState([]);
  const [readDetails, setReadDetails] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getDetails();
  }, [pokemons]);

  useEffect(() => {
    setReadDetails(details[0]);
  }, [details]);

  useEffect(() => {
    const offset = (pages - 1) * 8;
    async function getPokemon() {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=8`);
      setPokemons(response.data.results);
    }
    getPokemon();
  }, [pages]);

  const incrementPage = () => {
    setPages(pages + 1);
  };
  const decrementPage = () => {
    if (pages > 1) setPages(pages - 1);
  };

  const getDetails = () => {
    async function fetchAllDetail() {
      const response1 = await axios.get(pokemons[0]?.url);
      const response2 = await axios.get(pokemons[1]?.url);
      const response3 = await axios.get(pokemons[2]?.url);
      const response4 = await axios.get(pokemons[3]?.url);
      const response5 = await axios.get(pokemons[4]?.url);
      const response6 = await axios.get(pokemons[5]?.url);
      const response7 = await axios.get(pokemons[6]?.url);
      const response8 = await axios.get(pokemons[7]?.url);
      setDetails([response1.data, response2.data, response3.data, response4.data, response5.data, response6.data, response7.data, response8.data]);
    }
    fetchAllDetail();
  };

  const changePokemonDetail = (pokeName) => {
    let newDetails;
    details.forEach((detail) => {
      if (detail.name === pokeName) newDetails = detail;
    });
    setReadDetails(newDetails);
  };

  function background(type) {
    if (type === "fairy") return "bg-pink-400";
    else if (type === "poison") return "bg-purple-400";
    else if (type === "grass") return "bg-green-400";
    else if (type === "fire") return "bg-red-500";
    else if (type === "water") return "bg-blue-400";
    else if (type === "bug") return "bg-green-900";
    else if (type === "flying") return "bg-indigo-400";
    else if (type === "electric") return "bg-yellow-400";
    else if (type === "normal") return "bg-gray-600";
    else if (type === "ground") return "bg-amber-600";
    else if (type === "rock") return "bg-gray-900";
    else if (type === "steel") return "bg-gray-200";
    else if (type === "ghost") return "bg-purple-500";
    else if (type === "dark") return "bg-gray-700";
    else if (type === "fighting") return "bg-orange-400";
    else if (type === "psychic") return "bg-pink-500";
    else if (type === "dragon") return "bg-indigo-500";
    else if (type === "ice") return "bg-blue-500";
    else return "bg-dark";
  }

  const makeCard = () => {
    if (details.length == 0) {
      return <div>Loading...</div>;
    } else if (details.length > 0) {
      return details.map((detail, index) => {
        return (
          <button key={detail.name} onClick={() => changePokemonDetail(detail.name)}>
            <div id="card" className={`rounded-box flex flex-col border-2 h-52 w-72 ${background(detail.types[0].type.name)}`}>
              <div id="name" className=" pt-5 ml-4 text-left text-white text-xl">
                {detail.name}
              </div>
              <div id="info" className="flex flex-row pb-0 ml-4">
                <div id="type" className="mt-3">
                  {detail.types.map((type, index) => {
                    return (
                      <p key={type.type.name} className="bg-white bg-opacity-40 rounded-box px-2 text-white mt-2">
                        {type.type.name}
                      </p>
                    );
                  })}
                </div>
                <div id="image">
                  <img style={{ height: "150px", width: "220px" }} src={detail.sprites.other.dream_world.front_default} alt="Bulbasaur" />
                </div>
              </div>
            </div>
          </button>
        );
      });
    }
  };

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
  const detailBackground = () => {
    if (readDetails?.types?.length === 0) {
      return "bg-white";
    } else if (readDetails?.types?.length > 0) {
      return background(readDetails.types[0].type.name);
    }
  };
  return (
    <div className="Home bg-slate-400 flex flex-row">
      <div className="bg-white">
        <div id="sidebar-header" className="text-5xl text-left ml-4 text-black">
          POKEDEX
        </div>
        <div id="sidebar" style={{ height: "790px", width: "600px", backgroundColor: "white", overflow: "auto" }}>
          <div id="sidebar-body" className="grid grid-cols-2 gap-1">
            {makeCard()}
          </div>
        </div>
      </div>
      <div id="details" className="flex mx-auto w-1/2">
        <div className="card full ml-0 h-full bg-base-100 w-full shadow-xl">
          <div id="info" className={detailBackground()}>
            <h2 className="text-left text-5xl text-white font-semibold ml-3">{readDetails?.name}</h2>
            <p className="text-right text-white text-xl font-semibold mr-4">#{readDetails?.id}</p>
            <div id="type" className="flex flex-row">
              {readDetails?.types?.map((type, index) => {
                return (
                  <p key={type.type.name} className="bg-white text-white rounded-box bg-opacity-50 px-2 mx-3">
                    {type.type.name}
                  </p>
                );
              })}
            </div>
          </div>
          <figure className={detailBackground()}>
            <img style={{ height: "250px", width: "300px" }} src={readDetails?.sprites?.other?.dream_world?.front_default} alt="Pokemon" />
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
              <Outlet context={[readDetails]} />
            </div>
            <h2 className="text-4xl mt-16">Change Pokedex Page</h2>
            <div className="btn-group mx-auto mt-2">
              <button onClick={() => decrementPage()} className="btn">
                «
              </button>
              <button className="btn">Page {pages}</button>
              <button onClick={() => incrementPage()} className="btn">
                »
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
