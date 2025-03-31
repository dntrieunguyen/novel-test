export interface Game {
   id: string;
   title: string;
   image: string;
   isNew?: boolean;
   isHot?: boolean;
   provider?: string;
}

export interface ExclusiveGamesProps {
   games: Game[];
}
