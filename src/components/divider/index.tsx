import * as variables from "variables/";
import * as Types from "types/";

const Divider = (props: Types.Components.Divider.Props) => {
  return (
    <div
      className={`border-width-0 border-bottom-width-1 border-style-solid ${
        props.className ? props.className : ""
      }`}
      style={{
        borderColor: props.color ? props.color : variables.colors.blackCore,
      }}
    />
  );
};

export default Divider;
