import { useTranslation } from "react-i18next";


const Footer = () => {

    const { t } = useTranslation();

    return (
        <div className="Footer">
            <div style={{width: "20%", padding: "30px"}}>
                <h6>Support:</h6>
                <p>Telephone: (613) 447-8897</p>
                <p>{t('email')}: support@bibclubottawa.ca</p>
            </div>
        </div>
    );
}
 
export default Footer;