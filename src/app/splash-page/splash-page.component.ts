import { Component } from '@angular/core';
import { Term } from '../term.model';
import { Router } from '@angular/router';
import { TermService } from '../term.service';


@Component({
  selector: 'app-splash-page',
  templateUrl: './splash-page.component.html',
  styleUrls: ['./splash-page.component.css'],
  providers: [TermService]
})
export class SplashPageComponent{

}
