import { Row , Col , Carousel , Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import tooGood from './assets/too-good-to-be-true-12.jpeg';
import braving from './assets/BravingTheWilderness.jpeg';
import subtle from './assets/subtle.jpeg';
import lotf from './assets/LoTF.jpeg';
import meditations from './assets/meditations.jpeg';
import quirk from './assets/quirkology.jpeg';

const Membres = () => {
    
    const { t } = useTranslation();

    const readBooks = [
        {
            title: "Too Good To Be True", 
            author: "Erin Arvedlund", 
            img: tooGood, 
            id: 1
        },
        {
            title: "Braving The Wilderness", 
            author: "Brené Brown", 
            img: braving, 
            id: 2
        },
        {
            title: "The Subtle Art of not Giving a F*ck", 
            author: "Mark Manson", 
            img: subtle, 
            id: 3
        },
        {
            title: "Lord of the Flies", 
            author: "William Golding", 
            img: lotf, 
            id: 4
        },
        {
            title: "Meditations", 
            author: "Marcus Aurelius", 
            img: meditations, 
            id: 5
        },
        {
            title: "Quirkology", 
            author: "Richard Wiseman", 
            img: quirk, 
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
                        <Col className='col-4 d-flex flex-column align-self-center'>
                            <Row>
                                <h6>{t('branch')}</h6>
                            </Row>
                            <Row>
                                <h6>Blackburn Hamlet</h6>
                            </Row>
                            <Row>
                                <h6>199 Glen Park, K1B 5B8</h6>
                            </Row>
                        </Col>
                        <Col className="col-8">
                            <Link to="/vote">
                                <div className='purbleBubble' id='voteBubble'>
                                    <h5>{t('vote')}</h5>
                                </div>
                            </Link>
                        </Col>
                    </Row>
                    <div style={{width: "95%", borderStyle: "solid", borderColor: "black", borderWidth: "1px", margin: "1.5rem 0"}}></div>
                    <Row>
                        <Col className='d-flex flex-column align-self-center'>
                            <Row>
                                <h6>{t('alire')}</h6>
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
                                <h6>{t('dejalu')}</h6>
                            </Row>
                            <Row>
                                <Carousel variant="dark">
                                    {readBooks.reduce(reduceBooks, []).map((item, index) => (
                                    <Carousel.Item key={index}>
                                        <div className="d-flex justify-content-center">
                                        {item.map((item, index) => {
                                            return (
                                            <Card className='readBookCard' key={index} style={{backgroundColor: "#AD9CDF", width: "12rem"}}>
                                                <Card.Img variant="top" src={item.img} style={{height: "15rem", width: "10rem", objectFit: "cover", alignSelf: "center", padding: "1rem"}}/>
                                                <Card.Body style={{backgroundColor: "#AD9CDF"}}>
                                                    <div>
                                                        <Card.Title>{item.title}</Card.Title>
                                                        <i>{item.author}</i>
                                                    </div>
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
