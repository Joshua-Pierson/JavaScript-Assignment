let student = 
    {
        name: prompt("Enter your name"),
        score: 95,
    }

let score = student.score; // this will get the score of the student

function getGrade(score) {
    if (score >= 90 && score <= 100) {
        return "Hello " + student.name + ", your score is " + student.score + " your grade is A.";
    } else if (score >= 80 && score < 90) {
        return "Hello " + student.name + ", your score is " + student.score + " your grade is B.";
    } else if (score >= 70 && score < 80) {
        return "Hello " + student.name + ", your score is " + student.score + " your grade is C.";
    } else {
        return "Hello " + student.name + ", your score is " + student.score +  " you did not pass";
    }
}

console.log(getGrade(score)); // this will print the grade of the student based on the score.
