
function theBeatlesPlay (musicians, instruments) {
var Newarray = [];
for (let i = 0; i < musicians.length; i++) {
Newarray.push(`${musicians[i]} plays ${instruments[i]}`);}
return Newarray;
}

function johnLennonFacts (facts) {
const array = [];
var i = 0;
while (i< facts.length) {
array.push(facts[i] 
+ "!!!");i++;
}
return array;
}

function iLoveTheBeatles (n) {
  var array = [];
  do {array.push(`I love the Beatles!`);
  }
  while (n < 15);n++;
  return array;
}