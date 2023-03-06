import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NserviceListComponent } from './components/nservice-list/nservice-list.component';
import { NserviceDetailsComponent } from './components/nservice-details/nservice-details.component';
import { AddNserviceComponent } from './components/add-nservice/add-nservice.component';

const routes: Routes = [
  { path: '', redirectTo: 'nservices', pathMatch: 'full' },
  { path: 'nservices', component: NserviceListComponent },
  { path: 'nservices/:id', component: NserviceDetailsComponent },
  { path: 'add', component: AddNserviceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
