import { Component, Optional, Self, SkipSelf } from '@angular/core';
import { AppserService } from 'src/appser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AppserService]
})
export class AppComponent {
  
  constructor(/*@Optional()*/ @Self() private user:AppserService,
  @SkipSelf() private parentUser: AppserService
  ){

  }
  title = 'hello elgar';
  inputname=''
  TransferData(name:any){
    this.inputname=name

  }
}
