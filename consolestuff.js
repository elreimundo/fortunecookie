function introduceMe () {
  console.log(this.name);
}
undefined
var namedObject = {name: 'steve'}
undefined
namedObject
Object {name: "steve"}
namedObject.introduceMyself = introduceMe
function introduceMe() {
  console.log(this.name);
}
namedObject.introduceMyself();
steve VM1363:3
undefined
this.name
""
var name = 'bill'
undefined
this.name
"bill"
introduceMe();
bill VM1363:3
undefined
namedObject.introduceMyself()
steve VM1363:3
undefined
steve
ReferenceError: steve is not defined
namedObject
Object {name: "steve", introduceMyself: function}introduceMyself: function introduceMe() {name: "steve"__proto__: Object
var introduceSteve = introduceMe.bind(namedObject);
undefined
introduceSteve()
steve VM1363:3
undefined
introduceMe
function introduceMe() {
  console.log(this.name);
}
var otherObject = {name: 'HAL9000'}
undefined
otherObject.sayHiDave = introduceSteve
function () { [native code] }
otherObject.sayHiDave();
steve VM1363:3
undefined
otherObject.sayHiHAL = introduceMe
function introduceMe() {
  console.log(this.name);
}
otherObject.sayHiHAL();
HAL9000 VM1363:3
undefined
introduceMe.call(namedObject);
steve VM1363:3
undefined
introduceMe.call(otherObject);
HAL9000 VM1363:3
undefined
introduceMe.call(this);
bill VM1363:3
undefined
name
"bill"
introduceMe.apply(otherObject);
HAL9000 VM1363:3
undefined
function addTwoThingsTogether (a,b) {
  console.log('hi my name is' + this.name);
  console.loog(a + b);
}
undefined
addTwoThingsTogether(1,2)
hi my name isbill VM1939:3
TypeError: undefined is not a function
function addTwoThingsTogether (a,b) {
  console.log('hi my name is' + this.name);
  console.log(a + b);
}
undefined
addTwoThingsTogether(1,2)
hi my name isbill VM1950:3
3 VM1950:4
undefined
addTwoThingsTogether.call(otherObject, 1,2)
hi my name isHAL9000 VM1950:3
3 VM1950:4
undefined
addTwoThingsTogether.apply(otherObject, [1,2])
hi my name isHAL9000 VM1950:3
3 VM1950:4
undefined