import Image from 'next/image';
import AndroidIcon from '@/public/icon/android.png';
import IOSIcon from '@/public/icon/apple.png';

export function AppDownloads() {
   return (
      <div className="flex flex-col my-3 w-full">
         <MacOSApp />
         <MobileApps />
      </div>
   );
}

function MacOSApp() {
   return (
      <div className="items-center w-full text-white p-3 my-2 bg-[#1A3157] rounded-xl hidden md:flex">
         <Image
            src={IOSIcon}
            alt="macOS"
            width={70}
            height={42}
            unoptimized
         />
         <p className="text-xs">Bluechip App for Mac OS</p>
      </div>
   );
}

function MobileApps() {
   return (
      <div className="flex gap-1 justify-between w-full">
         <AndroidApp />
         <IOSApp />
      </div>
   );
}

function AndroidApp() {
   return (
      <div className="flex items-center w-1/2 text-white p-3 bg-[#1A3157] rounded-xl">
         <Image
            src={AndroidIcon}
            alt="Android"
            width={42}
            height={42}
            unoptimized
         />
         <div className="flex flex-col">
            <p className="text-xs">Bluechip App</p>
            <p className="text-xs text-gray-400 md:hidden">
               for android
            </p>
         </div>
      </div>
   );
}

function IOSApp() {
   return (
      <div className="flex items-center w-1/2 text-white p-3 bg-[#1A3157] rounded-xl">
         <Image
            src={IOSIcon}
            alt="iOS"
            width={42}
            height={42}
            unoptimized
         />
         <div className="flex flex-col justify-start">
            <p className="text-xs">Bluechip App</p>
            <p className="text-xs text-gray-400 md:hidden">
               for IOS
            </p>
         </div>
      </div>
   );
}