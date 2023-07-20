import { useState, useEffect } from 'react';
import {Row, Col, Form} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Reunion = () => {

    const { t } = useTranslation();

    const locales = [
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2802.54792686376!2d-75.66423052378443!3d45.37811683917836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce08ab62ffb971%3A0xaad96de0a398bb51!2sOttawa%20Public%20Library%20-%20Alta%20Vista!5e0!3m2!1sen!2sca!4v1689795410031!5m2!1sen!2sca",
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2805.339776084498!2d-75.89790962378717!3d45.32176084293135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cd20000dc290f65%3A0x9ce0c8d414cd9401!2sOttawa%20Public%20Library%20-%20Beaverbrook!5e0!3m2!1sen!2sca!4v1689795693873!5m2!1sen!2sca",
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2799.936680543474!2d-75.5670677237818!3d45.430777735668244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0e3da3b98be1%3A0xd4581d94c766ed94!2sOttawa%20Public%20Library%20-%20Blackburn%20Hamlet!5e0!3m2!1sen!2sca!4v1689795785437!5m2!1sen!2sca",
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2802.7920201559937!2d-75.77422508444558!3d45.37319177910002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce06caca965253%3A0xf27c39c3fdacf639!2sOttawa%20Public%20Library%20-%20Carlingwood!5e0!3m2!1sen!2sca!4v1689875411677!5m2!1sen!2sca",
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2803.882542920439!2d-76.0495472237857!3d45.35118324097239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cd1f87f5256efe9%3A0x4ca8c4bfc263c256!2sOttawa%20Public%20Library%20-%20Carp!5e0!3m2!1sen!2sca!4v1689875451141!5m2!1sen!2sca",
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2805.383595663328!2d-75.83085141194225!3d45.32087586841266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccdfe21b9dc8e53%3A0x50bfe5e75c07298!2sOttawa%20Public%20Library%20-%20Centennial!5e0!3m2!1sen!2sca!4v1689875502004!5m2!1sen!2sca",
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.5500557246214!2d-76.09607292377841!3d45.49900473111584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cd1f1e9a4589997%3A0x9d15049335519646!2sOttawa%20Public%20Library%20-%20Constance%20Bay!5e0!3m2!1sen!2sca!4v1689875530924!5m2!1sen!2sca",
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.913209102469!2d-75.49580022377975!3d45.47155223294819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce123501adbc55%3A0xad0c3fa048575560!2sOttawa%20Public%20Library%20-%20Cumberland!5e0!3m2!1sen!2sca!4v1689875567490!5m2!1sen!2sca",
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2801.4647290360294!2d-75.62753862378332!3d45.399967437722204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0f11366cb6a3%3A0xf41ee3383f3eefca!2sOttawa%20Public%20Library%20-%20Elmvale%20Acres!5e0!3m2!1sen!2sca!4v1689875597041!5m2!1sen!2sca",
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2803.7049096613673!2d-75.73580522378558!3d45.35476874073355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce06ff28f7b8c1%3A0x5360be025e0e3b47!2sOttawa%20Public%20Library%20-%20Emerald%20Plaza!5e0!3m2!1sen!2sca!4v1689875625375!5m2!1sen!2sca",
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2808.3289943840973!2d-75.56014672379017!3d45.26135994694981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccde044d244ce25%3A0xb51ee93a02ddf07e!2sOttawa%20Public%20Library%20-%20Greely!5e0!3m2!1sen!2sca!4v1689875654439!5m2!1sen!2sca",
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2803.2770684240763!2d-75.63797392378513!3d45.3634037401585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce08db3c505d5b%3A0xf07cc118137d7c9d!2sOttawa%20Public%20Library%20-%20Greenboro!5e0!3m2!1sen!2sca!4v1689875687839!5m2!1sen!2sca",
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.4595218473733!2d-75.69792712378232!3d45.420237436370996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05aae74485fd%3A0xe727403606d68b27!2sOttawa%20Public%20Library%20-%20Main!5e0!3m2!1sen!2sca!4v1689875726571!5m2!1sen!2sca",
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2809.863452976704!2d-75.6843612119738!3d45.230329774432946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccde387c51ff55f%3A0x888068ba38c9cd46!2sOttawa%20Public%20Library%20-%20Manotick!5e0!3m2!1sen!2sca!4v1689875803186!5m2!1sen!2sca",
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2809.54613348352!2d-75.4743530237914!3d45.236748048586094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccddefc9ec6b603%3A0xb1d172b4637e8b9c!2sOttawa%20Public%20Library%20-%20Metcalfe%20Village!5e0!3m2!1sen!2sca!4v1689875829954!5m2!1sen!2sca",
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2804.219805338632!2d-75.76509062378607!3d45.344375041425806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0722b2b5bfe5%3A0x2c64be58940075a1!2sOttawa%20Public%20Library%20-%20Nepean%20Centrepointe!5e0!3m2!1sen!2sca!4v1689875860520!5m2!1sen!2sca",
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2799.569782370851!2d-75.60335542378144!3d45.438173135174964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0fc4d6320263%3A0x611876ba4b19b80f!2sOttawa%20Public%20Library%20-%20North%20Gloucester!5e0!3m2!1sen!2sca!4v1689875892420!5m2!1sen!2sca",
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.6579808534275!2d-75.52638522378051!3d45.45654783394931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce121fdf74f08f%3A0xc564a566b5f513d5!2sOttawa%20Public%20Library%20-%20Orl%C3%A9ans!5e0!3m2!1sen!2sca!4v1689875919754!5m2!1sen!2sca",
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2162.3570965067797!2d-75.6053023818489!3d45.14728708314385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccde7e0cc5e3433%3A0xf6f5a2ea26f31adb!2sOttawa%20Public%20Library%20-%20Osgoode!5e0!3m2!1sen!2sca!4v1689875967237!5m2!1sen!2sca",
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2811.8158196738564!2d-75.8464284237937!3d45.19082445163736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccdfa15c4962f73%3A0xa2557dd96b4e00ca!2sOttawa%20Public%20Library%20-%20Richmond!5e0!3m2!1sen!2sca!4v1689876001284!5m2!1sen!2sca",
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2799.9711582589966!2d-75.68581692378174!3d45.43008273571461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0504d159fb81%3A0xd8ef3335dff2e831!2sOttawa%20Public%20Library%20-%20Rideau!5e0!3m2!1sen!2sca!4v1689876037984!5m2!1sen!2sca",
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.9393373161784!2d-75.6813441237808!3d45.45087853432761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05284faeba31%3A0xefb9bbf7c3d168d9!2sOttawa%20Public%20Library%20-%20Rockcliffe%20Park!5e0!3m2!1sen!2sca!4v1689876069168!5m2!1sen!2sca",
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7291.202607748151!2d-75.7306491557295!3d45.400932873398915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce043bf60b2859%3A0xfbfddaef6357d31e!2sOttawa%20Public%20Library%20-%20Rosemount!5e0!3m2!1sen!2sca!4v1689876105916!5m2!1sen!2sca",
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2799.6650710353933!2d-75.65027772378153!3d45.43625253530304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce055d8666f4fd%3A0xd9e56adb426df7d8!2sOttawa%20Public%20Library%20-%20St-Laurent!5e0!3m2!1sen!2sca!4v1689876133913!5m2!1sen!2sca",
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2808.6803290506223!2d-75.91786372379049!3d45.25425664742219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccdf8b3f8a5cb6d%3A0x35399a51e8d37c4!2sOttawa%20Public%20Library%20-%20Stittsville!5e0!3m2!1sen!2sca!4v1689876162977!5m2!1sen!2sca",
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2801.685178090071!2d-75.68643542378344!3d45.39552113801865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05c274fcbded%3A0x55d7c66940e9a109!2sOttawa%20Public%20Library%20-%20Sunnyside!5e0!3m2!1sen!2sca!4v1689876194726!5m2!1sen!2sca",
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2799.2634888318494!2d-75.66310882378113!3d45.444346234763245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0538606ec943%3A0x76102c574f67ee79!2sOttawa%20Public%20Library%20-%20Vanier!5e0!3m2!1sen!2sca!4v1689876222293!5m2!1sen!2sca",
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2813.1584266611817!2d-75.46621702379498!3d45.16364165344232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccddb818b446467%3A0xac70f087f2228ec4!2sOttawa%20Public%20Library%20-%20Vernon!5e0!3m2!1sen!2sca!4v1689876245527!5m2!1sen!2sca"
    ]

    const [locale, setLocale] = useState(locales[2]);

    const changeLocale = (url) => {
        setLocale(url);
    }

    useEffect(() => {

    }, [locale]);
    
    return (
        <div className="Reunion">
            <Row style={{padding: "3rem"}}>
                <Col className='d-flex flex-column align-items-center'>
                    <h3>{t('nxtmeet')}</h3>
                    <h3>{t('thrs')}</h3>
                    <h3>{t('time')}</h3>
                    <div className='purbleBubble'>
                        <a href="https://uottawa-ca.zoom.us/j/94713351034?pwd=c1FNVzVHNWxvVnoxaWJSWXRVd3FRUT09&uname=Mykola+Forest-Chomyn#success" style={{textDecoration: "none", color: "black"}}>
                            <h3>{t('zoom')}</h3>
                        </a>
                    </div>
                </Col>
                <Col>
                    <h3>{t('find')}</h3>
                    <Form.Select onChange={(e) => changeLocale(e.target.value)} defaultValue={locales[2]}>
                        <option value={locales[0]}>Alta Vista</option>
                        <option value={locales[1]}>Beaverbrook</option>
                        <option value={locales[2]}>Blackburn Hamlet</option>
                        <option value={locales[3]}>Carlingwood</option>
                        <option value={locales[4]}>Carp</option>
                        <option value={locales[5]}>Centennial</option>
                        <option value={locales[6]}>Constance Bay</option>
                        <option value={locales[7]}>Cumberland</option>
                        <option value={locales[8]}>Elmvale Acres</option>
                        <option value={locales[9]}>Emerald Plaze</option>
                        <option value={locales[10]}>Greely</option>
                        <option value={locales[11]}>Greenboro</option>
                        <option value={locales[12]}>Main</option>
                        <option value={locales[13]}>Manotick</option>
                        <option value={locales[14]}>Metcalfe Village</option>
                        <option value={locales[15]}>Nepean Centrepointe</option>
                        <option value={locales[16]}>North Gloucester</option>
                        <option value={locales[17]}>Orléans</option>
                        <option value={locales[18]}>Osgoode</option>
                        <option value={locales[19]}>Richmond</option>
                        <option value={locales[20]}>Rideau</option>
                        <option value={locales[21]}>Rockcliffe Park</option>
                        <option value={locales[22]}>Rosemount</option>
                        <option value={locales[23]}>St-Laurent</option>
                        <option value={locales[24]}>Stittsville</option>
                        <option value={locales[25]}>Sunnyside</option>
                        <option value={locales[26]}>Vanier</option>
                        <option value={locales[27]}>Vernon</option>
                    </Form.Select>
                    <div id="googleMap" className='d-flex flex-column align-items-center'>
                        <iframe src={locale} title='branchMap' width="500" height="250" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                </Col>
            </Row>
            <Row>
                <img src={require('./assets/CarlingwoodLibrary.jpeg')} style={{height: "20rem", objectFit: "cover"}} alt="" />
            </Row>
        </div>
    );
}
 
export default Reunion;