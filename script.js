const students = [
    {
        studentName: "Amna",
        id: "0423",
        class: 12,
        subjects: [
            { subject: "Urdu", marks: 78 },
            { subject: "English", marks: 89 },
            { subject: "Maths", marks: 98 },
        ]
    },
    {
        studentName: "Mirha",
        id: "0424",
        class: 12,
        subjects: [
            { subject: "Urdu", marks: 67 },
            { subject: "English", marks: 59 },
            { subject: "Maths", marks: 88 },
        ]
    },
    {
        studentName: "Ayesha",
        id: "0425",
        class: 12,
        subjects: [
            { subject: "Urdu", marks: 68 },
            { subject: "English", marks: 79 },
            { subject: "Maths", marks: 99 },
        ]
    },
    {
        studentName: "Areesha",
        id: "0426",
        class: 12,
        subjects: [
            { subject: "Urdu", marks: 88 },
            { subject: "English", marks: 91 },
            { subject: "Maths", marks: 97 },
        ]
    },  
];

// Calculate marks of Students!

function totalMarks(subjects) {
    let total = 0;
    for(let i = 0; i < subjects.length; i++){
        total += subjects[i].marks;
    }
    return total;
}
// Calculate percentage of Students!

function percentage(subjects) {
    return (totalMarks(subjects) / (subjects.length * 100)) * 100;
}
// Grade of Students!

function grade(percentage) {
    if(percentage >= 80) return "🥈A+";
    else if(percentage >= 70) return "A✨";
    else if(percentage >= 60) return "B🎀";
    else return "FAIL😕😓";
}


// Report_card Output show in brownser!

function result_generate(){
    const inputName = document.getElementById("name").value;
const inputId = document.getElementById("id").value;
let std = null;

for (let i = 0; i < students.length; i++) {
    if((inputName === students[i].studentName) && (inputId === students[i].id)){
        std = students[i];
        break;
    }   
}
if(std){
    const studentPercentage = percentage(std.subjects);
    document.getElementById('report_card').innerHTML =`
    <p><b>Name:</b> ${std.studentName}</p>
    <p><b>ID:</b> ${std.id}</p>
    <p><b>Class:</b> ${std.class}</p>
    <p><b>Obtained Marks:</b> ${totalMarks(std.subjects)}</p>
    <p><b>Percentage:</b> ${studentPercentage.toFixed(2)}%</p>
    <p><b>Grade:</b> ${grade(studentPercentage)}</p>
    `;
}else {
    document.getElementById('report_card').innerHTML = `<b>Please! Input valid Name & ID!<br>
                                                             Because this student are not exists!</b>`;
}
}
