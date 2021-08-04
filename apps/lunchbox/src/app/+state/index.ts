import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { Player } from '../models/player.model';
import { playersReducer } from './players/reducer';

export const lunchboxFeatureKey = 'lunchbox';

export interface State {
  players: readonly Player[];
}

export const reducers: ActionReducerMap<State> = {
  players: playersReducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
