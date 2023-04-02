import React from "react";
import type * as StyleTypes from "../../styles";
import type * as CheckboxTypes from "../checkbox";

type Finished = boolean;
type Loading = boolean;

type Props = {
  finished: Finished;
  loading: Loading;
} & StyleTypes.ClassName;

export type { Finished, Loading, Props };
