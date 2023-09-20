import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AthletesComponent } from './athletes/athletes.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: DashboardComponent },
        {path: 'athletes', component: AthletesComponent}
    ])],
    exports: [RouterModule]
})
export class DashboardsRoutingModule { }
