import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientiListComponent } from './clienti-list.component';

const routes: Routes = [
  {
    path: '',
    component: ClientiListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientiListRoutingModule { }
