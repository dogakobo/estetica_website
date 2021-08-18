export class Usuario {

	constructor(name = "", email= "", password="", tipo=""){
		this.name = name;
		this.email = email;
		this.password = password;
		this.tipo =  tipo;
	}
		name: String;
		email: String;
		password: String;
		tipo: String;
}