import { Injectable } from '@angular/core';

@Injectable()
export class PaymentService {
  getPaymentsData() {
    return [
      {
        id: 1,
        date: '19.02.2022',
        name: 'Trifon',
        description: 'Trifon Description',
        price: 65,
      },
      {
        id: 2,
        date: '29.02.2022',
        name: 'Antonis',
        description: 'Antonis Description',
        price: 25,
      },
      {
        id: 3,
        date: '09.02.2023',
        name: 'Trifon',
        description: 'Trifon Description',
        price: 70,
      },
      {
        id: 4,
        date: '01.07.2022',
        name: 'Amalia',
        description: 'Amalia Description',
        price: 15,
      },
      {
        id: 5,
        date: '17.08.2023',
        name: 'Trifon',
        description: 'Trifon Description',
        price: 30,
      },
      {
        id: 6,
        date: '12.09.2023',
        name: 'Natalia',
        description: 'Natalia Description',
        price: 55,
      },
    ];
  }

  getPaymentsMini() {
    return Promise.resolve(this.getPaymentsData().slice(0, 5).reverse());
  }

  getPaymentsSmall() {
    return Promise.resolve(this.getPaymentsData().slice(0, 10));
  }

  getPayments() {
    return Promise.resolve(this.getPaymentsData());
  }
}
