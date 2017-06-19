import { Component } from '@angular/core';
import { Term } from '../term.model';

@Component({
  selector: 'app-term-list',
  templateUrl: './term-list.component.html',
  styleUrls: ['./term-list.component.css']
})
export class TermListComponent {
  terms: Term[] = [
    new Term("Object", "A unique instance of class", "Fundamentals","Javascript",1),
    new Term("IRB", "The REPL(Command Line Tool) of Ruby language","Fundamentals","Ruby",2),
    new Term("Method", "Set of instructions that do action when called","Fundamentals", "Ruby", 3),
    new Term("String", "a sequence of characters", "Fundamentals", "Javascript", 4)
  ]

}
