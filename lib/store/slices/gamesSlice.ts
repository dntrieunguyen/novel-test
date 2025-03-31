import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const imageUrl =
   'https://th.bing.com/th/id/OIP.JHYK9aw5p3Q4kqrGAKjP8gHaEc?rs=1&pid=ImgDetMain';

interface Game {
   id: string;
   title: string;
   image: string;
   isNew?: boolean;
   isHot?: boolean;
}

interface Provider {
   id: string;
   name: string;
   logo: string;
}

interface GamesState {
   exclusiveGames: Game[];
   allProviders: Provider[];
   loading: boolean;
}

const initialState: GamesState = {
   exclusiveGames: [
      { id: '1', title: 'Devjump', image: imageUrl, isNew: true },
      { id: '2', title: 'Splat', image: imageUrl, isHot: true },
      { id: '3', title: 'Fury', image: imageUrl, isNew: true },
      { id: '4', title: 'Ninja', image: imageUrl, isHot: true },
   ],
   allProviders: [
      { id: '1', name: 'Evolution', logo: imageUrl },
      { id: '2', name: 'Spribe', logo: imageUrl },
      { id: '3', name: 'Wazdan', logo: imageUrl },
      { id: '4', name: 'Red Tiger', logo: imageUrl },
      { id: '5', name: 'Pragmatic', logo: imageUrl },
      { id: '6', name: 'Joker', logo: imageUrl },
      { id: '7', name: 'Booming', logo: imageUrl },
      { id: '8', name: 'Yggdrasil', logo: imageUrl },
   ],
   loading: false,
};

export const gamesSlice = createSlice({
   name: 'games',
   initialState,
   reducers: {
      setLoading: (state, action: PayloadAction<boolean>) => {
         state.loading = action.payload;
      },
   },
});

export const { setLoading } = gamesSlice.actions;
export default gamesSlice.reducer;
