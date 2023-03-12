import Types from "types/";
import Label from "components/label";
import { ReactComponent as Location } from "assets/icon/location.svg";
import { ReactComponent as Telephone } from "assets/icon/telephone.svg";
import { ReactComponent as Clock } from "assets/icon/clock.svg";

const Card = (props: Types.Components.Card.Props) => {
  return (
    <div
      className={`card ${props.className} box-shadow-blur border-radius-5 overflow-hidden`}
    >
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
        <h6
          title={props?.title}
          className="card-title fw-bold mb-2 f-6 d-webkit-box text-overflow-ellipsis line-clamp-2 webkit-box-orient-vertical"
          style={{
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
          }}
        >
          {props?.title}
        </h6>
        <div className="fw-normal mb-2">
          <div className="row mb-1">
            <div className="col">
              <div className="d-flex align-items-center f-cp2 text-black-700 d-webkit-box text-overflow-ellipsis line-clamp-2 webkit-box-orient-vertical">
                <Location className="mnw-4" />
                <p
                  title={props.address}
                  className="mb-0 ms-1"
                  style={{
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {props.address}
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="d-flex">
                <div className="d-flex flx-1 align-items-center f-cp2 text-black-700 d-webkit-box text-overflow-ellipsis line-clamp-2 webkit-box-orient-vertical">
                  <Telephone width={18} className="mnw-4" />
                  <p
                    title={props.phone}
                    className="mb-0 ms-1"
                    style={{
                      WebkitLineClamp: 1,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {props.phone}
                  </p>
                </div>
                <div className="d-flex flx-2 align-items-center f-cp2 text-black-700">
                  <Clock width={18} className="mnw-4" />
                  <p
                    title={props.time}
                    className="mb-0 ms-1 overflow-hidden d-webkit-box text-overflow-ellipsis line-clamp-2 webkit-box-orient-vertical"
                    style={{
                      WebkitLineClamp: 1,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {props.time}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p
          title={props?.info}
          className="card-text f-bd2 overflow-hidden d-webkit-box text-overflow-ellipsis line-clamp-2 webkit-box-orient-vertical"
          style={{
            WebkitLineClamp: 5,
            WebkitBoxOrient: "vertical",
          }}
        >
          {props?.info}
        </p>
      </div>
    </div>
  );
};

export default Card;
