import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col sm={12} md={6} xxl={4}>
          <div style={{ backgroundColor: "red" }}>123</div>
        </Col>
        <Col sm={12} md={6} xxl={4}>
          <div style={{ backgroundColor: "red" }}>123</div>
        </Col>
        <Col sm={12} md={6} xxl={4}>
          <div style={{ backgroundColor: "red" }}>123</div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
