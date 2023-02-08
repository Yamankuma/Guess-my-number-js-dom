let c =document.querySelector(".Show")

c.addEventListener("click",()=>{
let d = document.querySelector(".text1")
d.innerHTML = "Hlo"
 
})

let x = document.querySelector(".Delete")
x.addEventListener("click",()=>{
  let l = document.querySelector(".text1")
  l.innerHTML = ""
})

let f = document.querySelector(".Style")
f.addEventListener("click",()=>{
    let f = document.querySelector("body")
    f.style.backgroundColor = "red"
})

let k = document.querySelector(".remove")
k.addEventListener("click",()=>{
    let k = document.querySelector("body")
    k.style.backgroundColor = ""
})