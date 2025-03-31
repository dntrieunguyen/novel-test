'use client';

import { AppDownloads } from './app-downloads';
import { menuData } from './footer-data';
import { FooterMenu } from './footer-menu';
import { HelpCenterDesktop } from './help-center-desktop';
import { HelpCenterMobile } from './help-center-mobile';
import { SocialButtons } from './social-buttons';

export default function Footer() {
   return (
      <footer className="py-12 mt-16 bg-navy-900">
         <div className="px-4 md:p-0 mx-auto max-w-[1240px]">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
               <HelpCenterDesktop />

               {menuData.map((section, index) => (
                  <FooterMenu
                     key={index}
                     title={section.title}
                     items={section.items}
                  />
               ))}

               <div className="flex flex-col w-full md:hidden">
                  <span className="w-full text-center text-white">
                     Follow Us
                  </span>
                  <SocialButtons className="flex justify-between px-5" />
               </div>

               <HelpCenterMobile />
               <AppDownloads />
            </div>
         </div>
      </footer>
   );
}
