console.log("welcome to javascript");
        //welcome to javascript
console.table([10,20,30,40,50]);
/*
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│    0    │   10   │
│    1    │   20   │
│    2    │   30   │
│    3    │   40   │
│    4    │   50   │
└─────────┴────────┘
*/

console.log(10+10);         //20
console.log(10+"10");       //1010
console.log(10+ +"10");     //20
console.log(1+ +"2"+ +"2"); //5
console.log(10-"10");       //0
console.log(10*"10");       //100
console.log(10/"10");       //1
console.log(10/"0");        //Infinity
console.log(10/"A");        //NaN
console.log(true+true);     //2
console.log(true+false);    //1
console.log(true/false);    //Infinity
console.log(1+true);        //2
console.log(9>8>7);         //false
console.log(1<2<3);         //true
console.log(!(3>2>1));      //true
console.log(10+5/10-5);     //5.5  
//BODMAS
//B - Bracket
//O - of
//D - Division
//M - Multiplication
//A - Addition
//S - Subtraction
console.log((10+5)/(10-5)); //3

//&  --- if both(left operand and right operand) are true then result is true otherwise result is false   
//| --- if atleast one operand is true then result is true
//^ --- if both operands are oppsite then result is true
console.log(1 & 1);             //1
console.log(1 & 0);             //0
console.log(0 & 1);             //0
console.log(0 & 0);             //0


console.log(1 | 1);             //1
console.log(1 | 0);             //1
console.log(0 | 1);             //1
console.log(0 | 0);             //0


console.log(1 ^ 1);             //0
console.log(1 ^ 0);             //1
console.log(0 ^ 1);             //1
console.log(0 ^ 0);             //0
console.log( (1&1) & (1&1) );   //1
console.log( (1&1) && (1&1) );  //1
(1&1) && (1&1) ? console.log("Hello") : console.log("Bye");  //Hello
0|0?console.log("Hello"):console.log("Bye");        //Bye

console.log(0.1+0.2);       //0.30000000000000004

//=   (assignment)
//==  (comparision)             (left value with right value)
//=== (strict comparision)      (value with datatype)
console.log(10=="10");          //true
console.log(10==="10");         //false
console.log(1=="1");            //true
console.log(1==="1");           //false
console.log(10 == "ten");       //false
console.log(10 === "ten");      //false
console.log( 0.1+0.2 == 0.3);   //false
console.log( 0.1+0.2 === 0.3 ); //false




























