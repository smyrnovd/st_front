import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/app/shared/service/payment.service';
import { payment } from 'src/app/shared/api/payment';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {
  payments!: payment[];
  constructor(private paymentService: PaymentService) {}
  ngOnInit() {
    this.paymentService.getPaymentsMini().then((data) => {
      this.payments = data;
  });
  }

}
