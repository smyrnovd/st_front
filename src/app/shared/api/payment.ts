export interface IPayment {
  id?: number;
  date?: string;
  name?: string;
  description?: string;
  price?: number;
}
export interface INewPayment {
  id: number;
  date: string;
  name: string;
  price: number;
  description: string;
}
