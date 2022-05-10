import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
export default function Moves() {
  const [readDetails] = useOutletContext();
  useEffect(() => {}, [readDetails]);

  const generateMoves = () => {
    if (readDetails?.moves?.length === 0) {
      return <div>loading...</div>;
    } else if (readDetails?.moves?.length > 0) {
      return (
        <div className="flex flex-row mt-5">
          <ul className="mx-4">
            {readDetails?.moves.map((move, index) => {
              if (index < 3) {
                return (
                  <li className="py-2" key={index}>
                    <p className="px-3 py-1 text-2xl text-center bg-white rounded-box">{move.move.name}</p>
                  </li>
                );
              }
            })}
          </ul>
          <ul className="mx-4">
            {readDetails?.moves.map((move, index) => {
              if (index >= 3 && index <= 5) {
                return (
                  <li className="py-2" key={index}>
                    <p className="px-3 py-1 text-2xl text-center bg-white rounded-box">{move.move.name}</p>
                  </li>
                );
              }
            })}
          </ul>
          <ul className="mx-4">
            {readDetails?.moves.map((move, index) => {
              if (index >= 6 && index < 9) {
                return (
                  <li className="py-2" key={index}>
                    <p className="px-3 py-1 text-2xl text-center bg-white rounded-box">{move.move.name}</p>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      );
    }
  };
  return <>{generateMoves()}</>;
}
