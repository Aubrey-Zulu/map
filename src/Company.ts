import faker from 'faker';

export class Company {
  name: string;
  cachePhrase: string;
  location: { latitude: number; longitude: number };

  constructor() {
    this.name = faker.company.companyName();
    this.cachePhrase = faker.company.catchPhrase();
    this.location = {
      latitude: +faker.address.latitude(),
      longitude: +faker.address.longitude(),
    };
  }
}
