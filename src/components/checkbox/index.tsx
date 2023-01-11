import Types from "./type";
import { ReactComponent as Tick } from "assets/icon/tick.svg";

const Checkbox = (props: Types.Props) => {
  return (
    <div
      className={`${props.className ? props.className : ""} ${
        props.checked ? "bg-default" : ""
      } d-inline-flex justify-content-center align-items-center border-radius-5 border-width-2 border-style-solid border-color-default w-7 h-7`}
      onChange={props.onChange}
    >
      <Tick width={18} height={14} />
    </div>
  );
};

export default Checkbox;
