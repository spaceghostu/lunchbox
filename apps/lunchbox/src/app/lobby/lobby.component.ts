import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { addPlayer, removePlayer, updatePlayer } from '../+state/players/actions';
import { selectTeam1, selectTeam2 } from '../+state/players/selectors';
import { AppState } from '../+state/index';

@Component({
  selector: 'lunchbox-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent {

  constructor(public store: Store<AppState>) {}

  team1$ = this.store.pipe(select(selectTeam1));
  team2$ = this.store.pipe(select(selectTeam2));

  addPlayer(team: number) {
    this.store.dispatch(addPlayer({team}));
  }

  updatePlayerName(id: string, event: Event, team: number) {
    this.store.dispatch(updatePlayer({id, name: (event.target as HTMLInputElement).value, team}));
  }

  removePlayer(id: string) {
    this.store.dispatch(removePlayer({id}));
  }

}
