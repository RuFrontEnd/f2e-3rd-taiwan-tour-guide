import React from "react";
import type * as StyleTypes from "types/styles/";

type Title = string;
type Option = string[];
type Options = Option[];
type Collapse = boolean;
type OnClick = React.MouseEventHandler;
type Props = {
  title: Title;
  options: Options;
  collapse: Collapse;
  onClick?: OnClick;
} & StyleTypes.ClassName;

export type { Title, Option, Options, Collapse, OnClick, Props };
