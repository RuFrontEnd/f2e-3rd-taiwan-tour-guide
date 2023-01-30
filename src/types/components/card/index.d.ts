import type * as StyleTypes from "../../styles";
import type * as Label from "../../components/label";

type Src = string;
type Title = string;
type Text = string;
type Props = {
  src?: Src;
  title: Title;
  text: Text;
  labels?: Label.Text[];
} & StyleTypes.ClassName;

export type { Src, Title, Text, Props };
