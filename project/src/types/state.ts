import {store} from '../store/store';

export type TypeState = {
  cityState: string | null
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;