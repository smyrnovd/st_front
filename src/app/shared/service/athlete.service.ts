import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AthleteService {
  getData() {
    return [
      {
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
      {
        id: 1001,
        name: 'Josephine Darakjy',
        country: {
          name: 'Egypt',
          code: 'eg',
        },
        company: 'Chanay, Jeffrey A Esq',
        date: '2019-02-09',
        status: 'proposal',
        verified: true,
        activity: 0,
        representative: {
          name: 'Amy Elsner',
          image: 'amyelsner.png',
        },
        balance: 82429,
      },
      {
        id: 1002,
        name: 'Art Venere',
        country: {
          name: 'Panama',
          code: 'pa',
        },
        company: 'Chemel, James L Cpa',
        date: '2017-05-13',
        status: 'qualified',
        verified: false,
        activity: 63,
        representative: {
          name: 'Asiya Javayant',
          image: 'asiyajavayant.png',
        },
        balance: 28334,
      },
      {
        id: 1003,
        name: 'Lenna Paprocki',
        country: {
          name: 'Slovenia',
          code: 'si',
        },
        company: 'Feltz Printing Service',
        date: '2020-09-15',
        status: 'new',
        verified: false,
        activity: 37,
        representative: {
          name: 'Xuxue Feng',
          image: 'xuxuefeng.png',
        },
        balance: 88521,
      },
      {
        id: 1004,
        name: 'Donette Foller',
        country: {
          name: 'South Africa',
          code: 'za',
        },
        company: 'Printing Dimensions',
        date: '2016-05-20',
        status: 'proposal',
        verified: true,
        activity: 33,
        representative: {
          name: 'Asiya Javayant',
          image: 'asiyajavayant.png',
        },
        balance: 93905,
      },
      {
        id: 1005,
        name: 'Simona Morasca',
        country: {
          name: 'Egypt',
          code: 'eg',
        },
        company: 'Chapman, Ross E Esq',
        date: '2018-02-16',
        status: 'qualified',
        verified: false,
        activity: 68,
        representative: {
          name: 'Ivan Magalhaes',
          image: 'ivanmagalhaes.png',
        },
        balance: 50041,
      },
      {
        id: 1006,
        name: 'Mitsue Tollner',
        country: {
          name: 'Paraguay',
          code: 'py',
        },
        company: 'Morlong Associates',
        date: '2018-02-19',
        status: 'renewal',
        verified: true,
        activity: 54,
        representative: {
          name: 'Ivan Magalhaes',
          image: 'ivanmagalhaes.png',
        },
        balance: 58706,
      },
      {
        id: 1007,
        name: 'Leota Dilliard',
        country: {
          name: 'Serbia',
          code: 'rs',
        },
        company: 'Commercial Press',
        date: '2019-08-13',
        status: 'renewal',
        verified: true,
        activity: 69,
        representative: {
          name: 'Onyama Limba',
          image: 'onyamalimba.png',
        },
        balance: 26640,
      },
      {
        id: 1008,
        name: 'Sage Wieser',
        country: {
          name: 'Egypt',
          code: 'eg',
        },
        company: 'Truhlar And Truhlar Attys',
        date: '2018-11-21',
        status: 'unqualified',
        verified: true,
        activity: 76,
        representative: {
          name: 'Ivan Magalhaes',
          image: 'ivanmagalhaes.png',
        },
        balance: 65369,
      },
      {
        id: 1009,
        name: 'Kris Marrier',
        country: {
          name: 'Mexico',
          code: 'mx',
        },
        company: 'King, Christopher A Esq',
        date: '2015-07-07',
        status: 'proposal',
        verified: false,
        activity: 3,
        representative: {
          name: 'Onyama Limba',
          image: 'onyamalimba.png',
        },
        balance: 63451,
      },
      {
        id: 1010,
        name: 'Minna Amigon',
        country: {
          name: 'Romania',
          code: 'ro',
        },
        company: 'Dorl, James J Esq',
        date: '2018-11-07',
        status: 'qualified',
        verified: false,
        activity: 38,
        representative: {
          name: 'Anna Fali',
          image: 'annafali.png',
        },
        balance: 71169,
      },
      {
        id: 1011,
        name: 'Abel Maclead',
        country: {
          name: 'Singapore',
          code: 'sg',
        },
        company: 'Rangoni Of Florence',
        date: '2017-03-11',
        status: 'qualified',
        verified: true,
        activity: 87,
        representative: {
          name: 'Bernardo Dominic',
          image: 'bernardodominic.png',
        },
        balance: 96842,
      },
      {
        id: 1012,
        name: 'Kiley Caldarera',
        country: {
          name: 'Serbia',
          code: 'rs',
        },
        company: 'Feiner Bros',
        date: '2015-10-20',
        status: 'unqualified',
        verified: false,
        activity: 80,
        representative: {
          name: 'Onyama Limba',
          image: 'onyamalimba.png',
        },
        balance: 92734,
      },
      {
        id: 1013,
        name: 'Graciela Ruta',
        country: {
          name: 'Chile',
          code: 'cl',
        },
        company: 'Buckley Miller & Wright',
        date: '2016-07-25',
        status: 'negotiation',
        verified: false,
        activity: 59,
        representative: {
          name: 'Amy Elsner',
          image: 'amyelsner.png',
        },
        balance: 45250,
      },
    ];
  }

  constructor(private http: HttpClient) {}

  getCustomersMini() {
    return Promise.resolve(this.getData().slice(0, 5));
  }

  getCustomersSmall() {
    return Promise.resolve(this.getData().slice(0, 10));
  }

  getCustomersMedium() {
    return Promise.resolve(this.getData().slice(0, 50));
  }

  getCustomersLarge() {
    return Promise.resolve(this.getData().slice(0, 200));
  }

  getCustomersXLarge() {
    return Promise.resolve(this.getData());
  }

  getCustomers(params?: any) {
    return this.http
      .get<any>('https://www.primefaces.org/data/customers', { params: params })
      .toPromise();
  }
}
