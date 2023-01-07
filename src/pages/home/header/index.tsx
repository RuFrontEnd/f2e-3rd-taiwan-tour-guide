import travelingByTrain from "assets/picture/traveling-by-train.png";

const Header = () => {
  return (
    <header className="bg-light">
      <div className="container-fluid container-lg">
        <div className="row">
          <div className="col-12 g-0">
            <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center">
              <div className="me-md-16 me-lg-26 mt-6 mb-2">
                <img
                  src={travelingByTrain}
                  className="mh-280px mh-sm-350px mh-lg-540px object-fit-contain"
                ></img>
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
