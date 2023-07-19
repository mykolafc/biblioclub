import { Row, Col, Card, Button } from 'react-bootstrap';

const Livre = () => {
    return (
        <div className="Livre">
            <Row>
                <Col>
                    <div className="purbleBubble">
                        <Row>
                            <Col>
                                <Row>
                                    <img src={require('./assets/MalcolmGladwell.jpeg')} alt="Malcolm Gladwell" style={{borderRadius: "50%", height: "15rem", width: "17rem", margin: "3rem"}}/>
                                </Row>
                                <Row>
                                    <h3>Talking to Strangers</h3>
                                    <h3>by Malcolm Gladwell</h3>
                                    <h6>"What we should know about the people we don't"</h6>
                                </Row>
                            </Col>
                            <Col>
                                <img src={require('./assets/3D_TalkingToStrangers.png')} alt="Talking to Strangers - Malcolm Gladwell" style={{height: "100%"}}/>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
            <Row className='justify-content-around'>
                <Col className="purbleBubble col-3 d-flex flex-column align-items-center">
                    <h4>Download the PDF</h4>
                    <Button>download</Button>
                </Col>
                <Col className="purbleBubble col-3 d-flex flex-column align-items-center">
                    <h4>Reserve a hard copy</h4>
                    <Button>reserve</Button>
                </Col>
                <Col className="purbleBubble col-3 d-flex flex-column align-items-center">
                    <h4>Download the audiobook</h4>
                    <Button>download</Button>
                </Col>
            </Row>
        </div>
    );
}
 
export default Livre;