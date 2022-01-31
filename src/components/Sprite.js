import React, { useState, useEffect } from "react";
import notFound from "../img/not-found.png";

import { BtnGeneral } from "./BtnGeneral";

export const Sprite = ({ pokemon, sprites, name }) => {
  const [sprite, setSprite] = useState("");
  const [orientation, setOrientation] = useState("front");
  const [shiny, setShiny] = useState(false);
  const [gender, setGender] = useState("default");

  const changeSprite = () => {
    let spriteKey = `${orientation}_${gender}`;

    if (shiny) {
      gender === "default"
        ? (spriteKey = `${orientation}_shiny`)
        : (spriteKey = `${orientation}_shiny_female`);
    }

    const newSprite = sprites?.[spriteKey];

    setSprite(newSprite);
  };

  const changeGender = () => {
    if (sprites?.front_female) {
      gender === "default" ? setGender("female") : setGender("default");
    }
  };

  const rotateSprite = () => {
    if (sprites?.back_default) {
      orientation === "front"
        ? setOrientation("back")
        : setOrientation("front");
    }
  };

  const changeToShiny = () => {
    !shiny ? setShiny(true) : setShiny(false);
  };

  useEffect(() => {
    setOrientation("front");
    setShiny(false);
    setGender("default");
    setSprite(sprites?.front_default);
  }, [pokemon]);

  useEffect(() => {
    changeSprite();
  }, [orientation, shiny, gender]);

  return (
    <>
      <div className="sprite-container">
        <img className="sprite-big" src={sprite || notFound} alt={name} />
      </div>
      <div className="btn-general-container">
        <BtnGeneral label={"Gender"} onClick={changeGender} />
        <BtnGeneral label={"Shiny"} onClick={changeToShiny} />
        <BtnGeneral label={"Rotate"} onClick={rotateSprite} />
      </div>
    </>
  );
};
