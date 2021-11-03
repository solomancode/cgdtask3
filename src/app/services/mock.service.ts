import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor() { }

  mockFirstPage() {
    return {
      "count": 13,
      "results": [
        { "id": 1, "firstName": "David", "lastName": "Wallace" },
        { "id": 2, "firstName": "Sonia", "lastName": "Ross" },
        { "id": 3, "firstName": "Anthony", "lastName": "Thomson" },
        { "id": 1, "firstName": "David", "lastName": "Wallace" },
        { "id": 2, "firstName": "Sonia", "lastName": "Ross" },
        { "id": 3, "firstName": "Anthony", "lastName": "Thomson" },
        { "id": 1, "firstName": "David", "lastName": "Wallace" },
        { "id": 2, "firstName": "Sonia", "lastName": "Ross" },
        { "id": 3, "firstName": "Anthony", "lastName": "Thomson" },
        { "id": 3, "firstName": "Anthony", "lastName": "Thomson" }
      ]
    }
  }
  mockSecondPage() {
    return {
      "count": 13,
      "results": [
        { "id": 3333, "firstName": "David", "lastName": "Wallace" },
        { "id": 4444, "firstName": "Sonia", "lastName": "Ross" },
        { "id": 5555, "firstName": "Anthony", "lastName": "Thomson" }
      ]
    }
  }
}
