'use client';

import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import HotTag from '@/public/hot.png';
import NewTag from '@/public/new.png';
import GameItemExample from '@/public/game-items-example.png';
import ContainerButton from '../ContainerButton';
import { ExclusiveGamesProps } from '@/type/ui/exclusive';

export default function ExclusiveGames({ games }: ExclusiveGamesProps) {
   return (
      <div className="mt-12">
         <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-white">Exclusive Games</h2>
            <Button variant="ghost" className="hidden text-white md:block">
               SEE ALL <ChevronRight className="ml-1 w-4 h-4" />
            </Button>

            <ContainerButton />
         </div>

         <div className="overflow-x-auto">
            <div className="flex flex-nowrap gap-5">
               {games.map(game => (
                  <div
                     key={game.id}
                     className="relative h-40 md:h-80 rounded-xl cursor-pointer bg-navy-800 group min-w-32 md:min-w-[200px]"
                  >
                     {game.isNew && (
                        <div className="absolute -left-1 top-4 z-30">
                           <Image
                              src={NewTag}
                              alt="New"
                              className="w-auto h-8"
                              quality={100}
                           />
                        </div>
                     )}
                     {game.isHot && (
                        <div className="absolute -left-1 top-4 z-30">
                           <Image
                              src={HotTag}
                              alt="Hot"
                              className="w-auto h-8"
                              quality={100}
                           />
                        </div>
                     )}
                     <div className="overflow-hidden relative z-10 h-full rounded-xl">
                        <Image
                           src={GameItemExample}
                           alt={game.title || 'Game item'}
                           fill
                           className="object-cover"
                        />
                     </div>

                     <span className="absolute bottom-1 left-1/2 z-20 text-sm -translate-x-1/2">
                        {game.title || 'No title'}
                     </span>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}
