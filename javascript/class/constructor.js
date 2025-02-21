class Range{
    constructor(from, to){
        this.from = from;
        this.to = to;
    }
    includes(x){return this.from <= x && x <= this.to; }

    *[Symbol.iterator]() {
        for(let x = Math.ceil(this.from); x <= this.to; x++) yield x;
        }

    toString() { return `(${this.from}...${this.to})`; }
}

let r = new Range(1, 3);
console.log(r.includes(2));//true
console.log(r.includes(4));//false
console.log(r.toString());//(1...3)
console.log([...r]);//[1, 2, 3]



/* more class examples */

// Employee Base Class
class Employee {
    static totalEmployees = 0; // Static property to track total employees
    #salary; // Private property

    constructor(firstName, lastName, role, baseSalary, department) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role;
        this.department = department;
        this.#salary = baseSalary; // Private salary variable
        Employee.totalEmployees++; // Increment total employees
    }

    getInfo() {
        return `${this.firstName} ${this.lastName} works as a ${this.role} in ${this.department} department.`;
    }

    getSalary() {
        return `Salary of ${this.firstName} ${this.lastName} is $${this.#salary}`;
    }

    setSalary(newSalary) {
        if (newSalary < 0) {
            console.log("❌ Salary cannot be negative.");
        } else {
            this.#salary = newSalary;
            console.log(`✅ ${this.firstName}'s salary updated to $${newSalary}`);
        }
    }

    work() {
        return `${this.firstName} is performing general tasks.`;
    }

    static getTotalEmployees() {
        return `Total employees in the company: ${Employee.totalEmployees}`;
    }
}

// Manager Class (Inherits from Employee)
class Manager extends Employee {
    constructor(firstName, lastName, department, baseSalary, teamSize) {
        super(firstName, lastName, "Manager", baseSalary, department);
        this.teamSize = teamSize;
    }

    work() {
        return `${this.firstName} is managing a team of ${this.teamSize} in the ${this.department} department.`;
    }

    conductMeeting() {
        return `${this.firstName} is conducting a team meeting.`;
    }
}

// Developer Class (Inherits from Employee)
class Developer extends Employee {
    constructor(firstName, lastName, department, baseSalary, programmingLanguage) {
        super(firstName, lastName, "Developer", baseSalary, department);
        this.programmingLanguage = programmingLanguage;
    }

    work() {
        return `${this.firstName} is developing software using ${this.programmingLanguage}.`;
    }

    debugCode() {
        return `${this.firstName} is debugging ${this.programmingLanguage} code.`;
    }
}

// Intern Class (Inherits from Employee)
class Intern extends Employee {
    constructor(firstName, lastName, department, baseSalary, duration) {
        super(firstName, lastName, "Intern", baseSalary, department);
        this.duration = duration;
    }

    work() {
        return `${this.firstName} is interning for ${this.duration} months in ${this.department}.`;
    }

    attendTraining() {
        return `${this.firstName} is attending training sessions.`;
    }
}

// Creating Employee Objects
const manager = new Manager("Alice", "Doe", "HR", 7000, 10);
const developer = new Developer("Bob", "Smith", "IT", 5000, "JavaScript");
const intern = new Intern("Charlie", "Brown", "IT", 2000, 6);

// Logging Employee Information
console.log(manager.getInfo()); // ✅ Alice Doe works as a Manager in HR department.
console.log(manager.work());    // ✅ Alice is managing a team of 10 in the HR department.
console.log(manager.getSalary()); // ✅ Salary of Alice Doe is $7000
console.log(manager.conductMeeting()); // ✅ Alice is conducting a team meeting.

console.log(developer.getInfo()); // ✅ Bob Smith works as a Developer in IT department.
console.log(developer.work());    // ✅ Bob is developing software using JavaScript.
console.log(developer.getSalary()); // ✅ Salary of Bob Smith is $5000
console.log(developer.debugCode()); // ✅ Bob is debugging JavaScript code.

console.log(intern.getInfo()); // ✅ Charlie Brown works as an Intern in IT department.
console.log(intern.work());    // ✅ Charlie is interning for 6 months in IT.
console.log(intern.getSalary()); // ✅ Salary of Charlie Brown is $2000
console.log(intern.attendTraining()); // ✅ Charlie is attending training sessions.

// Updating Salary of Developer
developer.setSalary(5500); // ✅ Bob's salary updated to $5500

// Trying to set a negative salary
intern.setSalary(-500); // ❌ Salary cannot be negative.

// Display total employees
console.log(Employee.getTotalEmployees()); // ✅ Total employees in the company: 3
