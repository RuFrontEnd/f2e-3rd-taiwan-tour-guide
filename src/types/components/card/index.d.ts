import type * as StyleTypes from "../../styles";
import type * as Label from "../../components/label";

type Src = string;
type Title = string;
type Info = string;
type Props = {
  src?: Src;
  title: Title;
  info: Info;
  labels?: Label.Info[];
  address: string;
  phone: string;
  time: string;
} & StyleTypes.ClassName;

export type { Src, Title, Info, Props };
