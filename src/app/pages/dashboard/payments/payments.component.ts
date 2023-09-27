import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/app/shared/service/payment.service';
import { INewPayment, IPayment } from 'src/app/shared/api/payment';
import { MessageService } from 'primeng/api';
import { AthleteService } from '../../../shared/service/athlete.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss'],
  providers: [MessageService],
})
export class PaymentsComponent implements OnInit {
  payments: IPayment[] = [];
  newPaymentDialog: boolean = false;
  deletePaymentDialog: boolean = false;
  payment: IPayment;
  newPayment: INewPayment;
  submitted: boolean = false;
  newDate: Date;

  nameNode = [
    {
      id: 1,
      name: 'Trifon',
    },
    {
      id: 2,
      name: 'Antonis',
    },
  ];

  constructor(
    private paymentService: PaymentService,
    private messageService: MessageService
  ) {}
  ngOnInit() {
    this.paymentService.getPaymentsMini().then(data => {
      this.payments = data;
    });

    console.log(this.nameNode);
  }

  newPaymentDataInit() {
    this.newPayment = {
      id: this.payments.length + 1,
      date: new Date().toLocaleDateString(),
      name: undefined,
      price: 0,
      description: '',
    };
  }

  deletePayment(payment: IPayment) {
    this.deletePaymentDialog = true;
    this.payment = { ...payment };
  }

  confirmDelete() {
    this.deletePaymentDialog = false;
    this.payments = this.payments.filter(val => val.id !== this.payment.id);
    this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'Product Deleted',
      life: 3000,
    });
    console.log('success');
    this.payment = {};
  }

  openNew() {
    this.newPaymentDataInit();
    this.submitted = false;
    this.newPaymentDialog = true;
  }

  hideDialog() {
    this.newPaymentDialog = false;
    this.submitted = false;
  }

  savePayment() {
    this.submitted = true;

    if (this.newPayment.name) {
      this.messageService.add({
        severity: 'success',
        summary: 'Successful',
        detail: 'Product Updated',
        life: 3000,
      });
    }
    console.log(this.newPayment.date);
    // this.newPayment.date = this.newPayment.date;

    console.log(this.newPayment);
    this.payments.unshift(this.newPayment);
    this.newPaymentDialog = false;
    console.log(this.payments);
  }
}
