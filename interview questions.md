# Nagarro

IQ test

Second execute test case

Sort string date array
let arr = ['10/17/13', '10/14/13', '10/18/13'];
let newArr = arr.sort(function(a,b){return new Date(a) - new Date(b)});


let str = aaabbbcc
output = a3b3c2


let str =  abc;
output : abc, acb, bac, bca, cab, cba


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