import _ from "lodash";
import Card from "components/card";
import lighthouse from "assets/fake/lighthouse.png";
import useGetProducts from "hooks/useGetProducts";
import Types from "types/";
import Header from "./header";
import SearchInput from "components/searchInput";
import { useEffect, useState } from "react";
import * as cityVariables from "variables/cities";

const translateCHCityNameToEN = (chinese: string) => {
  switch (chinese) {
    case cityVariables.areas.N[0].CH:
      return cityVariables.areas.N[0].EN;

    case cityVariables.areas.N[1].CH:
      return cityVariables.areas.N[1].EN;

    case cityVariables.areas.N[2].CH:
      return cityVariables.areas.N[2].EN;

    case cityVariables.areas.N[3].CH:
      return cityVariables.areas.N[3].EN;

    case cityVariables.areas.N[4].CH:
      return cityVariables.areas.N[4].EN;

    case cityVariables.areas.N[5].CH:
      return cityVariables.areas.N[5].EN;

    case cityVariables.areas.N[6].CH:
      return cityVariables.areas.N[6].EN;

    case cityVariables.areas.N[7].CH:
      return cityVariables.areas.N[7].EN;

    case cityVariables.areas.M[0].CH:
      return cityVariables.areas.N[0].EN;

    case cityVariables.areas.M[1].CH:
      return cityVariables.areas.M[1].EN;

    case cityVariables.areas.M[2].CH:
      return cityVariables.areas.M[2].EN;

    case cityVariables.areas.M[3].CH:
      return cityVariables.areas.M[3].EN;

    case cityVariables.areas.M[4].CH:
      return cityVariables.areas.M[4].EN;

    case cityVariables.areas.M[5].CH:
      return cityVariables.areas.M[5].EN;

    case cityVariables.areas.M[6].CH:
      return cityVariables.areas.M[6].EN;

    case cityVariables.areas.M[7].CH:
      return cityVariables.areas.M[7].EN;

    case cityVariables.areas.M[8].CH:
      return cityVariables.areas.M[8].EN;

    case cityVariables.areas.M[9].CH:
      return cityVariables.areas.M[9].EN;

    case cityVariables.areas.S[0].CH:
      return cityVariables.areas.S[0].EN;

    case cityVariables.areas.S[1].CH:
      return cityVariables.areas.S[1].EN;

    case cityVariables.areas.S[2].CH:
      return cityVariables.areas.S[2].EN;

    case cityVariables.areas.S[3].CH:
      return cityVariables.areas.S[3].EN;

    case cityVariables.areas.W[0].CH:
      return cityVariables.areas.W[0].EN;

    case cityVariables.areas.W[1].CH:
      return cityVariables.areas.W[1].EN;

    case cityVariables.areas.W[2].CH:
      return cityVariables.areas.W[2].EN;

    case cityVariables.areas.W[3].CH:
      return cityVariables.areas.W[3].EN;

    case cityVariables.areas.O[0].CH:
      return cityVariables.areas.O[0].EN;

    case cityVariables.areas.O[1].CH:
      return cityVariables.areas.O[1].EN;

    case cityVariables.areas.O[2].CH:
      return cityVariables.areas.O[2].EN;

    case cityVariables.areas.O[3].CH:
      return cityVariables.areas.O[3].EN;

    case cityVariables.areas.O[4].CH:
      return cityVariables.areas.O[4].EN;

    default:
      return null;
  }
};

