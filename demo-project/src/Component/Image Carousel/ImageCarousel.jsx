    import React from 'react';
    import "./ImageCarousel.css"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination , Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

    const ImageCarousel = () => {
  const images = [
    'https://acservicemumbai.in/wp-content/uploads/2024/04/ac-installation.jpg', // Local image (your uploaded image)
    'https://acservicemumbai.in/wp-content/uploads/2024/04/Anderson-Mechanical-Services-VRF-HVAC-Experts10-scaled-1-2048x1366.jpg', // Replace with a second image URL
    'https://acservicemumbai.in/wp-content/uploads/2024/04/ac-repair-sushant-lok.jpg'   // Replace with a third image URL
  ];

  return (
    <div className="carousel-container">
      <Swiper
        modules={[Pagination]}              // Add pagination
        pagination={{ clickable: true }}    // Enable clickable pagination dots
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 3000, // Autoplay every 3 seconds
          disableOnInteraction: false, // Keep autoplay after user interaction
        }}                   // Show one slide at a time
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="carousel-image"  // Add a class for styling images
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
 export default ImageCarousel;
