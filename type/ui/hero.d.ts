export interface SlideItem {
   id: number;
   title: string;
   subtitle: string;
   buttonText: string;
   image: string | React.ReactNode;
   bgColor: string;
}

export interface HeroButtonProps
   extends ButtonHTMLAttributes<HTMLButtonElement> {
   text: string;
}

export interface MobileControlsProps {
   slides: SlideItem[];
   activeSlide: number;
   prevSlide: () => void;
   nextSlide: () => void;
   goToSlide: (index: number) => void;
}

export interface SlideProps {
   direction: number;
   slides: SlideItem[];
}

export interface PrevSlideProps extends SlideProps {
   prevIndex: number;
   prevSlide: () => void;
}

export interface ActiveSlideProps extends SlideProps {
   activeSlide: number;
}

export interface NextSlideProps extends SlideProps {
   nextIndex: number;
   nextSlide: () => void;
}
