import Card from "components/card";
import lighthouse from "assets/fake/lighthouse.png";
import travelingByTrain from "assets/png/traveling-by-train.png";
import useGetProducts from "hooks/useGetProducts";
import { useEffect, useState } from "react";

const keys = [1, 2, 3];

const Home = () => {
  const [getProductParam, setGetProductParam] = useState({
    skip: 0,
    limit: 5,
  });
  const product = useGetProducts(getProductParam);

  return (
    <header className="bg-light">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="d-flex justify-content-center align-items-center">
              <img src={travelingByTrain} className="mb-sm-2 w-100"></img>
            </div>
          </div>

          <div className="col">
            <div className="h-100 d-flex justify-content-center align-items-center">
              <div>
                <h1 className="f-sm-1 f-3 text-a11y mb-0">台灣景點</h1>
                <h1 className="f-sm-1 f-3 text-a11y mb-0 text-end">一手掌握</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;
