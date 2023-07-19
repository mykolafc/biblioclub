import { Row , Col , Carousel , Card } from 'react-bootstrap';

import tooGood from './assets/too-good-to-be-true-12.jpeg';

const Membres = () => {
    
    const readBooks = [
        {
            title: "Too Good To Be True", 
            author: "Erin Arvedlund", 
            img: tooGood, 
            id: 1
        },
        {
            title: "Too Good To Be True", 
            author: "Erin Arvedlund", 
            img: tooGood, 
            id: 2
        },
        {
            title: "Too Good To Be True", 
            author: "Erin Arvedlund", 
            img: tooGood, 
            id: 3
        },
        {
            title: "Too Good To Be True", 
            author: "Erin Arvedlund", 
            img: tooGood, 
            id: 4
        },
        {
            title: "Too Good To Be True", 
            author: "Erin Arvedlund", 
            img: tooGood, 
            id: 5
        },
        {
            title: "Too Good To Be True", 
            author: "Erin Arvedlund", 
            img: tooGood, 
            id: 6
        }
    ];

    const reduceBooks = (acc, cur, index) => {
        const groupIndex = Math.floor(index / 3);
        if (!acc[groupIndex]) acc[groupIndex] = [];
        acc[groupIndex].push(cur);
        console.log(acc);
        return acc;
      };
    
    
    return (
        <div className="Membres">
           <Row>
                <Col className='col-5' style={{overflow: "hidden"}}>
                    <img src={require('./assets/readingGroup.jpeg')} alt="image of local reading group" style={{width: "100%", height:"100%", objectFit: "cover", filter: "blur(4px)"}}/>
                </Col>
                <Col className='col-7' style={{margin: "3rem 0"}}>
                    <Row>
                        <Col className='d-flex flex-column align-self-center'>
                            <Row>
                                <h6>Ma Succursale</h6>
                            </Row>
                            <Row>
                                <h6>Blackburn Hamlet</h6>
                            </Row>
                            <Row>
                                <h6>199 Glen Park, K1B 5B8</h6>
                            </Row>
                        </Col>
                    </Row>
                    <div style={{width: "95%", borderStyle: "solid", borderColor: "black", borderWidth: "1px", margin: "1.5rem 0"}}></div>
                    <Row>
                        <Col className='d-flex flex-column align-self-center'>
                            <Row>
                                <h6>À lire:</h6>
                            </Row>
                            <Row>
                                <h6>Talking to Strangers</h6>
                            </Row>
                            <Row>
                                <h6>Malcolm Gladwell</h6>
                            </Row>
                        </Col>
                        <Col>
                            <img src={require('./assets/TalkingToStrangers.jpeg')} alt="Talking to Strangers by Malcolm Gladwell" style={{height: "15rem"}}></img>
                        </Col>
                    </Row>
                    <div style={{width: "95%", borderStyle: "solid", borderColor: "black", borderWidth: "1px", margin: "1.5rem 0"}}></div>
                    <Row>
                        <Col className='d-flex flex-column align-self-center'>
                            <Row>
                                <h6>Déjà lu:</h6>
                            </Row>
                            <Row>
                                <Carousel variant="dark">
                                    {readBooks.reduce(reduceBooks, []).map((item, index) => (
                                    <Carousel.Item key={index}>
                                        <div className="d-flex justify-content-center">
                                        {item.map((item, index) => {
                                            return (
                                            <Card className='readBookCard' key={index}>
                                                <Card.Img variant="top" src={item.img} style={{height: "15rem"}}/>
                                                <Card.Body>
                                                    <Card.Title>{item.title}</Card.Title>
                                                    <i>{item.author}</i>
                                                </Card.Body>
                                            </Card>
                                            );
                                        })}
                                        </div>
                                    </Carousel.Item>
                                    ))}
                                </Carousel>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}
 
export default Membres
