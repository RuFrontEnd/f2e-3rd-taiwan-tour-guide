import Types from "types/";
import Label from "components/label";
import { ReactComponent as Location } from "assets/icon/location.svg";
import { ReactComponent as Telephone } from "assets/icon/telephone.svg";
import { ReactComponent as Clock } from "assets/icon/clock.svg";

const Card = (props: Types.Components.Card.Props) => {
  return (
    <div className={`card ${props.className}`}>
      <div className="position-relative">
        <img
          src={props.src}
          className="card-img-top w-100p h-52 object-fit-cover"
          alt="..."
        />
        <div className="position-absolute top-0 end-0">
          {props.labels?.map((label) => (
            <Label className="me-2 my-3" text={label} />
          ))}
        </div>
      </div>

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
