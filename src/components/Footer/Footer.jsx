import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './footer.css';

export default function Footer() {
    return (
        <section id='contact' className="footerContainer">
            <div className='smallerContainer'>
                <div className='opening'>
                    <h4>Opening hours</h4>
                    <span>Monday - Friday: 7:00 - 16:00</span> <br />
                    <span>Saturday: 7:00 - 12:00</span>
                </div>
                <div className='location'>
                    <h4><LocationOnIcon /> Location</h4>
                    <span>Vác, Hungary 2600</span>
                </div>
                <div className='contactInfo'>
                    <h4>+36 (40) 153 245</h4>
                    <div>
                        <a href='https://www.linkedin.com/in/krisztina-kiss-bb28a3ba/'><LinkedInIcon fontSize='large' /></a>
                    </div>
                </div>
            </div>
        </section>
    )
};