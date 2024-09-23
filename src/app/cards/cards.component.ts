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

  constructor(
    public dialog: MatDialog,
    public cardService: CardService,
  ) {
  }



  ngOnInit(): void {
    this.cardService.getCard();
  }

  openAddCardModal(): void {
     this.dialog.open(CardModalComponent, {
      width: '400px',
    });
  }

}
