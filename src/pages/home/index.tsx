import { Container, Row, Col } from "react-bootstrap";
import Card from "components/card";
import lighthouse from "assets/fake/lighthouse.png";

const keys = [1, 2, 3];

const Home = () => {
  return (
    <Container>
      <Row>
        {keys.map((key) => (
          <Col sm={12} md={6} xxl={4}>
            <Card
              src={lighthouse}
              title={"東莒島燈塔(東犬燈塔)"}
              text={
                "碧海藍天下走過百年歲月的潔白燈塔 東莒島燈塔，又名「東犬燈塔」，位在東莒島的東北方，清朝因鴉片戰..."
              }
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
