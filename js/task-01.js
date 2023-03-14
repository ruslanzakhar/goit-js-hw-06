const liItem = document.querySelectorAll(".item")
const len = document.querySelectorAll('h2').length;

console.log('Number of categories:', len)

liItem.forEach(el =>{  
console.log('Category:', el.firstElementChild.textContent)
console.log('Elements:', el.lastElementChild.children.length)

})