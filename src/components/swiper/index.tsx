import SwiperConstructor from "swiper";
import "swiper/css";
import * as variables from "variables/";
import * as Types from "types/";

const Swiper = (
  props: any
  // Types.Components.Swiper.Props
) => {
  const swiper = new SwiperConstructor(".swiper", {
    // Optional parameters
    // direction: "vertical",
    // loop: true,
    // If we need pagination
    // pagination: {
    //   el: ".swiper-pagination",
    // },
    // // Navigation arrows
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
    // // And if we need scrollbar
    // scrollbar: {
    //   el: ".swiper-scrollbar",
    // },
  });

  return (
    <div className="swiper">
      <ul className="swiper-wrapper">
        {props.scenes.map((scene: { img: string; text: string }) => (
          <li className="swiper-slide">
            <div className="w-32 h-32 m-3" role="swiper-item">
              <div
                role="swiper-img"
                style={{ backgroundImage: `url(${scene.img})` }}
                className="w-100p h-100p overflow-hidden box-shadow-light position-relative border-radius-8 text-white bg-position-center bg-size-cover bg-repeat-none"
              >
                <div
                  className="z-index-10 position-relative w-100p h-100p p-2 d-flex"
                  role="swiper-text-container"
                >
                  <p className="m-0 align-self-end" role="swiper-text">
                    {scene.text}
                  </p>
                </div>
                <div
                  className="opacity-50 w-100p h-50p position-absolute bottom-0 left-0 bg-bottom-gradient"
                  role="swiper-mask"
                />
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* <div className="swiper-pagination"></div>

      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>

      <div className="swiper-scrollbar"></div> */}
    </div>
  );
};

export default Swiper;
