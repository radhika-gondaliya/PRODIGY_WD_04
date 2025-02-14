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
            <a href="https://radhikagame.netlify.app/" className="project-link">
              <img
                src="https://everydaypartymag.com/wp-content/uploads/2019/07/Everyday-Party-Magazine-Tic-Tac-Toe-Game-3.jpg"
                className="img-fluid project-img"
                alt="Project 1"
              />
            </a>
            <h1>Tic-Tac-To</h1>
          </div>
          <div className="col-md-4">
            <a href="https://nike31.netlify.app/" className="project-link">
              <img
                src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c626a1ef-ebae-47b2-be6b-8706be6b95e5/AIR+FORCE+1+LOW+EVO.png"
                className="img-fluid project-img"
                alt="Project 2"
              />
            </a>
            <h1>Nikeshoes</h1>
          </div>
          <div className="col-md-4">
            <a href="https://r-rps.netlify.app" className="project-link">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/000/691/497/small/rock-paper-scissors-neon-icons.jpg"
                className="img-fluid project-img"
                alt="Project 3"
              />
            </a>
            <h1>R-P-S</h1>
          </div>
          <div className="col-md-4">
            <a
              href="https://radhika-gondaliya.github.io/wheather"
              className="project-link"
            >
              <img
                src="https://media.istockphoto.com/id/1007768414/photo/blue-sky-with-bright-sun-and-clouds.jpg?s=612x612&w=0&k=20&c=MGd2-v42lNF7Ie6TtsYoKnohdCfOPFSPQt5XOz4uOy4="
                className="img-fluid project-img"
                alt="Project 3"
              />
            </a>
            <h1>wheather</h1>
          </div>
          <div className="col-md-4">
            <a
              href="https://radhika-gondaliya.github.io/recipebook
"
              className="project-link"
            >
              <img
                src="https://m.media-amazon.com/images/I/51sxWYT1CTL._AC_UF1000,1000_QL80_.jpg"
                className="img-fluid project-img"
                alt="Project 3"
              />
            </a>
            <h1>recipebook</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
