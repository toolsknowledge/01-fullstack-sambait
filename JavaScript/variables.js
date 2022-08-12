//variables are used to store the data
//string,number,boolean,objects,arrays,......
//we can store any type of data
//we will declare variable with var,let and const keyword
//let and const introduced in ES6
//variables should contain a-z,A-Z,0-9,$ and _
//variables should not with digits
//javascript supports following datatypes
//1) string    2) number    3) boolean    4) undefined    5) null    6) bigint     7) Symbol
//Syntax
/*
    var/let/const variablename = value;
*/

//string
//collection of characters called as string
//1) ""(double quotes)  2) ''(single quotes)    3) ``(backtick)
//``(backtick) operator introduced in ES6
//``(backtick) operator called as template literal
//``(backtick) operator used to define the multi line strings (paragraphs)
var sub_one = "ReactJS";
var sub_two = "NodeJS";
var sub_three = "MongoDB";
var mern_stack = `${sub_one}...${sub_two}...${sub_three}`;
console.log(mern_stack);
//ReactJS<==>NodeJS<==>MongoDB

var table_name = "employees";
var sal = 50000;
var sql_query = `select * from ${table_name} where esal>${sal}`;
console.log(sql_query);
//select * from employees where esal>50000

var uname = "admin";
var upwd = "admin@123";
var login_query = `select * from ${table_name} where uname='${uname}' and upwd='${upwd}'`;
console.log(login_query);
//select * from employees where uname='admin' and upwd='admin@123'


//number
//decimal
//double
//hexadecimal
//octal
//binary
//hexadecimal number will prefix with "0x"
//octal number will prefix with "0o"
//binary number will prefix with "0b"
var decimal = 100;
var double = 100.12345;
var hexadecimal = 0x123ABC;
var octal=0o123;
var binary = 0b1010;
console.log(decimal,double,hexadecimal,octal,binary);
//100 100.12345 1194684 83 10


//binary
//true
//false
var flag = true;
var flag1 = false;
console.log(flag);          //true
console.log(flag1);         //false


var data;
console.log(data);          //undefined


data = null;
console.log(data);          //null


//bigint
//this datatype used to represent the large number
//the range of bigint is > 2^53 - 1
//we will recognize bigint numbers with suffix "n"
var bigint = 123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789n;
console.log(bigint);


//Symbol
var x = Symbol("Hello");
console.log(x);             //Symbol(Hello)


var arr = [10,20,30,40,50];
console.log(arr[0],arr[4]);
//10 50


//JSON
//Java Script Object Notation
//JSON also called as "Java Script Objects"
//Objects --- {}
//Arrays  --- []
//Data    --- key & value pairs
var obj = {
    key1 : "Hello_1",
    key2 : "Hello_2",
    key3 : "Hello_3"
};
console.log(
    obj.key1, obj.key2, obj.key3
);
//Hello_1 Hello_2 Hello_3
















