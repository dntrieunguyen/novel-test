import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React, { ButtonHTMLAttributes } from 'react';
import InformationIcon from '@/public/infor.png';
import { cn } from '@/lib/utils';
import { HeroButtonProps } from '@/type/ui/hero';

export const HeroButton: React.FC<HeroButtonProps> = ({ text }) => {
   return (
      <Button className="px-3 md:w-[340px] w-fit h-[50px] py-1 text-xs text-white bg-pink-500 hover:bg-pink-600">
         {text}
      </Button>
   );
};

interface HeroButtonInformationProps
   extends ButtonHTMLAttributes<HTMLButtonElement> {
   className?: string;
}

export const HeroButtonInformation: React.FC<HeroButtonInformationProps> = ({
   className,
}) => {
   return (
      <Button variant="ghost" className={cn(className)}>
         <Image src={InformationIcon} alt="information" className="w-5 h-5" />
      </Button>
   );
};
