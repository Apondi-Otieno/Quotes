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
    new Quotes(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son', new Date, 0, 0),
    new Quotes(2, 'Buy Cookies', 'I have to buy cookies for the parrot', new Date, 0 , 0 ),
    new Quotes(3, 'Get new Phone Case', 'Diana has her birthday coming up soon', new Date, 0,0),
    new Quotes(4, 'Get Dog Food', 'Pupper likes expensive snacks', new Date, 0, 0),
    new Quotes(5, 'Solve math homework', 'Damn Math', new Date ,0,0),
    new Quotes(6, 'Plot my world domination plan', 'Cause I am an evil overlord', new Date, 0,0),
    new Quotes(7, 'Watch finding Nemo', 'Find an online version and watch merlin find his son', new Date,0,0),
    new Quotes(8, 'Buy Cookies', 'I have to buy cookies for the parrot', new Date,0,0),
    new Quotes(9, 'Get new Phone Case', 'Diana has her birthday coming up soon', new Date,0,0),
    new Quotes(10, 'Get Dog Food', 'Pupper likes expensive snacks', new Date,0,0),
    new Quotes(11, 'Solve math homework', 'Damn Math', new Date,0,0),
    new Quotes(12, 'Plot my world domination plan', 'Cause I am an evil overlord', new Date,0,0),
  ];

  toggleDetails(index :any){
    this.quote[index].showDescription = !this.quote[index].showDescription;
  }

  
  completeQuote(isComplete: any, index: number){
    if (isComplete) {
      this.quote.splice(index,1);
    }
  }

   addNewQuote(quote: Quotes){
    let quoteLength = this.quote.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quote.push(quote)
  }
}





