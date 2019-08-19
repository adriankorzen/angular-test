import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appWidgetDirective]'
})
export class WidgetDirectiveDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
