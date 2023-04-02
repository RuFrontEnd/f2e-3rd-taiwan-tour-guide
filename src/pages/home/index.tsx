import _, { cloneDeep } from "lodash";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import taipei from "assets/picture/cities/taipei.jpg";
import newTaipei from "assets/picture/cities/new-taipei.jpg";
import taoyuan from "assets/picture/cities/taoyuan.jpg";
import taichung from "assets/picture/cities/taichung.jpg";
import tainan from "assets/picture/cities/tainan.jpg";
import kaohsiung from "assets/picture/cities/kaohsiung.jpg";
import hualien from "assets/picture/cities/hualien.jpg";
import taitung from "assets/picture/cities/taitung.jpg";
import nantou from "assets/picture/cities/nantou.jpg";
import penghu from "assets/picture/cities/penghu.jpg";
import kinmen from "assets/picture/cities/kinmen.jpg";
import Types from "types/";
import Header from "./header";
import Card from "components/card";
import SearchInput from "components/searchInput";
import Swiper from "components/swiper";
import DataHint from "components/dataHint";
import * as variables from "variables";
import * as utils from "utils";

const n0ch = variables.cities.areas.N[0].CH,
  n0en = variables.cities.areas.N[0].EN,
  n1ch = variables.cities.areas.N[1].CH,
  n1en = variables.cities.areas.N[1].EN,
  n2ch = variables.cities.areas.N[2].CH,
  n2en = variables.cities.areas.N[2].EN,
  n3ch = variables.cities.areas.N[3].CH,
  n3en = variables.cities.areas.N[3].EN,
  n4ch = variables.cities.areas.N[4].CH,
  n4en = variables.cities.areas.N[4].EN,
  n5ch = variables.cities.areas.N[5].CH,
  n5en = variables.cities.areas.N[5].EN,
  n6ch = variables.cities.areas.N[6].CH,
  n6en = variables.cities.areas.N[6].EN,
  n7ch = variables.cities.areas.N[7].CH,
  n7en = variables.cities.areas.N[7].EN,
  m0ch = variables.cities.areas.M[0].CH,
  m0en = variables.cities.areas.M[0].EN,
  m1ch = variables.cities.areas.M[1].CH,
  m1en = variables.cities.areas.M[1].EN,
  m2ch = variables.cities.areas.M[2].CH,
  m2en = variables.cities.areas.M[2].EN,
  m3ch = variables.cities.areas.M[3].CH,
  m3en = variables.cities.areas.M[3].EN,
  m4ch = variables.cities.areas.M[4].CH,
  m4en = variables.cities.areas.M[4].EN,
  m5ch = variables.cities.areas.M[5].CH,
  m5en = variables.cities.areas.M[5].EN,
  m6ch = variables.cities.areas.M[6].CH,
  m6en = variables.cities.areas.M[6].EN,
  m7ch = variables.cities.areas.M[7].CH,
  m7en = variables.cities.areas.M[7].EN,
  m8ch = variables.cities.areas.M[8].CH,
  m8en = variables.cities.areas.M[8].EN,
  m9ch = variables.cities.areas.M[9].CH,
  m9en = variables.cities.areas.M[9].EN,
  s0ch = variables.cities.areas.S[0].CH,
  s0en = variables.cities.areas.S[0].EN,
  s1ch = variables.cities.areas.S[1].CH,
  s1en = variables.cities.areas.S[1].EN,
  s2ch = variables.cities.areas.S[2].CH,
  s2en = variables.cities.areas.S[2].EN,
  s3ch = variables.cities.areas.S[3].CH,
  s3en = variables.cities.areas.S[3].EN,
  w0ch = variables.cities.areas.W[0].CH,
  w0en = variables.cities.areas.W[0].EN,
  w1ch = variables.cities.areas.W[1].CH,
  w1en = variables.cities.areas.W[1].EN,
  w2ch = variables.cities.areas.W[2].CH,
  w2en = variables.cities.areas.W[2].EN,
  w3ch = variables.cities.areas.W[3].CH,
  w3en = variables.cities.areas.W[3].EN,
  o0ch = variables.cities.areas.O[0].CH,
  o0en = variables.cities.areas.O[0].EN,
  o1ch = variables.cities.areas.O[1].CH,
  o1en = variables.cities.areas.O[1].EN,
  o2ch = variables.cities.areas.O[2].CH,
  o2en = variables.cities.areas.O[2].EN,
  o3ch = variables.cities.areas.O[3].CH,
  o3en = variables.cities.areas.O[3].EN,
  o4ch = variables.cities.areas.O[4].CH,
  o4en = variables.cities.areas.O[4].EN;

