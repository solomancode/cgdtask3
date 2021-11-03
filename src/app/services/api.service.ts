import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MockService } from './mock.service';
import { UsersResponse } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private mock: MockService,) { }

  getUsersMocked(page: number): UsersResponse {
    return page === 0 ? this.mock.mockFirstPage() : this.mock.mockSecondPage()
  }

  async getUsers(page: number) {
    return this.getUsersMocked(page);
    // const params = new HttpParams();
    // params.set('page', page);
    // return this.http.get<UsersResponse>('/api/users', { params })
  }
}
