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

const Accordion = (props: Types.Accordion.Props) => {
  return (
    <div onClick={props.onClick}>
      <div className="d-flex justify-content-between align-items-center pt-3 f-bd1">
        {props.title}
        <div className="cursor-pointer">
          <Arrow />
        </div>
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
              <Checkbox />
              &nbsp;
              <span className="f-bd-2 mb-0">{option}</span>
            </li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default Accordion;
