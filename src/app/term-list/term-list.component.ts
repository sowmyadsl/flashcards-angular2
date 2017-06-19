import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Term } from '../term.model';
import { TermService } from '../term.service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-term-list',
  templateUrl: './term-list.component.html',
  styleUrls: ['./term-list.component.css'],
  providers: [TermService]
})

export class TermListComponent implements OnInit {
  terms: FirebaseListObservable<any[]>;;


  constructor(private router: Router, private termService: TermService){}

  ngOnInit(){
    this.terms = this.termService.getTerms();
  }

  // click binding method
  goToDetailPage(clickedTerm){
    this.router.navigate(['terms', clickedTerm.$key]);
  }
}
