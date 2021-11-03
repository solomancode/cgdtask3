import { Injectable } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from './api.service';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
}

export interface UsersResponse {
  count: number,
  results: User[];
}

const INIT_RESPONSE = {
  count: 0,
  results: []
}


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private api: ApiService) { }

  $response = new BehaviorSubject<UsersResponse>(INIT_RESPONSE)

  $users = from(this.$response).pipe(map(r => r.results));

  async loadPage(page: number) {
    let data: UsersResponse = await this.api.getUsers(page);
    this.$response.next(data)
  }

}
