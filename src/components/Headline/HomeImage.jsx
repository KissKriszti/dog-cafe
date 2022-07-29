import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { welcomeDogs } from '../../constants/imgList';
import "swiper/css";

export default function HomeImage({ dimensions }) {
    return (
        dimensions <= 1024 ?
            <Swiper
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
            >
                {welcomeDogs.map((item, index) => (
                    <SwiperSlide key={index} rewind="true">
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
    )
}