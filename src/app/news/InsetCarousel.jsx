'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import InsetArticle from './InsetArticle';

export default function InsetCarousel({ articles }) {
  const [active, setActive] = useState(0);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full">
        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          onSlideChange={(swiper) => setActive(swiper.activeIndex)}
        >
          {articles.map((article, idx) => (
            <SwiperSlide key={idx}>
              <InsetArticle data={article} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex justify-center gap-3 mt-4">
        {articles.map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full transition-colors ${
              idx === active ? 'bg-green-600' : 'bg-green-200'
            }`}
          />
        ))}
      </div>
    </div>
  );
}