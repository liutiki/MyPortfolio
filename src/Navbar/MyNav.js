import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './MyNav.css';

function MyNav() {
  const [scrolled, setScrolled] = useState(false);

  const {i18n, t}=useTranslation()

  const toggleLang =() =>{
      i18n.changeLanguage(i18n.language === 'en'? 'ru' : 'en')
  }
  

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar expand="lg" className={scrolled ? 'mynav scrolled fixed-top' : 'mynav fixed-top'}>
      <Container>
      <Navbar.Brand > <button className="lanButton"onClick ={toggleLang}>{i18n.language === 'en' ? "RU" : "EN"}</button></Navbar.Brand>
        <Navbar.Brand href="/">JK WEB</Navbar.Brand>
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">{t('Home')}</Nav.Link>
            <Nav.Link href="/AboutMe">{t('About')}</Nav.Link>
            <Nav.Link href="/Projects">{t('Projects')}</Nav.Link>
            <Nav.Link href="/Contacts">{t('Contacts')}</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;

