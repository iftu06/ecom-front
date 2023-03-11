export class Account {
  constructor(
    public activated: boolean,
    public authorities: string[],
    public email: string,
    public name: string | null
  ) {}
}
