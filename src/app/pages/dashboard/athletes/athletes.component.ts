import { Component, OnInit } from '@angular/core';
import { Athlete, Representative } from '../../../shared/api/athlete';
import { AthleteService } from '../../../shared/service/athlete.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-athletes',
  templateUrl: './athletes.component.html',
  styleUrls: ['./athletes.component.scss'],
  providers: [MessageService],
})
export class AthletesComponent implements OnInit {
  athletes: Athlete[];
  newAthlete: Athlete;
  selectedAthletes!: Athlete[];

  representatives!: Representative[];

  statuses!: any[];

  loading: boolean = true;

  activityValues: number[] = [0, 100];

  newAthleteDialog: boolean = false;

  deleteAthleteDialog: boolean = false;

  submitted: boolean = false;
  toDate: string = new Date().toLocaleDateString();
  isSaveButtonDisabled: boolean = true;
  status: string[];

  constructor(
    private athleteService: AthleteService,
    private messageService: MessageService
  ) {
    this.status = ['unqualified', 'proposal', 'qualified', 'new', 'renewal'];
  }

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

  newAthleteDataInit() {
    this.newAthlete = {
      id: this.athletes.length + 1,
      date: undefined,
      name: undefined,
      balance: 0,
      status: '',
    };
  }

  openNew() {
    this.newAthleteDataInit();
    this.submitted = false;
    this.newAthleteDialog = true;
  }

  hideDialog() {
    this.newAthleteDialog = false;
    this.submitted = false;
  }

  savePayment() {
    this.submitted = true;

    if (this.newAthlete.name) {
      this.messageService.add({
        severity: 'success',
        summary: 'Successful',
        detail: 'Product Updated',
        life: 3000,
      });
    }
    if (this.newAthlete.date instanceof Date) {
      this.newAthlete.date = this.newAthlete.date.toLocaleDateString();
    }

    this.athletes.unshift(this.newAthlete);
    this.isSaveButtonDisabled = true;
    this.newAthleteDialog = false;
  }

  validateNewAthlete() {
    if (this.newAthlete.name && this.newAthlete.date) {
      this.isSaveButtonDisabled = false;
    } else {
      this.isSaveButtonDisabled = true;
    }
  }
}
