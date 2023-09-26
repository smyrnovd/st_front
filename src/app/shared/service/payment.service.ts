import { Injectable } from '@angular/core';
    
@Injectable()
export class PaymentService {
    getPaymentsData() {
        return [
            {
                id: '1000',
                code: 'f230fh0g3',
                name: 'Trifon',
                description: 'Trifon Description',
                price: 65,
               
            },
        ];
    }

    getPaymentsMini() {
        return Promise.resolve(this.getPaymentsData().slice(0, 5));
    }

    getPaymentsSmall() {
        return Promise.resolve(this.getPaymentsData().slice(0, 10));
    }

    getPayments() {
        return Promise.resolve(this.getPaymentsData());
    }

};