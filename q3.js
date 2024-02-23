// Write a “person” class to hold all the details.

class Person {
    constructor(name, age, email) {
      this.name = name;
      this.age = age;
      this.email = email;
    }
  
    getName() {
      return this.name;
    }
  
    getAge() {
      return this.age;
    }
  
    getEmail() {
      return this.email;
    }
  
    setName(name) {
      this.name = name;
    }
  
    setAge(age) {
      this.age = age;
    }
  
    setEmail(email) {
      this.email = email;
    }
  
    getDetails() {
      return `Name: ${this.name}, Age: ${this.age}, Email: ${this.email}`;
    }
  }
  
  // Example usage:

  const person1 = new Person("Jagadeeswarasurya", 25, "jagadeesh@example.com");
  console.log(person1.getDetails());
  
  person1.setAge(27);
  person1.setEmail("jagadeeswarasurya@example.com");
  console.log(person1.getDetails());
  