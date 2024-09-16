import React from "react";
import Typewriter from "react-typewriter-effect";
import home from "../../src/assets/Home-img.jpeg";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
import "./Home.css";

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="container">
        <div className="row align-items-center">
          {/* Text Section */}
          <div className="col-lg-6 col-md-12">
            <div className="home-content">
              <h1>
                Hi, It's <span>Amelisa</span>
              </h1>
              <h3 className="typewriter-container">
                {" "}
                <Typewriter
                  textStyle={{ fontSize: "1.5em", color: "#00ffff", display: 'inline' }}
                  startDelay={1000}
                  cursorColor="#00ffff"
                  multiText={["I'm a Developer", "Designer", "Creator"]}
                  multiTextDelay={1000}
                  typeSpeed={50}
                  hideCursorAfterText={true}
                />
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                debitis explicabo quod perferendis, repellat, impedit nemo
                iusto, asperiores corrupti consequatur laudantium! Voluptas
                consequuntur possimus accusantium labore quae laboriosam
                placeat. Distinctio.
              </p>

              {/* Social Icons */}
              <div className="social-icons">
                <a href="#">
                  <FaLinkedin />
                </a>
                <a href="#">
                  <FaGithub />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
                <a href="#">
                  <FaFacebook />
                </a>
              </div>

              {/* Buttons */}
              <div className="btn-group">
                <button type="submit" className="btn neon-button">
                  Send Message
                </button>
                <button type="submit" className="btn neon-button">
                  Send Message
                </button>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="col-lg-6 col-md-12 text-center">
            <div className="home-img">
              <img src={home} alt="Amelisa" className="img-fluid rounded-circle" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
