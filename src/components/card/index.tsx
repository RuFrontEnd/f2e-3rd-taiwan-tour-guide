import Types from "./type.d";
import { ReactComponent as Location } from "assets/icon/location.svg";
import { ReactComponent as Telephone } from "assets/icon/telephone.svg";
import { ReactComponent as Clock } from "assets/icon/clock.svg";

const Card = (props: Types.Props) => {
  return (
    <div className={`card ${props.className}`}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body px-2 py-3">
        <h6 className="card-title fw-bold mb-2 f-6">{props?.title}</h6>
        <div className="fw-normal mb-2">
          <div className="row mb-1">
            <div className="col">
              <div className="d-flex align-items-center f-cp2 text-black-700">
                <Location className="me-2" />
                連江縣莒光鄉福正村56號之1
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="d-flex">
                <div className="d-flex align-items-center f-cp2 text-black-700 me-4">
                  <Telephone className="me-2" />
                  08-9672026
                </div>
                <div className="d-flex align-items-center f-cp2 text-black-700">
                  <Clock className="me-2" />
                  全天
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="card-text f-bd2">{props?.text}</p>
      </div>
    </div>
  );
};

export default Card;
