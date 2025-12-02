
let add = document.querySelector("#add");
let del = document.querySelector(".multi")
let input = document.querySelector(".input-text")
let inputAll = document.querySelector(".input")

del.addEventListener("click", () => {
    input.value = ""

})
let area = document.querySelector(".empty-area");
function view() {
    if (area.childElementCount > 0) {
        input.style.display = "none"
        area.style.display = "block"
        del.style.display = 'none'
    }
    else {
        input.style.display = "block"
        area.style.display = "none"
        del.style.display = 'block'

    }
}
view()

let a = 1

let plus = document.querySelector("#plus");
plus.addEventListener("click", () => {
    // input.classList.toggle("display")
    input.style.display = "block"
    del.style.display = 'block'




})

add.addEventListener("click", () => {
    let box = document.createElement("div")
    box.classList.add("container")

    if (input.value.trim() === "") {
        return
    }
    box.innerHTML = ` 
   <div class="main">
   <div class="textInput">
    <div><b>${a}.</b></div>
    <div class="value" >${input.value}</div> 
    </div>  
    <div class="multi">
        <p class="multiplay  delete">×</p>
    </div>
    </div>
    `
    // a.style.display="flex"
    let deleteBox = box.querySelector(".delete")
    deleteBox.addEventListener("click", () => {
        box.remove()

        view()
    })
    // a.style.color="red"

    area.appendChild(box)
    box.appendChild(deleteBox)
    a++
    input.value = ""
    view()
})
let icon = document.querySelector("i");



icon.addEventListener("click", () => {
    icon.classList.toggle("bi-sort-down-alt")
    icon.classList.toggle("bi-sort-up-alt")
    let c=icon.classList.contains("bi-sort-up-alt")

    let area = document.querySelector(".empty-area")
    let boxes = Array.from(area.querySelectorAll(".container"))
    boxes.sort((a, b) => {
        let texta = a.querySelectorAll(".textInput div")[1].textContent.trim()
        let textb = b.querySelectorAll(".textInput div")[1].textContent.trim()



        return c ? textb.localeCompare(texta) : texta.localeCompare(textb)

    })
    boxes.forEach(e => area.appendChild(e));

})