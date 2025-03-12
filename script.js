// //complete this code
// class Person {
// 	constructor(name, age){
// 		this.name = name;
// 		this.age = age;
// 	}

// 	get getter(){
// 		return this._name;
// 	}

// 	set setter(age){
// 		this._age = age;
// 	}
// }

// class Student extends Person {
// 	 study(){
// 		console.log(`${this.name} is studying`);
// 	}
// }

// class Teacher extends Person {
// 	 teach(){
// 		console.log(`${this.name} is studying`);
// 	}
// }

// class Person {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     get name(){
//         return this.name;
//     }

//     set name(name){
//         this.name = name;
//     }

//     get age(){
//         return this.age;
//     }

//     set age(age){
//         this.age = age;
//     }
// }

// class Student extends Person {
//     study(){
//         console.log(`${this.name} is studying`);
//     }
// }

// class Teacher extends Person {
//     teach(){
//         console.log(`${this.name} is teaching`);
//     }
// }


// class Student extends Person {
//     study(){
//         console.log(`${this.name} is studying`);
//     }
// }

// class Teacher extends Person {
//     teach(){
//         console.log(`${this.name} is teaching`);
//     }
// }

class Person{
	constructor(name, age){
		this.name= name;
		thus.age= age;
	}

	get name(){
		return this.name;
	}
	set name(name){
		this.name =name;
	}
	get age(){
		return this.age;
	}
	set age(age){
		this.age=age;
	}
}

class Student extends Person{
	study(){
		console.log(`${this.name} is studying`)
	}
}

class Teacher extends Person{
	teach(){
		console.log(`${this.name} is teaching`)
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
