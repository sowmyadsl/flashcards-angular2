import { Component, Input, OnInit } from '@angular/core';
import { TermService } from '../term.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-term',
  templateUrl: './edit-term.component.html',
  styleUrls: ['./edit-term.component.css'],
  providers: [TermService]
})

export class EditTermComponent implements OnInit {
  @Input() selectedTerm;
  @Input() user;
  uid: string;
  currentRoute: string = this.router.url;

  constructor(
    private termService: TermService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
  }

  beginUpdateTerm(termToUpdate){
    this.termService.updateTerm(termToUpdate);
  }

  beginDeletingTerm(termToDelete){
    if(confirm("Are you sure you want to delete this term?")){
      this.termService.deleteTerm(termToDelete);
    }
  }

}
