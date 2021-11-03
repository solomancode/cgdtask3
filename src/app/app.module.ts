import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DatatableComponent } from './datatable/datatable.component';
import { ApiService } from './services/api.service';
import { MockService } from './services/mock.service';
import { UsersService } from './services/users.service';

@NgModule({
  declarations: [
    AppComponent,
    DatatableComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [MockService, ApiService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
