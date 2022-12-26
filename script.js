const minus = document.querySelector('.minus')
const plus = document.querySelector('.plus')
const count = document.querySelector('#count')
console.log(minus)
console.log(plus)
console.log(count.textContent)
minus.addEventListener('click', function(event){
    event.preventDefault()
    if (count.textContent > 0 )
    count.textContent--
})
plus.addEventListener('click', function(event){
    event.preventDefault()
    count.textContent++
})
