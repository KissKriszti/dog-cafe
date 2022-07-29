import { useState } from 'react';
import logo from '../../assets/images/logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import Navigation from './Navigation';
import './headline.css';

export default function Header({ dimensions }) {

    const [showMenu, setShowMenu] = useState(false);

    function toggleMenu() {
        setShowMenu((prev) => !prev)
    };

    return (
        <div className='headerContainer'>
            <div className='logoContainer'>
                <img src={logo} alt="logo" className='logoSize' />
            </div>
            {dimensions <= 768 ?
                <nav>
                    <button onClick={toggleMenu}><MenuIcon sx={{ color: 'black' }} fontSize='large' /></button>
                    {showMenu && <Navigation showMenu={showMenu} />}
                </nav>
                :
                <nav>
                    <Navigation />
                </nav>
            }
        </div>
    )
}