export class Server {
  public id: number;
  public name: string | undefined;
  public status: string | undefined;

  constructor(id: number, name: string, status: string) {
    this.id = id;
    this.name = name;
    this.status = status;
  }
}
