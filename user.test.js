const MongoClient = require("mongodb").MongoClient;
const User = require("./user")

describe("User Account", () => {
	let client;
	beforeAll(async () => {
		client = await MongoClient.connect(
			"mongodb+srv://m001-student:m001-mongodb-basics@sandbox.vfjdv.mongodb.net/?retryWrites=true&w=majority",
			{ useNewUrlParser: true },
		);
		User.injectDB(client);
	})

	afterAll(async () => {
		await client.close();
	})

	test("New user registration", async () => {
		const res = await User.register("min","amin123")
		expect(res).toBe("user created")
	})

	test("Duplicate username", async () => {
		const res = await User.register("nani","nis345")
		expect(res).toBe("duplicate username")
	})

	test("User login invalid username", async () => {
		const res = await User.login("mina","hann195")
		expect(res).toBe("incorrect username")
	})

	test("User login invalid password", async () => {
		const res = await User.login("nani","mina123")
		expect(res).toBe("incorrect password")
	})

	test("User login successfully", async () => {
		const res = await User.login("nani","hann195")
		expect(res).toBe("user is login")
	})
});