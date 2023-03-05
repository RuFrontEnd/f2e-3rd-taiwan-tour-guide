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

type HotKeywords = string[];
type OnCloseFilterDropdown = () => void;

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

type onChange = React.ChangeEventHandler<HTMLInputElement> | undefined;
type OnEnter = () => void | undefined;

type Props = {
  placeholder?: Placeholder;
  value: Value;
  hotKeywords: HotKeywords;
  accordion?: Accordion;
  classification: Classification;
  onCloseFilterDropdown?: OnCloseFilterDropdown;
  onChange?: onChange;
  onEnter?: OnEnter;
} & StyleTypes.ClassName;

export {
  Placeholder,
  Value,
  Area,
  Opened,
  HotKeywords,
  OnCloseFilterDropdown,
  Accordion,
  Props,
};
