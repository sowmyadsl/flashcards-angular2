import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Term } from '../term.model';
import { TermService } from '../term.service';

import { FirebaseObjectObservable } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-term-detail',
  templateUrl: './term-detail.component.html',
  styleUrls: ['./term-detail.component.css'],
  providers: [TermService]
})

export class TermDetailComponent implements OnInit {
  termId: string;
  termToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private termService: TermService
  ) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.termId = urlParameters['id'];
    });
    this.termService.getTermById(this.termId).subscribe(subscribedTerm => {
      this.termToDisplay = subscribedTerm;
    });
  }
}
