import type * as StyleTypes from "../../styles";

type Text = string;

type Props = {
  text: Text;
} & StyleTypes.ClassName;

export { Text, Props };
