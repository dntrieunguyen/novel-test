'use client';

import Image from 'next/image';
import React, { useState, useRef } from 'react';
import PiggyURL from '@/public/hero/piggy.png';
import { ActiveSlide, NextSlide, PrevSlide } from './hero-slides';
import MobileControls from './hero-mobile-controls';
import { SlideItem } from '@/type/ui/hero';

export default function Hero() {
   const slides: SlideItem[] = [
      {
         id: 1,
         title: 'Piggy Christmas Tap: €35,000 For Your Wins',
         subtitle: 'Exclusive Tournament',
         buttonText: 'JOIN AND WIN',
         image: (
            <Image src={PiggyURL} alt="piggy" className="object-contain" fill />
         ),
         bgColor: 'bg-emerald-700',
      },
      {
         id: 2,
         title: 'Win or Get Cashback up to €10,000',
         subtitle: 'Special Promotion',
         buttonText: 'DISCOVER MORE',
         image: (
            <Image src={PiggyURL} alt="piggy" className="object-contain" fill />
         ),
         bgColor: 'bg-blue-700',
      },
      {
         id: 3,
         title: 'New Games: Try Your Luck Today',
         subtitle: 'Weekly Update',
         buttonText: 'PLAY NOW',
         image: (
            <Image src={PiggyURL} alt="piggy" className="object-contain" fill />
         ),
         bgColor: 'bg-purple-700',
      },
   ];

   const [activeSlide, setActiveSlide] = useState(0);
   const [direction, setDirection] = useState(0);
   const containerRef = useRef<HTMLDivElement>(null);

   const nextSlide = () => {
      setDirection(1);
      setActiveSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
   };

   const prevSlide = () => {
      setDirection(-1);
      setActiveSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));
   };

   const goToSlide = (index: number) => {
      setDirection(index > activeSlide ? 1 : -1);
      setActiveSlide(index);
   };

   // Calculate previous and next indices
   const prevIndex = activeSlide === 0 ? slides.length - 1 : activeSlide - 1;
   const nextIndex = activeSlide === slides.length - 1 ? 0 : activeSlide + 1;

   return (
      <div className="relative">
         <div className="flex absolute left-1/2 -top-12 -translate-x-1/2 z-50 justify-end w-1/2 h-[168px] md:hidden">
            {slides[activeSlide].image}
         </div>

         <div
            className="overflow-hidden h-[445px] md:h-[485px] relative mt-6"
            ref={containerRef}
         >
            <div className="flex justify-center items-center">
               <div className="overflow-hidden h-[445px] md:h-[485px] relative w-full">
                  <div className="flex absolute justify-center items-center w-full h-full">
                     <PrevSlide
                        prevIndex={prevIndex}
                        direction={direction}
                        slides={slides}
                        prevSlide={prevSlide}
                     />

                     <ActiveSlide
                        activeSlide={activeSlide}
                        direction={direction}
                        slides={slides}
                     />

                     <NextSlide
                        nextIndex={nextIndex}
                        direction={direction}
                        slides={slides}
                        nextSlide={nextSlide}
                     />
                  </div>
               </div>
            </div>

            <MobileControls
               slides={slides}
               activeSlide={activeSlide}
               prevSlide={prevSlide}
               nextSlide={nextSlide}
               goToSlide={goToSlide}
            />
         </div>
      </div>
   );
}
