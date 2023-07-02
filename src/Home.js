import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

const Home = () => {
    return ( 
        <div className="home">
            <div className="backgroundImage" id="homeBackgroundImage">
                <h1 className="foregroundText" >Redécouvrez votre passion pour la lecture</h1>
            </div>
            <Row className='justify-content-md-center'>
                <Col className="col-4">
                    <div id="homeText">
                        <p style={{margin: "3rem"}}>Le premier jeudi du mois, trouvez-nous <br/>dans le coin de lecture de votre succursale <br/>de la Bibliothèque publique d'Ottawa.</p>
                        <Link to="/"></Link>
                    </div>
                </Col>
                <Col className="col-4">
                    <Link to="/vote">
                        <div style={{}}>
                            <p style={{textDecoration: "none", margin: "3rem", padding: "3rem", borderStyle: "solid", borderColor: "black", borderWidth: "3px", borderRadius: "40px"}}>Votez sur le prochain livre du mois<br/>dès maintenant!</p>
                        </div>
                    </Link>
                </Col>
            </Row>
        </div>
     );
}

export default Home;