export interface Child {
  id: number;
  name: string;
  age: number;
  parent: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
  password?: string;
}

export interface Class {
  id: number;
  name: string;
  description: string;
  children: Array<number>;
  action?: 'Enroll' | 'Unroll'
}
