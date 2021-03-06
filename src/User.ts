import faker from 'faker';

export class User {
  name: string;
  location: { latitude: number; longitude: number };

  constructor() {
    this.name = faker.name.findName();
    this.location = {
      latitude: +faker.address.latitude(),
      longitude: +faker.address.longitude(),
    };
  }
}
