import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TicketsComponent } from './tickets/tickets.component';
import { ClientsComponent } from './clients/clients.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'tickets', component: TicketsComponent},
  { path: 'clients', component: ClientsComponent},
  { path: 'invoice', component: InvoiceComponent},
  { path: 'logout', component: LogoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
