import { createAction, props } from '@ngrx/store';
import { Player } from '../../models/player.model';

export const addPlayer = createAction(
  '[Game] Add Player',
  props<{player:Player}>()
);




