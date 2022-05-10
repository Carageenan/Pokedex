import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Evolution() {
  const [species, setSpecies] = useState([]);
  const [evolutionChain, setEvolutionChain] = useState([]);
  const [evolutionPic, setEvolutionPic] = useState([]);
  const [readDetails] = useOutletContext();
  useEffect(() => {}, [evolutionChain]);

  useEffect(() => {
    async function fetchSpecies() {
      const response = await axios.get(readDetails?.species?.url);
      setSpecies(response.data);
    }
    fetchSpecies();
  }, [readDetails]);

  useEffect(() => {
    async function fetchEvolutionChain() {
      const response = await axios.get(species?.evolution_chain?.url);
      setEvolutionChain(response.data);
    }
    fetchEvolutionChain();
  }, [species]);

  useEffect(() => {
    const baby = evolutionChain?.chain?.species.name;
    const evolve1 = evolutionChain?.chain?.evolves_to?.[0]?.species?.name;
    const evolve2 = evolutionChain?.chain?.evolves_to?.[0]?.evolves_to?.[0]?.species?.name;
    async function getPictures(baby, evolve1, evolve2) {
      let pic = [];
      if (baby) {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${baby}/`);
        pic.push(response.data?.sprites?.other.dream_world.front_default);
      }
      if (evolve1) {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${evolve1}/`);
        pic.push(response.data?.sprites?.other.dream_world.front_default);
      }
      if (evolve2) {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${evolve2}/`);
        pic.push(response.data?.sprites?.other.dream_world.front_default);
      }
      setEvolutionPic(pic);
    }
    getPictures(baby, evolve1, evolve2);
  }, [evolutionChain]);

  const generateEvolutionChain = () => {
    const baby = evolutionChain?.chain?.species.name;
    const evolve1 = evolutionChain?.chain?.evolves_to?.[0]?.species?.name;
    const evolve2 = evolutionChain?.chain?.evolves_to?.[0]?.evolves_to?.[0]?.species?.name;

    return (
      <div className="flex flex-col mt-5">
        <ul className="flex flex-row text-center mx-auto">
          <li className="mr-28 text-xl">{baby}</li>
          <li className="mx-20 text-xl">{evolve1}</li>
          <li className="ml-28 text-xl">{evolutionPic[2] ? evolve2 : "No Evolution"}</li>
        </ul>
        <ul className="flex flex-row mx-auto mt-5">
          <li className="mx-5">
            <img style={{ height: 150, width: 220 }} src={evolutionPic[0]} alt="baby" />
          </li>
          <li className="mx-5">
            <img style={{ height: 150, width: 220 }} src={evolutionPic[1]} alt="evolve1" />
          </li>
          <li className="mx-5">{evolutionPic[2] ? <img style={{ height: 150, width: 220 }} src={evolutionPic[2]} alt="evolve2" /> : <div>No Picture</div>}</li>
        </ul>
      </div>
    );
  };
  return <>{evolutionPic && generateEvolutionChain()}</>;
}
