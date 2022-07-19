import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { welcomeDogs } from '../../constants/imgList';
import cafeTitle from '../../assets/images/barkCafe.png';
import "swiper/css";
import "./headline.css";

export default function Welcome() {

    const [dimensions, setDimensions] = useState(window.innerWidth)

    useEffect(() => {
        function handleResize() {
            setDimensions(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
    }, []);

    return (
        <section className="dimensions">
            <div className={dimensions <= 1024 ? 'containerBig' : "containerSmall"}>
                {dimensions <= 1024 ?
                    <Swiper
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                    >
                        {welcomeDogs.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className='imgContainer'>
                                    <img src={item} alt="dogs" className='imgBig' />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    :
                    welcomeDogs.map((item, index) => (
                        <div className='imgContainer' key={index}>
                            <img src={item} alt="dogs" className='imgSmall' />
                        </div>
                    ))
                }
            </div>
        </section>
    )
};