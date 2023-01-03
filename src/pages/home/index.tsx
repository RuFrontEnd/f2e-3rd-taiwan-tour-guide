import Card from "components/card";
import lighthouse from "assets/fake/lighthouse.png";
import useGetProducts from "hooks/useGetProducts";
import { useEffect, useState } from "react";

const keys = [1, 2, 3];

const Home = () => {
  const [getProductParam, setGetProductParam] = useState({
      skip: 0,
      limit: 10,
    }),
    [targetIndex, setTargetIndex] = useState(6);
  const product = useGetProducts(getProductParam);

  useEffect(() => {
    let options = {
      root: document,
      rootMargin: "0px",
      threshold: 1.0,
    };

    let observer = new IntersectionObserver((observe) => {
      // TODO: 觀察 infinite scroll 用
      console.log("observe", observe[0].isIntersecting);

      const inView = observe[0].isIntersecting;

      if (inView) {
        // TODO: 觀察 infinite scroll 用
        console.log("AAA");
        setGetProductParam((getProductParam) => ({
          skip: getProductParam.skip,
          limit: getProductParam.limit + 10,
        }));
        product.setLoading(true);
        setTargetIndex((targetIndex) => targetIndex + 10);
      }
    }, options);

    const target = document.getElementById(`loadMoreTarget${targetIndex}`);

    if (target) {
      observer.observe(target);
    }
  }, [product.photos]);

  // useEffect(() => {
  //   product.setLoading(true);
  // }, [getProductParam]);

  return (
    <div className="container">
      {/* <button
        onClick={() => {
          // TODO: 測試 infinite scroll 用
          setGetProductParam({
            skip: 5,
            limit: 10,
          });

          product.setLoading(true);
        }}
      >
        click me
      </button> */}
      <div className="row gx-4">
        {product.photos.map((photo, photoIndex) => (
          <div className="col-md-4 col-sm-6">
            <div className="position-relative">
              <Card
                className="mb-4"
                src={lighthouse}
                title={"東莒島燈塔(東犬燈塔)"}
                text={
                  "碧海藍天下走過百年歲月的潔白燈塔 東莒島燈塔，又名「東犬燈塔」，位在東莒島的東北方，清朝因鴉片戰..."
                }
              />
              {photoIndex === targetIndex && (
                <small
                  id={`loadMoreTarget${targetIndex}`}
                  className="position-absolute top-0 start-0"
                >
                  123
                </small>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
