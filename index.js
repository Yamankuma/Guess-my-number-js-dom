let secreatNumber = Math.floor(Math.random() * 20) +1;
let score =20;
let highscore = 0;
console.log(secreatNumber)

const c=document.querySelector(".btn")
c.addEventListener("click",()=>{
    let guess = Number(document.querySelector(".guess").value)
    if(!guess){
        alert("Enter a vailed value")
    }
    else if(secreatNumber===guess){
        document.querySelector("body").style.backgroundColor = "green"
        document.querySelector(".message").innerHTML = "You are guess right"
        document.querySelector(".number").textContent = secreatNumber
        document.querySelector(".highscore").innerHTML = score
    }
    else if(secreatNumber>guess){
       if(score>0){
        score = score - 1
        document.querySelector(".score").textContent = score
        document.querySelector(".message").innerHTML = "Too Low"
         
       }
       else{

        document.querySelector(".message").innerHTML = "You lost!"
        document.querySelector("body").style.backgroundColor = "red"
        document.querySelector(".prg").textContent = "Answer is :"
        document.querySelector(".number").textContent = secreatNumber
       }
    }
    else if(secreatNumber<guess){
    if(score>0){
        score = score - 1
        document.querySelector(".score").textContent = score
        document.querySelector(".message").innerHTML = "Too high!"
         
    }
    else{
        document.querySelector(".message").innerHTML = "You lost!"
        document.querySelector("body").style.backgroundColor = "red"
        document.querySelector(".prg").textContent = "Answer is :"
        document.querySelector(".number").textContent = secreatNumber
    }

    }
})