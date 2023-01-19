import type * as Types from "types/components/index";
import Divider from "components/divider/";
import Checkbox from "components/checkbox/";
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
  return (
    <div className="cursor-pointer">
      <div
        className="d-flex justify-content-between align-items-center pt-3 f-bd1"
        onClick={(e) => {
          props.onClick(e, props.title);
        }}
      >
        {props.title}
        <motion.div
          variants={arrowVariants}
          animate={props.collapse ? "top" : "down"}
          className="cursor-pointer"
        >
          <Arrow />
        </motion.div>
      </div>
      <Divider className="mt-3" color={"#cccccc"} />
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
                  props.onCheckboxChange(e, option);
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
