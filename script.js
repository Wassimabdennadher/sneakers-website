const minus = document.querySelector('.minus')
const plus = document.querySelector('.plus')
const count = document.querySelector('#count')
const imagesList = document.querySelectorAll('img')
const mainimage = document.querySelector('.mainimage')
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
imagesList.forEach(function(el){
    el.addEventListener('click', function(event){
        let attribute = el.getAttribute('src')
        event.preventDefault()
        if (!el.classList.contains('mainimage'))
        {mainimage.setAttribute('src',attribute)}
    })
})
