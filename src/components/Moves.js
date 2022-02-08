import React, { useState, useEffect } from "react";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

import { Button } from "./Button";
import { fetchMove } from "../apis/pokeAPI";

import { capitalize } from "../utilities/utilities";

export const Moves = ({ id, moves }) => {
  // console.clear();

  const [moveId, setMoveId] = useState(0);
  const [move, setMove] = useState({});

  const nextMove = () => {
    let newId = moveId;
    newId < moves?.length - 1 ? newId++ : (newId = 0);
    setMoveId(newId);
  };

  const prevMove = () => {
    let newId = moveId;
    newId > 0 ? newId-- : (newId = moves?.length - 1);
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

  return (
    <>
      <h3 className="moves-title">{capitalize(move?.name) || "Not Found"}</h3>
      <div className="moves-container">
        <ul className="moves">
          <li className="move-stats">
            <span className="move-name">Accuracy</span>
            <span className="move-number">{move?.accuracy || "-"}</span>
          </li>
          <li className="move-stats">
            <span className="move-name">Power</span>
            <span className="move-number">{move?.power || "-"}</span>
          </li>
          <li className="move-stats">
            <span className="move-name">PP</span>
            <span className="move-number">{move?.pp || "-"}</span>
          </li>
          <li className="move-stats">
            <span className="move-name">Type</span>
            <span className="move-number">{move?.type?.name || "-"}</span>
          </li>
        </ul>

        <div className="moves-btn-container">
          <Button icon={<KeyboardArrowUpIcon />} onClick={prevMove} />
          <Button icon={<KeyboardArrowDownIcon />} onClick={nextMove} />
        </div>
      </div>
    </>
  );
};
