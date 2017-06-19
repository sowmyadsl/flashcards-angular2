import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Term } from '../term.model';
import { TermService } from '../term.service';

@Component({
  selector: 'app-term-detail',
  templateUrl: './term-detail.component.html',
  styleUrls: ['./term-detail.component.css'],
  providers: [TermService]
})

export class TermDetailComponent implements OnInit {
  termId: number;
  termToDisplay: Term;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private termService: TermService
    ) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.termId = parseInt(urlParameters['id']);
    });
    this.termToDisplay = this.termService.getTermsById(this.termId);
  }

}
