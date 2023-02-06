import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() namedata:any;
  @Input() markdata:any;
  @Input() objectdata:any;

  listarray=[{"name":"elgar","marks":"80"}]
constructor(){

}
updatelist(object:any){
  this.listarray.push(object);
  return object.name + "is added successfully";
}
}
