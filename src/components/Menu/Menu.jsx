import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { coffee, desserts } from "../../constants/menuList";
import { coffeList, dessertList } from "../../constants/imgList";
import logo from '../../assets/images/logo.png';
import yellowLogo from '../../assets/images/yellow-logo.png';
import './menu.css';
import "swiper/css";
import "swiper/css/pagination";

export default function Menu() {
    return (
        <section id="menu" className="menuContainer">
            <h2>Menu</h2>
            <div className="coffeeContainer">
                <div className="coffeMenuContainer">
                    <h3 className="coffeeTitle">Coffees</h3>
                    <img src={logo} alt="logo" className="backgroundImg" />
                    {coffee.map((item, index) => (
                        <div key={index} className="coffeeMenu">
                            <span >{item.name}</span>
                            <span>..........................................</span>
                            <span><strong>{item.price}</strong></span>
                        </div>
                    ))}
                </div>
                <div className="coffePics">
                    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                        {coffeList.map((item, index) => (
                            <SwiperSlide key={index}>
                                <img src={item} alt="coffee" className="coffeImg" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <div className="dessertContainer">
                <div className="dessertPics">
                    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                        {dessertList.map((item, index) => (
                            <SwiperSlide key={index}>
                                <img src={item} alt="dessert" className="dessertImg" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="dessertMenuContainer">
                    <h3 className="dessertTitle">Desserts</h3>
                    <img src={yellowLogo} alt="logo" className="backgroundImg" />
                    {desserts.map((item, index) => (
                        <div className="dessertMenu" key={index}>
                            <span className="menuName">{item.name}</span>
                            <span>..........................................</span>
                            <span><strong>{item.price}</strong></span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
};