const culture = "文化",
  ecology = "生態",
  naturalScenery = "自然風景",
  nationalScenicArea = "國家風景區";

const dataCountPerFetching = 20;

const translateCHCityNameToEN = (chinese: string) => {
  switch (chinese) {
    case n0ch:
      return n0en;

    case n1ch:
      return n1en;

    case n2ch:
      return n2en;

    case n3ch:
      return n3en;

    case n4ch:
      return n4en;

    case n5ch:
      return n5en;

    case n6ch:
      return n6en;

    case n7ch:
      return n7en;

    case m0ch:
      return m0en;

    case m1ch:
      return m1en;

    case m2ch:
      return m2en;

    case m3ch:
      return m3en;

    case m4ch:
      return m4en;

    case m5ch:
      return m5en;

    case m6ch:
      return m6en;

    case m7ch:
      return m7en;

    case m8ch:
      return m8en;

    case m9ch:
      return m9en;

    case s0ch:
      return s0en;

    case s1ch:
      return s1en;

    case s2ch:
      return s2en;

    case s3ch:
      return s3en;

    case w0ch:
      return w0en;

    case w1ch:
      return w1en;

    case w2ch:
      return w2en;

    case w3ch:
      return w3en;

    case o0ch:
      return o0en;

    case o1ch:
      return o1en;

    case o2ch:
      return o2en;

    case o3ch:
      return o3en;

    case o4ch:
      return o4en;

    default:
      return null;
  }
};

const getClassificationKey = (name: string) => {
  switch (name) {
    case culture:
      return "culture";

    case ecology:
      return "ecology";

    case naturalScenery:
      return "naturalScenery";

    case nationalScenicArea:
      return "nationalScenicArea";

    default:
      return null;
  }
};

