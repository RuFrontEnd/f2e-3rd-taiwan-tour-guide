import * as Types from "types/";

const Label = (props: Types.Components.Label.Props) => {
  return (
    <label
      className={`${
        props.className ? props.className : ""
      } bg-tint text-a11y border-radius-5 p-1`}
    >
      {props.text}
    </label>
  );
};

export default Label;
