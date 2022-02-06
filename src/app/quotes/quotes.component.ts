import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  quote: Quotes[] = [
    { id: 1, name: 'Watch finding Nemo', description: 'fitzgerald' },
    { id: 2, name: 'Buy Cookies', description: 'fitzgerald' },
    { id: 3, name: 'Get new Phone Case', description: 'fitzgerald' },
    { id: 4, name: 'Get Dog Food', description: 'fitzgerald' },
    { id: 5, name: 'Solve math homework', description: 'fitzgerald' },
    { id: 6, name: 'Plot my world domination plan', description: 'fitzgerald' },
  ];
}


  // quote:string[];

  // constructor() {
  //   this.quote = ['life is beautiful', 'do you' , 'soft life' , 'sipangwingwi', 'code or go home']

  // ngOnInit(): void {
  // }


