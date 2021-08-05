import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { Player } from '../models/player.model';
import { playersReducer } from './players/reducer';

export interface AppState {
  players: ReadonlyArray<Player>;
}

export const reducers: ActionReducerMap<AppState> = {
  players: playersReducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
