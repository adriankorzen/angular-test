import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UserComponent} from './user/user.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { BayBayWorldComponent } from './bay-bay-world/bay-bay-world.component';
import { WidgetDirectiveDirective } from './widget-directive.directive';
import { DynamicComponent } from './dynamic/dynamic.component';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HelloWorldComponent,
    BayBayWorldComponent,
    WidgetDirectiveDirective,
    DynamicComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [HelloWorldComponent, BayBayWorldComponent]
})
export class AppModule { }
