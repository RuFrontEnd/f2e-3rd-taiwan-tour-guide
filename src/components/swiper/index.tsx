import SwiperConstructor from "swiper";
import "swiper/css";
import * as variables from "variables/";
import * as Types from "types/";

const Swiper = (
  props: any
  // Types.Components.Swiper.Props
) => {
  const swiper = new SwiperConstructor(".swiper", {
    slidesPerView: "auto",
    // centeredSlides: true,
    breakpoints: {
      // when window width is >= 320px
      0: {
        slidesPerView: 2,
        // spaceBetween: 8,
      },
      420: {
        slidesPerView: 3,
        // spaceBetween: 8,
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 5,
        // spaceBetween: 8,
      },
      992: {
        slidesPerView: 6,
        // spaceBetween: 8,
      },
      // when window width is >= 640px
      1200: {
        slidesPerView: 8,
        // spaceBetween: 8,
      },
    },
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
            <div className="aspect-ratio-1x1 m-1" role="swiper-item">
              <div
                style={{ backgroundImage: `url(${scene.img})` }}
                className="h-100p overflow-hidden d-flex box-shadow-light position-relative border-radius-8 text-white bg-position-center bg-size-cover bg-repeat-none"
                role="swiper-img"
              >
                <div
                  className="z-index-10 position-relative p-2 align-self-end"
                  role="swiper-text-container"
                >
                  <p className="m-0" role="swiper-text">
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
