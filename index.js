let student1 ={
    name: "John Doe",
    age: 20,
    isEnrolled: true
};
let student2 ={
    name: "James Smith",
    age: 22,
    isEnrolled: true
};
let student3 ={
    name: "Josh Brown",
    age: 19,
    isEnrolled: false
};

let students = [student1, student2, student3];

students.forEach(student => {
    console.log(`Name: ${student.name}, Age: ${student.age}, Enrolled: ${student.isEnrolled}`);// This will print each student's details
});
console.log(student1.name);// this will print the name of student 1.
console.log(student2.age);// this will print the age of student 2.
console.log(student3.isEnrolled); //  this is whether student 3 is enrolled or not.
console.log(typeof student1.name, typeof student1.age, typeof student1.isEnrolled); // this will print the type of each property in student1 object.