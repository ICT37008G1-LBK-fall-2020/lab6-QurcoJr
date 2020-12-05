function removeChildren(elem) {
  elem.innerHTML = ''
}

const parent = document.querySelector('#container')
removeChildren(parent)