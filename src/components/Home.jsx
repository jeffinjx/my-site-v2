import React, { useState } from "react";

import projects from "../projects";
import ProjectSlides from "./ProjectSlides";

import { ReactComponent as Html } from "./assets/svgs/brands/html5.svg";
import { ReactComponent as Css } from "./assets/svgs/brands/css3-alt.svg";
import { ReactComponent as JavaScript } from "./assets/svgs/brands/js.svg";
import { ReactComponent as Reactjs } from "./assets/svgs/brands/react.svg";
import { ReactComponent as Bootstrap } from "./assets/svgs/brands/bootstrap.svg";
import { ReactComponent as Ejs } from "./assets/svgs/brands/ejs.svg";
import { ReactComponent as Jquery } from "./assets/svgs/brands/jquery.svg";
import { ReactComponent as Less } from "./assets/svgs/brands/less.svg";
import { ReactComponent as Git } from "./assets/svgs/brands/git-alt.svg";
import { ReactComponent as Github } from "./assets/svgs/brands/github.svg";
import { ReactComponent as Seo } from "./assets/svgs/brands/seo.svg";
import { ReactComponent as Security } from "./assets/svgs/brands/security.svg";
import { ReactComponent as Nodejs } from "./assets/svgs/brands/node.svg";
import { ReactComponent as Mongodb } from "./assets/svgs/brands/mongodb.svg";
import { ReactComponent as Express } from "./assets/svgs/brands/express.svg";
import { ReactComponent as Sql } from "./assets/svgs/brands/sql.svg";
import { ReactComponent as HyperTerminal } from "./assets/svgs/brands/hyperterminal.svg";
import { ReactComponent as Vscode } from "./assets/svgs/brands/vscode.svg";

