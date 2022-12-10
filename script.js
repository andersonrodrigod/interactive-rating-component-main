const submit = document.querySelector(".submit")
const corpo = document.querySelector(".corpo")
const corpo2 = document.querySelector(".corpo-2")
const scores = document.querySelectorAll(".score-btn")
const scoreFinal = document.querySelector(".num")




submit.addEventListener("click", () => {
    corpo.style.display = "none"
    corpo2.style.display= "block"
    
})

scores.forEach((score) => {
    score.addEventListener("click", () => {
         scoreFinal.innerHTML = score.innerHTML
        
        
    })
})



