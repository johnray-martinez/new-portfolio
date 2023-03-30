import { useState, useCallback, memo } from 'react';
import './BusinessCard.scss';
import linkedInIcon from '../../assets/icons/linkedin.png';
import githubIcon from '../../assets/icons/github.png';
import emailIcon from '../../assets/icons/email.png';
import downloadIcon from '../../assets/icons/download.png';

const BusinessCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
  },[])

  const closeModal = useCallback(() => {
    setIsOpen(false);
  },[])

  const copyEmailToClipboard = useCallback(() => {
    navigator.clipboard.writeText("jrmartinez@gmail.com");
  }, [])

  return (<>
    <a className="business-card__toggle" onClick={openModal}>Contact</a>
    {isOpen ? <div className="business-card">
      <div onClick={closeModal} className="business-card__overlay"></div>
      <div className="business-card__content">
        <div className="business-card__header-title">
          <h2>JOHNRAY <span className="business-card__header-title--orange">MARTINEZ</span></h2>
          <p>Web Developer</p>
        </div>
        <div className="business-card__contacts">
          <a className="business-card__contact-item" href="https://www.linkedin.com/in/john-ray-martinez/" rel="noreferrer" target="_blank">
            <img className="business-card__icon" src={linkedInIcon} /> Linkedin
          </a>
          <a className="business-card__contact-item" href="https://github.com/johnray-martinez" rel="noreferrer" target="_blank">
            <img className="business-card__icon" src={githubIcon} />
            Github
          </a>
          <a className="business-card__contact-item" 
            target="_blank"
            href="https://docs.google.com/document/d/1GufFLkE-u9PYio7KaJPro_9uryHJDTmPcNUTSaCTY20/edit?usp=sharing">
            <img className="business-card__icon" src={downloadIcon} />
            Resume
          </a>
          <p className="business-card__contact-item" onClick={copyEmailToClipboard}>
            <img className="business-card__icon" src={emailIcon} />
            jrmartinez@gmail.com
          </p>
        </div>
      </div>
    </div> : null}
  </>
  )
}

export default memo(BusinessCard)