let students =[
    {name: "John Doe",
    age: 20,
    isEnrolled: true},

    {name: "James Smith",
    age: 22,
    isEnrolled: true},

    {name: "Josh Brown",
    age: 19,
    isEnrolled: false},
]
console.log(students);  // this will print the array of students.

console.log(students[0].name);  // this will print the name of the first student in array.
console.log(students[1].age);    // this will print the age of second student in array.
console.log(students[2].isEnrolled); //  this is whether the third student in the array is enrolled or not.
console.log(typeof students[0].name);   // this will print the type of the name of first student in array.
console.log(typeof students[1].age);    // this will print the type of the age of second student in array.
console.log(typeof students[2].isEnrolled); // this will print the type of the isEnrolled of third student in array.
