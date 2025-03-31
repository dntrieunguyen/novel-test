'use client';

import { useSelector } from 'react-redux';
import { Button } from '@/components/ui/button';
import { AlignLeft, Search, User } from 'lucide-react';
import Link from 'next/link';
import { RootState } from '@/lib/store';
import Image from 'next/image';
import Logo from '@/public/White_logo.png';

export default function Navbar() {
   const { isLoggedIn } = useSelector((state: RootState) => state.auth);

   return (
      <nav className="py-4 bg-navy-900">
         <div className="container flex justify-between items-center px-4 mx-auto">
            <div className="flex gap-2 justify-start">
               <div className="flex items-center space-x-4">
                  <Button className="" variant="ghost" size="icon">
                     <AlignLeft className="w-8 h-8 text-white" />
                  </Button>
                  <Link href="/" className="text-xl font-bold text-white">
                     <Image src={Logo} alt="logo" className="h-8 w-fit" />
                  </Link>
               </div>

               <div className="hidden items-center space-x-6 md:flex">
                  <Button variant="ghost" size="icon">
                     <Search className="text-white size-5" />
                  </Button>
                  <Link href="/" className="text-white hover:text-gray-300">
                     HOME
                  </Link>
                  <Link href="/game" className="text-white hover:text-gray-300">
                     GAME
                  </Link>
                  <Link
                     href="/infos"
                     className="text-white hover:text-gray-300"
                  >
                     INFOS
                  </Link>
                  <Link href="/news" className="text-white hover:text-gray-300">
                     NEWS
                  </Link>
                  <Link
                     href="/promotions"
                     className="text-white hover:text-gray-300"
                  >
                     PROMOTIONS
                  </Link>
                  <Link href="/vip" className="text-white hover:text-gray-300">
                     VIP
                  </Link>
               </div>
            </div>

            <div className="flex items-center space-x-2">
               {isLoggedIn ? (
                  <Button variant="ghost" size="icon">
                     <User className="w-5 h-5 text-white" />
                  </Button>
               ) : (
                  <div className="flex space-x-2">
                     <Button
                        variant="outline"
                        className="text-white border-white hover:bg-white hover:text-navy-900"
                     >
                        LOGIN
                     </Button>
                     <Button className="text-white bg-green-500 hover:bg-green-600">
                        REGISTRATION
                     </Button>
                  </div>
               )}
            </div>
         </div>
      </nav>
   );
}
