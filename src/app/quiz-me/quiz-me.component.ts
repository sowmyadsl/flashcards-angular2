import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Term } from '../term.model';
import { TermService } from '../term.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-quiz-me',
  templateUrl: './quiz-me.component.html',
  styleUrls: ['./quiz-me.component.css'],
  providers: [TermService]
})
export class QuizMeComponent implements OnInit {
  terms: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  // filterByCategory: string = "allCategories";
  filterBySubject: string;
  key;

  constructor(
    private router: Router,
    private termService: TermService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.terms = this.termService.getTerms();
    if(this.currentRoute === '/ruby'){
      this.filterBySubject = "Ruby";
    } else if (this.currentRoute === '/javascript'){
      this.filterBySubject = "JavaScript";
    } else {
      this.filterBySubject = "allSubjects";
    }
  }

}
