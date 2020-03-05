//@ts-check
class UserTS {
  name: string;

  constructor(nameVar:string) {
    this.name = nameVar;
  }
  sayHi(msg:string) {
    return this.name
  }
}

const c = new User('adf')