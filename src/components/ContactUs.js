import React from "react";

function ContactUs() {
  return (
    <section className="contact-area pt-50">
      <div className="container">
        <div className="row justify-content-center justify-content-lg-between">
          <div className="col-lg-12 col-md-8 order-2 order-lg-0">
            <div className="contact-title mb-20 text-center">
              <h5 className="sub-title">Contact Us</h5>
              <h2 className="title">
                Let's Talk Question<span>.</span>
              </h2>
            </div>
          </div>
        </div>
        <form className="contact-form">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className="form-grp">
                <label htmlFor="name">
                  Your Name <span>*</span>
                </label>
                <input type="text" id="name" placeholder="Jon Deo..." />
              </div>
            </div>
            <div className="col-12 col-lg-6 col-xl-6">
              <div className="form-grp">
                <label htmlFor="email">
                  Your Email <span>*</span>
                </label>
                <input type="text" id="email" placeholder="info.example@.com" />
              </div>
            </div>
          </div>
          <div className="form-grp">
            <label htmlFor="message">
              Your Message <span>*</span>
            </label>
            <textarea name="message" id="message" placeholder="Opinion..." />
          </div>
          <div className="form-grp checkbox-grp">
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox">Don’t show your email address</label>
          </div>
          <button type="button" className="btn rounded-btn">
            Send Now
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactUs;
