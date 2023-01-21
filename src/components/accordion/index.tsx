import type * as Types from "types/components/index";
import Divider from "components/divider/";
import Checkbox from "components/checkbox/";
import Counter from "components/counter";
import { useState } from "react";
import { ReactComponent as Arrow } from "assets/icon/arrow.svg";
import { motion } from "framer-motion";

const variants = {
  close: {
    height: "0",
  },
  open: {
    height: "auto",
  },
};

const arrowVariants = {
  top: {
    transform: "rotate(180deg)",
  },
  down: {
    transform: "rotate(0deg)",
  },
};

const Accordion = (props: Types.Accordion.Props) => {
  const count = props.options.filter((option) => option.checked).length;

  return (
    <div className={`${props.className ? props.className : ""}`}>
      <div
        className="cursor-pointer d-flex justify-content-between align-items-center py-3 f-bd1 min-vh-12"
        onClick={(e) => {
          props.onClick && props.onClick(e, props.title);
        }}
      >
        {props.title}
        <div className="d-flex justify-content-center align-items-center">
          {count > 0 && <Counter className="me-2_5" count={count} />}
          <motion.div
            variants={arrowVariants}
            animate={props.collapse ? "top" : "down"}
          >
            <Arrow />
          </motion.div>
        </div>
      </div>
      <Divider color={"#cccccc"} />
      <div className="">
        <motion.ul
          variants={variants}
          animate={props.collapse ? "open" : "close"}
          className={`overflow-hidden`}
        >
          {props.options.map((option: Types.Accordion.Option) => (
            <li className="pt-3">
              <Checkbox
                onChange={(e) => {
                  props.onCheckboxChange && props.onCheckboxChange(e, option);
                }}
                checked={option.checked}
              />
              &nbsp;
              <span className="f-bd-2 mb-0">{option.name}</span>
            </li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default Accordion;
