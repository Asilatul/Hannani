const { MongoClient } = require('mongodb');
const { faker } = require('@faker-js/faker');
const randomName = faker.name.findName();
const randomEmail = faker.internet.email();
const randomPhoneNumber = faker.phone.phoneNumber();

console.log(randomName)
const fullName_first = faker.name.firstName()
    const fullName_last = faker.name.lastName()
    const name = `${fullName_first} ${fullName_last}`
    const email = `${fullName_first.toLowerCase()}_${fullName_last.toLowerCase()}@yahoo.com`
    const password = faker.internet.password()
    const phone = faker.phone.phoneNumber()

    const user = {
        name,
        email,
        password,
        phone
    }

    console.log(user)

    const client = new MongoClient("mongodb+srv://m001-student:m001-student-basics@sandbox.vfjdv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
async function connecting() {
await client.connect().then(console.log('MongoDB connected'))
}
connecting();
