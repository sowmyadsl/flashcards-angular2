import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Term } from '../term.model';
import { TermService } from '../term.service';
import { FirebaseListObservable, AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';


@Component({
  selector: 'app-term-list',
  templateUrl: './term-list.component.html',
  styleUrls: ['./term-list.component.css'],
  providers: [TermService]
})

export class TermListComponent implements OnInit {
  terms: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  filterByCategory: string = "allCategories";
  filterBySubject: string;
  filterByWords: any[];
  termSubject: string;
  key;

  constructor(
    private router: Router,
    private termService: TermService,
    private route: ActivatedRoute,
    private location: Location,
    private db: AngularFireDatabase
  ) { }

  ngOnInit(){
    this.terms = this.termService.getTerms();

    if(this.currentRoute === '/Ruby'){
      this.filterBySubject = "Ruby";
    } else if (this.currentRoute === '/Javascript'){
      this.filterBySubject = "JavaScript";
    } else {
      this.filterBySubject = "allSubjects";
    }
  }

  // click binding method
  goToDetailPage(clickedTerm){
    this.router.navigate(['Terms', clickedTerm.$key]);
  }

  onChange(menuOption){
    this.filterByCategory = menuOption;
  }

  quizMe() {
    var firebaseArray = [];
    var output = [];
    this.terms = this.db.list('/terms');
    this.terms.subscribe(x => {
      firebaseArray.push(x);
    });
    var termsArray = firebaseArray[Math.floor(Math.random() * firebaseArray.length)];
    for(var i = 0; i < termsArray.length; i++) {
      if(('/' + termsArray[i].subject) === this.currentRoute) {
        output.push(termsArray[i]);
      }
    }
    var term = output[Math.floor(Math.random() * output.length)];
    this.router.navigate([term.subject, term.$key]);
  }

  quizMeAll() {
    var firebaseArray = [];
    this.terms = this.db.list('/terms');
    this.terms.subscribe(x => {
      firebaseArray.push(x);
    });
    var termsArray = firebaseArray[Math.floor(Math.random() * firebaseArray.length)];
    var term = termsArray[Math.floor(Math.random() * termsArray.length)];
    this.router.navigate([term.subject, term.$key]);
  }

  searchByTerm(searchString){
    var searchWords = searchString.split(' ');
    console.log(searchWords);
    this.filterByWords = searchWords;
  }

}
