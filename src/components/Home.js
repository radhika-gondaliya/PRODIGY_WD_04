import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // We'll style the Home component here.

function Home() {
  return (
    <header className="hero-section">
      <div className="container text-center text-white d-flex flex-column align-items-center justify-content-center h-100">
        <h1 className="display-4 fw-bold mb-4">Hello, I'm Radhika</h1>
        <p className="lead mb-4">
          <b>Web Developer</b>
        </p>
        <div className="cta-buttons">
          <Link to="/projects" className="btn btn-primary btn-lg me-3">
            View My Projects
          </Link>
          <Link to="/contact" className="btn btn-outline-light btn-lg">
            Contact Me
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Home;
