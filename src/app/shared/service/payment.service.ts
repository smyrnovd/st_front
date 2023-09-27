import { Injectable } from '@angular/core';

@Injectable()
export class PaymentService {
  getPaymentsData() {
    return [
      {
        id: 1,
        date: '19.02.2022',
        name: {
          id: 1000,
          name: 'James Butt',
          country: {
            name: 'Algeria',
            code: 'dz',
          },
          company: 'Benton, John B Jr',
          date: '2015-09-13',
          status: 'unqualified',
          verified: true,
          activity: 17,
          representative: {
            name: 'Ioni Bowcher',
            image: 'ionibowcher.png',
          },
          balance: 70663,
        },
        description: 'Trifon Description',
        price: 65,
      },
      {
        id: 2,
        date: '29.02.2022',
        name: {
          id: 1000,
          name: 'James Butt',
          country: {
            name: 'Algeria',
            code: 'dz',
          },
          company: 'Benton, John B Jr',
          date: '2015-09-13',
          status: 'unqualified',
          verified: true,
          activity: 17,
          representative: {
            name: 'Ioni Bowcher',
            image: 'ionibowcher.png',
          },
          balance: 70663,
        },
        description: 'Antonis Description',
        price: 25,
      },
      {
        id: 3,
        date: '09.02.2023',
        name: {
          id: 1000,
          name: 'James Butt',
          country: {
            name: 'Algeria',
            code: 'dz',
          },
          company: 'Benton, John B Jr',
          date: '2015-09-13',
          status: 'unqualified',
          verified: true,
          activity: 17,
          representative: {
            name: 'Ioni Bowcher',
            image: 'ionibowcher.png',
          },
          balance: 70663,
        },
        description: 'Trifon Description',
        price: 70,
      },
      {
        id: 4,
        date: '01.07.2022',
        name: {
          id: 1000,
          name: 'James Butt',
          country: {
            name: 'Algeria',
            code: 'dz',
          },
          company: 'Benton, John B Jr',
          date: '2015-09-13',
          status: 'unqualified',
          verified: true,
          activity: 17,
          representative: {
            name: 'Ioni Bowcher',
            image: 'ionibowcher.png',
          },
          balance: 70663,
        },
        description: 'Amalia Description',
        price: 15,
      },
      {
        id: 5,
        date: '17.08.2023',
        name: {
          id: 1000,
          name: 'James Butt',
          country: {
            name: 'Algeria',
            code: 'dz',
          },
          company: 'Benton, John B Jr',
          date: '2015-09-13',
          status: 'unqualified',
          verified: true,
          activity: 17,
          representative: {
            name: 'Ioni Bowcher',
            image: 'ionibowcher.png',
          },
          balance: 70663,
        },
        description: 'Trifon Description',
        price: 30,
      },
      {
        id: 6,
        date: '12.09.2023',
        name: {
          id: 1000,
          name: 'James Butt',
          country: {
            name: 'Algeria',
            code: 'dz',
          },
          company: 'Benton, John B Jr',
          date: '2015-09-13',
          status: 'unqualified',
          verified: true,
          activity: 17,
          representative: {
            name: 'Ioni Bowcher',
            image: 'ionibowcher.png',
          },
          balance: 70663,
        },
        description: 'Natalia Description',
        price: 55,
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
}
