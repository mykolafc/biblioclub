import { Row , Col } from 'react-bootstrap';

import ReadingGroup from './assets/readingGroup.jpeg'


const Membres = () => {
    return (
        <div className="Membres">
            <Row>
                <Col className='col-4'>
                    <div style={{overflow: "hidden"}}>
                        <img src={ReadingGroup} alt="" style={{maxWidth: "100%", filter: "blur(6px)"}}/>
                    </div>
                </Col>
                <Col className='col-6'>
                    <Row>
                        <Col>
                            <h3>Ma Succursale</h3>
                            
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}
 
export default Membres
