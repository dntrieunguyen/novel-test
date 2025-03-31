import { Button } from '@/components/ui/button';
import { SocialButtons } from './social-buttons';

export function HelpCenterDesktop() {
   return (
      <div className="hidden md:block">
         <h3 className="mb-4 text-lg font-bold text-white">
            Help Center
         </h3>
         <p className="mb-4 text-gray-400">
            If you have any questions?
         </p>
         <Button className="text-white bg-blue-600 hover:bg-blue-700">
            GET ANSWERS
         </Button>
         <SocialButtons />
      </div>
   );
}