import { Customer } from './customer';

export interface IPayment {
  id?: number;
  date?: string;
  name?: Customer;
  description?: string;
  price?: number;
}
export interface INewPayment {
  id: number;
  date: string;
  name: Customer;
  price: number;
  description: string;
}
