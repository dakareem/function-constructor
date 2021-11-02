function Address(city, street, buildingNumber) {
    this.city = city;
    this.street = street;
    this.buildingNumber = buildingNumber;
}

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.getPersonFullName = function () {
    return this.firstName + " " + this.lastName;
}


function Customer(firstName, lastName, city, street, buildingNumber) {
    Person.call(this, firstName, lastName);
    this.address = new Address(city, street, buildingNumber);
}

Customer.prototype = Object.create(Person.prototype);

const customerAddress = new Customer('reem', 'daka', 'tel aviv', 'migdal shalom', 6);
console.log(customerAddress);
debugger

