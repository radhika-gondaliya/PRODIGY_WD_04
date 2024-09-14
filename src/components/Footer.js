import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <footer className="bg-dark text-white pt-4">
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <h5 className="mb-3">Radhika's Portfolio</h5>
            <h6>Contact no: +91 9081845815</h6>
            <h6>Email id: gondaliyaradhika31@gmail.com</h6>
            <div className="d-flex justify-content-center mb-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white me-4"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="row">
          <div className="col-lg-12">
            <p className="text-muted mb-0">
              &copy; {new Date().getFullYear()} Radhika. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
