import { Injectable } from '@angular/core';
import { Term } from './term.model';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class TermService {
  terms: FirebaseListObservable<any[]>;
  term: FirebaseObjectObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.terms = database.list('terms');
  }

  getTerms(){
    return this.terms;
  }

  getTermById(termId: string){
    return this.database.object('/terms/' + termId);
  }

  addTerm(newTerm: Term){
    this.terms.push(newTerm);
  }

  updateTerm(localUpdatedTerm){
    const termEntryInFirebase = this.getTermById(localUpdatedTerm.$key);
    termEntryInFirebase.update(
      {
        name: localUpdatedTerm.name,
        definition: localUpdatedTerm.definition,
        category: localUpdatedTerm.category,
        subject: localUpdatedTerm.subject
      });
  }

  deleteTerm(localTermToDelete){
    var termEntryInFirebase = this.getTermById(localTermToDelete.$key);
    termEntryInFirebase.remove();
  }

}
