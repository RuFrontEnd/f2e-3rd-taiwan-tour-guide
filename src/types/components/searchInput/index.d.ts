import type * as StyleTypes from "types/styles/";

type Placeholder = string;
type Value = string;
type Type = "filter";
type Accordions = { title: string; options: string[] };

type Props = {
  placeholder?: Placeholder;
  value: Value;
  type?: Type;
  accordions: Accordions;
} & StyleTypes.ClassName;

export { Placeholder, Value, Type, Accordions, Props };
