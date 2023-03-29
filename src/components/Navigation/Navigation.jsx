import './Navigation.scss';
import BusinessCard from '../BusinessCard/BusinessCard';

const Navigation = () => {
  return (
    <nav className="navigation">
      <a href="#home">Home</a>
      <a href="#sea">Projects</a>
      <BusinessCard />
    </nav>
  )
}

export default Navigation;