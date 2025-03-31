import { Button } from '@/components/ui/button';

export function HelpCenterMobile() {
   return (
      <div className="flex gap-2 justify-between items-center mt-14 md:hidden px-3 py-5 bg-[#1A3157] rounded-xl">
         <div className="flex flex-col">
            <h3 className="text-white">Help center</h3>
            <p className="text-sm text-gray-400">
               if you have any questions?
            </p>
         </div>

         <Button className="text-white bg-blue-600 hover:bg-blue-600/90">
            Get Answers
         </Button>
      </div>
   );
}