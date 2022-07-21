import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import './footer.css';

export default function Footer() {
    return (
        <section className="footerContainer">
            <div className='smallerContainer'>
                <div className='opening'>
                    <h4>Opening hours</h4>
                    <span>Monday - Friday: 7:00 - 16:00</span> <br />
                    <span>Saturday: 7:00 - 12:00</span>
                </div>
                <div className='location'>
                    <h4><LocationOnIcon /> Location</h4>
                    <span>Neverending st 10. 16285</span>
                </div>
                <div className='contactInfo'>
                    <h4>+36 (40) 153 245</h4>
                    <div>
                        <FacebookIcon fontSize='large' />
                        <InstagramIcon fontSize='large' />
                    </div>
                </div>
            </div>
        </section>
    )
};