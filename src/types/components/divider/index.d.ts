import type * as StyleTypes from "../../styles"

type Color = string;

type Props = {
  color?: Color;
} & StyleTypes.ClassName;

export { Color, Props };
