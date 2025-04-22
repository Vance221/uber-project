console.log("working........")





function useString(){
   
   var input= document.getElementById("data")
   inputvalue = input.value
   console.log(inputvalue)

   var h1=document.getElementById("jik");
   h1.innerText= inputvalue; 
    
}

var x=3
var y=12
// string to number

var numStr ="3";
var num=Number(numStr);
console.log(typeof numStr); // check the data type
var backtostr= num.toString();
console.log( backtostr);