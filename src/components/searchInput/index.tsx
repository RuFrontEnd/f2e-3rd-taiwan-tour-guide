import type * as Types from "types/";
import Divider from "components/divider/";
import Checkbox from "components/checkbox/";
import Accordion from "components/accordion/";
import { useState, useEffect, MouseEvent } from "react";
import { motion } from "framer-motion";
import { ReactComponent as Magnifier } from "assets/icon/magnifier.svg";
import { ReactComponent as Sieve } from "assets/icon/sieve.svg";
import { ReactComponent as V } from "assets/icon/v.svg";

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
  open: { opacity: 1, y: "-14px" },
  closed: { opacity: 0, y: "0px" },
};

const filterDropdownVariants = {
  open: { opacity: 1, y: "-60px" },
  closed: { opacity: 0, y: "0px" },
};

const SearchInput = (props: Types.Components.SearchInput.Props) => {
  const [searchDropdownVisible, setSearchDropdownVisible] = useState(false),
    [filterDropdownVisible, setFilterDropdownVisible] = useState(false);

  const openSearchDropdown = () => {
    setSearchDropdownVisible(true);
  };

  const closeSearchDropdown = () => {
    setSearchDropdownVisible(false);
  };

  const openFilterDropdown = () => {
    setFilterDropdownVisible(true);
  };

  const closeFilterDropdown = () => {
    setFilterDropdownVisible(false);
  };

  const onClickContainer = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    openSearchDropdown();
  };

  const onClickSieve = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    openFilterDropdown();
    closeSearchDropdown();
  };

  useEffect(() => {
    document.body.addEventListener("click", closeSearchDropdown);

    if (filterDropdownVisible) {
      document.body.addEventListener("click", closeFilterDropdown);
    }

    return () => {
      document.body.removeEventListener("click", closeSearchDropdown);

      if (filterDropdownVisible) {
        document.body.addEventListener("click", closeFilterDropdown);
      }
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
        className={`border-1 border-color-black-core py-3 ps-10_5 pe-4_5 
       pe-10_5
        `}
        placeholder={props?.placeholder}
        value={props.value}
        variants={variants}
        animate={
          searchDropdownVisible || filterDropdownVisible ? "open" : "closed"
        }
        transition={{ duration: 0.15 }}
      />

      <motion.div
        className="position-absolute top-15 z-index-10 w-100p border-top-0 border-1 border-bottom-left-radius-5 border-bottom-right-radius-5 bg-white px-4 py-3 pt-0"
        role={"search-input-hotkey-dropdown"}
        variants={hotKeyWordsDropdownVariants}
        animate={searchDropdownVisible ? "open" : "closed"}
        transition={{ duration: 0.15 }}
      >
        <Divider />
        <caption className="f-cp1 d-block p-0 pt-3">熱門關鍵字</caption>
        <ul>
          {hotKeywords.map((hotKeyword, hotKeywordIndex) => (
            <>
              <li className="pt-3 f-bd1">{hotKeyword}</li>
              {hotKeywordIndex !== hotKeywords.length - 1 && (
                <Divider className="mt-3" color={"#cccccc"} />
              )}
            </>
          ))}
        </ul>
      </motion.div>

      <i
        className="cursor-pointer position-absolute top-50p end-4_5 translate-middle-y border-start-1 border-color-black-500 ps-2"
        onClick={onClickSieve}
      >
        <Sieve width={18} height={18} className={""} />
      </i>

      <motion.div
        className="position-absolute top-15 z-index-10 w-100p border-1 border-radius-5 bg-white px-4 py-3 pt-0"
        role={"search-input-filter-dropdown"}
        variants={filterDropdownVariants}
        animate={filterDropdownVisible ? "open" : "closed"}
        transition={{ duration: 0.15 }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="d-flex justify-content-between mt-3 mb-2">
          <div className="f-t">篩選</div>
          <button
            className="d-flex align-items-center f-bd1 cursor-pointer"
            onClick={props.onCompleteSelectCondition}
          >
            <i className="d-flex align-items-center me-1">
              <V />
            </i>
            完成
          </button>
        </div>
        <caption className="f-cp1 d-block p-0 pt-3">
          {props.accordion?.title}
        </caption>
        <ul>
          {props.accordion?.areas.map(
            (area: Types.Components.SearchInput.Area) => (
              <li>
                <Accordion
                  title={area.title}
                  options={area.options}
                  collapse={area.title === props.accordion?.opened}
                  onClick={props.accordion?.onClick}
                  onCheckboxChange={props.accordion?.onCheckboxChange}
                />
              </li>
            )
          )}
        </ul>
        <caption className="f-cp1 d-block p-0 pt-3">
          {props.classification.title}
        </caption>
        <ul>
          {props.classification.options.map((option) => (
            <li className="pt-3">
              <Checkbox checked={option.checked} />
              &nbsp;
              <span className="f-bd-2 mb-0">{option.text}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default SearchInput;
