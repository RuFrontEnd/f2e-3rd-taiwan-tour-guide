import React from "react";
import StyleTypes from "types/style";

type Props = {
  checked?: boolean;
  onChange?: React.FormEventHandler<HTMLDivElement>;
} & StyleTypes.ClassName;

export { Props };
