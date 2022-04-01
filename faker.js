const { MongoClient } = require('mongodb');
const { faker } = require('@faker-js/faker');
const bcrypt = require('bcryptjs')

const fullName_first = faker.name.firstName()
    const fullName_last = faker.name.lastName()
    const name = `${fullName_first} ${fullName_last}`
    const email = `${fullName_first.toLowerCase()}_${fullName_last.toLowerCase()}@yahoo.com`
    const password = faker.internet.password()
    const phone = faker.phone.phoneNumber()


    const client = new MongoClient("mongodb+srv://m001-student:m001-mongodb-basics@sandbox.vfjdv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
async function run() {
  try {
    await client.connect().then(console.log('MongoDB connected'))
  } catch(err) {
    console.log(err)
  }

const saltRounds = 10

const passhash = bcrypt.hashSync(password,saltRounds)

  var dbo = client.db("Faker");   
  const user = {
        name,
        email,
        passhash,
        phone
    }

  dbo.collection("Orang").insertOne(user, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    client.close();
  })
}
run();