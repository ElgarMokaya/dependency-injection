import { Component, Optional, Self, SkipSelf, ViewChild } from '@angular/core';
import { AppserService } from 'src/appser.service';
import { ChildComponent } from './child/child.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AppserService]
})
export class AppComponent {
  @ViewChild(ChildComponent) viewdata !:ChildComponent
  
  constructor(/*@Optional()*/ @Self() private user:AppserService,
  @SkipSelf() private parentUser: AppserService
  ){

  }
  title = 'hello elgar';
  inputname=''
  inputmark=''
  inputobject={"name":"","marks":""}
  response:any;
    TransferData(name:any,mark:any){ 
    this.inputname=name
    this.inputmark=mark
    this.inputobject={"name":name,"marks":mark}
    this.response=this.viewdata.updatelist(this.inputobject)

  }
  updateTitle(title:any){
    this.title=title

  }
}
