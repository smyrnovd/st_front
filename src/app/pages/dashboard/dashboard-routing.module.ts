import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AthletesComponent } from './athletes/athletes.component';
import { PaymentsComponent } from './payments/payments.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { EventsComponent } from './events/events.component';
@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: DashboardComponent },
      { path: 'documentation', component: DocumentationComponent },
      { path: 'events', component: EventsComponent },
      { path: 'athletes', component: AthletesComponent },
      { path: 'payments', component: PaymentsComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class DashboardsRoutingModule {}
