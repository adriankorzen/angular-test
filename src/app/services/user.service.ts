import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = ['Ala', 'Ma', 'Kota'];

  getUsers(): Observable<string[]> {
    const obs = new Observable<string[]>(subscriber => {
      setTimeout(() => {
        subscriber.next(this.users);
      }, 5000);
    });
    return obs;
  }
}
