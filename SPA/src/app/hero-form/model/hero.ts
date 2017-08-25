import { Address } from './address';
export class Hero {

  constructor(
    public id: number,
    public name: string,
    public age: number,
    public hobby?: string
  ) { }
  addresses: Address;
}
export const hobbies = ['Cricket', 'Football', 'Hockey', 'BasketBall'];