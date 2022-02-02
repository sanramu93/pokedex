import React, { useState, useEffect } from "react";

import { fetchSpecies } from "../apis/pokeAPI";
import { Button } from "./Button";

export const Info = ({ pokemon, id }) => {
  const [entryId, setEntryId] = useState(0);
  const [entries, setEntries] = useState([]);

  const nextInfo = () => {
    let newId = entryId;
    newId < entries.length - 1 ? newId++ : (newId = 0);
    setEntryId(newId);
  };

  const prevInfo = () => {
    let newId = entryId;
    newId > 0 ? newId-- : (newId = entries.length - 1);
    setEntryId(newId);
  };

  // -------------
  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      const data = await fetchSpecies(id);
      const allEntries = data?.flavor_text_entries;

      let englishEntries = allEntries?.filter(
        (entry) => entry.language.name === "en"
      );

      // Remove duplicates
      if (englishEntries) {
        englishEntries = [
          ...englishEntries
            ?.reduce((map, obj) => map.set(obj.flavor_text, obj), new Map())
            .values(),
        ];
      }

      setEntries(englishEntries?.map((entry) => entry.flavor_text));
    };

    fetchData();
  }, [pokemon]);

  // -------------

  return (
    <div className="info-container">
      <p className="info">
        {entries?.[entryId] || "Invalid Pokemon name or ID"}
      </p>
      <div className="info-btn-container">
        <Button label="prevInfo" onClick={prevInfo} />
        <Button label="nextInfo" onClick={nextInfo} />
      </div>
    </div>
  );
};
