import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { DashboardsRoutingModule } from './dashboard-routing.module';
import { CalendarModule } from 'primeng/calendar';
import { AthletesComponent } from './athletes/athletes.component';
import { PaymentsComponent } from './payments/payments.component';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { ProductService } from 'src/app/shared/service/product.service';
import { AthleteService } from 'src/app/shared/service/athlete.service';
import { PaymentService } from 'src/app/shared/service/payment.service';
import { SidebarModule } from 'primeng/sidebar';
import { EventsComponent } from './events/events.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChartModule,
    MenuModule,
    TableModule,
    StyleClassModule,
    PanelMenuModule,
    ButtonModule,
    DashboardsRoutingModule,
    CalendarModule,
    ToolbarModule,
    DialogModule,
    ToastModule,
    InputTextModule,
    InputTextareaModule,
    InputNumberModule,
    DropdownModule,
    SidebarModule,
  ],
  declarations: [
    DashboardComponent,
    AthletesComponent,
    PaymentsComponent,
    EventsComponent,
  ],
  providers: [AthleteService, ProductService, PaymentService],
})
export class DashboardModule {}
