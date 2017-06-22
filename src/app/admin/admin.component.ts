import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Term } from '../term.model';
import { Router } from '@angular/router';
import { TermService } from '../term.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [TermService]
})

export class AdminComponent implements OnInit {
  @Input() user;
  terms: FirebaseListObservable<any[]>;
  termName: string;
  currentRoute: string = this.router.url;

  constructor(
    private router: Router,
    private termService: TermService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.terms = this.termService.getTerms();
  }

  submitForm(name: string, definition: string, category: string, subject: string){
    var newTerm: Term = new Term(name, definition, category, subject);
    this.termService.addTerm(newTerm);
  }
}
