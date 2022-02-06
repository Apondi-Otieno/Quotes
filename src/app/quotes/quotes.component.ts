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
    new Quotes(1, 'Be yourself everyone else is already taken.', 'Oscar Wilde', new Date, 0, 0),
    new Quotes(2, 'I am selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle But if you can not handle me at my worst, then you sure as hell don not deserve me at my best',
      'Marilyn Monroe', new Date, 0, 0),
    new Quotes(3, 'A room without books is like a body without a soul.', 'Marcus Cicero', new Date, 0, 0),
    new Quotes(4, 'Youve gotta dance like theres nobody watching Love like youll never be hurt Sing like theres nobody listening And live like its heaven on earth.', 'William Purkey', new Date, 0, 0),
    new Quotes(5, 'Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself  ', 'C.S Lewis', new Date, 0, 0),
    new Quotes(6, 'To live is the rarest thing in the world. Most people exist, that is all.', 'Oscar Wilde', new Date, 0, 0),
    new Quotes(7, 'Without music, life would be a mistake.', ' Friedrich Nietzsche, Twilight of the Idols', new Date, 0, 0),
    new Quotes(8, 'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.', 'Ralph Waldo Emerson', new Date, 0, 0),
    new Quotes(9, 'Heres to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They are not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can not do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.',
      'Rob S', new Date, 0, 0),
    new Quotes(10, 'It is better to be hated for what you are than to be loved for what you are not.', 'Andre Gide, Autumn Leaves', new Date, 0, 0),
    new Quotes(11, 'Insanity is doing the same thing, over and over again, but expecting different results.', 'Narcotics Anonymous', new Date, 0, 0),
    new Quotes(12, 'I am so clever that sometimes I do not understand a single word of what I am saying', ' Oscar Wilde, The Happy Prince and Other Stories', new Date, 0, 0),
  ];

  toggleDetails(index: any) {
    this.quote[index].showDescription = !this.quote[index].showDescription;
  }


  completeQuote(isComplete: any, index: number) {
    if (isComplete) {
      this.quote.splice(index, 1);
    }
  }

  addNewQuote(quote: Quotes) {
    let quoteLength = this.quote.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quote.push(quote)
  }
}





