import { Quote } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  // newQuote=new Quote 
  // ("","","",new Date(),);
  constructor() { }

  ngOnInit(): void {
  }

}
