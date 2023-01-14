import type * as StyleTypes from "types/styles/";
import type * as AccordionTypes from "../accordion/";

type Placeholder = string;
type Value = string;
type Type = "filter";
type Area = {
  title: AccordionTypes.Title;
  options: AccordionTypes.Options;
};
type Opened = null | string;
type Accordion = {
  opened: Opened;
  areas: Area[];
  onClick: AccordionTypes.OnClick;
};

type Props = {
  placeholder?: Placeholder;
  value: Value;
  type?: Type;
  accordion: Accordion;
} & StyleTypes.ClassName;

export { Placeholder, Value, Type, Area, Opened, Accordion, Props };
