import { useState, useEffect } from 'react';
import ScrollIntoView from 'react-scroll-into-view';
import cafeTitle from '../../assets/images/barkCafe.png';
import "swiper/css";
import "./headline.css";
import Header from './Header';
import HomeImage from './HomeImage';


export default function Home() {

    const [dimensions, setDimensions] = useState(window.innerWidth)

    useEffect(() => {
        function handleResize() {
            setDimensions(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
    }, []);

    return (
        <section id="home" className="dimensions">
            <Header dimensions={dimensions} />
            <div className={dimensions <= 1024 ? 'containerBig' : "containerSmall"}>
                <HomeImage dimensions={dimensions} />
            </div>
            <div className='titleContainer'>
                <img src={cafeTitle} alt="title" className='titleImg' />
                <div className='buttonContainer'>
                    <ScrollIntoView selector="#menu">
                        <button className='menuButton'>See Our Menu</button>
                    </ScrollIntoView>
                </div>
            </div>
        </section>
    )
};