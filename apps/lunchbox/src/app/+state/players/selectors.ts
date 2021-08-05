import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AppState } from '..';
import { Player } from '../../models/player.model';


export const selectTeam1 = createSelector(
    (state: AppState) => state.players,
    (players: ReadonlyArray<Player>) => players.filter(player => player.team === 0)
);

export const selectTeam2 = createSelector(
    (state: AppState) => state.players,
    (players: ReadonlyArray<Player>) => players.filter(player => player.team === 1)
);

export const selectPlayersState = createFeatureSelector<
    AppState,
    ReadonlyArray<Player>
>("players");
