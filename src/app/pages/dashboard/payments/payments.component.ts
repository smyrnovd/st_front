import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/app/shared/service/payment.service';
import { IPayment } from 'src/app/shared/api/payment';
import { MessageService } from 'primeng/api';

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
    submitted: boolean = false;
    constructor(
        private paymentService: PaymentService,
        private messageService: MessageService
    ) {}
    ngOnInit() {
        this.paymentService.getPaymentsMini().then((data) => {
            this.payments = data;
        });
    }
    deletePayment(payment: IPayment) {
        this.deletePaymentDialog = true;
        this.payment = { ...payment };
    }

    confirmDelete() {
        this.deletePaymentDialog = false;
        this.payments = this.payments.filter(
            (val) => val.id !== this.payment.id
        );
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
        this.payment = {};
        this.submitted = false;
        this.newPaymentDialog = true;
    }
    hideDialog() {
        this.newPaymentDialog = false;
        this.submitted = false;
    }
}
