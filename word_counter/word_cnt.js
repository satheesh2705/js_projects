

   function calculate() {

    var text = document.getElementById("input").value;
    let result = document.getElementById("res")
    console.log(getCount(text));
  
   result.innerHTML = "Your  word count is: "+getCount(text)

   function getCount(text) {
      return text.split(' ').filter(
            function(num) {
            return num != ''
            }).length;
     }

   }