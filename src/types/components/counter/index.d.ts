import React from "react";
import type * as StyleTypes from "../../styles";
import type * as CheckboxTypes from "../checkbox";

type Count = number;

type Props = {
  count: Count;
} & StyleTypes.ClassName;

export type { Props };
