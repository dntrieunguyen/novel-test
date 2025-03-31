import React from 'react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import ContainerIcon from '@/public/icon/ContainerIcon.png';
import Image from 'next/image';

interface ContainerButtonProps {
   onClick?: () => void;
   className?: string;
}

const ContainerButton: React.FC<ContainerButtonProps> = ({
   onClick,
   className,
}) => {
   return (
      <Button
         variant="ghost"
         onClick={onClick}
         className={cn('md:hidden', className)}
      >
         <Image src={ContainerIcon} width={18} alt="container-button" />
      </Button>
   );
};

export default ContainerButton;
