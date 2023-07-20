import { Row, Col, Button, Modal } from 'react-bootstrap';
import { useState , useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Livre = () => {

    const { t } = useTranslation();

    const [showModal, setShowModal] = useState(false);

    const handleReserve = () => {
        if(localStorage.getItem('reserved') == 'true'){
            alert(t('reserved'));
        }
        else{
            setShowModal(true);
        }
    }

    const handleClose = () => {
        setShowModal(false);
    }

    const handleDownload = () => {
        alert(t('error'))
    }

    const handleSubmitReserve = () => {
        localStorage.setItem('reserved', 'true');
        handleClose();
    }

    useEffect(() => {
        localStorage.setItem('reserved', 'false');
    }, []);

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
                                    <h6>{t('desc')}</h6>
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
                    <h4>{t('pdf')}</h4>
                    <Button onClick={handleDownload}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-file-earmark-arrow-down" viewBox="0 0 16 16">
                        <path d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293V6.5z"/>
                        <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
                    </svg>
                    {t('download')}
                    </Button>
                </Col>
                <Col className="purbleBubble col-3 d-flex flex-column align-items-center">
                    <h4>{t('paper')}</h4>
                    <Button onClick={handleReserve}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-person-fill-lock" viewBox="0 0 16 16">
                        <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h5v-1a1.9 1.9 0 0 1 .01-.2 4.49 4.49 0 0 1 1.534-3.693C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Zm7 0a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2Zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1Z"/>
                    </svg>
                    {t('reserve')}
                    </Button>
                </Col>
                <Col className="purbleBubble col-3 d-flex flex-column align-items-center">
                    <h4>{t('audio')}</h4>
                    <Button onClick={handleDownload}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-cloud-download" viewBox="0 0 16 16">
                        <path d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"/>
                        <path d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"/>
                    </svg>
                    {t('download')}
                    </Button>
                </Col>
            </Row>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton style={{backgroundColor: "#AD9CDF"}}>
                    <Modal.Title>{t('rTitle')}</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{backgroundColor: "#AD9CDF"}}>
                    <h3>{t('rBody')}</h3>
                </Modal.Body>
                <Modal.Footer style={{backgroundColor: "#AD9CDF"}}>
                    <Button variant="secondary" onClick={handleClose}>
                        {t('close')}
                    </Button>
                    <Button variant="primary" onClick={handleSubmitReserve}>
                        {t('reserve')}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
 
export default Livre;