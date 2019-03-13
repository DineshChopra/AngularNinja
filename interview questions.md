# Nagarro

IQ test

Second execute test case

## Sort string date array
let arr = ['10/17/13', '10/14/13', '10/18/13'];
```
let arr = [ '10/17/2013', '10/14/2013', '10/18/2013'];
console.log(arr);
arr.sort((a,b) => {
    return new Date(a) - new Date(b);
});
console.log(arr);

```
## Minify String
let str = aaabbbcc
output = a3b3c2
```
var str = 'aaadbbbaccccbd';
let map = new Map();
for(let char of str) {
    let count = map.get(char) + 1 || 1;
    map.set(char, count);
}
let output = '';
for(let key of map) {
    // console.log(key.join(''));
    output += key.join('');
}

console.log(output);

```

## Permutation of a string
let str =  abc;
output : abc, acb, bac, bca, cab, cba
'''
var str = 'abc';
var ans = '';
var perOutput = [];
function permutation(str, ans) {
    if(str.length === 0) {
        perOutput.push(ans);
        return;
    }

    for(let i=0; i<str.length; i++) {
        let ch = str.charAt(i);

        let ros = str.substring(0, i) + str.substring(i + 1);
        permutation(ros, ans+ch);
    }
}
permutation(str, '');

'''

Case study for more than 8years exp person.

## What is Critical rendering path
Create DOM tree
download css and js files asynchronously
create CSSOM tree
Merge CSSOM and DOM tree, create Render tree
paint the Render tree on browser

## Critical rendering path optimizations
	Minify
	Compress
	Cache
Css files are rendering blocking
<link rel="stylesheet" href="style-print.css" media="print">
media="print" --> it will not block rendering 


Minify, compress and cache
	HTML, CSS, Javascript
Minimize use of render blocking resources (CSS)
	Use media queries on link tag i.e. <link .... media="print">
	Inline css
		
minimize use of parser blocking resources (JS)
	Defer javascript execution
	use async/defer attribute on script tab i.e. <script ..... async></script>
	use 

## Censhare
	Create sudoku app

## Sapient
	Create a calculator app
	https://weblogs.asp.net/dwahlin/techniques-strategies-and-patterns-for-structuring-javascript-code 

	Critical rendering path
	border box and content box
	performance optimizations
## Thoughtworks
	Create a app for Battleship (link)

## http://redmonk.com/
