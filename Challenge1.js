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

const convertData = (studentData) => {
    const reducer = (acc, cv) => acc + cv
    let highestScore = {name: '', average: 0}
    let studentScores = {}
   studentData.forEach(student => {      
        let name = student.name
        studentScores = {...studentScores,
                          [name]: {
                            max: Math.max(...student.scores),
                            min: Math.min(...student.scores),
                            average: student.scores.reduce(reducer, 0) / student.scores.length
                          }
                        }
        if(studentScores[name].average > highestScore.average) {
          highestScore = {name: name, average: studentScores[name].average}          
        }
    })
    return {highestScore, studentScores};
}
