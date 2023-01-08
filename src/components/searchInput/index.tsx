import Types from "./type";
import { useState, useRef, useEffect, MouseEvent } from "react";
import { motion } from "framer-motion";
import { ReactComponent as Magnifier } from "assets/icon/magnifier.svg";

const hotKeywords = [
  "台南文化",
  "嘉義觀光工廠",
  "台東自然風景",
  "屏東國家風景區",
  "新竹遊憩",
];

const variants = {
  closed: {
    borderRadius: "25px 25px",
  },
  open: {
    borderRadius: "5px 5px",
  },
};

const hotKeyWordsDropdownVariants = {
  open: { opacity: 1, y: "-10px" },
  closed: { opacity: 0, y: "0px" },
};

const SearchInput = (props: Types.Props) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  const openDropdown = () => {
    setDropdownVisible(true);
  };

  const onClickContainer = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    openDropdown();
  };

  useEffect(() => {
    document.body.addEventListener("click", closeDropdown);

    return () => {
      document.body.removeEventListener("click", closeDropdown);
    };
  }, []);

  return (
    <div
      className={`${
        props.className ? props.className : ""
      } position-relative d-inline-block`}
      onClick={onClickContainer}
    >
      <Magnifier
        width={18}
        height={18}
        className={"position-absolute top-50p start-4_5 translate-middle-y"}
      />

      <motion.input
        className="border-1 border-color-black-core py-3_5 ps-10_5 pe-4_5"
        placeholder={props?.placeholder}
        value={props.value}
        animate={dropdownVisible ? "open" : "closed"}
        variants={variants}
        transition={{ duration: 0.15 }}
      />
      <motion.div
        className="position-absolute top-15 z-index-10 w-100 border-top-0 border-1 border-bottom-left-radius-5 border-bottom-right-radius-5 bg-white px-4 py-3 pt-0"
        role={"search-input-dropdown"}
        animate={dropdownVisible ? "open" : "closed"}
        variants={hotKeyWordsDropdownVariants}
        transition={{ duration: 0.15 }}
      >
        <div className="border-bottom " />
        <caption className="f-cp1 d-block p-0 pt-3">熱門關鍵字</caption>
        <ul>
          {hotKeywords.map((hotKeyword, hotKeywordIndex) => (
            <>
              <li className="pt-3 f-bd1">{hotKeyword}</li>
              {hotKeywordIndex !== hotKeywords.length - 1 && (
                <div className="pt-3 border-bottom border-color-black-500" />
              )}
            </>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default SearchInput;
