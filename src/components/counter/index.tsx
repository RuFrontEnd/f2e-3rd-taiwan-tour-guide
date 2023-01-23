import type * as Types from "types/";

const Counter = (props: Types.Components.Counter.Props) => {
  return (
    <div
      className={`d-flex justify-content-center align-items-center rounded-circle f-cp1 text-white bg-default w-6 h-6 m-0 ${props.className}`}
    >
      {props.count}
    </div>
  );
};

export default Counter;
