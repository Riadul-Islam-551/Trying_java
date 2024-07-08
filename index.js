// alert("Hello ! Welcome to my project.......");

document.write("This is<strong> javascript.</strong><br>");

// veriable declaration

var age,country

age=23
country="Bangladesh"

document.write(age)
document.write(country)

console.log(5*"5")

var num=20
var num1=23.5
var num2=55 
var num3='30'
var name='Riad'
console.log(typeof(num))
console.log(typeof(num1))
console.log(typeof (num2))
console.log(typeof (num3))
console.log(typeof(name))

// to make the number into string
num=toString(num)
console.log(typeof(num));

// to make the string into number
num3=parseInt(num3);
console.log(typeof(num3))

// number
// make the string into number directly
console.log(Number("23"))
console.log(String("30"))
console.log(Number("riad"))
console.log(String("Riad"))

// mixing the strings

console.log("Riadul Islam")
var firstname=' Kazi'
var lastname=' Riadul'
var n1=20
var n2=30
document.write(lastname)
document.write(firstname + lastname)
document.write(' my name is' + firstname + lastname)
document.write(' First number is '+ n1 +'and last number is '+ n2)

// character
var text='Bangladesh'
var text2= ' is a beautiful country'
console.log(text)
console.log(text.length)
console.log(text.charAt(5))
console.log(text.charAt(2))
console.log(text.charAt(0))
console.log(text.toUpperCase())
console.log(text.toLowerCase())
console.log(text.concat(text2))  // to show the different string together
console.log(text.slice(0,3))  // to pic a set of ward from a string
console.log(text.slice(3,8)) // to pic a set of ward from a string
