import { useState, useRef } from "react";
import Types from "./type";
import { ReactComponent as Magnifier } from "assets/icon/magnifier.svg";

const SearchInput = (props: Types.Props) => {
  const $test: any = useRef(null);

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  const openDropdown = () => {
    setDropdownVisible(true);
  };

  const onBlurTest = () => {
    closeDropdown();
  };

  const onClickTest = () => {
    openDropdown();
    if (!$test) {
      $test.focus();
    }
  };

  return (
    <div
      className={`${
        props.className ? props.className : ""
      } position-relative d-inline-block`}
    >
      <Magnifier
        width={18}
        height={18}
        className={"position-absolute top-50p start-4_5 translate-middle-y"}
      />

      <div ref={$test} onClick={onClickTest} onBlur={onBlurTest}>
        <input
          className="border border-1 bd-color-black-core py-3_5 ps-10_5 pe-4_5 rounded-pill"
          placeholder={props?.placeholder}
          value={props.value}
        />
        {dropdownVisible && (
          <div
            className="position-absolute w-100 border border-1 bd-color-black-core z-index-10 bg-white"
            onFocus={() => {
              console.log("AAA");
            }}
          >
            123
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchInput;
