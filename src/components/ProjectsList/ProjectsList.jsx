import React from 'react';
import Project from '../Project/Project';
import suber1 from '../../assets/images/suber1.png';
import suber2 from '../../assets/images/suber2.png';
import suber3 from '../../assets/images/suber3.png';
import suber4 from '../../assets/images/suber4.png';
import suber5 from '../../assets/images/suber5.png';
import suber6 from '../../assets/images/suber6.png';
import bttw1 from '../../assets/images/bttw1.jpg';
import bttw2 from '../../assets/images/bttw2.jpg';
import bttw3 from '../../assets/images/bttw3.jpg';
import ca1 from '../../assets/images/ca1.jpg';
import ca2 from '../../assets/images/ca2.jpg';
import c1 from '../../assets/images/c1.jpg';
import c2 from '../../assets/images/c2.jpg';
import c3 from '../../assets/images/c3.jpg';
import c4 from '../../assets/images/c4.jpg';
import c5 from '../../assets/images/c5.jpg';
import t1 from '../../assets/images/t1.jpg';
import t2 from '../../assets/images/t2.jpg';
import './ProjectsList.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function ProjectsList(){
  let projects = [
    {
      name: "Tix",
      description: "A kanban board application where you can create an account and manage a project and also allowing to have conversations on each ticket",
      githubLink: 'https://github.com/johnray-martinez/jira-ticketing-clone',
      link: "https://tix-application.vercel.app/",
      photos: [t1,t2],
      construction: true,
    },
    {
      name: "Crwn Clothing",
      description: "A mock e-commerce shopping platform where you can create an account and log in, add products to cart and check out with stripe.",
      githubLink: 'https://github.com/johnray-martinez/crwn-clothing',
      link: "https://crown-clothing-jrvm.netlify.app/",
      photos: [c1,c2,c3,c4,c5],
      construction: false,
    },
    {
      name: "Süber",
      description: "An arcade driving game that punishes players for falling asleep or getting drunk in game. An effort to raise awareness on DUI",
      githubLink: 'https://github.com/johnray-martinez/capstone-suber',
      link: "https://subergame.netlify.com/",
      photos: [suber1,suber2,suber3,suber4,suber5,suber6],
      construction: false,
      demoLink: "https://www.loom.com/share/c3b15d35e7874d2e8ec41575a4e7a229"
    },
    {
      name: "BetterThanTheWeather",
      description: "A dashboard app that shows your local time and changes the background depending on the weather and time in your area",
      githubLink: 'https://github.com/johnray-martinez/better-than-the-weather',
      link: "https://bttweather.netlify.com/",
      construction: false,
      photos: [bttw1,bttw2,bttw3]
    },
    {
      name: "Untitled Chat-app",
      description: "A looking for group chat app that can be used by people to connect to other people with the same interests. ",
      githubLink: 'https://github.com/johnray-martinez/chat-app',
      link: "https://chat-app-22717.web.app/",
      construction: true,
      photos: [ca1,ca2],
    }
  ]
  return(
    <div className="projects-list">
      {projects.map((project,i)=><Project key={i} project={project}/>)}
    </div>
  );
}