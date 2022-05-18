let users;

class User {
	static async injectDB(conn) {
		users = await conn.db("e_commerce").collection("seller-buyer")
	}

	static async register(username, password) {
		
		return users.findOne({
			'username':username
		}).then(async user=>{
			if (user) {
				if(user.username==username){
					return "duplicate username";
				}
			}else{

			await users.insertOne({
				"username": username, 
				"password": password,
			})
			return "user created";
			}
		})

	}

	static async login(username, password) {
		return users.findOne({
			'username':username
		}).then(async user=>{
			if(user){
				if(user.password==password){
					return "user is login";
				}
				else{
					return "incorrect password";
				}	
			}
			else{
				return "incorrect username";
			}
			
		})

	}
}
 
module.exports= User;