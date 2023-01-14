import type * as Types from "types/components/";
import type * as AccordionTypes from "types/components/accordion/";
import Divider from "components/divider/";
import Checkbox from "components/checkbox/";
import Accordion from "components/accordion/";
import { useState, useRef, useEffect, MouseEvent } from "react";
import { motion } from "framer-motion";
import { ReactComponent as Magnifier } from "assets/icon/magnifier.svg";
import { ReactComponent as Sieve } from "assets/icon/sieve.svg";

const hotKeywords = [
    "台南文化",
    "嘉義觀光工廠",
    "台東自然風景",
    "屏東國家風景區",
    "新竹遊憩",
  ],
  classifications = ["文化", "生態", "自然風景", "國家風景區"];

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

const SearchInput = (props: Types.SearchInput.Props) => {
  const [searchDropdownVisible, setSearchDropdownVisible] = useState(false),
    [filterDropdownVisible, setFilterDropdownVisible] = useState(false);

  const filterType = props.type === "filter";

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
        className={`border-1 border-color-black-core py-3 ps-10_5 pe-4_5 ${
          filterType && "pe-10_5"
        }`}
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
        role={"search-input-dropdown"}
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

      {filterType && (
        <>
          <div
            className="cursor-pointer position-absolute top-50p end-4_5 translate-middle-y border-start-1 border-color-black-500 ps-2"
            onClick={onClickSieve}
          >
            <Sieve width={18} height={18} className={""} />
          </div>

          <motion.div
            className="position-absolute top-15 z-index-10 w-100p border-1 border-bottom-left-radius-5 border-bottom-right-radius-5 bg-white px-4 py-3 pt-0"
            role={"search-input-dropdown"}
            variants={filterDropdownVariants}
            animate={filterDropdownVisible ? "open" : "closed"}
            transition={{ duration: 0.15 }}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <caption className="f-cp1 d-block p-0 pt-3">縣市</caption>
            <ul>
              {props.accordion.areas.map((area: Types.SearchInput.Area) => (
                <li>
                  <Accordion
                    title={area.title}
                    options={area.options}
                    collapse={area.title === props.accordion.opened}
                    onClick={props.accordion.onClick}
                  />
                </li>
              ))}
            </ul>
            <caption className="f-cp1 d-block p-0 pt-3">分類</caption>
            <ul>
              {classifications.map((classification) => (
                <li className="pt-3">
                  <Checkbox />
                  &nbsp;
                  <span className="f-bd-2 mb-0">{classification}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default SearchInput;
