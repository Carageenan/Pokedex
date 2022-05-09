export default function Stats() {
  return (
    <table className="mt-10">
      <tr>
        <th className="pl-10 text-2xl text-left">HP</th>
        <td className="pl-10 text-xl text-left">45</td>
        <progress className="pl-10 progress progress-success w-56" value="45" max="100"></progress>
      </tr>
      <tr>
        <th className="pl-10 text-2xl text-left">Attack</th>
        <td className="pl-10 text-xl text-left">60</td>
        <progress className="pl-10 progress progress-error w-56" value="60" max="100"></progress>
      </tr>
      <tr>
        <th className="pl-10 text-2xl text-left">Defense</th>
        <td className="pl-10 text-xl text-left">48</td>
        <progress className="pl-10 progress progress-success w-56" value="48" max="100"></progress>
      </tr>
      <tr>
        <th className="pl-10 text-2xl text-left">Sp. Atk</th>
        <td className="pl-10 text-xl text-left">66</td>
        <progress className="pl-10 progress progress-error w-56" value="66" max="100"></progress>
      </tr>
      <tr>
        <th className="pl-10 text-2xl text-left">Sp.Def</th>
        <td className="pl-10 text-xl text-left">65</td>
        <progress className="pl-10 progress progress-success w-56" value="65" max="100"></progress>
      </tr>
    </table>
  );
}
