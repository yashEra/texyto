import React from "react";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import hederImage from "../images/hederImage.png";
import about from "../images/about.svg";
import { FaArrowRight } from "react-icons/fa";
import Footer from "../components/Footer";
import GraphicSolution from "../components/Graphic";
import Knowladge from "../components/Knowladge";
import WebHost from "../components/WebHost";

function Home() {
  return (
    <div className="App">
      <div className="heder">
        <Navbar />
        <div className="heder_cont">
          <div className="hederText">
            <h2>Putting you & yours together</h2>
            <h1 className="maintext">A place whare knowladge graw</h1>
            <p>
              Stay up-to-date with the latest news, IT and tech worlds, keep in
              touch with Texyto
            </p>
            <button type="button" className="heder__button">
              Let's Talk <FaArrowRight />
            </button>
          </div>
          <div className="heder-image">
            <img src={hederImage} alt={"heder"} />
          </div>
        </div>
      </div>

      {/* ABOUT */}

      <div className="about__welcome">
        <div className="about__text">
          <h1>Texyto Provides</h1>
          <h4>Innovative Solutions for Your Business Needs</h4>
          <p>
            Texyto is a leading provider of information technology services that
            cater to a wide range of business needs. We specialize in web
            hosting, learning tutorials, graphic designing, web design, and
            more, helping businesses of all sizes to improve their online
            presence and maximize their reach. With years of experience and a
            team of dedicated experts, we are committed to delivering innovative
            and customized solutions that are tailored to meet the unique needs
            of our clients. At Texyto, we believe that technology should be
            accessible to everyone, and we are passionate about helping
            businesses leverage the power of technology to achieve their goals.
            Whether you're looking to create a stunning website, improve your
            online visibility, or expand your digital capabilities, Texyto has
            the tools and expertise to help you transform your tech and succeed
            in today's competitive marketplace.
          </p>
        </div>
        <div className="about__image">
          <img src={about} alt={"about"} />
        </div>
      </div>

      {/* SERVICES */}

      <div className="services">
        <h4>TO LEVEL UP YOUR BUSINESS</h4>
        <h1>Creative solutions for your business needs</h1>
        <h6>
          As a team of professionals, we are doing our best to providing you
          with a high-quality service.{" "}
        </h6>
      </div>
      <Services />
      <GraphicSolution />
      <Knowladge />
      <WebHost />
      <Footer />
    </div>
  );
}

export default Home;
