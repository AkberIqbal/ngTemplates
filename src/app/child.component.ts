import { Component } from '@angular/core';

@Component({
  selector: 'child-comp',
  template: `
    <h3> <ng-content select='h3' ></ng-content> </h3>
    <button type='button'> 
      <ng-content select='p' ></ng-content>
    </button>
  `,
  styles: [ `` ]
})
export class ChildComponent  {
  

}
