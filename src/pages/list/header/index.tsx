import travelingByTrain from "assets/picture/traveling-by-train.png";
import { AnimatePresence, motion } from "framer-motion";

const Header = (props: any) => {
  return (
    <header className="bg-light">
      <div className="container-fluid container-lg">
        <div className="row">
          <div className="col-12 g-0">
            <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center">
              <div className="me-md-16 me-lg-26 mt-6 mb-2">
                <div className="h-90 h-sm-108 h-lg-150">
                  <img
                    src={travelingByTrain}
                    className="object-fit-contain w-100p h-100p"
                  ></img>
                </div>
              </div>
              <div className="d-flex flex-sm-column mb-6 mb-sm-0">
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

export default Header;
