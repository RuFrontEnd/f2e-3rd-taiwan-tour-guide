import { useState, useRef, useEffect, MouseEvent } from "react";
import Types from "./type";
import { ReactComponent as Magnifier } from "assets/icon/magnifier.svg";

const hotKeywords = [
  "台南文化",
  "嘉義觀光工廠",
  "台東自然風景",
  "屏東國家風景區",
  "新竹遊憩",
];

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

      <input
        className="border border-1 bd-color-black-core py-3_5 ps-10_5 pe-4_5 rounded-pill"
        placeholder={props?.placeholder}
        value={props.value}
      />
      {dropdownVisible && (
        <div
          className="position-absolute w-100 border border-1 bd-color-black-core z-index-10 bg-white px-4 py-3"
          role={"search-input-dropdown"}
        >
          <caption className="f-cp1 d-block p-0 ">熱門關鍵字</caption>
          <ul>
            {hotKeywords.map((hotKeyword, hotKeywordIndex) => (
              <>
                <li className="pt-3 f-bd1">{hotKeyword}</li>
                {hotKeywordIndex !== hotKeywords.length - 1 && (
                  <div className="pt-3 border-bottom"></div>
                )}
              </>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchInput;
