import logo from '../../assets/images/logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import './headline.css';

export default function Header({ dimensions }) {
    return (
        <div className='headerContainer'>
            <div className='logoContainer'>
                <img src={logo} alt="logo" className='logoSize' />
            </div>
            {dimensions <= 768 ?
                <nav>
                    <MenuIcon sx={{ color: 'white' }} fontSize='large' />
                </nav>
                :
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Menu</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            }
        </div>
    )
}