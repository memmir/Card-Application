import { Component, OnInit } from '@angular/core';
import {CardModalComponent} from './card-modal/card-modal.component';
import { MatDialog } from '@angular/material/dialog';
import {CardService} from '../services/card.service';
import {Card} from '../models/card';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  cards!: Card[];

  constructor(
    public dialog: MatDialog,
    private cardService: CardService,
  ) {
  }



  ngOnInit(): void {
    this.getCards();
  }

  openAddCardModal(): void{
    const dialog = this.dialog.open(CardModalComponent, {
      width: '400px',
    });
    dialog.afterClosed().subscribe(result => {
      if (result){
        this.getCards();
      }
    });
  }

  getCards(): void {
    this.cardService.getCard()
    .subscribe((res: Card[]) => {
    this.cards = res;
    });
  }

}
