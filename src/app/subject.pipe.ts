import { Pipe, PipeTransform } from '@angular/core';
import { Term } from './term.model';

@Pipe({
  name: 'subject',
  pure: false
})

export class SubjectPipe implements PipeTransform {
  transform(input: Term[], condition: string) {
    var output: Term[] = [];
    if(input != null){
      if(condition === "allSubjects") {
        return input;
      }
      else {
        console.log(input[0].subject, condition);
        for(var i = 0; i < input.length; i++){
          if(input[i].subject === condition){
          output.push(input[i]);
        }
      }
      console.log(output);
      return output;
      }
    }
    else {
      return input;
    }
  }
}
