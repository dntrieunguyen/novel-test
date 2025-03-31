export const menuData = [
   {
      title: 'Games',
      items: [
         { href: '/games/1', label: 'Game 1' },
         { href: '/games/2', label: 'Game 2' },
         { href: '/games/3', label: 'Game 3' },
         { href: '/games/4', label: 'Game 14' },
         { href: '/awards', label: 'Awards & Certificates' },
         { href: '/app', label: 'App' },
      ],
   },
   {
      title: 'About',
      items: [
         { href: '/about', label: 'About Us' },
         { href: '/promotions', label: 'Promotions' },
         { href: '/vip', label: 'VIP' },
         { href: '/help', label: 'Help Center' },
         { href: '/awards', label: 'Awards & Certificates' },
      ],
   },
   {
      title: 'Legal Information',
      items: [
         { href: '/terms', label: 'General Terms & Conditions' },
         { href: '/responsible-gaming', label: 'Responsible Gaming Policy' },
         { href: '/sports-betting', label: 'Sports Betting Rules' },
         { href: '/privacy', label: 'Privacy and Cookies Policy' },
         { href: '/payment', label: 'Payment Methods' },
         { href: '/limits', label: 'Limits' },
      ],
   },
];

export interface MenuItem {
   href: string;
   label: string;
}

export interface MenuSection {
   title: string;
   items: MenuItem[];
}