function Home(){

  const [navIconClicked, setNavIconClicked] = useState("navbar-toggler-icon");
  const [isClicked, setIsClicked] = useState(false);

  const [fadeOutMenu, setFadeOutMenu] = useState({
    "-webkit-animation-name": "",
    "animation-name": "",
    "animation-duration": ""
  });
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const [fadeOutEffect, setfadeOutEffect] = useState({
    "-webkit-animation-name": "",
    "animation-name": "",
    "animation-duration": ""
  });

  $(function () {
    $(document).scroll(function () {
      var $nav = $("header");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });

  const [startingH1, clickH1] = useState("Hi, I'm Jeffin Jaison");
  const [startingH2, clickH2] = useState("A Full-Stack Web Developer");

  const [startingAboutH2, clickAboutH2] = useState("About Me");
  const [startingParagraph1, clickParagraph1] = useState("I'm a firm believer that anything is possible with persistence, and that opportunities presents itself with each stride.");
  const [startingParagraph2, clickParagraph2] = useState("I'm a second generation expatriate living in the Kingdom of Bahrain, and creating websites brings me joy as I'm able to fully express creatively, venture into new areas of knowledge everyday and solve problems that hold businesses back from gaining reach.");
  const [startingParagraph3, clickParagraph3] = useState("I currently work independently as a freelancer, however, I'm also available for hiring or collaborations.");

  const [startingSkillsH2, clickSkillsH2] = useState("Skills & Tools");
  const [skillListclassName, setSkillListclassName] = useState("skill-list");

  const [startingProjectsH2, clickProjectsH2] = useState("Projects");
  const [projectsTickerClassName, setProjectsTickerClassName] = useState("flex img-ticker ticker-stop")
  const [projectsReverseTickerClassName, setProjectsReverseTickerClassName] = useState("flex reverse-img-ticker ticker-stop")

  const [startingContactH2, setContactH2] = useState("Contact Me");
  const [contactFormClassName, setContactFormClassName] = useState("row align-items-stretch mb-5");
  const [contactButtonClassName, setContactButtonClassName] = useState("btn btn-xl btn-text-center");
  const [contactCopyrightClassName, setContactCopyrightClassName] = useState("copyright");

  const [faviconClassName, setfaviconClassName] = useState("logo");

  const year = new Date().getFullYear();

  $(".nav-link").on("click",function() {
    $(".navbar-collapse").collapse("hide");
    if("collapse navbar-collapse"){
      setNavIconClicked("navbarClicked2");
      clickH1("Hi, I'm Jeffin Jaison");
      clickH2("A Full-Stack Web Developer");
      clickAboutH2("About Me");
      clickParagraph1("I'm a firm believer that anything is possible with persistence, and that opportunities presents itself with each stride.");
      clickParagraph2("I'm a second generation expatriate living in the Kingdom of Bahrain, and creating websites brings me joy as I'm able to fully express creatively, venture into new areas of knowledge everyday and solve problems that hold businesses back from gaining reach.");
      clickParagraph3("I currently work independently as a freelancer, however, I'm also available for hiring or collaborations.");
      clickSkillsH2("Skills & Tools");
      setSkillListclassName("skill-list");
      clickProjectsH2("Projects");
      setProjectsTickerClassName("flex img-ticker ticker-stop");
      setProjectsReverseTickerClassName("flex reverse-img-ticker ticker-stop");
      setContactH2("Contact Me");
      setContactFormClassName("row align-items-stretch mb-5");
      setContactButtonClassName("btn btn-xl btn-text-center");
      setContactCopyrightClassName("copyright");
      setIsClicked(false);
      setfaviconClassName("logo");
    }else{
      setNavIconClicked("navbarClicked");
      clickH1("");
      clickH2("");
      clickAboutH2("");
      clickParagraph1("");
      clickParagraph2("");
      clickParagraph3("");
      clickSkillsH2("");
      setSkillListclassName("hidden");
      clickProjectsH2("");
      setProjectsTickerClassName("hidden");
      setProjectsReverseTickerClassName("hidden");
      setContactH2("");
      setContactFormClassName("hidden");
      setContactButtonClassName("hidden");
      setContactCopyrightClassName("hidden");
      setIsClicked(true);
      setfaviconClassName("hidden");
    }

    if (!isMenuClicked) {
      setFadeOutMenu({
        "-webkit-animation-name": "fadeInRight",
        "animation-name": "fadeInRight",
        "animation-duration": "1s"
      })
      setfadeOutEffect({
        "-webkit-animation-name": "fadeOutRight",
        "animation-name": "fadeOutRight",
        "animation-duration": "0.5s"
      })
      setIsMenuClicked(true);
    }
    else{
      setFadeOutMenu({
        "-webkit-animation-name": "fadeOutRight",
        "animation-name": "fadeOutRight",
        "animation-duration": "0.5s"
      })
      setfadeOutEffect({
        "-webkit-animation-name": "fadeInRight",
        "animation-name": "fadeInRight",
        "animation-duration": "1s"
      })
      setIsMenuClicked(false);
    }
  });

  function handleClick(){
    if (!isClicked) {
      setNavIconClicked("navbarClicked");
      clickH1("");
      clickH2("");
      clickAboutH2("");
      clickParagraph1("");
      clickParagraph2("");
      clickParagraph3("");
      clickSkillsH2("");
      setSkillListclassName("hidden");
      clickProjectsH2("");
      setProjectsTickerClassName("hidden");
      setProjectsReverseTickerClassName("hidden");
      setContactH2("");
      setContactFormClassName("hidden");
      setContactButtonClassName("hidden");
      setContactCopyrightClassName("hidden");
      setIsClicked(true);
      setfaviconClassName("hidden");
    }else{
      setNavIconClicked("navbarClicked2");
      clickH1("Hi, I'm Jeffin Jaison");
      clickH2("A Full-Stack Web Developer");
      clickAboutH2("About Me");
      clickParagraph1("I'm a firm believer that anything is possible with persistence, and that opportunities presents itself with each stride.");
      clickParagraph2("I'm a second generation expatriate living in the Kingdom of Bahrain, and creating websites brings me joy as I'm able to fully express creatively, venture into new areas of knowledge everyday and solve problems that hold businesses back from gaining reach.");
      clickParagraph3("I currently work independently as a freelancer, however, I'm also available for hiring or collaborations.");
      clickSkillsH2("Skills & Tools");
      setSkillListclassName("skill-list");
      clickProjectsH2("Projects");
      setProjectsTickerClassName("flex img-ticker ticker-stop");
      setProjectsReverseTickerClassName("flex reverse-img-ticker ticker-stop");
      setContactH2("Contact Me");
      setContactFormClassName("row align-items-stretch mb-5");
      setContactButtonClassName("btn btn-xl btn-text-center");
      setContactCopyrightClassName("copyright");
      setIsClicked(false);
      setfaviconClassName("logo");
    }

    if (!isMenuClicked) {
      setFadeOutMenu({
        "-webkit-animation-name": "fadeInRight",
        "animation-name": "fadeInRight",
        "animation-duration": "1s"
      })
      setfadeOutEffect({
        "-webkit-animation-name": "fadeOutRight",
        "animation-name": "fadeOutRight",
        "animation-duration": "0.5s"
      })
      setIsMenuClicked(true);
    }
    else{
      setFadeOutMenu({
        "-webkit-animation-name": "fadeOutRight",
        "animation-name": "fadeOutRight",
        "animation-duration": "0.5s"
      })
      setfadeOutEffect({
        "-webkit-animation-name": "fadeInRight",
        "animation-name": "fadeInRight",
        "animation-duration": "1s"
      })
      setIsMenuClicked(false);
    }
  };

  function createProjectSlide(slide) {
    return (
      <ProjectSlides
        key={slide.id}
        projectlink={slide.projectHREF}
        projectclassname={slide.projectCLASS}
        projectimg={slide.projectIMG}
        projectalt={slide.projectALT}
      />
    );
  }

    return (

      <>

  <section id="home" className="showcase">

  <video className="myVideo" src="assets/videos/code.mp4" playsInline autoPlay muted loop type="video/mp4"></video>
  <div className="overlay"></div>

      <h1 style={fadeOutEffect}>{startingH1}</h1>
      <h2 className="h2-title" style={fadeOutEffect}>{startingH2}</h2>

      <header>

      <a href="/">
      <img className={faviconClassName} src="assets/logo/favicon.ico" />
      </a>

        <div className="pos-f-t" id="my-navbar-collapse">
            <div className="collapse navbar-collapse" id="navbarToggleExternalContent">
              <div className="menu">

              <ul className="nav navbar-nav">
                <li>
              <a style={fadeOutMenu} className="nav-link nav-links" href="#home">Home</a>
            </li>
                  <li>
                    <a style={fadeOutMenu} className="nav-link nav-links" href="#about">About</a>
                  </li>
                  <li>
                    <a style={fadeOutMenu} className="nav-link nav-links" href="#skills">Skills & Tools</a>
                  </li>
                  <li>
                    <a style={fadeOutMenu} className="nav-link nav-links" href="#projects">Projects</a>
                  </li>
                  <li>
                    <a style={fadeOutMenu} className="nav-link nav-links" href="#contact">Contact</a>
                  </li>
                  <li>
                  <div style={fadeOutMenu}>
                    <a className="nav-link nav-links" href="Jeffin_Jaison_Resume.pdf"><svg className="download-button" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>Resume</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <nav className="navbar navbar-dark">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation"
              onClick={handleClick}>
                <span className={navIconClicked}></span>
              </button>
            </nav>
          </div>
        </header>

        </section>

        <section id="about" className="about-section color-1c323b">
            <div className="overlay2"></div>
            <div className="about-box-container">
            <div className="about-box-outline">
            <div className="about-title-bg">
            <h2 className="aboutH2" style={fadeOutEffect}>{startingAboutH2}</h2>
            </div>
            <p style={fadeOutEffect} className="paragraph-1">
            {startingParagraph1} <br /> <br />
            {startingParagraph2} <br /> <br />
            {startingParagraph3}
            </p>
            </div>
            </div>

      </section>

        <section id="skills" className="skills-section color-1c323b">
            <div className="overlay3"></div>

            <div className="skills-box-container">
            <div className="skills-box-outline">
            <div className="skills-title-bg">

            <h2 style={fadeOutEffect} className="skillsH2">{startingSkillsH2}</h2>

            <div style={fadeOutEffect} className={skillListclassName}>

            <Html style={fadeOutEffect} className="skill1 circle" />
            <p style={fadeOutEffect} className="skill1-text skill-font">HTML</p>

            <Css style={fadeOutEffect} className="skill2 circle" />
            <p style={fadeOutEffect} className="skill2-text skill-font">CSS</p>
            
            <JavaScript style={fadeOutEffect} className="skill3 circle" />
            <p style={fadeOutEffect} className="skill3-text skill-font">JavaScript</p>
            
            <Reactjs style={fadeOutEffect} className="skill4 circle" />
            <p style={fadeOutEffect} className="skill4-text skill-font">React</p>
            
            <Bootstrap style={fadeOutEffect} className="skill5 circle" />
            <p style={fadeOutEffect} className="skill5-text skill-font">Bootstrap</p>
            
            <Ejs style={fadeOutEffect} className="skill6 circle" />
            <p style={fadeOutEffect} className="skill6-text skill-font">EJS</p>
            
            <Jquery style={fadeOutEffect} className="skill7 circle" />
            <p style={fadeOutEffect} className="skill7-text skill-font">jQuery</p>
            
            <Less style={fadeOutEffect} className="skill8 circle" />
            <p style={fadeOutEffect} className="skill8-text skill-font">Less</p>
            
            <Git style={fadeOutEffect} className="skill9 circle" />
            <p style={fadeOutEffect} className="skill9-text skill-font">Git</p>
            
            <Github style={fadeOutEffect} className="skill10 circle" />
            <p style={fadeOutEffect} className="skill10-text skill-font">Github</p>
            
            <Seo style={fadeOutEffect} className="skill11 circle" />
            <p style={fadeOutEffect} className="skill11-text skill-font">SEO</p>
            
            <Security style={fadeOutEffect} className="skill12 circle" />
            <p style={fadeOutEffect} className="skill12-text skill-font">Security</p>
            
            <Nodejs style={fadeOutEffect} className="skill13 circle" />
            <p style={fadeOutEffect} className="skill13-text skill-font">Node.js</p>
            
            <Mongodb style={fadeOutEffect} className="skill14 circle" />
            <p style={fadeOutEffect} className="skill14-text skill-font">MongoDB</p>
            
            <Express style={fadeOutEffect} className="skill15 circle" />
            <p style={fadeOutEffect} className="skill15-text skill-font">Express</p>
            
            <Sql style={fadeOutEffect} className="skill16 circle" />
            <p style={fadeOutEffect} className="skill16-text skill-font">SQL</p>
            
            <HyperTerminal style={fadeOutEffect} className="skill17 circle" />
            <p style={fadeOutEffect} className="skill17-text skill-font">Hyper</p>
            
            <Vscode style={fadeOutEffect} className="skill18 circle" />
            <p style={fadeOutEffect} className="skill18-text skill-font">VS Code</p>

</div>

</div>

</div>

</div>


      </section> 

        <section id="projects" className="projects-section color-1c323b">

      <div className="overlay4"></div>
      <div className="projects-box-container">
      <div className="projects-box-outline">
      <div className="projects-title-bg">
            
            <h2 className="projectsH2" style={fadeOutEffect}>{startingProjectsH2}</h2>

            <div className="projects-inner">

<div style={fadeOutEffect} className="overflow-hidden">
  <div className={projectsTickerClassName}>

  {projects.map(createProjectSlide)}

  </div>
</div>

<br />
<br />

<div style={fadeOutEffect} class="overflow-hidden">
  <div class={projectsReverseTickerClassName}>

  {projects.map(createProjectSlide)}

  </div>
</div>

</div>

</div>

</div>

</div>

      </section>

      <section className="contact-section color-1c323b page-section" id="contact">
            <div className="container">
                <div className="text-center">
                    <h2 className="contactH2" style={fadeOutEffect}>{startingContactH2}</h2>
                </div>
                <form className="form" action="https://formsubmit.co/jeffinjaison.9@gmail.com" method="POST">
                <input type="hidden" name="_subject" value="New Client!" />
                    <div style={fadeOutEffect} className={contactFormClassName}>
                            <div className="form-group col-md-6">
                                <input className="form-control name-form" name="name" id="name" type="name" placeholder="Your Name" required />
                            </div>
                            <div className="form-group col-md-6">
                                <input className="form-control email-form" name="email" id="email" type="email" placeholder="Email Address" required />
                            </div>
                        <div className="col-md-12">
                            <div className="form-group form-group-textarea mb-md-0">
                                <textarea className="form-control message-form" name="message" id="message" type="message" placeholder="Your Messsage" required></textarea>
                            </div>
                        </div>
                    </div>
                    <button style={fadeOutEffect} className={contactButtonClassName} id="submitButton" type="submit">Send Message</button>
                </form>
            </div>

    <footer>
      <p style={fadeOutEffect} className={contactCopyrightClassName}>ⓒ {year} Jeffin Jaison</p>
    </footer>
    
        </section>

</>

)};

export default Home;