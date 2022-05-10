import { useOutletContext } from "react-router-dom";
export default function Stats() {
  const [readDetails] = useOutletContext();
  const getStats = () => {
    if (readDetails?.stats?.length === 0) {
      return <div>loading...</div>;
    } else if (readDetails?.stats?.length > 0) {
      return (
        <table className="mt-10">
          <tr>
            <th className="pl-10 text-2xl text-left">HP</th>
            <td className="pl-10 text-xl text-left">{readDetails?.stats[0]?.base_stat}</td>
            <progress className="pl-10 progress progress-success w-56" value={readDetails?.stats[0]?.base_stat} max="100"></progress>
          </tr>
          <tr>
            <th className="pl-10 text-2xl text-left">Attack</th>
            <td className="pl-10 text-xl text-left">{readDetails?.stats[1]?.base_stat}</td>
            <progress className="pl-10 progress progress-error w-56" value={readDetails?.stats[1]?.base_stat} max="100"></progress>
          </tr>
          <tr>
            <th className="pl-10 text-2xl text-left">Defense</th>
            <td className="pl-10 text-xl text-left">{readDetails?.stats[2]?.base_stat}</td>
            <progress className="pl-10 progress progress-success w-56" value={readDetails?.stats[2]?.base_stat} max="100"></progress>
          </tr>
          <tr>
            <th className="pl-10 text-2xl text-left">Sp. Atk</th>
            <td className="pl-10 text-xl text-left">{readDetails?.stats[3]?.base_stat}</td>
            <progress className="pl-10 progress progress-error w-56" value={readDetails?.stats[3]?.base_stat} max="100"></progress>
          </tr>
          <tr>
            <th className="pl-10 text-2xl text-left">Sp.Def</th>
            <td className="pl-10 text-xl text-left">{readDetails?.stats[4]?.base_stat}</td>
            <progress className="pl-10 progress progress-success w-56" value={readDetails?.stats[4]?.base_stat} max="100"></progress>
          </tr>
        </table>
      );
    }
  };
  return <>{getStats()}</>;
}
