import StyleTypes from "types/styles/className";

type Props = {
  placeholder?: string;
  value: string;
  type?: "filter";
  accordions: { title: string; options: string[] };
} & StyleTypes.ClassName;

export { Props };
