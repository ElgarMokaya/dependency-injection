import { Directive } from '@angular/core';
import { AppserService } from './appser.service';

@Directive({
  selector: '[appChild]'
})
export class ChildDirective {

  constructor(private user:AppserService) { }

}
