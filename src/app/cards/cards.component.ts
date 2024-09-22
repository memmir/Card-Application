import { Component, OnInit } from '@angular/core';
import {CardModalComponent} from './card-modal/card-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  constructor(private dialog: MatDialog) {
  }

  cardItem = {
    title: 'lorem ipsum',
    name: 'mahmut kilinc',
    phone: '055555555',
    email: 'info@app.com',
    address: 'Ankara,Turkey'
  };

  ngOnInit(): void {
  }

  openAddCardModal(): void{

    this.dialog.open(CardModalComponent);
  }
}
