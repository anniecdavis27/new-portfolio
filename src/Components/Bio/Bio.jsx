import React from "react";
import "./bio.scss";

function Bio() {
  return (
    <div className="home-flex-bio">
      <h1 className="title">Bio</h1>
      <div className="bio-content-flex">
        <img
          src="https://live.staticflickr.com/65535/49986310402_4dfc022a4f_o.jpg"
          className="annie-pic"
          alt="annie-pic"
        />
        <div>
          <h2 className="bio-subheading">A Little About Me...</h2>
          <p className="content">
            Hi! My name is Annie, and I am a full stack engineer with an eye for
            design. I have a professional foundation in business development,
            and a passion for technology, sustainability and craft beer. When
            I'm not coding, spend as much time as possible hiking and fishing in
            the Adirondack mountains and brewing different styles of beer. I am
            always looking to learn new skills and enhance my old ones. I am
            currently seeking an opportunity with a company whose mission I
            believe in, to combine my engineering skills with my business
            development skills to become the best developer and leader I can be
            in the tech industry.
            <br />
            <br />
            This portfolio is a full MERN stack application.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Bio;
