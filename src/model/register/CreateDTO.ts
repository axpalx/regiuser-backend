export class CreateDTO {
  constructor(
    private id: string,
    private name: string,
    private age: number,
    private maritalstatus: string,
    private cpf: string,
    private city: string,
    private state: string
  ) {}

  public getId = (): string => this.id;

  public getName = (): string => this.name;

  public getAge = (): number => this.age;

  public getMaritalStatus = (): string => this.maritalstatus;

  public getCpf = (): string => this.cpf;

  public getCity = (): string => this.city;

  public getState = (): string => this.state;
}
