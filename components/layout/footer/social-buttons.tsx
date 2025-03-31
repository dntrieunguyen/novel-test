import { Button } from '@/components/ui/button';
import Image from 'next/image';
import TelegramIcon from '@/public/icon/telegram.png';
import FacebookIcon from '@/public/icon/facebook.png';
import InstagramIcon from '@/public/icon/instagram.png';
import TwitterIcon from '@/public/icon/twitter.png';
import { cn } from '@/lib/utils';
import { SocialButtonsProps } from '@/type/ui/footer';

export function SocialButtons({ className }: SocialButtonsProps) {
   return (
      <div className={cn('flex mt-6 space-x-4', className)}>
         <Button variant="ghost" size="icon" className="text-white">
            <Image src={TelegramIcon} alt="Telegram" />
         </Button>
         <Button variant="ghost" size="icon" className="text-white">
            <Image src={FacebookIcon} alt="Facebook" />
         </Button>
         <Button variant="ghost" size="icon" className="text-white">
            <Image src={TwitterIcon} alt="Twitter" />
         </Button>
         <Button variant="ghost" size="icon" className="text-white">
            <Image src={InstagramIcon} alt="Instagram" />
         </Button>
      </div>
   );
}
