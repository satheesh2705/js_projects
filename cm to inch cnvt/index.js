
function calculate(){
    let cmVal =  Number(document.getElementById("input").value)
    let inchVal =  cmVal/2.54
    let result = document.getElementById("ans")
    result.innerHTML = "The ans is: "+inchVal + "   inch"
}


