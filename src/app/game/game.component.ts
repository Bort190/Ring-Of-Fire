import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Game } from '../../models/game';
import { PlayerComponent } from '../player/player.component';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, PlayerComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {

  currentCard: string = '';
  pickCardAnimation = false;
  game: Game = new Game;

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
    console.log(this.game);
  }

  takeCard() {
    let nextCard = this.game.stack.pop();
    if (!this.pickCardAnimation) {
      if (nextCard !== undefined) {
        this.currentCard = nextCard;
      }

      this.pickCardAnimation = true;


      setTimeout(() => {
        this.game.playedCards.push(this.currentCard);
        this.pickCardAnimation = false;
      }, 1000);

    }
  }
}
