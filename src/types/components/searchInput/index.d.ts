import React from "react";
import type * as StyleTypes from "../../styles";
import type * as AccordionTypes from "../accordion/";

type Placeholder = string;
type Value = string;

type Option = {
  name: AccordionTypes.Option["name"];
  checked: AccordionTypes.Option["checked"];
};

type Area = {
  title: AccordionTypes.Title;
  options: Option[];
};

type Title = string;
type Opened = null | string;
type OnCompleteSelectCondition = React.MouseEventHandler;

type Accordion = {
  title: string;
  opened: Opened;
  areas: Area[];
  onClick: AccordionTypes.OnClick;
  onCheckboxChange: AccordionTypes.OnCheckboxChange;
};

type Classification = {
  title: string;
  options: {
    name: string;
    checked: boolean;
  }[];
  onCheckboxChange: AccordionTypes.OnCheckboxChange;
};

type Props = {
  placeholder?: Placeholder;
  value: Value;
  accordion?: Accordion;
  classification: Classification;
  onCompleteSelectCondition: OnCompleteSelectCondition;
} & StyleTypes.ClassName;

export { Placeholder, Value, Area, Opened, Accordion, Props };
