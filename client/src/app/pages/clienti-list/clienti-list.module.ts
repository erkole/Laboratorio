import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientiListComponent } from './clienti-list.component';
import { ClientiListRoutingModule } from './clienti-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ClientiListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    ClientiListComponent
  ]
})
export class ClientiListModule { }
