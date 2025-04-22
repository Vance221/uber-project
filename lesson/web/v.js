console.log("working........");
// document object model
// display to html
document.write("i am vance");

// getting html elements
var p =document.getElementsByTagName("p");
console.log(p);

//
var text=document.getElementById("text");
console.log(text)

text.innerText ="inner peace"

text.innerHTML = "<h2>i am reading</h2>"
function useString(){
    var gif=document.getElementById("gif")
gif.innerText= "ball"
console.log(gif.innerText)
}