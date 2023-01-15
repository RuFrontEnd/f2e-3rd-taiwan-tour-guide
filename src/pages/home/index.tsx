import Card from "components/card";
import lighthouse from "assets/fake/lighthouse.png";
import useGetProducts from "hooks/useGetProducts";
import ComponentsTypes from "types/components/";
import Header from "./header";
import SearchInput from "components/searchInput";
import { useEffect, useState } from "react";

const Home = () => {
  const [getProductParam, setGetProductParam] = useState({
      skip: 0,
      limit: 10,
    }),
    [targetIndex, setTargetIndex] = useState(6),
    [keyword, setKeyword] = useState(""),
    [openedAccordion, setOpenedAccordion] = useState<null | string>(null);

  const accordion = {
    opened: openedAccordion,
    areas: [
      { title: "北部", options: ["台北市", "新北市"] },
      { title: "中部", options: ["台北市", "新北市"] },
      { title: "南部", options: ["台北市", "新北市"] },
      { title: "東部", options: ["台北市", "新北市"] },
      { title: "離島", options: ["台北市", "新北市"] },
    ],
    onClick: (
      e: ComponentsTypes.Accordion.Event,
      title: ComponentsTypes.Accordion.Title
    ) => {
      setOpenedAccordion(title);
      console.log("title", title);
    },
  };

  const product = useGetProducts(getProductParam);

  const observerOptions = {
    root: document,
    rootMargin: "0px",
    threshold: 1.0,
  };

  let observer = new IntersectionObserver((observe) => {
    const inView = observe[0].isIntersecting;

    if (inView) {
      setGetProductParam((getProductParam) => ({
        skip: getProductParam.skip,
        limit: getProductParam.limit + 10,
      }));

      product.setLoading(true);

      setTargetIndex((targetIndex) => targetIndex + 10);

      const target = document.getElementById(`loadMoreTarget${targetIndex}`);

      if (target) {
        observer.unobserve(target);
      }
    }
  }, observerOptions);

  useEffect(() => {
    const target = document.getElementById(`loadMoreTarget${targetIndex}`);

    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [product.photos]);

  return (
    <>
      <Header />
      <div className="container py-4 px-12">
        <SearchInput
          value={keyword}
          placeholder={"想去哪？"}
          type={"filter"}
          accordion={accordion}
        />
      </div>
      <div className="container">
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
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
