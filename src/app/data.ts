import { UserData } from './user-data.interface';  // Asegúrate de importar la interfaz

export const data: { [key: string]: UserData } = {
  '001': {
    name: 'John',
    lastName: 'Perez',
    type: 'student',
    firstTestScore: 90,
    secondTestScore: 85,
    finalTestScore: 87,
    address: {
      number: '123',
      street: 'Main Ave',
      zone: 'Downtown',
    },
    country: 'Mexico',
    province: 'CDMX',
    messages: [
      'The next exam will be next week, make sure to prepare.',
      'Remember, the exam will take place in the library.',
      "Don't forget to bring your identification.",
    ],
  },
  '002': {
    name: 'Maria',
    lastName: 'Lopez',
    type: 'student',
    firstTestScore: 78,
    secondTestScore: 82,
    finalTestScore: 80,
    address: {
      number: '456',
      street: 'Second St',
      zone: 'City Center',
    },
    country: 'Argentina',
    province: 'Buenos Aires',
    messages: [
      'Remember to submit your final project next week.',
      'Your participation in class has improved.',
      'Review additional materials to better prepare.',
    ],
  },
  '003': {
    name: 'Charles',
    lastName: 'Gomez',
    type: 'student',
    firstTestScore: 85,
    secondTestScore: 88,
    finalTestScore: 90,
    address: {
      number: '789',
      street: 'Third Blvd',
      zone: 'Westside',
    },
    country: 'Chile',
    province: 'Santiago',
    messages: [
      "You've improved in your exams, keep it up!",
      "Don't forget to attend the review class before the exam.",
      'Your effort is noticeable, keep working hard.',
    ],
  },
  '004': {
    name: 'Anna',
    lastName: 'Martinez',
    type: 'student',
    firstTestScore: 65,
    secondTestScore: 70,
    finalTestScore: 72,
    address: {
      number: '101',
      street: 'Fourth St',
      zone: 'Suburb',
    },
    country: 'Peru',
    province: 'Lima',
    messages: [
      "It's important to study the pending topics before the final exam.",
      'Consult with the professor if you have any doubts.',
      'Try to improve your study habits.',
    ],
  },
  '005': {
    name: 'Luis',
    lastName: 'Fernandez',
    type: 'student',
    firstTestScore: 92,
    secondTestScore: 90,
    finalTestScore: 91,
    address: {
      number: '321',
      street: 'Fifth Ave',
      zone: 'Uptown',
    },
    country: 'Colombia',
    province: 'Bogotá',
    messages: [
      'Great job on the last exam!',
      'Your participation in class is excellent.',
      'Keep up the enthusiasm!',
    ],
  },
  '006': {
    name: 'Peter',
    lastName: 'Ramirez',
    type: 'professor',
    subject: 'Mathematics',
    address: {
      number: '567',
      street: 'Central Avenue',
      zone: 'Old Town',
    },
    country: 'Mexico',
    province: 'Guadalajara',
    messages: [
      'Remember, the final exam is next week.',
      'Coordinate evaluations for the students.',
      'Set deadlines for final submissions.',
    ],
  },
  '007': {
    name: 'Claudia',
    lastName: 'Gonzalez',
    type: 'professor',
    subject: 'History',
    address: {
      number: '890',
      street: 'Main St',
      zone: 'Historic District',
    },
    country: 'Spain',
    province: 'Madrid',
    messages: [
      'Make sure to review final assignments before Friday.',
      'Check the exam schedule.',
      "Don't forget to attend the faculty meeting.",
    ],
  },
  '008': {
    name: 'Michael',
    lastName: 'Hernandez',
    type: 'professor',
    subject: 'Physics',
    address: {
      number: '678',
      street: 'Libertador Avenue',
      zone: 'Commercial Area',
    },
    country: 'Venezuela',
    province: 'Caracas',
    messages: [
      'Organize the review class for the students.',
      "Don't forget to grade pending assignments.",
      'Submit the grading report.',
    ],
  },
  '009': {
    name: 'Sophia',
    lastName: 'Diaz',
    type: 'professor',
    subject: 'Literature',
    address: {
      number: '345',
      street: 'South St',
      zone: 'Residential Area',
    },
    country: 'Chile',
    province: 'Valparaíso',
    messages: [
      'Remember, the next class is on Monday.',
      'Consult with the students regarding their doubts about the syllabus.',
      'Check the dates for the upcoming assessments.',
    ],
  },
  '010': {
    name: 'Raphael',
    lastName: 'Torres',
    type: 'professor',
    subject: 'Biology',
    address: {
      number: '234',
      street: 'North St',
      zone: 'Business District',
    },
    country: 'Argentina',
    province: 'Córdoba',
    messages: [
      'Review final exams before submitting the grades.',
      'Coordinate the review of final projects.',
      'Send the course summary to administration.',
    ],
  },
};
