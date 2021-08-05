import { createReducer, on, Action, ActionReducer } from '@ngrx/store';
import { Player } from '../../models/player.model';
import { addPlayer, updatePlayer, removePlayer } from './actions';


export const initialState: ReadonlyArray<Player> = [
  {
    id: '1',
    name: '',
    team: 0,
  },
  {
    id: '2',
    name: '',
    team: 1,
  }
];

export const playersReducer: ActionReducer<ReadonlyArray<Player>, Action> = createReducer(
  initialState,
  on(addPlayer, (state, { team }) => [...state, { id: state.length + 1 + '', name: '', team }]),
  on(removePlayer, (state, { id }) => [...state.filter(player => player.id !== id)]),
  on(updatePlayer, (state, { id, name, team }) =>
    [...state.filter(player => player.id !== id), { id, name, team }])
);