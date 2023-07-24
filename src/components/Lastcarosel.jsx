import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";

const Lastcarosel = () => {
  return (
    <div className="bg-white m-3">
      <div className="text-2xl font-semibold p-3">Customers who viewed items in your browsing history also viewed</div>
      <Swiper
        slidesPerView={7}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
      >
        {Array.from({ length: 9 }, (_, i) => (
          <SwiperSlide key={i}>
            <Link to={`/product/${i}`}>
              <img
                src={`../images/product_${i}_last.jpg`}
                alt="Last Carousel"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Lastcarosel;
