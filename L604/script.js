const list = document.querySelector('#student-list')

function displayStudentList() {
  while (true) {
    const stu = prompt('შეიყვანეთ სტუდენტი')
    if(!stu) return

    const stuEl = document.createElement('li')
    stuEl.textContent = stu
    list.appendChild(stuEl)
  }
}
  
displayStudentList()