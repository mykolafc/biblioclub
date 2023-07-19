import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Home = () => {

    const { t } = useTranslation();

    return ( 
        <div className="home">
            <div className="backgroundImage" id="homeBackgroundImage">
                <Row>
                    <h1 className="foregroundText">{t('welcome')}</h1>
                </Row>
            </div>
            <Row className='justify-content-md-center'>
                <Col className="col-4 d-flex align-items-center">
                    <div id="homeText">
                        <h5 style={{margin: "3rem"}}>{t('homeText')}</h5>
                        <Link to="/"></Link>
                    </div>
                </Col>
                <Col className="col-4">
                    <Link to="/vote">
                        <div className='purbleBubble' id='voteBubble'>
                            <h5>{t('vote')}</h5>
                        </div>
                    </Link>
                </Col>
            </Row>
        </div>
     );
}

export default Home;