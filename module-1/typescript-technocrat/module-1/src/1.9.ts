{
  //
  // Student information objects

  type Contact = {
    email: string;
    phone: string;
  };

  type Grades = {
    math: number;
    science: number;
    english: number;
  };

  type Student = {
    id: number;
    name: string;
    age: number;
    major: string;
    grades: Grades;
    contact: Contact;
    isActive: boolean;
  };

  const student1: Student = {
    id: 101,
    name: "Sarah Johnson",
    age: 22,
    major: "Computer Science",
    grades: {
      math: 90,
      science: 85,
      english: 92,
    },
    contact: {
      email: "sarah.j@university.edu",
      phone: "555-123-4567",
    },
    isActive: true,
  };

  const student2: Student = {
    id: 102,
    name: "Michael Chen",
    age: 20,
    major: "Engineering",
    grades: {
      math: 95,
      science: 88,
      english: 79,
    },
    contact: {
      email: "michael.c@university.edu",
      phone: "555-987-6543",
    },
    isActive: true,
  };

  type Add = (x: number, y: number) => number;

  const add: Add = (num1, num2) => {
    return num1 + num2;
  };

  //
}
