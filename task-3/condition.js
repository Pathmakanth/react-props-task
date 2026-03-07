// =======================
// SECTION 1 – If / If Else
// =======================

// 1
let num = 15;
if (num > 10) {
  console.log("Number is big");
}

// 2
let age = 20;
if (age >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible to vote");
}

// 3
let temperature = 32;
if (temperature > 30) {
  console.log("Hot");
} else {
  console.log("Cool");
}

// 4
let number = -5;
if (number >= 0) {
  console.log("Positive");
} else {
  console.log("Negative");
}

// 5
let n = 8;
if (n % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}


// =======================
// SECTION 2 – Else If
// =======================

// 1
let marks = 85;
if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 70) {
  console.log("Grade B");
} else if (marks >= 50) {
  console.log("Grade C");
} else {
  console.log("Fail");
}

// 2
let hour = 14;
if (hour < 12) {
  console.log("Morning");
} else if (hour < 17) {
  console.log("Afternoon");
} else if (hour < 20) {
  console.log("Evening");
} else {
  console.log("Night");
}

// 3
let numCheck = 0;
if (numCheck > 0) {
  console.log("Positive");
} else if (numCheck < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

// 4
let score = 75;
if (score >= 100) {
  console.log("Winner");
} else if (score >= 50) {
  console.log("Good");
} else {
  console.log("Try again");
}

// 5 Largest of 3 numbers
let a = 10, b = 25, c = 15;
if (a >= b && a >= c) {
  console.log("A is largest");
} else if (b >= a && b >= c) {
  console.log("B is largest");
} else {
  console.log("C is largest");
}


// =======================
// SECTION 3 – Switch
// =======================

// 1
let day = 1;
switch(day){
  case 1: console.log("Monday"); break;
  case 2: console.log("Tuesday"); break;
  case 3: console.log("Wednesday"); break;
  case 4: console.log("Thursday"); break;
  case 5: console.log("Friday"); break;
  case 6: console.log("Saturday"); break;
  case 7: console.log("Sunday"); break;
  default: console.log("Invalid day");
}

// 2
let trafficLight = "Red";
switch(trafficLight){
  case "Red": console.log("Stop"); break;
  case "Yellow": console.log("Ready"); break;
  case "Green": console.log("Go"); break;
}

// 3
let month = 4;
switch(month){
  case 12:
  case 1:
  case 2:
    console.log("Winter"); break;
  case 3:
  case 4:
  case 5:
    console.log("Summer"); break;
  case 6:
  case 7:
  case 8:
    console.log("Rainy"); break;
  default:
    console.log("Autumn");
}

// 4
let role = "Admin";
switch(role){
  case "Admin": console.log("Full access"); break;
  case "User": console.log("Limited access"); break;
  case "Guest": console.log("Guest access"); break;
}

// 5
let grade = "A";
switch(grade){
  case "A": console.log("Excellent"); break;
  case "B": console.log("Good"); break;
  case "C": console.log("Average"); break;
  default: console.log("Needs improvement");
}


// =======================
// SECTION 4 – For Loop
// =======================

// 1
for(let i=1;i<=10;i++){
  console.log(i);
}

// 2
for(let i=10;i>=1;i--){
  console.log(i);
}

// 3
for(let i=2;i<=20;i+=2){
  console.log(i);
}

// 4
for(let i=1;i<=20;i+=2){
  console.log(i);
}

// 5 Table of 5
for(let i=1;i<=10;i++){
  console.log("5 x " + i + " = " + (5*i));
}


// =======================
// SECTION 5 – While Loop
// =======================

// 1
let i=1;
while(i<=5){
  console.log(i);
  i++;
}

// 2
let j=5;
while(j>=1){
  console.log(j);
  j--;
}

// 3
let k=2;
while(k<=10){
  console.log(k);
  k+=2;
}

// 4 Sum 1–10
let sum=0;
let s=1;
while(s<=10){
  sum+=s;
  s++;
}
console.log("Sum:",sum);

// 5 Squares
let sq=1;
while(sq<=5){
  console.log(sq*sq);
  sq++;
}


// =======================
// SECTION 6 – Do While
// =======================

// 1
let d=1;
do{
  console.log(d);
  d++;
}while(d<=5);

// 2
let e=5;
do{
  console.log(e);
  e--;
}while(e>=1);

// 3 Multiples of 3
let m=3;
do{
  console.log(m);
  m+=3;
}while(m<=30);

// 4 Divisible by 4
let f=4;
do{
  console.log(f);
  f+=4;
}while(f<=20);

// 5 Until 10
let val=1;
do{
  console.log(val);
  val++;
}while(val<=10);


// =======================
// SECTION 7 – For Of
// =======================

// 1
let str="javascript";
for(let ch of str){
  console.log(ch);
}

// 2
let fruits=["apple","banana","orange"];
for(let fruit of fruits){
  console.log(fruit);
}

// 3 Count characters
let text="hello";
let count=0;
for(let c of text){
  count++;
}
console.log("Count:",count);

// 4 Vowels
let word="javascript";
let vowels="aeiou";
for(let ch of word){
  if(vowels.includes(ch)){
    console.log(ch);
  }
}

// 5 Sum array
let arr=[10,20,30];
let total=0;
for(let num1 of arr){
  total+=num1;
}
console.log(total);


// =======================
// SECTION 8 – For In
// =======================

// 1
let student={
  name:"John",
  age:21,
  department:"IT"
};

for(let key in student){
  console.log(student[key]);
}

// 2 Keys
for(let key in student){
  console.log(key);
}

// 3 Key + Value
for(let key in student){
  console.log(key + " : " + student[key]);
}


// =======================
// SECTION 9 – Functions
// =======================

// 1
function add(a,b){
  return a+b;
}
console.log(add(5,3));

// 2
function square(num){
  return num*num;
}
console.log(square(4));