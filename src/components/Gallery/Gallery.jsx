import { galleryImgs } from "../../constants/imgList";
import './gallery.css';

export default function Gallery() {
    return (
        <section className="galleryContainer">
            <h2>Gallery</h2>
            <div className="galleryimgContainer">
                {galleryImgs.map((item, index) => (
                    <img loading="lazy" key={index} src={item.name} alt={item.name} style={{ border: `6px solid ${item.color}` }} className="imgGallery" />
                ))}
            </div>
        </section>
    )
}