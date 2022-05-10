import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
export default function About() {
  const [species, setSpecies] = useState([]);
  const [readDetails] = useOutletContext();

  useEffect(() => {}, [species]);

  useEffect(() => {
    async function fetchSpecies() {
      const response = await axios.get(readDetails?.species?.url);
      setSpecies(response.data);
    }
    fetchSpecies();
  }, [readDetails]);
  return (
    <table className="mt-10">
      <tr>
        <th className="pl-10 text-2xl text-left">Shape</th>
        <td className="pl-16 text-xl text-left">{species?.shape?.name}</td>
      </tr>
      <tr>
        <th className="pl-10 text-2xl text-left">Height</th>
        <td className="pl-16 text-xl text-left">{readDetails?.height}</td>
      </tr>
      <tr>
        <th className="pl-10 text-2xl text-left">Weight</th>
        <td className="pl-16 text-xl text-left">{readDetails?.weight}</td>
      </tr>
      <tr>
        <th className="pl-10 text-2xl text-left">Abilities</th>
        <td className="pl-16 text-xl text-left">
          {readDetails?.abilities
            ?.map((ability, index) => {
              return ability.ability.name;
            })
            .join(", ")}
        </td>
      </tr>
    </table>
  );
}
