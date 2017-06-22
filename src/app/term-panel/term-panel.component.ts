import { Component, Input, OnInit } from '@angular/core';
import { TermService } from '../term.service';

@Component({
  selector: 'app-term-panel',
  templateUrl: './term-panel.component.html',
  styleUrls: ['./term-panel.component.css'],
  providers: [TermService]
})
export class TermPanelComponent implements OnInit {
@Input() selectedTerm;

  constructor(private termService: TermService) { }

  ngOnInit() {
  }

}
