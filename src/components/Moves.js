import React, { useState, useEffect } from "react";

import { BtnGeneral } from "./BtnGeneral";
import { fetchMove } from "../apis/pokeAPI";

export const Moves = ({ id, moves }) => {
  // console.clear();

  const [moveId, setMoveId] = useState(0);
  const [moveUrl, setMoveUrl] = useState("");
  const [move, setMove] = useState({});

  const nextMove = () => {
    let newId = moveId;
    newId < moves.length - 1 ? newId++ : (newId = 0);
    setMoveId(newId);
  };

  const prevMove = () => {
    let newId = moveId;
    newId > 0 ? newId-- : (newId = moves.length - 1);
    setMoveId(newId);
  };

  useEffect(() => {
    const fetchData = async () => {
      const url = moves?.[moveId]?.move.url;
      if (!url) return;
      const data = await fetchMove(url);
      setMove(data);
    };

    fetchData();
  }, [moves, moveId]);

  // console.log(moveUrl);

  return (
    <>
      <div className="moves">
        <h3>{move?.name || "-"}</h3>
        <div className="move-stats">
          <span className="move-name">Accuracy</span>
          <span className="move-number">{move?.accuracy || "-"}</span>
        </div>
        <div className="move-stats">
          <span className="move-name">Power</span>
          <span className="move-number">{move?.power || "-"}</span>
        </div>
        <div className="move-stats">
          <span className="move-name">PP</span>
          <span className="move-number">{move?.pp || "-"}</span>
        </div>
        <div className="move-stats">
          <span className="move-name">Type</span>
          <span className="move-number">{move?.type?.name || "-"}</span>
        </div>
      </div>

      <div className="moves-btn-container">
        <BtnGeneral label="up" onClick={prevMove} />
        <BtnGeneral label="down" onClick={nextMove} />
      </div>
    </>
  );
};
