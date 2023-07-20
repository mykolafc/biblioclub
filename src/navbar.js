import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Dropdown, Row, Col, Container, Button, Modal, Form } from 'react-bootstrap';
import globe from './assets/globe.svg';
import { useState } from 'react';

const Navbar = ({approveLogin}) => {

  const [loginText, setLoginText] = useState('login');

  const [showModal, setShowModal] = useState(false);

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();


  const { i18n } = useTranslation();

  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('lang', i18n.language);
  };

  const handleClick = () => {
    if(loginText === 'login'){
      setPassword('');
      setUsername('');
      setShowModal(true);
    }
    else{
      setLoginText('login');
      localStorage.setItem('reserved', 'false');
      localStorage.setItem('voted', 'false');
      alert(t('loggedOut'));
    }
  }

  const handleClose = () => {
      setShowModal(false);
  }

  const handleSubmit = () => {
    if(password === 'admin'){
      setLoginText('logout');
      handleClose();
    }
    else {
      alert(t('incorrect'));
    }
  }

  return (
    <nav className="navbar">
      <Container fluid className='navbar-container'>
        <Row className='navbar-row justify-content-end'>
          <Col xs={12} md={3} style={{textAlign:"center"}} className='navbar-col'>
            <Link to='/home'><h1>BiblioClub</h1></Link>
          </Col>
          <Col xs={12} md={7} className='navbar-col d-flex align-items-center justify-content-around'>
            <Row className="links">
                <Col xs={12} md={6} style={{textAlign:"center"}} className='navbar-col d-flex flex-column align-self-center'>
                    <Link to="/membres">{t('membres')}</Link>
                </Col>
                <Col xs={12} md={4} style={{textAlign:"center"}} className='navbar-col d-flex flex-column align-self-center'>
                    <Link to="/livre-du-mois">{t('livre')}</Link>
                </Col>
                <Col xs={12} md={2} style={{textAlign:"center", paddingLeft: "1.5rem"}} className='navbar-col d-flex flex-column align-self-center'>
                    <Link to="/reunion">{t('reunion')}</Link>
                </Col>
            </Row>
          </Col>
          <Col xs={12} md={2} className='navbar-col d-flex align-items-center justify-content-end'>
            <Button className='mx-3' id="loginButton" onClick={handleClick}>
              {t(loginText)}
            </Button>
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
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton style={{backgroundColor: "#AD9CDF"}}>
            <Modal.Title>{t('login')}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor: "#AD9CDF"}}>
          <Form>
            <Form.Group>
              <Form.Label>{t('user')}</Form.Label>
              <Form.Control type='text' value={username} onChange={(event) => setUsername(event?.target.value)}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>{t('pass')}</Form.Label>
              <Form.Control type='password' value={password} onChange={(event) => setPassword(event?.target.value)}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer style={{backgroundColor: "#AD9CDF"}}>
            <Button variant="secondary" onClick={handleClose}>
                {t('close')}
            </Button>
            <Button type='submit' onClick={handleSubmit}>
                {t('login')}
            </Button>
        </Modal.Footer>
      </Modal>
    </nav>
  );
}

export default Navbar;