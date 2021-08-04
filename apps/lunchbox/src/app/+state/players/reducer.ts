import { createReducer, on, Action, ActionReducer } from '@ngrx/store';
import { Player } from '../../models/player.model';
import { addPlayer } from './actions';


export const initialState: ReadonlyArray<Player> = [];

export const playersReducer: ActionReducer<readonly Player[], Action> = createReducer(
  initialState,
  on(addPlayer, (state, { player }) => [...state, player])
);