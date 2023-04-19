const form = document.querySelector("#form")
const day = { element: document.querySelector("#day"), error: document.querySelector("#day-error")}
const month = { element: document.querySelector("#month"), error: document.querySelector("#month-error")}
const year = { element: document.querySelector("#year"), error: document.querySelector("#year-error")}

form.addEventListener("submit", (e)=>{
    e.preventDefault()

    const birthDate = new Date(year.element.value, month.element.value, day.element.value)
    const today = new Date(Date.now())

    console.log(today.getDate())
})