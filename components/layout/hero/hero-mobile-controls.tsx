import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { MobileControlsProps } from '@/type/ui/hero';

const MobileControls: React.FC<MobileControlsProps> = ({
   slides,
   activeSlide,
   prevSlide,
   nextSlide,
   goToSlide,
}) => {
   return (
      <>
         {/* Navigation buttons - only visible on mobile */}
         <button
            className="absolute left-4 top-1/2 z-20 p-2 text-white rounded-full transition-colors -translate-y-1/2 bg-black/30 hover:bg-black/50 md:hidden"
            onClick={prevSlide}
         >
            <ChevronLeft size={20} />
         </button>
         <button
            className="absolute right-4 top-1/2 z-20 p-2 text-white rounded-full transition-colors -translate-y-1/2 bg-black/30 hover:bg-black/50 md:hidden"
            onClick={nextSlide}
         >
            <ChevronRight size={20} />
         </button>

         {/* Indicator dots - only visible on mobile */}
         <div className="flex absolute bottom-4 left-1/2 z-20 space-x-2 -translate-x-1/2 md:hidden">
            {slides.map((_, index) => (
               <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                     index === activeSlide ? 'bg-white w-4' : 'bg-white/50'
                  }`}
               />
            ))}
         </div>
      </>
   );
};

export default MobileControls;