const Home = () => {
  const [getProductParam, setGetProductParam] = useState({
      skip: 0,
      limit: 10,
    }),
    [targetIndex, setTargetIndex] = useState(6),
    [keyword, setKeyword] = useState(""),
    [openedAccordion, setOpenedAccordion] = useState<null | string>(null),
    [selectedCities, setSelectedCities] = useState({
      [cityVariables.areas.N[0].EN]: false,
      [cityVariables.areas.N[1].EN]: false,
    });

  const accordion = {
    opened: openedAccordion,
    areas: [
      {
        title: "北部",
        options: [
          {
            name: cityVariables.areas.N[0].CH,
            checked: selectedCities[cityVariables.areas.N[0].EN],
          },
          {
            name: cityVariables.areas.N[1].CH,
            checked: selectedCities[cityVariables.areas.N[1].EN],
          },
          {
            name: cityVariables.areas.N[2].CH,
            checked: selectedCities[cityVariables.areas.N[2].EN],
          },
          {
            name: cityVariables.areas.N[3].CH,
            checked: selectedCities[cityVariables.areas.N[3].EN],
          },
          {
            name: cityVariables.areas.N[4].CH,
            checked: selectedCities[cityVariables.areas.N[4].EN],
          },
          {
            name: cityVariables.areas.N[5].CH,
            checked: selectedCities[cityVariables.areas.N[5].EN],
          },
          {
            name: cityVariables.areas.N[6].CH,
            checked: selectedCities[cityVariables.areas.N[6].EN],
          },
          {
            name: cityVariables.areas.N[7].CH,
            checked: selectedCities[cityVariables.areas.N[7].EN],
          },
        ],
      },
      {
        title: "中部",
        options: [
          {
            name: cityVariables.areas.M[0].CH,
            checked: selectedCities[cityVariables.areas.M[0].EN],
          },
          {
            name: cityVariables.areas.M[1].CH,
            checked: selectedCities[cityVariables.areas.M[1].EN],
          },
          {
            name: cityVariables.areas.M[2].CH,
            checked: selectedCities[cityVariables.areas.M[2].EN],
          },
          {
            name: cityVariables.areas.M[3].CH,
            checked: selectedCities[cityVariables.areas.M[3].EN],
          },
          {
            name: cityVariables.areas.M[4].CH,
            checked: selectedCities[cityVariables.areas.M[4].EN],
          },
          {
            name: cityVariables.areas.M[5].CH,
            checked: selectedCities[cityVariables.areas.M[5].EN],
          },
          {
            name: cityVariables.areas.M[6].CH,
            checked: selectedCities[cityVariables.areas.M[6].EN],
          },
          {
            name: cityVariables.areas.M[7].CH,
            checked: selectedCities[cityVariables.areas.M[7].EN],
          },
          {
            name: cityVariables.areas.M[8].CH,
            checked: selectedCities[cityVariables.areas.M[8].EN],
          },
          {
            name: cityVariables.areas.M[9].CH,
            checked: selectedCities[cityVariables.areas.M[9].EN],
          },
        ],
      },
      {
        title: "南部",
        options: [
          {
            name: cityVariables.areas.S[0].CH,
            checked: selectedCities[cityVariables.areas.S[0].EN],
          },
          {
            name: cityVariables.areas.S[1].CH,
            checked: selectedCities[cityVariables.areas.S[1].EN],
          },
          {
            name: cityVariables.areas.S[2].CH,
            checked: selectedCities[cityVariables.areas.S[2].EN],
          },
          {
            name: cityVariables.areas.S[3].CH,
            checked: selectedCities[cityVariables.areas.S[3].EN],
          },
        ],
      },
      {
        title: "東部",
        options: [
          {
            name: cityVariables.areas.W[0].CH,
            checked: selectedCities[cityVariables.areas.W[0].EN],
          },
          {
            name: cityVariables.areas.W[1].CH,
            checked: selectedCities[cityVariables.areas.W[1].EN],
          },
          {
            name: cityVariables.areas.W[2].CH,
            checked: selectedCities[cityVariables.areas.W[2].EN],
          },
          {
            name: cityVariables.areas.W[3].CH,
            checked: selectedCities[cityVariables.areas.W[3].EN],
          },
        ],
      },
      {
        title: "離島",
        options: [
          {
            name: cityVariables.areas.O[0].CH,
            checked: selectedCities[cityVariables.areas.O[0].EN],
          },
          {
            name: cityVariables.areas.O[1].CH,
            checked: selectedCities[cityVariables.areas.O[1].EN],
          },
          {
            name: cityVariables.areas.O[2].CH,
            checked: selectedCities[cityVariables.areas.O[2].EN],
          },
          {
            name: cityVariables.areas.O[3].CH,
            checked: selectedCities[cityVariables.areas.O[3].EN],
          },
          {
            name: cityVariables.areas.O[4].CH,
            checked: selectedCities[cityVariables.areas.O[4].EN],
          },
        ],
      },
    ],
    onClick: (
      e: Types.Components.Accordion.Event,
      title: Types.Components.Accordion.Title
    ) => {
      setOpenedAccordion(title);
    },
    onCheckboxChange: (
      e: Types.Components.Accordion.Event,
      option: Types.Components.Accordion.Option
    ) => {
      if (!option.name) return;

      const newSelectedCities = _.cloneDeep(selectedCities),
        city = translateCHCityNameToEN(option.name);

      if (!city) return;

      newSelectedCities[city] = !newSelectedCities[city];

      setSelectedCities(newSelectedCities);
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
