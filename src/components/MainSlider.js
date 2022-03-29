import React from "react";
import Slider from "react-slick";

function MainSlider() {
  const settings = {
    autoplay: false,
    autoplaySpeed: 10000,
    dots: false,
    fade: true,
    arrows: true,

    responsive: [{ breakpoint: 767, settings: { dots: false, arrows: false } }],
  };

  return (
    <section className="slider-area">
      <Slider className="slider-active" {...settings}>
        <div>
          <div
            className="single-slider slider-bg d-flex align-items-center"
            style={{
              backgroundImage: "url('img/slider/slider-background.jpg')",
            }}
          >
            <div className="container custom-container">
              <div className="row">
                <div className="col-xl-12 text-center">
                  <div className="slider-content">
                    <div className="slider-title">
                      <h2
                        className="title"
                        data-animation="fadeInUpBig"
                        data-delay=".2s"
                        data-duration="1.2s"
                      >
                        Supporting Animal Conservation with NFTs
                      </h2>
                    </div>
                    <div className="slider-desc">
                      <p
                        className="desc"
                        data-animation="fadeInUpBig"
                        data-delay=".4s"
                        data-duration="1.2s"
                      >
                        Raise funds for the care and welfare of animals through NFTs.

                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
}

export default MainSlider;
