import styles from './CarSlider.module.scss'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useRef, type RefObject } from 'react'

import ArrowRightIcon from '@icons/arrow-right.svg?react'
import ArrowLeftIcon from '@icons/arrow-left.svg?react'

interface IProps {
   slides: string[]
}

interface IControlsProps {
   paginationRef: RefObject<HTMLDivElement | null>
}

const Controls = ({ paginationRef }: IControlsProps) => {
   const swiper = useSwiper()
   return (
      <div className={styles.controls}>
         <button className={styles.btn} onClick={() => swiper.slidePrev()}>
            <ArrowLeftIcon />
         </button>
         <div className={styles.pagination} ref={paginationRef} />
         <button className={styles.btn} onClick={() => swiper.slideNext()}>
            <ArrowRightIcon />
         </button>
      </div>
   )
}

export const CarSlider = ({ slides }: IProps) => {
   const paginationRef = useRef<HTMLDivElement>(null)

   return (
      <div className={styles['slider--container']}>
         <Swiper
            className={styles.slider}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            onBeforeInit={swiper => {
               if (swiper.params.pagination && typeof swiper.params.pagination !== 'boolean') {
                  swiper.params.pagination.el = paginationRef.current
               }
            }}
         >
            {slides.map((slide, index) => (
               <SwiperSlide key={index} className={styles.slide}>
                  <img src={slide} alt="" className={styles.image} />
               </SwiperSlide>
            ))}

            <Controls paginationRef={paginationRef} />
         </Swiper>
      </div>
   )
}
