import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Banner = () => {
    return (
        <div className='mt-10 mx-10 md:mx-20'>
      <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <div className=''>
      <SwiperSlide><img className='w-full h-[35vh]  md:h-[50vh]' src="https://i.ibb.co/yq2ZQTv/bannerimg.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img className='w-full h-[35vh] md:h-[50vh]'  src="https://i.ibb.co/mXGzXZ7/banner2.jpg" alt="" /></SwiperSlide>
      </div>
      
      
    </Swiper>
    </div>
    );
};

export default Banner;