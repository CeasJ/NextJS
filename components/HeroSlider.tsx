"use client";

// import swiper react components
import { Swiper, SwiperSlide} from 'swiper/react'; 

// import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const HeroSlider = () => {
  return (
    <Swiper>
        <SwiperSlide className='h-full flex justify-end pt-48'>
            <div>
                <h1 className='h1 text-center lg:text-left mb-2'>
                    <span>Where hard</span> works meets success
                </h1>
                <p className='text-white italic text-center lg:text-left mb-4 font-medium'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat tempora dignissimos unde.
                </p>
            </div>
        </SwiperSlide>
    </Swiper>
  )
}

export default HeroSlider