import { Component, Input, OnInit } from '@angular/core';
import { TermService } from '../term.service';

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

  constructor(private termService: TermService) { }

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
