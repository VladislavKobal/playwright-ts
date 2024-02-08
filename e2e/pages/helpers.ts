import { faker } from "@faker-js/faker";

export type RegistrationFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
};

export function getUserData(): RegistrationFormData {
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

export type PersonalDetailsData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  address2: string;
  postCode: string;
};

export const generateRandomUserData: PersonalDetailsData = {
  firstName: faker.company.name(),
  lastName: faker.company.name(),
  email: faker.internet.email(),
  phone: faker.phone.number(),
  address: faker.company.name(),
  address2: faker.company.name(),
  postCode: faker.number.int().toString(),
};

export type LoginWithCreatedUser = {
  emailInput: string;
  passwordInput: string;
};
export const loginWithCredential: LoginWithCreatedUser = {
  emailInput: "test1Q@gmail.com",
  passwordInput: "1111111111",
};

export const loginWithBadCredential: LoginWithCreatedUser = {
  emailInput: "testQ@gmail.com",
  passwordInput: "111111111",
};
