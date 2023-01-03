import Card from "components/card";
import lighthouse from "assets/fake/lighthouse.png";
import useGetProducts from "hooks/useGetProducts";
import { useEffect, useState } from "react";

const keys = [1, 2, 3];

const Home = () => {
  const [getProductParam, setGetProductParam] = useState({
    skip: 0,
    limit: 10,
  });
  const product = useGetProducts(getProductParam);

  useEffect(() => {
    // TODO: 測試 infinite scroll 用
    console.log("getProductParam", getProductParam);
  }, [getProductParam]);

  return (
    <div className="container">
      <button
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
      </button>
      <div className="row gx-4">
        {product.photos.map((photo) => (
          <div className="col-md-4 col-sm-6">
            <Card
              className="mb-4"
              src={lighthouse}
              title={"東莒島燈塔(東犬燈塔)"}
              text={
                "碧海藍天下走過百年歲月的潔白燈塔 東莒島燈塔，又名「東犬燈塔」，位在東莒島的東北方，清朝因鴉片戰..."
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
