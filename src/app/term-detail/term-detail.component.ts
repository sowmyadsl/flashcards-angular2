import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Term } from '../term.model';
import { TermService } from '../term.service';

import { FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database';
declare var $:any;

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
  termSubject: string;
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

  ngAfterViewInit(){
    $('#flip').on('click', function(e) {
    	e.preventDefault();

    	$('#card').toggleClass('flipped');
    });
  }

  ngOnInit() {
    this.terms = this.termService.getTerms();

    this.route.params.forEach((urlParameters) => {
      this.termSubject = urlParameters['subject'];
    });

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

  goBack() {
    this.router.navigate([this.termSubject]);
  }

  quizMe() {
    var termsArray = this.firebaseArray[Math.floor(Math.random() * this.firebaseArray.length)];
    var currentRouteSubject = this.currentRoute.split(/\W/).splice(1).shift();
    var output = [];

    if (currentRouteSubject === this.termSubject) {
      for(var i = 0; i < termsArray.length; i++){
        if (termsArray[i].subject ===currentRouteSubject){
          output.push(termsArray[i]);
        }
      }
    }

    var term = output[Math.floor(Math.random() * output.length)];
    this.router.navigate([term.subject, term.$key]);
    location.reload();
  }

}
