import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import {
   Collapsible,
   CollapsibleContent,
   CollapsibleTrigger,
} from '@radix-ui/react-collapsible';
import { FooterMenuProps } from '@/type/ui/footer';

export function FooterMenu({ title, items }: FooterMenuProps) {
   return (
      <div>
         <MobileMenu title={title} items={items} />
         <DesktopMenu title={title} items={items} />
      </div>
   );
}

function MobileMenu({ title, items }: FooterMenuProps) {
   return (
      <Collapsible className="md:hidden">
         <div className="flex justify-between items-center bg-[#1A3157] p-3 rounded-xl">
            <h3 className="text-lg font-bold text-white">{title}</h3>
            <CollapsibleTrigger className="text-white">
               <ChevronDown className="w-5 h-5" />
            </CollapsibleTrigger>
         </div>
         <CollapsibleContent className="bg-transparent">
            <ul className="p-2 space-y-2">
               {items.map((item, index) => (
                  <li key={index}>
                     <Link
                        href={item.href}
                        className="text-gray-400 hover:text-white"
                     >
                        {item.label}
                     </Link>
                  </li>
               ))}
            </ul>
         </CollapsibleContent>
      </Collapsible>
   );
}

function DesktopMenu({ title, items }: FooterMenuProps) {
   return (
      <div className="hidden md:block">
         <h3 className="mb-4 text-lg font-bold text-white">{title}</h3>
         <ul className="space-y-2">
            {items.map((item, index) => (
               <li key={index}>
                  <Link
                     href={item.href}
                     className="text-gray-400 hover:text-white"
                  >
                     {item.label}
                  </Link>
               </li>
            ))}
         </ul>
      </div>
   );
}