const Home = () => {
  const navigate = useNavigate();
  const [getScenicSpotsParams, seScenicSpotsParams] = useState({
      $top: dataCountPerFetching,
      $skip: 0,
    }),
    // [targetIndex, setTargetIndex] = useState(dataCountPerFetching - 10), // TODO: 後續研究滾動中途 fetch 資料
    [keyword, setKeyword] = useState(""),
    [openedAccordion, setOpenedAccordion] = useState<null | string>(null),
    [selectedCities, setSelectedCities] =
      useState<Types.Pages.Home.SelectedOptions>({}),
    [selectedClassifications, setSelectedClassifications] =
      useState<Types.Pages.Home.SelectedOptions>({}),
    [loading, setLoading] = useState(true), // TODO: 研究使用時機
    [finished, setFinished] = useState(false),
    [scenicSpots, setScenicSpots] = useState<Types.Pages.Home.ScenicSpots>([]);

  const hasSelectedCities = Object.values(selectedCities).some(
      (selectedCity) => selectedCity === true
    ),
    hasSelectedClassifications = Object.values(selectedClassifications).some(
      (selectedClassification) => selectedClassification === true
    );

  const hotkeyWords = [
    "台南文化",
    "嘉義觀光工廠",
    "台東自然風景",
    "屏東國家風景區",
    "新竹遊憩",
  ];

  const onClickSwiperCard = (city: string) => {
    const searchParams = utils.searchParams.getSearchParams(
      "",
      { [city]: true },
      {}
    );

    navigate(`/list?${searchParams}`);
  };

  const hotCities = [
    {
      img: taipei,
      text: "臺北",
      onClick: () => {
        onClickSwiperCard(n2en);
      },
    }, // TODO: 點擊輪播卡片執行 function
    {
      img: newTaipei,
      text: "新北",
      onClick: () => {
        onClickSwiperCard(n1en);
      },
    },
    {
      img: taoyuan,
      text: "桃園",
      onClick: () => {
        onClickSwiperCard(n3en);
      },
    },
    {
      img: taichung,
      text: "臺中",
      onClick: () => {
        onClickSwiperCard(m2en);
      },
    },
    {
      img: tainan,
      text: "臺南",
      onClick: () => {
        onClickSwiperCard(s0en);
      },
    },
    {
      img: kaohsiung,
      text: "高雄",
      onClick: () => {
        onClickSwiperCard(s1en);
      },
    },
    {
      img: hualien,
      text: "花蓮",
      onClick: () => {
        onClickSwiperCard(w0en);
      },
    },
    {
      img: taitung,
      text: "臺東",
      onClick: () => {
        onClickSwiperCard(w2en);
      },
    },
    {
      img: nantou,
      text: "南投",
      onClick: () => {
        onClickSwiperCard(m6en);
      },
    },
    {
      img: penghu,
      text: "澎湖",
      onClick: () => {
        onClickSwiperCard(o0en);
      },
    },
    {
      img: kinmen,
      text: "金門",
      onClick: () => {
        onClickSwiperCard(o3en);
      },
    },
  ];

  const accordion = {
    title: "縣市",
    opened: openedAccordion,
    areas: [
      {
        title: "北部",
        options: [
          {
            name: n0ch,
            checked: selectedCities[n0en],
          },
          {
            name: n1ch,
            checked: selectedCities[n1en],
          },
          {
            name: n2ch,
            checked: selectedCities[n2en],
          },
          {
            name: n3ch,
            checked: selectedCities[n3en],
          },
          {
            name: n4ch,
            checked: selectedCities[n4en],
          },
          {
            name: n5ch,
            checked: selectedCities[n5en],
          },
          {
            name: n6ch,
            checked: selectedCities[n6en],
          },
          {
            name: n7ch,
            checked: selectedCities[n7en],
          },
        ],
      },
      {
        title: "中部",
        options: [
          {
            name: m0ch,
            checked: selectedCities[m0en],
          },
          {
            name: m1ch,
            checked: selectedCities[m1en],
          },
          {
            name: m2ch,
            checked: selectedCities[m2en],
          },
          {
            name: m3ch,
            checked: selectedCities[m3en],
          },
          {
            name: m4ch,
            checked: selectedCities[m4en],
          },
          {
            name: m5ch,
            checked: selectedCities[m5en],
          },
          {
            name: m6ch,
            checked: selectedCities[m6en],
          },
          {
            name: m7ch,
            checked: selectedCities[m7en],
          },
          {
            name: m8ch,
            checked: selectedCities[m8en],
          },
          {
            name: m9ch,
            checked: selectedCities[m9en],
          },
        ],
      },
      {
        title: "南部",
        options: [
          {
            name: s0ch,
            checked: selectedCities[s0en],
          },
          {
            name: s1ch,
            checked: selectedCities[s1en],
          },
          {
            name: s2ch,
            checked: selectedCities[s2en],
          },
          {
            name: s3ch,
            checked: selectedCities[s3en],
          },
        ],
      },
      {
        title: "東部",
        options: [
          {
            name: w0ch,
            checked: selectedCities[w0en],
          },
          {
            name: w1ch,
            checked: selectedCities[w1en],
          },
          {
            name: w2ch,
            checked: selectedCities[w2en],
          },
          {
            name: w3ch,
            checked: selectedCities[w3en],
          },
        ],
      },
      {
        title: "離島",
        options: [
          {
            name: o0ch,
            checked: selectedCities[o0en],
          },
          {
            name: o1ch,
            checked: selectedCities[o1en],
          },
          {
            name: o2ch,
            checked: selectedCities[o2en],
          },
          {
            name: o3ch,
            checked: selectedCities[o3en],
          },
          {
            name: o4ch,
            checked: selectedCities[o4en],
          },
        ],
      },
    ],
    onClick: (
      e: Types.Components.Accordion.Event,
      title: Types.Components.Accordion.Title
    ) => {
      setOpenedAccordion((openedAccordion) =>
        openedAccordion === title ? null : title
      );
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

  const classification = {
    title: "分類",
    options: [
      {
        name: culture,
        checked: selectedClassifications?.culture,
      },
      {
        name: ecology,
        checked: selectedClassifications?.ecology,
      },
      {
        name: naturalScenery,
        checked: selectedClassifications?.naturalScenery,
      },
      {
        name: nationalScenicArea,
        checked: selectedClassifications?.nationalScenicArea,
      },
    ],
    onCheckboxChange: (
      e: Types.Components.Accordion.Event,
      option: Types.Components.Accordion.Option
    ) => {
      setSelectedClassifications((selectedClassifications) => {
        const key = getClassificationKey(option.name);
        const copySelectedClassifications = cloneDeep(selectedClassifications);

        if (!key) return copySelectedClassifications;

        copySelectedClassifications[key] = copySelectedClassifications[key]
          ? false
          : true;

        return copySelectedClassifications;
      });
    },
  };

  const observerOptions = {
    root: document,
    rootMargin: "0px",
    threshold: 0,
  };

  let observer = new IntersectionObserver((observe) => {
    const inView = observe[0].isIntersecting;

    if (inView) {
      utils.apis.getScenicSpots(
        getScenicSpotsParams,
        (res: Types.Utils.Apis.GetScenicSpots.Res) => {
          if (res.data.length === 0) {
            setFinished(true);
          }
          const generatedScenicSpots = utils.ds.generateScenicSpotsDS(res.data);

          setScenicSpots((scenicSpots) =>
            scenicSpots.concat(generatedScenicSpots)
          );
          seScenicSpotsParams((scenicSpotsParams) => ({
            ...scenicSpotsParams,
            $skip: scenicSpotsParams.$skip + dataCountPerFetching,
          }));
        }
      );

      /* TODO: 後續研究滾動中途 fetch 資料 */
      // setTargetIndex((targetIndex) => targetIndex + dataCountPerFetching);

      // const target = document.getElementById(`loadMoreTarget${targetIndex}`);

      // if (target) {
      //   observer.unobserve(target);
      // }
    }
  }, observerOptions);

  const onCloseFilterDropdown = () => {
    setOpenedAccordion(null);
  };

  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const onEnterSearchInput = () => {
    const searchParams = utils.searchParams.getSearchParams(
      keyword,
      selectedCities,
      selectedClassifications
    );

    navigate(`/list?${searchParams}`);
  };

  useEffect(() => {
    // TODO: 之後研究滾動中途 fetch 資料
    // const target = document.getElementById(`loadMoreTarget${targetIndex}`);
    const loading = document.getElementById("loading");

    if (
      // target
      loading
    ) {
      // observer.observe(target);
      observer.observe(loading);
    }

    return () => {
      if (
        // target
        loading
      ) {
        // observer.unobserve(target);
        observer.unobserve(loading);
      }
    };
  }, [scenicSpots]);

  return (
    <>
      <Header />
      <div className="container-fluid bg-light position-relative d-flex justify-content-center">
        <SearchInput
          className="z-index-10 w-100p w-sm-160"
          value={keyword}
          placeholder={"想去哪？"}
          hotKeywords={hotkeyWords}
          accordion={accordion}
          classification={classification}
          showSieveHint={hasSelectedCities || hasSelectedClassifications}
          onCloseFilterDropdown={onCloseFilterDropdown}
          onChange={onChangeSearchInput}
          onEnter={onEnterSearchInput}
        />
        <div className="bg-white w-100p h-50p position-absolute bottom-0" />
      </div>

      <div className="container py-20">
        <div className="f-5 pb-5">沒想法? 試試這些...</div>
        <Swiper
          scenes={hotCities}
          breakPoints={{
            0: {
              slidesPerView: 2,
            },
            420: {
              slidesPerView: 3,
            },
            576: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 5,
            },
            992: {
              slidesPerView: 6,
            },

            1200: {
              slidesPerView: 8,
            },
          }}
        />
      </div>
      <div className="container-fluid container-lg">
        <div className="row gx-4">
          <div className="f-5 pb-5">熱門景點</div>
          {scenicSpots.map((scenicSpot, scenicSpotIndex) => (
            <div className="col-md-4 col-sm-6">
              <div
                className="position-relative"
                style={{ height: "calc(100% - 16px)" }}
              >
                <Card
                  className="mb-4 h-100p"
                  src={scenicSpot.photo}
                  title={scenicSpot.title}
                  address={scenicSpot.address}
                  phone={scenicSpot.phone}
                  time={scenicSpot.time}
                  info={scenicSpot.info}
                  labels={scenicSpot.classes}
                />
                {/* TODO: 之後研究滾動中途 fetch 資料 */}
                {/* {scenicSpotIndex === targetIndex && (
                  <small
                    style={{ background: "red" }}
                    id={`loadMoreTarget${targetIndex}`}
                    className="position-absolute top-0 start-0"
                  >
                    123
                  </small>
                )} */}
              </div>
            </div>
          ))}
        </div>

        <DataHint finished={finished} loading={loading} />
      </div>
    </>
  );
};

export default Home;
