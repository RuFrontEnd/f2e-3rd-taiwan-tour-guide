// import { Container, Row, Col } from "react-bootstrap";
import Card from "components/card";
import lighthouse from "assets/fake/lighthouse.png";

const keys = [1, 2, 3];

const Home = () => {
  return (
    <div className="container">
      <div className="row g-4">
        <div className="col-md-4 col-sm-6">
          <Card
            src={lighthouse}
            title={"東莒島燈塔(東犬燈塔)"}
            text={
              "碧海藍天下走過百年歲月的潔白燈塔 東莒島燈塔，又名「東犬燈塔」，位在東莒島的東北方，清朝因鴉片戰..."
            }
          />
        </div>
        <div className="col-md-4 col-sm-6">
          <Card
            src={lighthouse}
            title={"東莒島燈塔(東犬燈塔)"}
            text={
              "碧海藍天下走過百年歲月的潔白燈塔 東莒島燈塔，又名「東犬燈塔」，位在東莒島的東北方，清朝因鴉片戰..."
            }
          />
        </div>
        <div className="col-md-4 col-sm-6">
          <Card
            src={lighthouse}
            title={"東莒島燈塔(東犬燈塔)"}
            text={
              "碧海藍天下走過百年歲月的潔白燈塔 東莒島燈塔，又名「東犬燈塔」，位在東莒島的東北方，清朝因鴉片戰..."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
