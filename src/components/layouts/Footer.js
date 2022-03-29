import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer-top-area footer-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="footer-widget">
                <div className="f-logo">
                  <h3>Rumsan NFT</h3>
                </div>
                <div className="footer-text">
                  <p>
                    Rumsan NFT is part of Rumsan, a blockchain company. Rumsan
                    is diversified multi-business company.
                  </p>
                  <div className="company-logo">
                      <a target="_blank" rel="noreferrer" href="https://askbhunte.com/">
                        <img
                          src="https://assets.rumsan.com/askbhunte/assets/askbhunte-sq.png"
                          alt="ask bhunte"
                        />
                      </a>
                      <a target="_blank" rel="noreferrer"  href="https://agriclear.io/">
                        <img
                          src="https://assets.rumsan.com/esatya/agriclear-sq.png"
                          alt="agriclear"
                        />
                      </a>
                      <a target="_blank" rel="noreferrer"  href="https://esatya.io/">
                        <img
                          src="https://assets.rumsan.com/esatya/esatya-square-logo-500x500.png"
                          alt="esatya"
                        />
                      </a>
                      <a target="_blank" rel="noreferrer"  href="https://lonetreenepal.com/">
                        <img
                          src="https://assets.rumsan.com/rumsan-test/lonetree-100x100.png"
                          alt="lonetreenepal"
                        />
                      </a>
                      <a target="_blank" rel="noreferrer"  href="https://hamrolifebank.com/">
                        <img src="https://assets.rumsan.com/esatya/hlb-blk-rumsan.png" alt="hamrolifebank" />
                      </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="footer-widget">
                <h4 className="fw-title">Navigations</h4>
                <div className="fw-link">
                  <ul>
                    <li>
                      <Link to="/#">Our Marketplace</Link>
                    </li>
                    <li>
                      <Link to="/#">About us</Link>
                    </li>
                    <li>
                      <Link to="/#">NFT Solutions</Link>
                    </li>
                    <li>
                      <Link to="/#">Technology</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="footer-widget">
                <h4 className="fw-title">Contact Us</h4>
                <div className="fw-link">
                  <ul>
                    <li>
                      <i className="icofont-home"></i> Rumsan Group LLC
                    </li>
                    <li>
                      24 Parkview Rd Randolph,NJ 07869
                    </li>
                    <li>
                      <i className="icofont-live-support"></i>{" "}
                      <a href="tel:+977 9801230044"> +1 330 967 0033</a>
                    </li>
                    <li>
                      <i className="icofont-envelope"></i>{" "}
                      <a href="mailto:team@rahat.io"> team@rumsan.com</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="copyright-text">
                <p>Copyright © 2022 ZootoPia. All Rights Reserved.</p>
              </div>
            </div>
            {/* <div className="col-md-4 d-none d-md-block">
              <div className="footer-lang">
                <div className="dropdown">
                  <button
                    className="dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton2"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img src="img/icon/united-states.png" alt="" /> English
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton2"
                  >
                    <Link className="dropdown-item" to="/">
                      <img src="img/icon/russia.png" alt="" />
                      Russia
                    </Link>
                    <Link className="dropdown-item" to="/">
                      <img src="img/icon//thailand.png" alt="" />
                      Thailand
                    </Link>
                    <Link className="dropdown-item" to="/">
                      <img src="img/icon/india.png" alt="" />
                      India
                    </Link>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
