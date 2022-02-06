import { Quotes } from '../quotes';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newQuote=new Quotes (0,"","",new Date(),);
  constructor() { }

  ngOnInit(): void {
  }

}
