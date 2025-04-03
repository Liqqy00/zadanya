//Задание 1
var str1 = "Привет,";
var str2 = "Вася";
var couple = (str1 +str2);
alert(couple);//выводит сообщение, может принимать только 1 значение

//Звдвние 2
var a=10.3;
var b=12.5;
var S= a*b;
alert(S.toFixed(1)); // (1)- колво знаков после запятой

//Задание 3
var ask= prompt("Как тебя зовут?")
alert ("Привет,"+ ask);

//Задание 4
var C=25;
var F=9/5*(C+32);
alert(F.toFixed(1));

//Задание 5
var max= Math.max(7, -3, 10, 23, -100, 0, 55);
var min=Math.min(7, -3, 10, 23, -100, 0, 55);

alert("Max="+max);
alert("Min="+min);