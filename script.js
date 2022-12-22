const divBtn = document.querySelectorAll(".div-btn")
const submit = document.querySelector(".btn-submit")
const center = document.querySelector(".center")
const select = document.querySelector(".box-select")
const num = document.getElementById("num")

divBtn.forEach(function(btn) {
    const item = btn.querySelector(".btn")
    btn.addEventListener("click", function() {
        let valor = item.value
        submit.addEventListener("click", function() {
            center.classList.add("some")
            select.classList.add("aparece")
            num.textContent = valor

        })
    })
})


