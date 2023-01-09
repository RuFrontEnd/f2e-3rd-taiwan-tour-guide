import Types from "./type";

const Divider = (props: Types.Props) => {
  return (
    <div
      className={`border-width-0 border-bottom-width-1 border-style-solid ${
        props.className ? props.className : ""
      }`}
      style={{ borderColor: props.color ? props.color : "#000000" }}
    />
  );
};

export default Divider;
