

var students = [
    { FirstName: 'დავით', LastName: 'წულუკიძე', PersonalNumber: '123'},
    { FirstName: 'მიხილ', LastName: 'კაპანაძე', PersonalNumber: '124'},
    { FirstName: 'სოფო', LastName: 'დოღონაძე', PersonalNumber: '125'}
];



function displayStudentsTable(studentList){
    const table = document.createElement('table')
    studentList.forEach((stu) => {
        const tr = document.createElement('tr')
        table.appendChild(tr)
        for (key in stu) {
            const td = document.createElement('td')
            td.appendChild(document.createTextNode(stu[key]))
            tr.appendChild(td)
        }
        table.appendChild(tr)
    })
    document.querySelector('#student-list').appendChild(table)
}


displayStudentsTable(students);
