'use client';
import { useSelector } from 'react-redux';

import { RootState } from '@/lib/store';
import Image from 'next/image';

import evolutionURL from '@/public/game-brand/evolution.png';
import spribeURL from '@/public/game-brand/spribe.png';
import velipURL from '@/public/game-brand/velipay.png';
import turboGaming from '@/public/game-brand/turbo-game.png';
import smartSoft from '@/public/game-brand/smart-soft.png';
import oneHundredHP from '@/public/game-brand/gaming-100ph.png';
import bgaming from '@/public/game-brand/bgaming.png';
import wazanURL from '@/public/game-brand/wazdan.png';
import Navbar from '@/components/layout/navbar/navbar';
import Hero from '@/components/layout/hero/hero';
import GameCategories from '@/components/layout/categories/game-categories';
import ExclusiveGames from '@/components/layout/exclusive/exclusive-games';
import AllProviders from '@/components/layout/providers/all-providers';
import Footer from '@/components/layout/footer/footer';

export default function Home() {
   const { exclusiveGames } = useSelector((state: RootState) => state.games);

   const allProviders = [
      {
         id: '1',
         name: 'Evolution',
         logo: (
            <Image
               src={evolutionURL}
               alt="evolution"
               className="h-6 w-fit"
               quality={100}
            />
         ),
      },
      {
         id: '2',
         name: 'Spribe',
         logo: (
            <Image
               src={spribeURL}
               alt="spribe"
               className="h-6 w-fit"
               quality={100}
            />
         ),
      },
      {
         id: '3',
         name: 'VeliPlay',
         logo: (
            <Image
               src={velipURL}
               alt="velip"
               className="h-6 w-fit"
               quality={100}
            />
         ),
      },
      {
         id: '4',
         name: 'Turbo Games',
         logo: (
            <Image
               src={turboGaming}
               alt="turbo-gaming"
               className="h-6 w-fit"
               quality={100}
            />
         ),
      },
      {
         id: '5',
         name: 'SmartSoft',
         logo: (
            <Image
               src={smartSoft}
               alt="smart-soft"
               className="h-6 w-fit"
               quality={100}
            />
         ),
      },
      {
         id: '6',
         name: '100HP Gaming',
         logo: (
            <Image
               src={oneHundredHP}
               alt="100hp-gaming"
               className="h-6 w-fit"
               quality={100}
            />
         ),
      },
      {
         id: '7',
         name: 'BGaming',
         logo: (
            <Image
               src={bgaming}
               alt="bgaming"
               className="h-6 w-fit"
               quality={100}
            />
         ),
      },
      {
         id: '8',
         name: 'Wazda',
         logo: (
            <Image
               src={wazanURL}
               alt="wazanURL"
               className="h-6 w-fit"
               quality={100}
            />
         ),
      },
   ];

   return (
      <main className="min-h-screen bg-navy-950">
         <Navbar />
         <div className="w-full">
            <Hero />
            <section className="mx-auto max-w-[1240px]">
               <GameCategories />
               <ExclusiveGames games={exclusiveGames} />
               <AllProviders providers={allProviders} />
            </section>
         </div>
         <Footer />
      </main>
   );
}
