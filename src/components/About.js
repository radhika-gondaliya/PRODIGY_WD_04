import React from "react";
import "./About.css";
const AboutUs = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
    textAlign: "left",
  };

  const imageStyle = {
    width: "250px",
    height: "250px",
    borderRadius: "50%",
    marginBottom: "20px",
  };

  const textStyle = {
    fontSize: "15px",
    lineHeight: "1.6",
    color: "#333",
  };

  const bold = {
    color: "blue",
  };

  return (
    <div style={containerStyle}>
      <img
        src="https://img.freepik.com/free-vector/girl-with-laptop-table-white-background_1308-52074.jpg"
        alt="Our Team"
        style={imageStyle}
      />
      <p style={textStyle}>
        <h5>
          {" "}
          <b style={bold}> Hello, I'm Radhika Gondaliya</b>
        </h5>
        Since 2021, I've been fortunate to lend my skills to a variety of
        clients, helping them translate their visions into functional,
        aesthetically pleasing websites.<br></br>
        <br></br>I specialize in <b>front-end development</b> , leveraging a
        stack that includes <b>JavaScript, HTML, CSS, react.js,PHP, and more</b>{" "}
        Whether it's crafting a responsive layout, optimizing a site for
        performance and batter result. My professional journey has been guided
        by a belief that effective web development is more than just code—it's
        about understanding the unique needs of each client, creating solutions
        that address those needs, and ultimately delivering a product that
        exceeds expectations. <br></br>
        <br></br>In addition to my technical prowess, I bring strong
        communication skills and a team-focused mentality. I understand that
        every project is a collaborative effort. If you're looking for a
        detail-oriented and committed Web Developer to bring your project to
        life, feel free to get in touch.{" "}
        <b>
          I'm always excited about the possibility of creating something great
          together.
        </b>
      </p>

      <a href="/Radhika resume.pdf" download="Radhika_CV.pdf">
        <button className="button">Download My CV</button>
      </a>
    </div>
  );
};

export default AboutUs;
