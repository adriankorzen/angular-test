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
    tick(8000);
    fixture.detectChanges();
    expect(component.users).toBeTruthy();
  }));
});
