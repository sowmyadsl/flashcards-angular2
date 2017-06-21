import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Term } from '../term.model';
import { TermService } from '../term.service';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { FirebaseObjectObservable } from 'angularfire2/database';


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
    if(this.currentRoute === '/ruby'){
      this.filterBySubject = "Ruby";
    } else if (this.currentRoute === '/javascript'){
      this.filterBySubject = "JavaScript";
    } else {
      this.filterBySubject = "allSubjects";
    }
  }

  // click binding method
  goToDetailPage(clickedTerm){
    this.router.navigate(['terms', clickedTerm.$key]);
  }

  onChange(menuOption){
    this.filterByCategory = menuOption;
  }

  quizMe() {
    var test = [];
    this.terms = this.db.list('/terms');
    this.terms.subscribe(x => console.log('Subscriber 1: ', x));
    this.terms.subscribe(x => {
      test.push(x);
    });
    console.log("Test: ", test)
    var test2 = test[Math.floor(Math.random() * test.length)];
    var term = test2[Math.floor(Math.random() * test2.length)];
    console.log("Term: ", term.$key)
  }

  searchByTerm(searchString){
    var searchWords = searchString.split(' ');
    console.log(searchWords);
    this.filterByWords = searchWords;
  }

}
