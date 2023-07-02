import { useState } from 'react';
import { Row , Col , Card , Dropdown , Form } from 'react-bootstrap';

import talkingToStrangers from './assets/TalkingToStrangers.jpeg';
import dareToLead from './assets/DareToLead.jpeg';
import storyteller from './assets/Storyteller.jpeg';
import surrender from './assets/Surrender.jpeg';

const Vote = () => {

    const [books, setBooks] = useState([
        {
            title: "Talking to Strangers", 
            author: "Malcolm Gladwell", 
            img: talkingToStrangers, 
            genre: "Self-Help",
            id: 1
        },
        {
            title: "Dare to Lead", 
            author: "Brené Brown", 
            img: dareToLead, 
            genre: "Self-Help",
            id: 2
        },
        {
            title: "The Storyteller",
            author: "Dave Grohl",
            img: storyteller,
            genre: "Autobiography",
            id: 3
        },
        {
            title: "Surrender",
            author: "Bono",
            img: surrender,
            genre: "Autobiography",
            id: 4
        }
    ]);

    const [selectedGenre, setSelectedGenre] = useState('All');

    const handleGenreChange = (genre) => {
        setSelectedGenre(genre);
    };

    function handleClick() {
        alert("Vote received");
    }

    let filteredCards = selectedGenre === 'All' ? books : books.filter(book => book.genre === selectedGenre);


    return (
        <div className="vote">
            <Row className='justify-content-center'>
                <Col style={{textAlign: 'center'}}>
                    <h1 style={{marginTop: '3rem'}}>Explorez notre sélection</h1>
                    <div className="mb-4">
                        <Dropdown>
                            <Dropdown.Toggle className='dropdownToggle'>
                                Filtrer par Genre
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item active={selectedGenre === 'All'} onClick={() => handleGenreChange('All')}>All</Dropdown.Item>
                                <Dropdown.Item active={selectedGenre === 'Self-Help'} onClick={() => handleGenreChange('Self-Help')}>Self-Help</Dropdown.Item>
                                <Dropdown.Item active={selectedGenre === 'Autobiography'} onClick={() => handleGenreChange('Autobiography')}>Autobiography</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </Col>
            </Row>
            <Row>
                <div className="card-container justify-content-center" style={{ display: "flex", flexWrap: "wrap" }}>
                    {filteredCards.map((card) => (
                        <Card className='voteCard' key={card.id} style={{ width: '14rem', padding: '1rem', margin: '1rem 3rem'}} onClick={handleClick} >
                            <Card.Img src={ card.img }/>
                            <Card.Body>
                                <Card.Title style={{fontWeight: 'bold'}}>{card.title}</Card.Title>
                                <Card.Text style={{fontStyle: 'italic'}}>{card.author}</Card.Text>
                                <Card.Text className="ratings" >{card.ratingsUsers}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </Row>
        </div>
    );
}
 
export default Vote;