import React from "react";
import type * as StyleTypes from "../../styles";
import type * as AccordionTypes from "../accordion";

type Scene = { img: string; text: string };
type Scenes = Scene[];
type Breakpoints = {
  [breakpoint: number]: {
    slidesPerView: number;
    spaceBetween?: number;
  };
};

type Props = {
  scenes: Scenes;
  breakPoints: Breakpoints;
} & StyleTypes.ClassName;

export { Scene, Scenes, Props };
