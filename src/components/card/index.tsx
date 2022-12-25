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
      {props?.src && <CardRef.Img variant="top" src={props?.src} />}
      <CardRef.Body>
        <CardRef.Title className="fw-bold" title={props?.title}>
          {props?.title}
        </CardRef.Title>
        {/* TODO: 地址 / 聯絡方式 / 開放時段 待製作 */}
        {/* <div className="fw-normal mb-3">
          <Row>
            <Col>
              <Location />
              連江縣莒光鄉福正村56號之1
            </Col>
          </Row>
          <Row>
            <Col>
              <Telephone />
              08-9672026
            </Col>
            <Col>
              <Clock />
              全天
            </Col>
          </Row>
        </div> */}
        <CardRef.Text className="fw-normal">{props?.text}</CardRef.Text>
      </CardRef.Body>
    </CardRef>
  );
};

export default Card;
