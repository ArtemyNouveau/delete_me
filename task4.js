function User(name) {
	this.name = name;
	this.getName = () => (this.name);

	return {
		getName: this.getName
	}
}

const me = new User('Rex');

console.log(me.getName()); // Rex

