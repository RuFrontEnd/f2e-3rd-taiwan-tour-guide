import StyleTypes from "types/style";

type Props = {
  placeholder?: string;
  value: string;
  type?: "filter";
} & StyleTypes.ClassName;

export { Props };
