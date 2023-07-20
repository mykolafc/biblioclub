import { useState } from 'react';
import { Row , Col , Card , Dropdown } from 'react-bootstrap';

import talkingToStrangers from './assets/TalkingToStrangers.jpeg';
import dareToLead from './assets/DareToLead.jpeg';
import storyteller from './assets/Storyteller.jpeg';
import surrender from './assets/Surrender.jpeg';
import blink from './assets/blink_malcom_gladwell.jpeg';
import theTippingPoint from './assets/The-tipping-point.jpeg';
import theBomberMafia from './assets/BomberMafia.jpeg';
import hitchhiker from './assets/hitchhiker.jpeg';
import princessBride from './assets/The-Princess-Bride.jpeg';
import postmortal from './assets/postmortal.jpeg';
import trial from './assets/the-trial.jpeg';
import metamorphosis from './assets/metamorphosis.jpeg';
import castle from './assets/the-castle.jpeg';
import amerika from './assets/Amerika.png';
import oms from './assets/the-old-man-and-the-sea-69.jpeg';
import becoming from './assets/becoming.jpeg';
import { useTranslation } from 'react-i18next';


const Vote = () => {

    const { t } = useTranslation()

    const books = [
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
        },
        {
            title: "Blink",
            author: "Malcolm Gladwell",
            img: blink,
            genre: "Self-Help",
            id: 5
        },
        {
            title: "The Tipping Point",
            author: "Malcolm Gladwell",
            img: theTippingPoint,
            genre: "Self-Help",
            id: 6
        },
        {
            title: "The Bomber Mafia",
            author: "Malcolm Gladwell",
            img: theBomberMafia,
            genre: "Self-Help",
            id: 7
        },
        {
            title: "The Hitchhiker's Guide to the Galaxy",
            author: "Douglas Adams",
            img: hitchhiker,
            genre: "Science-Fiction Humour",
            id: 8
        },
        {
            title: "The Princess Bride",
            author: "S. Morgenstern",
            img: princessBride,
            genre: "Fantasy Fiction Humour",
            id: 9
        },
        {
            title: "Postmortal",
            author: "Drew Magary",
            img: postmortal,
            genre: "Science-Fiction Humour",
            id: 10
        },
        {
            title: "The Trial",
            author: "Franz Kafka",
            img: trial,
            genre: "Absurdist Fiction",
            id: 11
        },
        {
            title: "The Metamorphosis",
            author: "Franz Kafka",
            img: metamorphosis,
            genre: "Absurdist Fiction",
            id: 12
        },
        {
            title: "The Castle",
            author: "Franz Kafka",
            img: castle,
            genre: "Absurdist Fiction",
            id: 13
        },
        {
            title: "Amerika",
            author: "Franz Kafka",
            img: amerika,
            genre: "Absurdist Fiction",
            id: 14
        },
        {
            title: "The Old Man and the Sea",
            author: "Ernest Hemingway",
            img: oms,
            genre: "Fiction",
            id: 15
        },
        {
            title: "Becoming",
            author: "Michelle Obama",
            img: becoming,
            genre: "Autobiography Self-Help",
            id: 16
        },
    ];

    const [selectedGenre, setSelectedGenre] = useState('All');
    const [selectedAuthor, setSelectedAuthor] = useState('All');

    const handleGenreChange = (genre) => {
        setSelectedGenre(genre);
    };
    const handleAuthorChange = (author) => {
        setSelectedAuthor(author);
    }

    function handleClick() {
        if(localStorage.getItem('voted') === 'true'){
            alert(t('vone'));
        }
        else{
            alert(t('vrec'));
            localStorage.setItem('voted', 'true');
        }
    }

    let filteredGenreCards = selectedGenre === 'All' ? books : books.filter(book => book.genre.includes(selectedGenre));
    let filteredCards = selectedAuthor === 'All' ? filteredGenreCards : filteredGenreCards.filter(book => book.author.includes(selectedAuthor));


    return (
        <div className="vote">
            <Row className='justify-content-center'>
                <Col style={{textAlign: 'center'}}>
                    <h1 style={{marginTop: '3rem'}}>{t('explore')}</h1>
                    <Row className="mb-4">
                        <Col>
                            <Dropdown>
                                <Dropdown.Toggle className='dropdownToggle'>
                                    {t('genre')}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item active={selectedGenre === 'All'} onClick={() => handleGenreChange('All')}>{t('all')}</Dropdown.Item>
                                    <Dropdown.Item active={selectedGenre === 'Autobiography'} onClick={() => handleGenreChange('Autobiography')}>{t('abio')}</Dropdown.Item>
                                    <Dropdown.Item active={selectedGenre === 'Self-Help'} onClick={() => handleGenreChange('Self-Help')}>{t('shelp')}</Dropdown.Item>
                                    <Dropdown.Item active={selectedGenre === 'Fantasy'} onClick={() => handleGenreChange('Fantasy')}>{t('fantasy')}</Dropdown.Item>
                                    <Dropdown.Item active={selectedGenre === 'Fiction'} onClick={() => handleGenreChange('Fiction')}>Fiction</Dropdown.Item>
                                    <Dropdown.Item active={selectedGenre === 'Humour'} onClick={() => handleGenreChange('Humour')}>{t('funny')}</Dropdown.Item>
                                    <Dropdown.Item active={selectedGenre === 'Science-Fiction'} onClick={() => handleGenreChange('Science-Fiction')}>Science-Fiction</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                        <Col>
                            <Dropdown>
                                <Dropdown.Toggle className='dropdownToggle'>
                                    {t('author')}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item active={selectedGenre === 'All'} onClick={() => handleAuthorChange('All')}>{t('all')}</Dropdown.Item>
                                    <Dropdown.Item active={selectedGenre === 'Bono'} onClick={() => handleAuthorChange('Bono')}>Bono</Dropdown.Item>
                                    <Dropdown.Item active={selectedGenre === 'Brené Brown'} onClick={() => handleAuthorChange('Brené Brown')}>Brené Brown</Dropdown.Item>
                                    <Dropdown.Item active={selectedGenre === 'Dave Grohl'} onClick={() => handleAuthorChange('Dave Grohl')}>Dave Grohl</Dropdown.Item>
                                    <Dropdown.Item active={selectedGenre === 'Douglas Adams'} onClick={() => handleAuthorChange('Douglas Adams')}>Douglas Adams</Dropdown.Item>
                                    <Dropdown.Item active={selectedGenre === 'Drew Magary'} onClick={() => handleAuthorChange('Drew Magary')}>Drew Magary</Dropdown.Item>
                                    <Dropdown.Item active={selectedGenre === 'Ernest Hemingway'} onClick={() => handleAuthorChange('Ernest Hemingway')}>Ernest Hemingway</Dropdown.Item>
                                    <Dropdown.Item active={selectedGenre === 'Franz Kafka'} onClick={() => handleAuthorChange('Franz Kafka')}>Franz Kafka</Dropdown.Item>
                                    <Dropdown.Item active={selectedGenre === 'Malcolm Gladwell'} onClick={() => handleAuthorChange('Malcolm Gladwell')}>Malcolm Gladwell</Dropdown.Item>
                                    <Dropdown.Item active={selectedGenre === 'Michelle Obama'} onClick={() => handleAuthorChange('Michelle Obama')}>Michelle Obama</Dropdown.Item>
                                    <Dropdown.Item active={selectedGenre === 'S. Morgenstern'} onClick={() => handleAuthorChange('S. Morgenstern')}>S. Morgenstern</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <div className="card-container justify-content-center" style={{ display: "flex", flexWrap: "wrap" }}>
                    {filteredCards.map((card) => (
                        <Card className='voteCard' key={card.id} style={{ width: '14rem', padding: '1rem', margin: '1rem 3rem', backgroundColor: "#AD9CDF", boxShadow: "3px 3px 4px black"}} onClick={handleClick} >
                            <Card.Img src={ card.img }/>
                            <Card.Body style={{backgroundColor: "#AD9CDF"}}>
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