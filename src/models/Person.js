class Person {
    constructor(name, cpf) {
        this._name = name;
        this._cpf = cpf;
    }

    evaluateService = (value) => {
        console.log(`A nota de atendimento de ${this._name} é ${value}`)

    }
}

const person = new Person("Jorge", 12321)
person.evaluateService(20)

console.log("--------------------------------")

class Visitor extends Person {
    constructor(name, cpf) {
        super(name, cpf)

    }
}

const visitor = new Visitor("Carlos", 21232)
visitor.evaluateService(30)

console.log("--------------------------------")

class Teacher extends Person {
    constructor(name, cpf, wage, students) {
        super(name, cpf)
        this._wage = wage
        this._students = students
    }

    showWage = () => {
        console.log(`O Salario de ${this._name} é de R$${this._wage} !`)
    }

    showStudents = () => {
        this._students.forEach((student) => {
            console.log(`- ${student._name} é aluno da professora ${this._name} `)
        })
    }

}

class Student extends Person {
    constructor(name, cpf, grade) {
        super(name, cpf)
        this._grade = grade
    }

    _teacher = null

    setTeacher = (teacher) => {
        this._teacher = teacher
    }

    showGrade = () => {
        console.log(`A nota do aluno ${this._name} foi ${this._grade}`)

    }

}

const student = new Student("Claudinei", 8382818283, 95)
student.evaluateService(200)
student.showGrade()
student.setTeacher(new Teacher("Cleber", 86786857, 5000))
console.log(student._teacher._name)

console.log("--------------------------------")

const teacher = new Teacher("Claudia", 34521, 3000, [new Student("Alberto", 1321321, 300), new Student("Sergio", 1321321, 200), new Student("Rita", 1321321, 500)])
teacher.evaluateService(100)
teacher.showWage()
teacher.showStudents()
//console.log(teacher._students)



