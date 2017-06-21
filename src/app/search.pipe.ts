import { Pipe, PipeTransform } from '@angular/core';
import { Term } from './term.model';

@Pipe({
  name: 'search',
  pure: false
})

export class SearchPipe implements PipeTransform {
  transform(input: Term[], searchWords:string[]):any[] {
    var output: Term[] = [];
    if(input != null){
      if(searchWords != null) {
        // console.log(input[0].subject, condition);
        //Now, we want to spin through each element of Terms array.
        for(var i = 0; i < input.length; i++){
          // console.log(input[i]);
          //For every element of Terms array, check to see if the subject contains at least one of the search words.
          //For that, we need to spin through each of the search words to see if the subject of the current element of Terms contains the search word.
          for(var j = 0; j < searchWords.length; j++){
            //Check if the search word could be found in the definition property of current element.
            if(input[i].definition.includes(searchWords[j])){
              //Yes. search word is present in the input subject. So Push it to output.
              output.push(input[i]);
              // Once a match is found, we need not look through search words to see if others match.
              //So, make j to maximum value so the control will exit out of "j" loop
              j = searchWords.length + 1;
            }
          }
        }
        return output;
      }
      else {
        return input;
      }
    }
    else {
      return input;
    }
  }
}

hi(){}
