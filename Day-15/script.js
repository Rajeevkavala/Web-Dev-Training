class Student {
    constructor(name, roll, marks) {
        this.name = name;
        this.roll = roll;
        this.marks = marks;
    }
    
    getGrade() {
        if(this.marks >= 90) {
            return "A+";
        }
        else if(this.marks >= 80) {
            return "A";
        }
        else if(this.marks >= 70) {
            return "B+";
        }
        else if(this.marks >= 60) {
            return "B";
        }
        else if(this.marks >= 50) {
            return "C";
        }
        else {
            return "F";
        }
    }
}

const stu1 = new Student("Rajeev", 320, 85);
const stu2 = new Student("Dhana", 358, 30);


const {name:name1, roll:roll1, marks:marks1} = stu1;
const {name:name2, roll:roll2, marks:marks2} = stu2;


console.log(name1+" "+stu1.getGrade()+" Grade");
console.log(name2+" "+stu2.getGrade()+" Grade");



//Assignment 2: product Cart with Constructor Function
class product{
    constructor(itemName,price,quantity){
        this.itemName = itemName;
        this.price = price;
        this.quantity = quantity;
    }

    getTotalPrice() {
        return this.price * this.quantity;
    }
}
const product1 = new product("Laptop", 50000, 2);
const product2 = new product("Mobile", 20000, 3);

console.log(`Total price of ${product1.itemName} is ${product1.getTotalPrice()}`);
console.log(`Total price of ${product2.itemName} is ${product2.getTotalPrice()}`);


//Assignment 3: Vehicle and Bike Classes

class Vehicle{
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    getDetails() {
        return `${this.year} ${this.brand} ${this.model}`;
    }
}

class Bike extends Vehicle {
    constructor(brand, model, year, engineType) {
        super(brand, model, year);
        this.engineType = engineType;
    }

    getDetails() {
        return `${super.getDetails()} - ${this.engineType}`;
    }
}

let bike1 = new Bike("TVS","Ntorq",2022,"Petrol");
let bike2 = new Bike("TVS","Apache",2022,"Petrol");


console.log(bike1.getDetails());
console.log(bike2.getDetails());

