let div8 = document.getElementsByClassName("div8")
let div10 = document.querySelector(".div10")
let div11 = document.querySelector(".div11")
let div12 = document.querySelector(".div12")
for (let i = 0; i < div8.length; i++) {
    div8[i].addEventListener("click", () => {
        div8[i].classList.add("border")
        div8[0].classList.remove("bord")


        for (let j = 0; j < div8.length; j++) {
            if (j != i) {
                div8[j].classList.remove("border")
            }
        }
    })
}
div8[0].classList.add("bord")

div8[0].addEventListener("click", () => {
    div10.style.display = "flex"
    div11.style.display = "none"
    div12.style.display = "none"
})
div8[1].addEventListener("click", () => {
    div10.style.display = "none"
    div11.style.display = "flex"
    div12.style.display = "none"
})
div8[2].addEventListener("click", () => {
    div10.style.display = "none"
    div11.style.display = "none"
    div12.style.display = "flex"
})

let div24 = document.getElementsByClassName("div24")
let div23 = document.getElementsByClassName("div23")
let answer = document.getElementsByClassName("answer")
let arrow = document.getElementsByClassName("arrow")

for (let i = 0; i < div24.length; i++) {
    div24[i].addEventListener("click", () => {
        for (let j = 0; j < div23.length; j++) {
            if (div23[j].querySelector(".answer") !== div23[i].querySelector(".answer")) {
                div23[j].querySelector(".answer").classList.remove("display")
                div23[j].querySelector(".arrow").classList.remove("rotate")
            } else {
                div23[i].querySelector(".answer").classList.toggle("display")
                div23[i].querySelector(".arrow").classList.toggle("rotate")
            }
        }

    })
}

let form = document.querySelector(".form")
let input = document.querySelector("#input")
let errorDiv = document.querySelector(".error-div")
let inputDiv = document.querySelector(".input-div")
let inputDivImg = document.querySelector(".input-div img")
let gmail = "@gmail.com"
let yahoo = "@yahoo.com"
let outlook = "@outlook.com"
form.addEventListener("submit", (e) => {
    if (input.value.includes(gmail) || input.value.includes(yahoo) || input.value.includes(outlook)) {
        errorDiv.classList.remove("error")
        inputDiv.classList.remove("red")
    } else {
        e.preventDefault()
        errorDiv.classList.add("error")
        inputDiv.classList.add("red")
        inputDivImg.classList.add("show")
    }
})

let open = document.querySelector(".open")
let close = document.querySelector(".close")
let img1 = document.querySelector(".img1")
let body = document.querySelector(".body")
let mobile = document.querySelector(".mobile-div1")

open.addEventListener("click", () => {
    open.style.display = "none"
    close.style.display = "block"
    mobile.style.display = "block"
    body.style.overflow = "hidden"
    img1.classList.add("logo")
})

close.addEventListener("click", () => {
    open.style.display = "block"
    close.style.display = "none"
    mobile.style.display = "none"
    body.style.overflow = ""
    img1.classList.remove("logo")
})