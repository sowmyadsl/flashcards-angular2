import { Injectable } from '@angular/core';
import { Term } from './term.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class TermService {
terms: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.terms = database.list('terms');
  }

  getTerms(){
    return this.terms;
  }

  // addTerm(newTerm: Term){
  //   this.terms.push(newTerm);
  // }

  getTermsById(termId: string){
    return this.database.object('terms/' + termId);
  }

}
