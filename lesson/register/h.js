var numList = [11, 12, 13, 14, 15, 16]

for (var i = 0; i < numList.length; i++) {

    if (numList[i] % 2 == 1) { console.log(numList[i]) }
}

var total = 0;
for (var i = 0; i < numList.length; i++) {
    total = total + numList[i]

}
console.log(total)

var thankyou = "thank you";

for (var i = 0; i < 50; i++) { console.log(thankyou) }

var object = [{ "user": "leon", "score": "60" }]
console.log(object[0].score)
object[0].score = 900
console.log(object[0].score)

var leon = {
    "user": "Leon",
    "age": 20

}

console.log(leon.age)
leon.age = 87
console.log(leon.age)
var chi = [
    { "user": "vance", "score": 90},
    { "user": "eccl", "score": 70 },
    { "user": "igho", "score": 78 },
    { "user": "christy", "score": 85 },
    { "user": "efe", "score": 80 }
]
var total= 0;
for (var i = 0; i < chi.length; i++) {
    total = total + chi[i].score

}
console.log(total)

 var leon= 60
 console.log(leon)
