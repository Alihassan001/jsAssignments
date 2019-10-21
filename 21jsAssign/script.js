//Q1 part A
// var arr = [
//     { name: 'Asher', age: 22 },
//     { name: 'Zubair', age: 20 },
//     { name: 'Kashif', age: 23 },
//     { name: 'Wasif', age: 17 },
//     { name: 'Hanzala', age: 28 }
// ];

// for (var i = 0; i < arr.length; i++) {
//     if (arr[i].name == 'Kashif') {
//         arr[i].name = arr[i].name.replace('Kashif', 'Siiddiq')
//     }
// }

// console.log(arr);

//Q1 part B
// arr.push({name: "umair", age: "23"});
// console.log(arr);


//Q1 part C
// arr.shift(0,1);
// console.log(arr);

//Q1 part D

// for(var i=0; i<arr.length; i++){
//     arr[i].createdAt = new Date;
        
// }
// console.log(arr);

//Q2
// var acceptedPersons = [];
// for(var i=0; i<arr.length;i++){
//     if(arr[i].age >= 18 && arr[i].age <= 28){
//         acceptedPersons.push(arr[i].name);
//     }
// }
// console.log(acceptedPersons);

//Q3

var students = [
    {
        _id: 'std1',
        name: 'Bill Gates',
        age: 30
    },
    {
        _id: 'std2',
        name: 'Steve Jobs',
        age: 30
    },
    {
        _id: 'std3',
        name: 'Suzanne Collins',
        age: 30
    }];

var courses = [
    {
        name: 'Maths',
        std_id: ['std3', 'std1']
    },
    {
        name: 'Computer Science',
        std_id: ['std3', 'std2']
    },
    {
        name: 'Commerce',
        std_id: ['std1']
    },
]

let sortedArr = [];

for(let i = 0; i < students.length; i++) {
    let stCourse = [];
    for(let j = 0; j < courses.length; j++) {
        if(courses[j].std_id.includes(students[i]._id)) {
            stCourse.push(courses[j].name)
        }
    }
    sortedArr.push({name: students[i].name, 'studen ID': students[i]._id, courses: stCourse})
}

console.log(sortedArr)