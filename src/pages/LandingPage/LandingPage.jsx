import React from 'react';
import './LandingPage.scss';
import Sky from '../../components/Sky/Sky';
import bird from '../../assets/images/bird.gif';
import rope from '../../assets/images/rope.png';
import fish from '../../assets/images/fish.gif';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Navigation from '../../components/Navigation/Navigation';
import ProjectsList from '../../components/ProjectsList/ProjectsList';

export default function LandingPage(){
  return (
    <HelmetProvider>
      <Navigation />
      <div id="home" className="landing-page__container">
        <section id="landing" className="landing-page">
          <Helmet>
            <title>John Ray Martinez | Web Developer</title>
          </Helmet>
          <Sky />
          <div className="landing-page__title">
            <img className="landing-page__bird--left" src={bird} alt="bird" />
            <img className="landing-page__bird--right" src={bird} alt="bird" />
            <img className="landing-page__rope--left" src={rope} alt="rope" />
            <img className="landing-page__rope--right" src={rope} alt="rope" />
            <h1 className="landing-page__title--name">JOHN RAY MARTINEZ</h1>
            <h2 className="landing-page__subtitle">W E B &nbsp; D E V E L O P E R </h2> <br/>
          </div>
        </section>
        <div className="landing-page__sky-space"></div>
        <div id="sea" className="landing-page__sea">
          <img className="landing-page__sea-fish" src={fish} alt="fish" />
          <img className="landing-page__sea-fish--2" src={fish} alt="fish" />
          <img className="landing-page__sea-fish--3" src={fish} alt="fish" />
          <img className="landing-page__sea-fish--4" src={fish} alt="fish" />
          <img className="landing-page__sea-fish--5" src={fish} alt="fish" />
          <h2 className="landing-page__title--name text-center pt-30">
            P R O J E C T S
          </h2>
          <div>
            <ProjectsList />
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
}