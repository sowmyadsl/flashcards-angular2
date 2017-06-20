import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Term } from '../term.model';
import { TermService } from '../term.service';

import { FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-term-detail',
  templateUrl: './term-detail.component.html',
  styleUrls: ['./term-detail.component.css'],
  providers: [TermService]
})

export class TermDetailComponent implements OnInit {
  currentRoute: string = this.router.url;
  terms: FirebaseListObservable<any[]>;
  termId: string;
  termToDisplay;
  firebaseArray = [];
  term;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private termService: TermService,
    private db: AngularFireDatabase
  ) {}

  ngOnInit() {
    this.terms = this.termService.getTerms();

    this.route.params.forEach((urlParameters) => {
      this.termId = urlParameters['id'];
    });
    this.termService.getTermById(this.termId).subscribe(subscribedTerm => {
      this.termToDisplay = subscribedTerm;
    });

    // gen firebaseArray
    this.terms = this.db.list('/terms');
    this.terms.subscribe(x => {
      this.firebaseArray.push(x);
    });
  }

  quizMe() {
    var termsArray = this.firebaseArray[Math.floor(Math.random() * this.firebaseArray.length)];
    var term = termsArray[Math.floor(Math.random() * termsArray.length)];
    this.router.navigate(['terms/', term.$key]);
    location.reload(true);
  }

}
