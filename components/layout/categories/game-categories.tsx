'use client';

import Image from 'next/image';
import DiamondURL from '@/public/categories-game/diamond.png';
import CrownURL from '@/public/categories-game/crowd.png';
import GiftURL from '@/public/categories-game/gift.png';
import GameURL from '@/public/categories-game/game.png';
import CoinURL from '@/public/categories-game/coin.png';
import BallURL from '@/public/categories-game/ball.png';
import ProviderURL from '@/public/categories-game/provider.png';

export default function GameCategories() {
   const categories = [
      {
         icon: <Image src={DiamondURL} alt="diamond" className="w-5" />,
         label: 'Diamond Nine',
      },
      {
         icon: <Image src={CrownURL} alt="crown" className="w-5" />,
         label: 'VIP',
      },
      {
         icon: <Image src={GiftURL} alt="gift" className="w-5" />,
         label: 'Promotion',
      },
      {
         icon: <Image src={GameURL} alt="game" className="w-5" />,
         label: 'Hot Match',
      },
      {
         icon: <Image src={CoinURL} alt="coin" className="w-5" />,
         label: 'P2P Transaction',
      },
      {
         icon: <Image src={BallURL} alt="ball" className="w-5" />,
         label: 'Games',
      },
      {
         icon: <Image src={ProviderURL} alt="provider" className="w-5" />,
         label: 'Provider',
      },
   ];

   return (
      <div className="overflow-x-auto w-full">
         <div className="grid grid-cols-7 gap-4 mt-8 w-[1240px]">
            {categories.map((category, index) => (
               <div
                  key={index}
                  className="flex gap-3 justify-center items-center p-4 bg-transparent rounded-lg border border-white/10 transition-colors cursor-pointer hover:bg-navy-700 min-w-[120px]"
               >
                  <div className="text-white">{category.icon}</div>
                  <div className="text-xs text-white w-fit">
                     {category.label}
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
}
