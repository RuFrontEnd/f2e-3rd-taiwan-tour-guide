import type * as StyleTypes from "../../styles"
import type * as AccordionTypes from "../accordion/";

type Placeholder = string;
type Value = string;
type Type = "filter";
type Option = {
  name: AccordionTypes.Option["name"];
  checked: AccordionTypes.Option["checked"];
};
type Area = {
  title: AccordionTypes.Title;
  options: Option[];
};
type Opened = null | string;
type Accordion = {
  opened: Opened;
  areas: Area[];
  onClick: AccordionTypes.OnClick;
  onCheckboxChange: AccordionTypes.OnCheckboxChange;
};

type Props = {
  placeholder?: Placeholder;
  value: Value;
  type?: Type;
  accordion: Accordion;
} & StyleTypes.ClassName;

export { Placeholder, Value, Type, Area, Opened, Accordion, Props };
