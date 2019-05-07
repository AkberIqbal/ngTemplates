import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name:string = 'Bismillah ir Rehmaan ir Raheem';
  showNgTemplate:boolean = false;
  someObject:any[] = [{name:'AI', age:35}, {name:'HA', age:29}, {name:'AA', age:4}, {name:'TA', age:1} ]
}
