import type * as Types from "types/";
import * as variables from "variables/";
import ClipLoader from "react-spinners/BeatLoader";

const DataHint = (props: Types.Components.DataHint.Props) => {
  return (
    <>
      {props.finished ? (
        <div className="d-flex justify-content-center p-5 text-default">
          {"已經沒有資料摟 :)"}
        </div>
      ) : (
        <div className="d-flex justify-content-center p-5">
          <ClipLoader
            id={"loading"}
            color={variables.colors.def}
            loading={props.loading}
            size={10}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
    </>
  );
};

export default DataHint;
