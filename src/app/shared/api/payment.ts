import { Athlete } from './athlete';

export interface IPayment {
  id?: number;
  date?: string;
  name?: Athlete;
  description?: string;
  price?: number;
}
export interface INewPayment {
  id: number;
  date: string;
  name: Athlete;
  price: number;
  description: string;
}
