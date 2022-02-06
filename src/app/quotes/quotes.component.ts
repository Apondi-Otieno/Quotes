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
    new Quotes(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son', new Date),
    new Quotes(2, 'Buy Cookies', 'I have to buy cookies for the parrot', new Date),
    new Quotes(3, 'Get new Phone Case', 'Diana has her birthday coming up soon', new Date),
    new Quotes(4, 'Get Dog Food', 'Pupper likes expensive snacks', new Date),
    new Quotes(5, 'Solve math homework', 'Damn Math', new Date),
    new Quotes(6, 'Plot my world domination plan', 'Cause I am an evil overlord', new Date),
    new Quotes(7, 'Watch finding Nemo', 'Find an online version and watch merlin find his son', new Date),
    new Quotes(8, 'Buy Cookies', 'I have to buy cookies for the parrot', new Date),
    new Quotes(9, 'Get new Phone Case', 'Diana has her birthday coming up soon', new Date),
    new Quotes(10, 'Get Dog Food', 'Pupper likes expensive snacks', new Date),
    new Quotes(11, 'Solve math homework', 'Damn Math', new Date),
    new Quotes(12, 'Plot my world domination plan', 'Cause I am an evil overlord', new Date),
  ];

  toggleDetails(index :any){
    this.quote[index].showDescription = !this.quote[index].showDescription;
  }

  
  completeQuote(isComplete: any, index: number){
    if (isComplete) {
      this.quote.splice(index,1);
    }
  }
}





