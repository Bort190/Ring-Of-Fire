import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Game } from '../../models/game';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
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
        this.pickCardAnimation = false;
      }, 1500);

    }
  }
}
