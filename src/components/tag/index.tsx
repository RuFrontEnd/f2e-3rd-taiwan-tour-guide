import * as Types from "types/";
import { ReactComponent as X } from "assets/icon/x.svg";

const Tag = (props: Types.Components.Tag.Props) => {
  return (
    <button
      onClick={props.onClick}
      className={`${
        props.className ? props.className : ""
      } text-a11y border-color-a11y border-1 border-radius-5 px-2 py-1 d-flex align-items-center`}
    >
      {props.text}
      {/* <X className="ms-1" /> */}
      {/* TODO: 之後可用於擴充刪除 */}
    </button>
  );
};

export default Tag;
