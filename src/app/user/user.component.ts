import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../services/user.service';
import {of, Subscription, zip} from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
  users?: string[];
  @ViewChild('textBox', {static: false}) textbox: ElementRef;
  @ViewChild('results', {static: false}) results;

  @ViewChild('typeaheadInput', {static: false}) typeaheadInput: ElementRef;
  @ViewChild('typeaheadContainer', {static: false}) typeaheadContainer;

  usStates = ['alabama', 'alaska', 'arizona', 'arkansas', 'california', 'colorado', 'connecticut',
    'delaware', 'florida', 'georgia', 'hawaii', 'idaho', 'illinois', 'indiana', 'iowa', 'kansas',
    'kentucky', 'louisiana', 'maine', 'maryland', 'massachusetts', 'michigan', 'minnesota', 'mississippi',
    'missouri', 'montana', 'nebraska', 'nevada', 'new hampshire', 'new jersey', 'new mexico', 'new york',
    'north carolina', 'north dakota', 'ohio', 'oklahoma', 'oregon', 'pennsylvania', 'rhode island',
    'south carolina', 'south dakota', 'tennessee', 'texas', 'utah', 'vermont', 'virginia', 'washington',
    'west virginia', 'wisconsin', 'wyoming'];

  orderSub?: Subscription;

  constructor(private userService: UserService) {
    this.orderSub = zip(
      of({prop1: 1}),
      of({prop2: 2}),
      of({prop3: 1}),
      of({prop4: 'ala'}),
      of({prop5: 1}),
      of({prop6: 1}),
      of({prop7: 1}),
      of({prop8: 1})
    ).subscribe({
      next: ([a, b, c, d, e, f, g]) => {
        console.log(a);
        console.log(b);
        console.log(c);
        console.log(d);
        console.log(e);
        console.log(f);
        console.log(g);
      }
    });
  }

  ngOnInit() {

    this.orderSub = zip(
      of({prop1: 1}),
      of({prop2: 2}),
      of({prop3: 1}),
      of({prop4: 'ala'}),
      of({prop5: 1}),
      of({prop6: 1}),
      of({prop7: 1}),
      of({prop8: 1})
    ).subscribe({
      next: ([a, b, c, d, e, f, g]) => {
        console.log(a);
        console.log(b);
        console.log(c);
        console.log(d);
        console.log(e);
        console.log(f);
        console.log(g);
      }
    });

  }
}
