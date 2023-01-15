import React from "react";
import type * as StyleTypes from "types/styles/";

type Title = string;
type Option = string;
type Options = Option[];
type Collapse = boolean;
type Event = React.MouseEvent;
type OnClick = (e: Event, title: Title) => void;
type Props = {
  title: Title;
  options: Options;
  collapse: Collapse;
  onClick?: OnClick;
} & StyleTypes.ClassName;

export type { Title, Option, Options, Collapse, Event, OnClick, Props };
