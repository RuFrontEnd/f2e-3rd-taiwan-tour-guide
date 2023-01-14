import React from "react";
import type * as StyleTypes from "types/styles/";

type Checked = boolean;
type OnChange = React.FormEventHandler<HTMLDivElement>;

type Props = {
  checked?: Checked;
  onChange?: OnChange;
} & StyleTypes.ClassName;

export { Checked, OnChange, Props };
