// import { Container, Row, Col } from "react-bootstrap";
import Card from "components/card";
import lighthouse from "assets/fake/lighthouse.png";

const keys = [1, 2, 3];

const Guide = () => {
  return (
    <>
      <h1 className="f-1 text-primary">
        Font Guide
      </h1>
      <div className="f-1 cursor-pointer">東莒島燈塔(東犬燈塔) h1</div>
      <div className="f-2 cursor-auto">東莒島燈塔(東犬燈塔) h2</div>
      <div className="f-3">東莒島燈塔(東犬燈塔) h3</div>
      <div className="f-4">東莒島燈塔(東犬燈塔) h4</div>
      <div className="f-5">東莒島燈塔(東犬燈塔) h5</div>
      <div className="f-6">東莒島燈塔(東犬燈塔) h6</div>
      <div className="f-t">東莒島燈塔(東犬燈塔) Title</div>
      <div className="f-st">東莒島燈塔(東犬燈塔) SubTitle</div>
      <div className="f-bd1"> 東莒島燈塔(東犬燈塔) Body1</div>
      <div className="f-bd2"> 東莒島燈塔(東犬燈塔) Body2</div>
      <div className="f-cp1"> 東莒島燈塔(東犬燈塔) Caption1</div>
      <div className="f-cp2"> 東莒島燈塔(東犬燈塔) Caption2</div>
    </>
  );
};

export default Guide;
