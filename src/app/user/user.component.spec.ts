import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';

export class UserServiceMock {
  users = ['Ala', 'Ma', 'Kota'];

  getUsers(): Observable<string[]> {
    const obs = new Observable<string[]>(subscriber => {
      setTimeout(() => {
        subscriber.next(this.users);
      }, 100);
    });
    return obs;
  }
}

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: UserService,
          useClass: UserServiceMock
        }
      ],
      declarations: [ UserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check users', fakeAsync(() => {
    const fixture1 = TestBed.createComponent(UserComponent);
    const component1 = fixture1.componentInstance;
    fixture.detectChanges();
    fixture1.detectChanges();
    tick(8000);
    fixture1.detectChanges();
    expect(component1.users).toBeTruthy();
  }));
});
