import type * as StyleTypes from "../../styles";

type Text = string;
type OnClick = () => void;

type Props = {
  text: Text;
  onClick: OnClick;
} & StyleTypes.ClassName;

export { Text, Props };
