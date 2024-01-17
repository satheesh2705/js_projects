

function calculate(){

let amt =Number(document.getElementById("Amount").value)
let inrst = Number(document.getElementById("Intrest").value)
let mnth = Number(document.getElementById("Months").value)
let btn  = document.getElementById("btn")
let res  = document.getElementById("result")

// console.log(amt,inrst,mnth);

let permnth  = (amt/100)*inrst

let result = permnth*mnth   

res.innerHTML = "The total intrest is:"+result

console.log(result);

}

