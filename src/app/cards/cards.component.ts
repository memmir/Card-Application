import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  constructor() { }

  cardItem = {
    title: 'lorem ipsum',
    name: 'mahmut kilinc',
    phone: '055555555',
    email: 'info@app.com',
    address: 'Ankara,Turkey'
  };

  ngOnInit(): void {
  }

}
