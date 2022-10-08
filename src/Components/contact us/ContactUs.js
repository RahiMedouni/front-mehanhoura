import './ContactUs.css';
import Map from './Map';

const ContactUs = () => {
    return (
        <>
        <section className="contact">
            <div className='callcontact'>
                <h2 align= "center">Contact us on:</h2>
                <p>Phone: 0666666666</p>
                <p>Email: contact@mehanhoura.com</p>
            </div>
            <div className='mapcontact'>
                <Map />
            </div>
        </section>
        </>
    )
}

export default ContactUs;