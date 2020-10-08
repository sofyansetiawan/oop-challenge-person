class Person {
  constructor(firstName, lastName, birthYear, gender){
    this._firstName = this.checkName(firstName);
    this._lastName = this.checkName(lastName);
    this._birthYear = this.checkBirthYear(birthYear);
    this._gender = this.checkGender(gender);
    this._address = null;
    this._contact = null;
    this._money = 0;
    this._properties = [];
  }

  /// getter ///

  get firstName(){
    return this._firstName;
  }
  get lastName(){
    return this._lastName;
  }
  get birthYear(){
    return this._birthYear;
  }
  get age(){
    let d = new Date();
    if(this._birthYear !== null ) return d.getFullYear() - this._birthYear;
      else return "No Age"

  }
  get gender(){
    return this._gender;
  }
  get address(){
    return this._address;
  }
  get contact(){
    return this._contact;
  }
  get money(){
    return this._money;
  }
  get properties(){
    return this._properties;
  }


  /// Setter ///
  set address(value){
    this._address = value;
  }  
  set contact(value){
    this._contact = value;
  }  
  set money(value){
    this._money = value;
  }  

  set properties(value){
    this._properties = value;
  }

  checkName(str){
    if(typeof str === "string" && str.length >= 3 ){
      return str;
    }
    return "";
  }

  checkBirthYear(num){
    if(typeof num === "number" && num >= 1980){
      return num;
    }
    return null;
  }

  checkGender(str){
    if(str === "male" || str === "female"){
      return str;
    }
    return null;
  }

  fullname(){
    return `${this._firstName} ${this._lastName}`;
  }

  working(work){
    switch (work) {
      case "ngoding javascript":
        this._money += 2000000;
        break;
      case "menulis artikel":
        this._money += 1000000;
        break;
      case "mengantar barang":
        this._money += 500000;
        break;

    }
  }

  setAddress(country, city, street, number, postalCode){
    this._address = new Address(country, city, street, number, postalCode);
  }

  setContact(phoneNumber){
    this._contact = new Contact(this._firstName, this._lastName, phoneNumber);
  }

  buyProperty(property){
    if(property.price !== undefined){
      if(this._money >= property.price){
        this._money -= property.price;
        this._properties.push(property);
      } else {
        console.log( `Money is not enough to buy ${property.constructor.name}`);
      }
    }
  }
  

  static createNew(firstName, lastName, birthYear, gender){
    return new Person(firstName, lastName, birthYear, gender);
  }

}


class Contact {
  constructor(firstName, lastName, phone){
    this._email = this.generateEmail(firstName, lastName);
    this._website = this.generateWebsite(firstName, lastName);
    this._phone = this.checkPhoneNumber(phone);
  }

  generateEmail(firstName, lastName){
    return `${firstName.toLowerCase()}${lastName.toLowerCase()}@gmail.com`
  }

  generateWebsite(firstName, lastName){
    return `www.${firstName.toLowerCase()}${lastName.toLowerCase()}.com`
  }

  checkPhoneNumber(phoneNumber){
    if(typeof phoneNumber === "string"){
      if(phoneNumber.includes("+")){
        return this._phone = phoneNumber;
      }
    }
  }

}

class Address {
  constructor(country, city, street, number, postalCode){
    this.country = country;
    this.city = city;
    this.street = street;
    this.number = number;
    this.postalCode = postalCode;
  }

}

/*///////////////////

  PROPERTIES

*///////////////////

class Car{
  constructor(name, brand, type, color, price){
    this.name = name;
    this.brand = brand;
    this.type = type;
    this.color = color;
    this.price = price;
  }
}

class Laptop{
  constructor(name, brand, processor, memory, harddrive, price){
    this.name = name;
    this.brand = brand;
    this.processor = processor;
    this.memory = memory;
    this.harddrive = harddrive;
    this.price = price;
  }
}

class House {
  constructor(numberOfFloor, type, numberOfRooms,price){
    this.numberOfFloor = numberOfFloor;
    this.type = type;
    this.numberOfRooms = numberOfRooms;
    this.price = price;

  }
}


/*///////////////////

  DRIVER CODE

*///////////////////

const hondaJaxx = new Car("Honda Jaxx", "Honda", "Sedan", "Weird", 100000);
const toyotaFortunate = new Car("Toyota Fortunate", "Toyota", "SUV", "Blue-ish", 200000);

const gubug = new House(1, "Apartment", 3, 200000000);
const laptop = new Laptop("Lenovo X Carbon", "Lenovo", 4, 14.5, "2TB", 5000000 )

const person = new Person("First", "Lasts", 1999, "male");

const person2 = Person.createNew("Second", "Third", 1981, "female")

console.log(person2)

console.log(person.age)
console.log(person.fullname())


// money ++++ //
person.working("ngoding javascript")
person.working("menulis artikel")
person.working("mengantar barang")
person.working("ngoding javascript")
person.working("menulis artikel")
person.working("mengantar barang")
person.working("ngoding javascript")
person.working("menulis artikel")
person.working("mengantar barang")
person.working("ngoding javascript")
person.working("menulis artikel")
person.working("mengantar barang")


person.setContact("0818+888")
person.setAddress("Indonesia", "Jakarta", "Jalan jalan", 202, 13450)

person.buyProperty(hondaJaxx)
person.buyProperty(toyotaFortunate)

person.buyProperty(gubug)
person.buyProperty(laptop)



console.log(person)
