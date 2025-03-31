import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { HeroButton, HeroButtonInformation } from './hero-components';
import {
   ActiveSlideProps,
   NextSlideProps,
   PrevSlideProps,
} from '@/type/ui/hero';

export const PrevSlide: React.FC<PrevSlideProps> = ({
   prevIndex,
   direction,
   slides,
   prevSlide,
}) => {
   return (
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
         <motion.div
            key={`prev-${prevIndex}`}
            className="h-[350px] absolute cursor-pointer invisible md:visible"
            custom={direction}
            initial={{
               x: direction > 0 ? '-100%' : '0%',
               opacity: 0.7,
               zIndex: 0,
            }}
            animate={{
               x: '-130%',
               opacity: 0.3,
               zIndex: 0,
            }}
            exit={{
               x: direction > 0 ? '0%' : '-100%',
               opacity: 0,
               scale: 0.8,
               zIndex: 0,
            }}
            transition={{
               type: 'spring',
               stiffness: 300,
               damping: 30,
            }}
            style={{ width: '45%' }}
            onClick={prevSlide}
         >
            <div
               className={`${slides[prevIndex].bgColor} rounded-3xl p-6 h-full w-full flex items-center shadow-lg`}
            >
               <div className="pr-4 w-1/2">
                  <div className="mb-1 text-xs text-white">
                     {slides[prevIndex].subtitle}
                  </div>
                  <h1 className="mb-2 text-xl font-bold text-white line-clamp-2">
                     {slides[prevIndex].title}
                  </h1>
                  <Button className="px-3 py-1 h-8 text-xs text-white bg-pink-500 hover:bg-pink-600">
                     {slides[prevIndex].buttonText}
                  </Button>
               </div>

               <div className="flex absolute top-0 left-1/2 z-50 justify-end w-1/2 md:relative md:left-3 md:top-4">
                  <div className="relative w-80 h-80 md:w-96 md:h-96">
                     {slides[prevIndex].image}
                  </div>
               </div>
            </div>
         </motion.div>
      </AnimatePresence>
   );
};

export const ActiveSlide: React.FC<ActiveSlideProps> = ({
   activeSlide,
   direction,
   slides,
}) => {
   return (
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
         <motion.div
            key={`active-${activeSlide}`}
            className="absolute w-11/12 md:h-3/4 h-hero-primary md:w-2/3"
            custom={direction}
            initial={{
               x: direction > 0 ? '65%' : '-65%',
               opacity: 1,
               zIndex: 0,
            }}
            animate={{
               x: '0%',
               opacity: 1,
               scale: 1,
               zIndex: 10,
            }}
            exit={{
               x: direction > 0 ? '-65%' : '65%',
               opacity: 0,
               scale: 0,
               zIndex: 0,
            }}
            transition={{
               type: 'spring',
               stiffness: 300,
               damping: 30,
               mass: 1,
               opacity: { duration: 0.4, ease: 'easeInOut' },
               scale: { duration: 0.5, ease: 'anticipate' },
            }}
            style={{
               perspective: '1000px',
               transformStyle: 'preserve-3d',
            }}
         >
            <div
               className={`${slides[activeSlide].bgColor} rounded-3xl p-8 h-full w-full flex flex-col md:flex-row items-center shadow-xl relative`}
               style={{
                  transform: 'rotateX(-5deg)',
                  transformOrigin: 'top',
               }}
            >
               <HeroButtonInformation className="absolute top-1 right-1" />
               {/* Overlay gradient opacity */}
               <div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                     background:
                        'linear-gradient(to bottom right, rgba(0, 0, 0, 0), rgba(13, 9, 9, 0.8))',
                     pointerEvents: 'none',
                  }}
               />
               <div className="flex relative z-10 flex-col gap-5 justify-center items-center w-full h-full md:w-1/2">
                  <div className="p-2 px-3 mb-2 text-sm text-white rounded-2xl bg-white/10">
                     {slides[activeSlide].subtitle}
                  </div>
                  <h1 className="mb-2 text-3xl font-bold text-center text-white">
                     {slides[activeSlide].title}
                  </h1>
                  <HeroButton text={slides[activeSlide].buttonText} />
               </div>
               <div className="flex absolute invisible z-50 justify-end w-1/2 sm:visible md:relative md:left-3">
                  <div className="relative w-80 h-80 md:w-96 md:h-96">
                     {slides[activeSlide].image}
                  </div>
               </div>
            </div>
         </motion.div>
      </AnimatePresence>
   );
};

export const NextSlide: React.FC<NextSlideProps> = ({
   nextIndex,
   direction,
   slides,
   nextSlide,
}) => {
   return (
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
         <motion.div
            key={`next-${nextIndex}`}
            className="h-[350px] absolute cursor-pointer md:visible invisible"
            custom={direction}
            initial={{
               x: direction > 0 ? '0%' : '100%',
               opacity: 0.7,
               zIndex: 1,
            }}
            animate={{
               x: '130%',
               opacity: 0.3,
               zIndex: 1,
            }}
            exit={{
               x: direction > 0 ? '100%' : '0%',
               opacity: 0,
               scale: 0.8,
               zIndex: 0,
            }}
            transition={{
               type: 'spring',
               stiffness: 300,
               damping: 30,
            }}
            style={{
               width: '45%',
               pointerEvents: 'auto',
            }}
            onClick={nextSlide}
         >
            <div
               className={`${slides[nextIndex].bgColor} rounded-3xl p-6 h-full w-full flex items-center shadow-lg`}
            >
               <div className="pr-4 w-1/2">
                  <div className="mb-1 text-xs text-white">
                     {slides[nextIndex].subtitle}
                  </div>
                  <h1 className="mb-2 text-xl font-bold text-white line-clamp-2">
                     {slides[nextIndex].title}
                  </h1>
                  <Button className="px-3 py-1 h-8 text-xs text-white bg-pink-500 hover:bg-pink-600">
                     {slides[nextIndex].buttonText}
                  </Button>
               </div>
               <div className="flex absolute top-0 left-1/2 z-50 justify-end w-1/2 md:relative md:left-3">
                  <div className="relative w-80 h-80 md:w-96 md:h-96">
                     {slides[nextIndex].image}
                  </div>
               </div>
            </div>
         </motion.div>
      </AnimatePresence>
   );
};
