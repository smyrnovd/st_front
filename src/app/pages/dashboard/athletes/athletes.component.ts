import { Component, OnInit } from '@angular/core';
import { Customer, Representative } from '../../../shared/api/customer';
import { AthleteService } from '../../../shared/service/athlete.service';

@Component({
  selector: 'app-athletes',
  templateUrl: './athletes.component.html',
  styleUrls: ['./athletes.component.scss'],
})
export class AthletesComponent implements OnInit {
  athletes!: Customer[];

  selectedAthletes!: Customer[];

  representatives!: Representative[];

  statuses!: any[];

  loading: boolean = true;

  activityValues: number[] = [0, 100];

  constructor(private athleteService: AthleteService) {}

  ngOnInit() {
    this.athleteService.getCustomersLarge().then(athletes => {
      this.athletes = athletes;
      this.loading = false;

      this.athletes.forEach(
        athlete => (athlete.date = new Date(<Date>athlete.date))
      );
    });
  }

  getSeverity(status: string) {
    switch (status) {
      case 'unqualified':
        return 'danger';

      case 'qualified':
        return 'success';

      case 'new':
        return 'info';

      case 'negotiation':
        return 'warning';

      case 'renewal':
      default:
        return null;
    }
  }
}
