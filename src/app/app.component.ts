import {Component, OnInit, QueryList, ViewChildren, ViewContainerRef} from '@angular/core';
import {WidgetDirectiveDirective} from './widget-directive.directive';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    // setTimeout(() => {
    //       this.componentsList.push({name: 'nextComponent', type: 'HelloWorld'});
    //       console.log(this.componentsList);
    //     }, 10000);
    //
    //     setTimeout(() => {
    //       this.componentsList.push({name: 'nextComponent', type: 'BayBayWorld'});
    //       console.log(this.componentsList);
    //     }, 20000);
    //
    // setTimeout(() => {
    //   this.componentsList.shift();
    //   console.log(this.componentsList);
    // }, 30000);
  }
  // @ViewChild('helloWorld', { read: ViewContainerRef, static: true}) helloWorldComponent: ViewContainerRef;

  @ViewChildren(WidgetDirectiveDirective, {read: ViewContainerRef}) compLists: QueryList<ViewContainerRef>;

  componentsList = [{name: 'helloComponent', type: 'HelloWorld'}, {name: 'baybayComponent', type: 'BayBayWorld'},
    {name: 'helloComponent', type: 'HelloWorld'}, {name: 'helloComponent', type: 'HelloWorld'}, {name: 'helloComponent', type: 'HelloWorld'}];

  title = 'simple-to-test-app';

  constructor() {}
  //
  // constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  //
  // }

  // ngAfterViewInit(): void {
  //   let i = 0;
  //   this.compLists.forEach(item => {
  //     this.refreshComponent(item);
  //   });
  //
  //   this.compLists.changes.subscribe(item => {
  //     item.forEach(val => {
  //       this.refreshComponent(val);
  //     });
  //   });
  //
  //   setTimeout(() => {
  //     this.componentsList.push({name: 'nextComponent', type: 'HelloWorld'});
  //     console.log(this.componentsList);
  //   }, 10000);
  //
  //   setTimeout(() => {
  //     this.componentsList.push({name: 'nextComponent', type: 'BayBayWorld'});
  //     console.log(this.componentsList);
  //   }, 20000);
  // }
  //
  // private refreshComponent(param: ViewContainerRef) {
  //   const i = this.compLists.toArray().findIndex(value => param === value);
  //   let componentFactory;
  //   if (this.componentsList[i].type === 'HelloWorld') {
  //     componentFactory = this.componentFactoryResolver.resolveComponentFactory(HelloWorldComponent);
  //   } else {
  //     componentFactory = this.componentFactoryResolver.resolveComponentFactory(BayBayWorldComponent);
  //   }
  //   param.clear();
  //   param.createComponent(componentFactory);
  // }

}
