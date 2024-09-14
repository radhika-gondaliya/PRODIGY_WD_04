import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Project.css"; // Custom CSS file for hover effects

const Project = () => {
  return (
    <section className="projects-section py-5">
      <div className="container">
        <h2 className="text-center mb-5">My Projects</h2>
        <div className="row">
          <div className="col-md-4">
            <a href="http://127.0.0.1:5500/index.html" className="project-link">
              <img
                src="https://everydaypartymag.com/wp-content/uploads/2019/07/Everyday-Party-Magazine-Tic-Tac-Toe-Game-3.jpg"
                className="img-fluid project-img"
                alt="Project 1"
              />
            </a>
          </div>
          <div className="col-md-4">
            <a href="#" className="project-link">
              <img
                src="https://everydaypartymag.com/wp-content/uploads/2019/07/Everyday-Party-Magazine-Tic-Tac-Toe-Game-3.jpg"
                className="img-fluid project-img"
                alt="Project 2"
              />
            </a>
          </div>
          <div className="col-md-4">
            <a href="#" className="project-link">
              <img
                src="https://everydaypartymag.com/wp-content/uploads/2019/07/Everyday-Party-Magazine-Tic-Tac-Toe-Game-3.jpg"
                className="img-fluid project-img"
                alt="Project 3"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
