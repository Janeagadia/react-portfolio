import React from "react";
import image1 from "../asset/bito naturals screenshot.PNG";
import image2 from "../asset/bitos dashboard pic.PNG";
import image3 from "../asset/jubilee hotels.PNG";
import image4 from "../asset/Omnifood pic.PNG";
import image5 from "../asset/food recipe screenshot.PNG";
import image6 from "../asset/jauit screenshot.PNG";

const projectDataDetails = [
  {
    title: "Bito-Naturals Homepage",
    image: image1,
    link: "https://bito-homepage.netlify.app/",
    description: " A mini e-commerce site for hair care products ",
    tools: ["HTML5", "CSS3", "JavaScript", "Gulp"],
  },
  {
    title: "Bito-Naturals Dashboard",
    image: image2,
    link: "https://bito-login.netlify.app/dashboard.html",
    description:
      " The dashboard of Bito natural site when a user signs up and sign in ",
    tools: ["HTML5", "CSS3", "JavaScript", "Gulp"],
  },
  {
    title: "Jubilee Hotels",
    image: image3,
    link: "https://jubileehotels.netlify.app/",
    description: " An hotel website ",
    tools: ["HTML5", "CSS3", "JavaScript", "Gulp"],
  },
  {
    title: "Omnifood Homepage",
    image: image4,
    link: "https://omnifood.dev/",
    description: " A site for ordering food ",
    tools: ["HTML5", "CSS3", "JavaScript", "Gulp"],
  },
  {
    title: "Nigeria Recipes",
    image: image5,
    link: "https://nigeriantastydelicacies.netlify.app/",
    description: " A site that displays various Nigerian recipies ",
    tools: ["HTML5", "CSS3"],
  },

  {
    title: "Jauit Homepage",
    image: image6,
    link: "https://jauitwebsiteclone.netlify.app/",
    description: " A clone of the Jauit website ",
    tools: ["HTML5", "CSS3", "JavaScript"],
  },
];

// const pgg = [projectDataDetails.tools];

// pgg.forEach((element) => {
//   return console.log(element);
// });

const ProjectData = projectDataDetails.map((proj) => {
  return (
    <div key={proj.title} className="project">
      {" "}
      <a target="_blank" rel="noopener noreferrer" href={proj.link}>
        <img src={proj.image} alt={proj.title} />{" "}
      </a>
      <div className="project-description">
        <div className="project-description-title">{proj.title}</div>
        <div className="project-description-text">{proj.description}</div>
        <div className="project-description-tools">
          {/* {projectDescriptionTools} */}
        </div>
      </div>
    </div>
  );
});

export default ProjectData;
