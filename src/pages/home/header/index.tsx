import travelingByTrain from "assets/picture/traveling-by-train.png";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="bg-light">
      <div className="container-fluid container-lg">
        <div className="row">
          <div className="col-12 g-0">
            <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center">
              <div className="me-md-16 me-lg-26 mt-6 mb-2">
                <div className="h-90 h-sm-108 h-lg-150 w-90 w-sm-108 w-lg-150">
                  <img
                    width={480}
                    src={travelingByTrain}
                    className="object-fit-contain w-100p h-100p"
                  ></img>
                </div>
              </div>
              <div className="d-flex flex-sm-column mb-6 mb-sm-0">
                <motion.h1
                  className="f-3 f-md-1 text-a11y mb-0 me-2 me-sm-0 pe-sm-22 pe-md-30"
                  initial={{ x: "-50%", opacity: 0 }}
                  animate={{ x: "0%", opacity: 1 }}
                  transition={{
                    delay: 0.4,
                  }}
                >
                  台灣景點
                </motion.h1>
                <motion.h1
                  className="f-3 f-md-1 text-a11y mb-0 text-end"
                  initial={{ x: "-50%", opacity: 0 }}
                  animate={{ x: "0%", opacity: 1 }}
                  transition={{
                    delay: 0.8,
                  }}
                >
                  一手掌握
                </motion.h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
