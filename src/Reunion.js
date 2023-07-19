import {Row, Col, Dropdown} from 'react-bootstrap';

const Reunion = () => {
    
    
    return (
        <div className="Reunion">
            <Row style={{padding: "3rem"}}>
                <Col className='d-flex flex-column align-items-center'>
                    <h3>Prochaine Réunion:</h3>
                    <h3>jeudi le 3 août 2023</h3>
                    <h3>17h30 à 19h</h3>
                    <div className='purbleBubble'>
                        <h3>Rejoindre sur Zoom</h3>
                    </div>
                </Col>
                <Col>
                    <h3>Trouver ma succursale:</h3>
                    <Dropdown>
                        
                    </Dropdown>
                </Col>
            </Row>
            <Row>
                <img src={require('./assets/CarlingwoodLibrary.jpeg')} alt="" />
            </Row>
        </div>
    );
}
 
export default Reunion;