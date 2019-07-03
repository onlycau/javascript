var now = new Date();

console.log(now);

var dateAmecia = new Date(Date.parse('May 25, 2004'));

console.log(dateAmecia);

var dateUtc = new Date(Date.UTC(2018, 11, 32, 22, 55, 49));
console.log(dateUtc);

console.log(Date.now(), Date().toString(), Date.now().valueOf());

console.log(now.toDateString(), '//', now.toTimeString());

console.log(now.toLocaleDateString(), '//', now.toLocaleTimeString());;

console.log(now.toUTCString())