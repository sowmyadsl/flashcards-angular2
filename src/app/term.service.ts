import { Injectable } from '@angular/core';
import { Term } from './term.model';
import { TERMS } from './mock-terms';

@Injectable()
export class TermService {

  constructor() { }

  getTerms(){
    return TERMS;
  }

  getTermsById(termId: number){
    for(var i = 0; i <= TERMS.length - 1; i++){
      if(TERMS[i].id === termId){
        return TERMS[i];
      }
    }
  }

}
