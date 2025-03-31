'use client';

import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import React from 'react';
import ContainerButton from '../ContainerButton';

interface Provider {
   id: string;
   name: string;
   logo: React.ReactNode;
}

interface AllProvidersProps {
   providers: Provider[];
}

export default function AllProviders({ providers = [] }: AllProvidersProps) {
   return (
      <div className="mt-12">
         <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-white">All Providers</h2>
            <Button variant="ghost" className="hidden text-white md:block">
               SEE ALL <ChevronRight className="ml-1 w-4 h-4" />
            </Button>

            <ContainerButton></ContainerButton>
         </div>

         <div className="overflow-x-auto w-full">
            <div className="grid gap-4 grid-cols-8 w-[1240px]">
               {providers && providers.length > 0 ? (
                  providers.map(provider => (
                     <div
                        key={provider.id}
                        className="flex flex-col justify-between items-center mb-2 h-24 rounded-lg transition cursor-pointer bg-navy-800 hover:bg-navy-700"
                     >
                        <div className="flex relative justify-center items-center w-full h-1/2">
                           <>{provider.logo}</>
                        </div>
                        <div className="flex justify-center items-center w-full h-1/2 text-xs text-center text-white rounded-b-lg bg-gray-500/15">
                           {provider.name || 'Unknown Provider'}
                        </div>
                     </div>
                  ))
               ) : (
                  <div className="col-span-full py-8 text-center text-white">
                     No providers available
                  </div>
               )}
            </div>
         </div>
      </div>
   );
}
