import React from "react";
import type * as StyleTypes from "../../styles";
import type * as AccordionTypes from "../accordion";

type Scenes = { img: string; text: string }[];
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

export { Scenes, Props };
