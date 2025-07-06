'use client';

// InsetCarousel component
// Renders a Swiper carousel for top stories on mobile view
// Shows custom dot indicators below the carousel that reflect the current slide
// The carousel can be swiped/dragged, and the dots update accordingly

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import InsetArticle from './InsetArticle';

export default function InsetCarousel({ articles }) {
  // Track the currently active slide index for dot indicator
  const [active, setActive] = useState(0);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Swiper carousel for articles */}
      <div className="w-full">
        <Swiper
          spaceBetween={16} // Space between slides in px
          slidesPerView={1} // Show one slide at a time
          onSlideChange={(swiper) => setActive(swiper.activeIndex)} // Update active index on slide change
        >
          {/* Render each article as a slide */}
          {articles.map((article, idx) => (
            <SwiperSlide key={idx}>
              <InsetArticle data={article} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Dot indicators below the carousel */}
      <div className="flex justify-center gap-3 mt-4">
        {articles.map((_, idx) => (
          <span
            key={idx}
            // Highlight the active dot, fade others
            className={`w-3 h-3 rounded-full transition-colors ${
              idx === active ? 'bg-green-600' : 'bg-green-200'
            }`}
          />
        ))}
      </div>
    </div>
  );
}