 
 
 let display = document.getElementById("display")
let one = document.getElementById("one")
let two = document.getElementById("two")
let three = document.getElementById("three")
let four = document.getElementById("four")
let five = document.getElementById("five")
let six = document.getElementById("six")
let seven = document.getElementById("seven")
let eight = document.getElementById("eight")
let nine = document.getElementById("nine")
let zero = document.getElementById("zero")
let add = document.getElementById("add")
let sub = document.getElementById("sub")
let multi = document.getElementById("multi")
let div = document.getElementById("div")
let perc = document.getElementById("perc")
let deci = document.getElementById("deci")
let equal = document.getElementById("equal")
let clear = document.getElementById("clear")


one.onclick = function(){
    display.value += "1"
}
two.onclick = function(){
    display.value += "2"
}
three.onclick = function(){
    display.value += "3"
}
four.onclick = function(){
    display.value += "4"
}
five.onclick = function(){
    display.value += "5"
}
six.onclick = function(){
    display.value += "6"
}


seven.onclick = function(){

    display.value += "7"
}
eight.onclick = function(){
    display.value += "8"
  
}
nine.onclick = function(){
 
   
    display.value += "9"
  
}
zero.onclick = function(){
    display.value += "0"
}
add.onclick = function(){
    display.value += "+"
}
sub.onclick = function(){
    display.value += "-"
}
div.onclick = function(){
    display.value += "/"
}
multi.onclick = function(){
 
   
    display.value += "*"
  
}
perc.onclick = function(){
    display.value += "%"
}
deci.onclick = function(){
    display.value += "."
}
clear.onclick = function(){
    display.value = ""
}

equal.onclick = function(){
    display.value = eval(display.value)
    equal.style.border = "2px solid #ffda79"
    equal.style.borderRadius = "5px"
    
    // equal.style.transition = "ease all 2s"

}
