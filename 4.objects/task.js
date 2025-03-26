function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;

    this.marks = [];
}

const student1 = new Student("Олег Михайлов", "Мужской", 18);
const student2 = new Student("Ирина Львова", "Женский", 22);

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if (!this.marks) {
        return "Oтчислен"
    }
    for (const mark of marks) {
        this.marks.push(mark)
    }
}

Student.prototype.getAverage = function (...marks) {
    if (!this.marks || this.marks.length === 0) {
        return 0;
    }

    let sum = 0
    for (let i = 0; i < this.marks.length; i++) {
        sum += this.marks[i];
    }
    return sum / this.marks.length;

}

Student.prototype.exclude = function (reason) {
 if (!this.marks || this.marks.length === 0) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
 }
}
