import React from "react";
import type * as StyleTypes from "types/styles/";

type Title = string;
type Option = { name: string; checked: boolean };
type Options = Option[];
type Collapse = boolean;
type Event = React.FormEvent<HTMLDivElement>;
type OnClick = (e: Event, title: Title) => void;
type OnCheckboxChange = (e: Event, option: Option) => void;
type Props = {
  title: Title;
  options: Options;
  collapse: Collapse;
  onClick: OnClick;
  onCheckboxChange: OnCheckboxChange;
} & StyleTypes.ClassName;

export type {
  Title,
  Option,
  Options,
  Collapse,
  Event,
  OnClick,
  OnCheckboxChange,
  Props,
};
