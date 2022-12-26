import CardRef from "react-bootstrap/Card";
import Types from "./type.d";
import Styles from "./styles.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import { ReactComponent as Location } from "assets/icon/location.svg";
import { ReactComponent as Telephone } from "assets/icon/telephone.svg";
import { ReactComponent as Clock } from "assets/icon/clock.svg";

const Card = (props: Types.Props) => {
  return (
    <CardRef>
      <div className="fs-1 w-10 opacity-40">123</div>
      {props?.src && <CardRef.Img variant="top" src={props?.src} />}
      <CardRef.Body>
        <CardRef.Title className="fw-bold mb-2 fs-5" title={props?.title}>
          {props?.title}
        </CardRef.Title>
        {/* TODO: 地址 / 聯絡方式 / 開放時段 待製作 */}
        <div className="fw-normal mb-2">
          <Row>
            <Col>
              <div className="d-flex align-items-center">
                <Location className="me-2" />
                連江縣莒光鄉福正村56號之1
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="d-flex align-items-center">
                <Telephone className="me-2" />
                08-9672026
              </div>
            </Col>
            <Col>
              <div className="d-flex align-items-center">
                <Clock className="me-2" />
                全天
              </div>
            </Col>
          </Row>
        </div>
        <CardRef.Text className="fw-normal">{props?.text}</CardRef.Text>
      </CardRef.Body>
    </CardRef>
  );
};

export default Card;
