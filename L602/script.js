function insertAfter(elem, refElem) {
  refElem.insertAdjacentHTML('afterend', elem)
} 

const ref = document.querySelector('#second')
insertAfter('<div id="third">THIRD</div>', ref)