import type * as Header from "./header";

type SelectedOptions = {
  [option: string]: boolean;
};

type ScenicSpots = {
  photo: string;
  title: string;
  address: string;
  phone: string;
  time: string;
  info: string;
  classes: string[];
}[];

export type { SelectedOptions, ScenicSpots, Header };
