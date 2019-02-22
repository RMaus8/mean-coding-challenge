const studentData = [{
    name: 'Bobby',
    scores: [62,88,91,56,70]
},{
    name: 'Katie',
    scores: [93,70,66,85,89]
},{
    name: 'Michael',
    scores: [61,82,90,79,89]
},{
    name: 'Sarah',
    scores: [80,94,86,91,81]
}]

//reduced from 18 lines to 10
const convertData = (studentData) => {
    const average = (data) => (data.reduce((a,b) => a+b,0) / data.length)
    const highestScore = [...studentData].sort((a,b) => average(b.scores) - average(a.scores))[0]
    return [...studentData].map( student => {
        return {...student,
            max: Math.max(...student.scores),
            min: Math.min(...student.scores),
            average: average(student.scores)
        }
    }).concat({highestScore: {...highestScore, average: average(highestScore.scores)}})
}

//option 2 reduced to 6 lilnes
const convertData2 = (studentData) => {
    const average = (data) => (data.reduce((a,b) => a+b,0) / data.length)
    const highestScore = [...studentData].sort((a,b) => average(b.scores) - average(a.scores))[0]
    return [...studentData].reduce((prev, curr) => {
        return prev.concat({name: curr.name, max: Math.max(...curr.scores), min: Math.min(...curr.scores), average: average(curr.scores)})
    }, [{highestScore: {...highestScore, average: average(highestScore.scores)}}])
}

console.log(convertData(studentData));
console.log(convertData2(studentData));