//complete this code
class Person {
	constructor(name, age){
		this.name = name;
		this.age = age;
	}

	get getter(){
		return name;
	}

	set setter(age){
		this.age = age;
	}
}

class Student extends Person {
	 study(){
		console.log(`${name} is studying`);
	}
}

class Teacher extends Person {
	 teach(){
		console.log(`${name} is studying`);
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
