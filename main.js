// Write the function printInt(n) taking one parameter n and print all natural numbers from 1 to n in console.

// Question 1

    // using a loop print from 1 to n
    // start at 1
    //stop: n 
    // using one loop
    // step +1

var i = 1;
function printInt(n) {
    for (var x=1;x<=1;x++)
    console.log(x)
}


2.)  Write the function printIntRev(n) taking one parameter n and  print all natural numbers in reverse in console (from n to 1).

function printIntRev(n)

reverseString

var i = 1;
function printInt(n) {
    for (var n = 1; n <= 1; n++)
    console.log(reverseString("function printInt(n)")
}



3.)  Write the function checkInput(x) taking one parameter x and return the string ‘number’ if x is a number; return the string ‘string’ if x is a string; and return ‘boolean’ if x is a boolean. Otherwise returns -1. 
Examples:
       checkInput(5) ====> ‘number’
       checkInput(‘hello’)======> ‘string’
       checkInput(‘5’) ======> ‘string’
       checkInput(true)=====> boolean
       checkInput([1,2,3,4]) =====> -1

       //return the string 'number if x is a number
       //return the string 'string if x is a string 
       //return 'boolean' if x is a boolean
       //otherwise return -1

    if function checkInput(x) {
        if (x=number || x=string || x=boolean);
            console.log(typeof.x)
        } else if {
            
        }
    }
    console.log("-1")

//shiyus hints

// function checkinput (x) {
    //checking is x is either number, string or boolean
    //if(...|| ...if. || ...if.) {
    //    return typeof x;
    //} else {
    //    return - 1;
    //}
//}


       
        














        Write the function simpleEvenAdding(num) taking a number and add up all the even numbers from 1 to num. 
	Examples: simpleEvenAdding(5) ======> 6 (because 2+4 = 6)
	       simpleEvenAdding(10) ======> 30 (because 2+4+6+8+10 = 30)
	       simpleEvenAdding(11) ======> 30 (because 2+4+6+8+10 = 30)
                  simpleEvenAdding(1) ======> 0
           simpleEvenAdding(0) =======> 0
           

           

Write the function letterCapitalize(str) taking a string and capitalize the first letter of each word. The given words will be separated by only one space.
	Examples:
		letterCapitalize(“hello world”) ===========> “Hello Word”
letterCapitalize(“you cannot find the answer online”) =====>  “You Cannot Find The Answer Online”
	
Hint: There is a built-in function in javaScript that change string into uppercase. There is also a function to separate string into an array of characters.

Write the function simpleReverse(str) taking a string and return the string in reversed order. 
	Examples:
		// simpleReverse(‘hello’) ======> ‘olleh’
		// simpleReverse(‘I Love Code’) ======> ‘edoC evoL I’

Hint: Think of how you can loop through a string or array of characters backwards to produce a new string

Write the function findDiff(arr) taking an array of numbers as parameter and return the difference between the maximum number and the minimum number (max - min). 
	Examples:
	findDiff([1,2,4,6,20, 3]) =======> 19 (Because 20 - 1 = 19)
	findDiff([24, 22, 23, 22, 24]) =======> 2 (Because 24 - 22 = 2)
	findDiff([1, 1, 1, 1, 1]) =======> 0 
findDiff([1]) ======> 0;
findDiff([]) =======> 0;

Write the function timeConvert(num) taking a number as parameter and return the number of hours and minutes the parameter converts to. Separate the number of hours and minutes with a colon.
	Example:
		timeConvert(61) ======> 1:1
		timeConvert(63) =======> 1:3
		timeConvert(120)======> 2:0
		timeConvert(59)=======> 0:59
    	Hints: Dividing and modulo the number 60.

Write the function findStr(str, long) taking two strings as parameters and return how many str you can find in long. Assume Str is not empty string.
Example:
	findStr(“hi”, “dasdhidasdahidashi”) =======> 3
	findStr(“o”, “daodo”) =======> 2
	findStr(“ha”,”abcde”)=======> 0
	findStr(“h”, “hihelloho”)======> 3

Write the function selfDividingNumbers(left, right) taking two number bound as parameters and returns an array of every possible self dividing number between 
them, including the bounds. 

Hint: A self-dividing number is a number that is divisible by every digit it contains. For example, 128 is a self-dividing number because 128 % 1 ==0, 128 % 2 == 0 and 128 % 8 == 0. 

Examples:
	selfDividingNumbers(1, 22) ========> [1,2,3,4,5,6,7,8,9,11,12,15,22]
	selfDividingNumbers(1, 10) =======> [1,2,3,4,5,6,7,8,9]
selfDividingNumbers(12, 21) =======> [12, 15]

11. Write the function moveZeros(nums) taking an array of numbers and move all 0’s to the end of it while maintaining the relative order of the non-zero elements.  For example:
moveZeros([0,1,0,3,12]) ======> [1,3,12,0,0]
moveZeros([1,2,0,0,2,312,33,0,0]) ======> [1,2,2,312,33,0,0,0,0]
moveZeros([0,0,0]) ======> [0,0,0]
moveZeros([1,2,312,11,2]) =======> [1,2,312,11,2]

12. Create an average() function that calculates the average of an array of numbers.
Examples: 
	average([2, 6]) =====> 4
	average([2, 3, 3, 5, 7, 10]) ======> 5
average([7, 1432, 12, 13, 100]) ======> 312.8
average([]) ======> 0

Deliverables
	Create a new repository in your github and named it “JavaScript Practice”. Put all functions into one file called “main.js”. 
Tagging a Release
We will be using code repository tags (or releases) to "submit" assignments. When you consider your work complete and ready for evaluation (ready for release), go to your code repository in GitHub and generate a release by navigating to "releases". Then click on "Create a new release" and type the name of the tag in the input field labeled "Tag version". We will be using the following tags for the various assignments:

v1.0(this assignment)
 
If you need to resubmit the assignment then create a new tag by adding a version number, e.g.,
 v1.1, v1.2, etc...
 
I will grade the very last release. The date/time you create the tag will be considered the date/time of submission.

