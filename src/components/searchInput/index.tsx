import Types from "./type";
import { ReactComponent as Magnifier } from "assets/icon/magnifier.svg";

const SearchInput = (props: Types.Props) => {
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
      <input
        className="border border-1 bd-color-black-core py-3_5 ps-10_5 pe-4_5 rounded-pill"
        placeholder={props?.placeholder}
        value={props.value}
      />
    </div>
  );
};

export default SearchInput;
