import Types from "types/components/";
import { ReactComponent as Tick } from "assets/icon/tick.svg";

const Checkbox = (props: Types.Checkbox.Props) => {
  return (
    <div
      className={`${props.className ? props.className : ""} ${
        props.checked ? "bg-default" : ""
      } cursor-pointer d-inline-flex justify-content-center align-items-center border-radius-5 border-width-2 border-style-solid border-color-default w-7 h-7`}
      onChange={props.onChange}
    >
      <Tick width={18} height={14} />
    </div>
  );
};

export default Checkbox;
