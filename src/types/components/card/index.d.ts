import type * as StyleTypes from "../../styles"

type Src = string;
type Title = string;
type Text = string;
type Props = {
  src?: Src;
  title: Title;
  text: Text;
} & StyleTypes.ClassName;

export type { Src, Title, Text, Props };
