import './ContactUs.css';
import Map from './Map';
import { useTranslation } from 'react-i18next';

const ContactUs = () => {

    const { t, i18n } = useTranslation();
    return (
        <>
        <section className="contact">
            <div className='callcontact'>
            <h2 align= "center">Contact us on:</h2>
                <p>{t('Phone')} : 0666666666</p>
                <p>{t('Email')} : contact@mehanhoura.com</p>
            </div>
            <div className='mapcontact'>
                <Map />
            </div>
        </section>
        </>
    )
}

export default ContactUs;