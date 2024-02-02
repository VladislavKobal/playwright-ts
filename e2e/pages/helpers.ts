import { faker } from "@faker-js/faker";

export type RegisterNewUser = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
};

export function getUserData(): RegisterNewUser {
  const password = faker.internet.password();

  return {
    firstName: faker.company.name(),
    lastName: faker.company.name(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    password: password,
    confirmPassword: password,
  };
}

export type PersonalDetails = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  address2: string;
  postCode: string;
};

export const RandomDataForFillField: PersonalDetails = {
  firstName: faker.company.name(),
  lastName: faker.company.name(),
  email: faker.internet.email(),
  phone: faker.phone.number(),
  address: faker.company.name(),
  address2: faker.company.name(),
  postCode: faker.number.int().toString(),
};
