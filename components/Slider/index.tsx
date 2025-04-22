'use client';

import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ImgSlider = ({ images }: { images: any }) => {
  const shouldLoop = images.length > 3; // Ensure enough slides to support looping

  return (
    <section>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.1 }}
        viewport={{ once: true }}
        className="animate_top mx-auto mt-4 max-w-c-1235 px-4 md:px-8 xl:mt-8 xl:px-0"
      >
        <div className="swiper testimonial-01 mb-0 pb-22.5">
          <Swiper
            spaceBetween={20}
            slidesPerView={2}
            loop={shouldLoop}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
            }}
          >
            {images.map((img: any) => (
              <SwiperSlide key={img.id}>
                <div className="relative w-full h-[250px]">
                  <Image
                    src={img.src}
                    alt="image"
                    fill
                    quality={100}
                    className="object-cover rounded-xl"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>
    </section>
  );
};

export default ImgSlider;
