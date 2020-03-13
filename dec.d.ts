// return a string
declare function parseString(str: string): string;

// declare variables
declare var someNum: number;
declare var someString: string;

// create an interface to referring to contact info
declare interface ContactInfo {
  name: string;
  email: string;
  phone: string;
}

// declare a class to use for Dog
declare class Dog {
  name: string;
  breed: string;
  age: number;

  collect(name: string, breed: string, age: number): void;
  destroy(idNumber: number): boolean;
}

export { someNum };