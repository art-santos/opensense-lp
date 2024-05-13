'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Carousel01 from '@/public/images/carousel-01.png'
import Carousel02 from '@/public/images/carousel-02.png'
import Carousel03 from '@/public/images/carousel-03.png'
import Carousel04 from '@/public/images/carousel-04.png'
import Play from '@/public/images/play.svg'

// Import Swiper
import Swiper from 'swiper/bundle';
import { Navigation } from 'swiper/modules'
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

Swiper.use([Navigation])

export default function Carousel() {

  useEffect(() => {
    const carousel = new Swiper('.carousel', {
      slidesPerView: 'auto',
      grabCursor: true,
      loop: false,
      centeredSlides: false,
      initialSlide: 0,
      spaceBetween: 24,
      watchSlidesProgress: true,
      navigation: {
        nextEl: '.carousel-next',
        prevEl: '.carousel-prev',
      },
    })
  }, [])

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative">
          {/* Background */}
          <div className="absolute inset-0 bg-slate-100 rounded-3xl -mx-20 -z-10" aria-hidden="true" />

          {/* Sparkles */}
          <div className="absolute top-0 -mt-6 left-1/4">
            
          </div>

          {/* Scratches */}
          <div className="absolute bottom-0 -mb-5 ml-16">
            <svg xmlns="http://www.w3.org/2000/svg" width="66" height="93">
             
            </svg>
          </div>

          <div className="py-12 md:py-20 -mx-20 px-20 overflow-hidden">
            {/* Carousel built with Swiper.js [https://swiperjs.com/] */}
            {/* * Custom styles in src/css/additional-styles/theme.scss */}
            <div className="carousel swiper-container">
              <div className="swiper-wrapper">
                {/* Carousel items */}
                <div className="swiper-slide h-auto flex flex-col max-w-[446px] group">
                  <a href="#0">
                    <div className="group-odd:rotate-1 group-even:-rotate-1">
                      <div className="absolute  inset-0 max-h-[100px] -z-10">
                        <Image
                          className="w-full object-cover h-10 border-2 rounded-3xl"
                          src={"https://i.ytimg.com/vi/DySpPB3079k/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCAmPsm4_AYuDkVM65RfL7y2Eo89Q"}
                          width={446}
                          height={200}
                          alt="Carousel 01"
                        />
                      </div>
                      <div className="p-5 pb-14">
                        <div className="font-hkgrotesk font-extrabold text-white text-xl leading-tight mb-1">Sick Leave for Indie Founders?</div>
                        <div className="font-hkgrotesk text-white font-medium text-sm opacity-80 mb-4">Indie Stories · Jan 24 · Episode 234</div>
                        <Image src={Play} width={48} height={48} alt="Play" aria-hidden="true" />
                      </div>
                    </div>
                  </a>
                </div>
                <div className="swiper-slide h-auto flex flex-col max-w-[446px] group">
                  <a href="#0">
                    <div className="group-odd:rotate-1 group-even:-rotate-1">
                      <div className="absolute inset-0 -z-10">
                        <Image
                          className="w-full object-cover rounded-3xl"
                          src={Carousel02}
                          width={446}
                          alt="Carousel 02"
                        />
                      </div>
                      <div className="p-5 pb-14">
                        <div className="font-hkgrotesk font-extrabold text-white text-xl leading-tight mb-1">When Should You Let People Pay You?</div>
                        <div className="font-hkgrotesk text-white font-medium text-sm opacity-80 mb-4">Indie Stories · Jan 24 · Episode 234</div>
                        <Image src={Play} width={48} height={48} alt="Play" aria-hidden="true" />
                      </div>
                    </div>
                  </a>
                </div>
                <div className="swiper-slide h-auto flex flex-col max-w-[446px] group">
                  <a href="#0">
                    <div className="group-odd:rotate-1 group-even:-rotate-1">
                      <div className="absolute inset-0 -z-10">
                        <Image
                          className="w-full object-cover rounded-3xl"
                          src={Carousel03}
                          width={446}
                          alt="Carousel 03"
                        />
                      </div>
                      <div className="p-5 pb-14">
                        <div className="font-hkgrotesk font-extrabold text-white text-xl leading-tight mb-1">
                          Super Pumped (aka The Saturday Edition)
                        </div>
                        <div className="font-hkgrotesk text-white font-medium text-sm opacity-80 mb-4">Indie Stories · Jan 24 · Episode 234</div>
                        <Image src={Play} width={48} height={48} alt="Play" aria-hidden="true" />
                      </div>
                    </div>
                  </a>
                </div>
                <div className="swiper-slide h-auto flex flex-col max-w-[446px] group">
                  <a href="#0">
                    <div className="group-odd:rotate-1 group-even:-rotate-1">
                      <div className="absolute inset-0 -z-10">
                        <Image
                          className="w-full object-cover rounded-3xl"
                          src={Carousel04}
                          width={446}
                          alt="Carousel 04"
                        />
                      </div>
                      <div className="p-5 pb-14">
                        <div className="font-hkgrotesk font-extrabold text-white text-xl leading-tight mb-1">Getting Into Public</div>
                        <div className="font-hkgrotesk text-white font-medium text-sm opacity-80 mb-4">Indie Stories · Jan 24 · Episode 234</div>
                        <Image src={Play} width={48} height={48} alt="Play" aria-hidden="true" />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Arrows */}
            <div className="flex mt-12 space-x-3 justify-end">
              <button className="carousel-prev relative z-20 w-11 h-11 rounded-full flex items-center justify-center group bg-white hover:bg-blue-100 transition duration-150 ease-in-out">
                <span className="sr-only">Previous</span>
                <svg className="w-4 h-4 fill-blue-500 transition duration-150 ease-in-out" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
                </svg>
              </button>
              <button className="carousel-next relative z-20 w-11 h-11 rounded-full flex items-center justify-center group bg-white hover:bg-blue-100 transition duration-150 ease-in-out">
                <span className="sr-only">Next</span>
                <svg className="w-4 h-4 fill-blue-500 transition duration-150 ease-in-out" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}