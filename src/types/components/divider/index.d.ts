import type * as StyleTypes from "types/styles/";

type Color = string;

type Props = {
  color?: Color;
} & StyleTypes.ClassName;

export { Color, Props };
