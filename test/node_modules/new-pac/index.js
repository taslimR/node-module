#!/usr/bin/env node
//console.log('Hello, world!');
var program = require('commander');
program
 .arguments('<section>')
 .option('--cell-count <cellCount>', 'number of cells')
 .option('--ratio <ratio>', 'ratio of width and height')
 .option('--width <width>', 'width')
 .option('--height <height>', 'height')
 .option('--filled-cell-count <filledCellCount>', 'filled cell amount')
 .action(function(section) {
 	// cs-gen-wh --cell-count=N --ratio=R (where N is number of cells, R is ratio). Will print a JSON {width: W, height: H}
 	//console.log(section);
 	if(section == 'cs-gen-wh'){
	    let n = program.cellCount;
		let r = program.ratio;

		let m = r % 1;

		let p = (r - m) * 2;
		let q = p + (p * m);

		let  xx = n / (p * q);

		let x = Math.sqrt(xx);

		let w = Math.round(x * p);

		let h = Math.round(x * q);

		console.log(`{ width: ${w}, height: ${h} }`);
	}
	else if(section == 'cs-gen-last-row-len')
	{
		// cs-gen-last-row-len --cell-count=N --width=W --height=H
		// (where W is width and H is height). Will print a JSON {last-row-len: L}
		let n = program.cellCount;
		let w = program.width;
		let h = program.height;

		if(n < (w * h))
		{
			let len = n - (w * (h-1));
			console.log(`{last-row-len: ${len} }`);
		}
		else if(n == (w * h))
		{

			console.log(`{last-row-len: ${w} }`);
		}

	}
	else if(section == 'cs-gen-random-list')
	{
		// cs-gen-random-list --cell-count=N --filled-cell-count=Nf (where Nf <= N and Nf is number of filled cells).
		// Output will be a jSON array of numbers with length Nf and no element will be repeated twice and no elements are between 0 to N-1

	}
	else if(section == 'cs-get-random-filled-div')
	{
		// cs-get-random-filled-div --cell-count=N --ratio=R --filled-cell-count=Nf. 
		// Output will be a nice HTML fragment (with inline or linked css) that shows the table/UI as depicted in the top. 
		// You can see that this script uses all previous scripts.
	}
}).parse(process.argv);