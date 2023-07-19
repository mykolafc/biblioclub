import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Dropdown, Row, Col, Container } from 'react-bootstrap';
import globe from './assets/globe.svg';

const Navbar = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="navbar">
      <Container fluid className='navbar-container'>
        <Row className='navbar-row justify-content-end'>
          <Col xs={12} md={3} style={{textAlign:"center"}} className='navbar-col'>
            <Link to='/home'><h1>BiblioClub</h1></Link>
          </Col>
          <Col xs={12} md={6} className='navbar-col d-flex align-items-center justify-content-around'>
            <Row className="links">
                <Col xs={12} md={6} style={{textAlign:"center"}} className='navbar-col'>
                    <Link to="/membres">Centre des Membres</Link>
                </Col>
                <Col xs={12} md={4} style={{textAlign:"center"}} className='navbar-col'>
                    <Link to="/livre-du-mois">Livre du Mois</Link>
                </Col>
                <Col xs={12} md={2} style={{textAlign:"center", paddingLeft: "1.5rem"}} className='navbar-col'>
                    <Link to="/reunion">Réunions</Link>
                </Col>
            </Row>
          </Col>
          <Col xs={12} md={3} className='navbar-col d-flex align-items-center justify-content-end'>
            <Dropdown>
              <Dropdown.Toggle id='langButton' >
                <img src={globe} id='globe' alt="Globe" />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => changeLanguage('en')} style={{color:"black"}}>EN</Dropdown.Item>
                <Dropdown.Item onClick={() => changeLanguage('fr')} style={{color:"black"}}>FR</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Container>
    </nav>
  );
}

export default Navbar;