



//Setting and Swapping
var myNumber = 42;
var myName = "Michael";
    if (myNumber == 42) {
        myName = '42';
    }
    if (myName == '42') {
        myNumber = 'Michael';
    }
console.log('my name is'+' '+myName);
console.log('my num is'+' '+myNumber);



//Print -52 to 1066
    var arr = [];
    for(var i = -52; i < 1067; i++) {
        arr.push(i);
        }
       console.log(arr);


function beCheerful() {
    var x = 'good morning!';
    for(i = 99; i > 0; i--) {
        if(i < 99) {
            console.log(x)
        }
        
    }
}
beCheerful();


//Multiples of Three But not all
var arr = [];
for(var i = -300; i < 1; i += 3) {
    if(i == -3 || i == -6) {
        continue;
    }
    arr.push(i);
}
console.log(arr);


//Printing integers with While
var num = 2000;
while (num < 5280) {
    num = num + 1;
    console.log('counting to: '+num);
}

//You say it's your birthday
var m = 0;
var d = 0;
if((m == '7' && d == '4') || (d == '4' && m == '7')) {
    console.log('How did you know');

}
else if(m !== '7' || d !== '4') {
    console.log('Just another day...');
}


//Leap Year
function leapYear() {
    var arr = [];
    for(var i = 1; i < 2030; i++) {

    if((i % 4 === 0) && (i % 100 !== 0) || (i % 400 === 0))  {
    console.log(i+" "+'YES');
    }

    else {
        console.log(i+" "+'NO');
    }
        arr.push(i);
    }
}
leapYear();


//Print and Count

var arr1 = [];
for(var i = 512; i < 4097; i+=5) {
        arr1.push(i);
        }
console.log(arr1);
console.log('Length of array is: '+arr1.length+' lines');

//Multiples of Six
var num = 0;
while (num < 60000) {
    num = num += 6;
    console.log(num);
}


//Counting, the Dojo Way
var num = 1;
var c = 'Coding'
var d = ' Dojo'
while (num < 101) {
    num = num + 1;
    console.log(num);
    if(num % 5 === 0) {
        console.log(c);
    }
    if((num % 10 === 0) && (num % 5 === 0)) {
        console.log(d);
    }
}

//What do you know?
function  myFunction() {
    var input = 'incoming'
    console.log(input);
}
myFunction();

//Woa, that sucker's huge...
var sum = 0;
for(var i = -300000; i < 300001; i++) {
    if(i % 2 == 1) {
        sum = sum + i;
        }   
}
console.log(sum);


//Countdown by fours
var x = 2016;

while(x > 0) {
    if(x == 0) {
        continue;
    }
    x = x - 4;
    console.log(x);
}

//Flexible Countdown



//The Final Countdown




//Countdown



//Print and Return
function myArray() {
    var arr = [1,2];
    console.log(arr[0]);
    return arr[1];
}
myArray();

//First Plus Length
function myArray() {
    var arr = [2,4,6];
    console.log(arr[0] + arr.length);
}
myArray();


//Values Greater than Second
function greater2(arr, Y) {
var arr = [1,3,5,7,9,13];
var Y = arr[1];
var count = 0
for(var i = 0; i < arr.length; i++) {
    if(arr[i] > Y) {
        count = count + 1;
        console.log(arr);
        console.log(count);
    }
    
    }
    return count;
    
}
greater2();


//Biggie Size
var arr = [-1,3,5,-5];
for(var i = 0; i < arr.length; i++) {
if(arr[i] > 0) {
    arr[i] = 'Big';
}
console.log(arr);
}


 function lowHigh(arr) {
    var arr = [1,4,6,8];
    var low = arr[0];
    var high = arr[0];
        for(var i = 1; i < arr.length; i++) {
            if(arr[i] > high) {
                high = arr[i];
            }
            if(arr[i] < low) {
                low = arr[i];
                
            }
            
        }
    var arrnew = [low, high];
    console.log([high]);
    console.log(low);
}
lowHigh(); 



function print() {
    console.log(i);
}
print();