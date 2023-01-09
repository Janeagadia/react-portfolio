import React from "react";
import image1 from "../asset/bito naturals screenshot.PNG";
import image2 from "../asset/bitos dashboard pic.PNG";
import image3 from "../asset/jubilee hotels.PNG";
import image4 from "../asset/food recipe screenshot.PNG";
import image5 from "../asset/Omnifood pic.PNG";
import image6 from "../asset/jauit screenshot.PNG";

const projectDataDetails = [
  {
    title: "Bito-Naturals Homepage",
    image: image1,
    link: "https://bito-homepage.netlify.app/",
    description: " A bdjsjkd ubihdihwushi ",
    tools: ["HTML5", "CSS3", "JavaScript", "Gulp"],
  },
  {
    title: "Bito-Naturals Dashboard",
    image: image2,
    link: "https://bito-login.netlify.app/dashboard.html",
    description: " A bdjsjkd ubihdihwushi ",
    tools: ["HTML5", "CSS3", "JavaScript", "Gulp"],
  },
  {
    title: "Jubilee Hotels",
    image: image3,
    link: "https://jubileehotels.netlify.app/",
    description: " A bdjsjkd ubihdihwushi ",
    tools: ["HTML5", "CSS3", "JavaScript", "Gulp"],
  },
  {
    title: "Nigeria Recipes",
    image: image4,
    link: "https://nigeriantastydelicacies.netlify.app/",
    description: " A bdjsjkd ubihdihwushi ",
    tools: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    title: "Omnifood Homepage",
    image: image5,
    link: "https://omnifood.dev/",
    description: " A site for ordering food ",
    tools: ["HTML5", "CSS3", "JavaScript", "Gulp"],
  },
  {
    title: "Jauit Homepage",
    image: image6,
    link: "https://jauitwebsiteclone.netlify.app/",
    description: " A bdjsjkd ubihdihwushi ",
    tools: ["HTML5", "CSS3", "JavaScript", "Gulp"],
  },
];

const ProjectData = projectDataDetails.map((proj) => {
  return (
    <div key={proj.title} className="project">
      {" "}
      <a target="_blank" rel="noopener noreferrer" href={proj.link}>
        <img src={proj.image} alt={proj.title} />{" "}
      </a>
    </div>
  );
});

export default ProjectData;
