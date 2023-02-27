import { Swiper as Swipe, SwiperSlide } from "swiper/react";
import "swiper/css";
import * as Types from "types/";

const Swiper = (props: Types.Components.Swiper.Props) => {
  return (
    <Swipe grabCursor breakpoints={props.breakPoints}>
      {props.scenes.map((scene: Types.Components.Swiper.Scene) => (
        <SwiperSlide>
          <div
            className="aspect-ratio-1x1 m-1"
            role="swiper-item"
            onClick={scene.onClick}
          >
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
        </SwiperSlide>
      ))}
    </Swipe>
  );
};

export default Swiper;
