import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddNserviceComponent } from './components/add-nservice/add-nservice.component';
import { NserviceDetailsComponent } from './components/nservice-details/nservice-details.component';
import { NserviceListComponent } from './components/nservice-list/nservice-list.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddNserviceComponent,
    NserviceDetailsComponent,
    NserviceListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
