import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { residentDogs } from '../../constants/imgList';
import './intro.css';
import "swiper/css";
import "swiper/css/navigation";

export default function Intro() {

    const [dimensions, setDimensions] = useState(window.innerWidth)

    useEffect(() => {
        function handleResize() {
            setDimensions(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
    }, []);

    return (
        <section id="about" className='sectionContainer'>
            <div className='residentContainer'>
                <div className='noskew'>
                    <h2 className='residentTitle'>Residents</h2>
                    {dimensions <= 768 ?
                        <div className='swiperContainer'>
                            <Swiper navigation={true} rewind="true" modules={[Navigation]} className="" style={{ position: "relative" }}>
                                {residentDogs.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <img loading="lazy" src={item.source} alt={item.name} className="residentImg" style={{ border: `6px solid ${item.color}` }} />
                                        <div className='nameContainer' style={{ backgroundColor: item.color }}>
                                            <h4>{item.name}</h4>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        :
                        <div className='dogContainer'>
                            {residentDogs.map((item, index) => (
                                <div key={index} style={{ position: "relative" }}>
                                    <img src={item.source} alt={item.name} className="residentImg" style={{ border: `6px solid ${item.color}` }} />
                                    <div className='nameContainer' style={{ backgroundColor: item.color }}>
                                        <h4>{item.name}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    }
                </div>
                <div className='aboutContainer'>
                    <h2 className='aboutTitle'>About</h2>
                    <p>Hi, I am Krisztina Kiss, Junior Frontend Developer based in Hungary. I have created this website to showcase my skills in HTML, CSS, and React development. I would like to highlight this website has been made only for the above purpose and the Bark Cafe in question does not exist.</p>
                    <p>I have 5 years of financial experience but web development was always something that interested me more and eventually I changed careers and started learning what I like. The design of Bark Cafe is from Behance and originally was for a Cat Cafe, but I like dogs more.</p>
                    <p>If you would like to check out the source code for this page, please visit the following <span><a href='https://github.com/KissKriszti/dog-cafe/'>github link</a></span>.</p>
                </div>
            </div>
        </section>
    )
};