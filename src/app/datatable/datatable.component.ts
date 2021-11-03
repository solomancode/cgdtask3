import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

const RESULTS_PER_PAGE = 10;

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  currentPage = this.firstPage();

  constructor(public users: UsersService) { }

  ngOnInit(): void {
    this.users.loadPage(this.currentPage);

  }

  firstPage() {
    return 0
  }

  lastPage() {
    return Math.floor(this.users.$response.value.count / RESULTS_PER_PAGE)
  }

  inbound(page: number) {
    const lastPage = this.lastPage();
    const outBoundMax = page <= lastPage;
    const outBoundMin = page >= 0;
    return outBoundMax && outBoundMin;
  }

  nextPage() {
    const nextPage = this.currentPage + 1;
    return this.inbound(nextPage) ? nextPage : this.currentPage;
  }

  previousPage() {
    const previousPage = this.currentPage - 1;
    return this.inbound(previousPage) ? previousPage : this.currentPage;
  }

  loadPage(page: number) {
    this.currentPage = page;
    this.users.loadPage(page);
  }

}
