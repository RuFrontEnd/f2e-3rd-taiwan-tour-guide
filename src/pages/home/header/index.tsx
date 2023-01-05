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
      <div className="container-lg">
        <div className="row">
          <div className="col-12 col-sm-6 g-0">
            <div className="d-flex justify-content-center align-items-center pt-6 px-8 pb-2 pt-sm-0 px-sm-0 pb-sm-0">
              <img src={travelingByTrain} className="w-100 mh-540px object-fit-contain"></img>
            </div>
          </div>

          <div className="col-12 col-sm-6 g-0">
            <div className="h-100 d-flex justify-content-center align-items-center pb-4 pb-sm-0">
              <div className="d-flex flex-sm-column">
                <h1 className="f-3 f-md-1 text-a11y mb-0 me-2 me-sm-0 pe-sm-22 pe-md-30">
                  台灣景點
                </h1>
                <h1 className="f-3 f-md-1 text-a11y mb-0 text-end">一手掌握</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;
