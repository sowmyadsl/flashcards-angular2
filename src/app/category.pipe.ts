import { Pipe, PipeTransform } from '@angular/core';
import { Term } from './term.model';

@Pipe({
  name: 'category',
  pure: false
})

export class CategoryPipe implements PipeTransform {
  transform(input: Term[], content) {
    var output: Term[] = [];
    if(content === "allCategories") {
      return input;
    }
    else {
      for(var i = 0; i < input.length; i++){
        if(input[i].category.toLowerCase() === content.toLowerCase()){
        output.push(input[i]);
      }
    }
    return output;
    }
  }
}
