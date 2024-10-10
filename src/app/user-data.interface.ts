export interface Address {
    number: string;
    street: string;
    zone: string;
  }
  
  export interface Person {
    name: string;
    lastName: string;
    type: string;  // "student" o "professor"
    address: Address;
    country: string;
    province: string;
    messages: string[];
  }
  
  export interface Student extends Person {
    type: 'student';  // Literal type
    firstTestScore: number;
    secondTestScore: number;
    finalTestScore: number;
  }
  
  export interface Professor extends Person {
    type: 'professor';  // Literal type
    subject: string;
  }
  
  // Unificando el tipo UserData que puede ser Student o Professor
  export type UserData = Student | Professor;
  