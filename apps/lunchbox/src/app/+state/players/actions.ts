import { createAction, props } from '@ngrx/store';
import { Player } from '../../models/player.model';

export const addPlayer = createAction(
  '[Game] Add Player',
  props<{team:number}>()
);

export const removePlayer = createAction(
  '[Game] Remove Player',
  props<{id:string}>()
);

export const updatePlayer = createAction(
  '[Game] Update Player Name',
  props<Player>()
)




