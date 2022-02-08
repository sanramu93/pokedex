import React, { useState, useEffect } from "react";
import RotateRightIcon from "@material-ui/icons/RotateRight";
import SportsGolfIcon from "@material-ui/icons/SportsGolf";
import notFound from "../img/not-found.png";

import { Button } from "./Button";

export const Sprite = ({ pokemon, sprites, name }) => {
  const [sprite, setSprite] = useState("");
  const [orientation, setOrientation] = useState("front");
  const [shiny, setShiny] = useState(false);
  const [gender, setGender] = useState("default");
  const [genderActive, setGenderActive] = useState(false);
  const [genderDisable, setGenderDisable] = useState(false);
  const [shinyActive, setShinyActive] = useState(false);
  const [rotateActive, setRotateActive] = useState(false);

  // -----------------------

  const changeSprite = () => {
    // if (!sprites?.front_female) setGenderDisable(true);
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
      setGenderActive(!genderActive);
    } else {
      setGenderDisable(true);
    }
  };

  const changeOrientation = () => {
    if (sprites?.back_default)
      orientation === "front"
        ? setOrientation("back")
        : setOrientation("front");
    setRotateActive(!rotateActive);
  };

  const changeToShiny = () => {
    !shiny ? setShiny(true) : setShiny(false);
    setShinyActive(!shinyActive);
  };

  // -----------------------

  useEffect(() => {
    setOrientation("front");
    setShiny(false);
    setGender("default");
    setSprite(sprites?.front_default);
    setGenderActive(false);
    setRotateActive(false);
    setShinyActive(false);
    pokemon?.sprites?.front_female
      ? setGenderDisable(false)
      : setGenderDisable(true);
  }, [pokemon]);

  useEffect(() => {
    changeSprite();
  }, [orientation, shiny, gender]);

  return (
    <div className="sprite-container">
      <div className="sprite-image">
        <img className="sprite-image-big" src={sprite || notFound} alt={name} />
      </div>
      <div className="sprite-btn-container">
        <Button
          icon={<SportsGolfIcon />}
          onClick={changeGender}
          isActive={genderActive}
          isDisabled={genderDisable}
        />
        <Button
          class={"btn-shiny"}
          label={"Shiny"}
          onClick={changeToShiny}
          isActive={shinyActive}
        />
        <Button
          icon={<RotateRightIcon />}
          onClick={changeOrientation}
          isActive={rotateActive}
        />
      </div>
    </div>
  );
};
