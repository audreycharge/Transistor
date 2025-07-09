let grid = [
	// row 1
	[
		{ efx: 8, efy: -8 }, // c1
		{ efx: 10, efy: -10 }, // c2
		// to column 64
	],
	// row 2
	[
		{ efx: 10, efy: -10 }, // c1
		{ efx: 10, efy: -10 }, // c2
		// to column 64
	],

	// to row 32
];

// to access a row and column
// ex. access row 1, col 1
let efx = grid[0][0].efx;
console.log("in high rest");
console.log(efx);

let highResGrid = {
	r1c1: [
		[
			{ efx: -73, efy: -334 }, //r1c1 of high res
			{ efx: -79, efy: -378 }, //r1c2 of high res
			{ efx: -114, efy: -435 }, //r1c3 of high res
			{ efx: -139, efy: -507 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -106, efy: -312 }, //r2c1 of high res
			{ efx: -117, efy: -355 }, //r2c2 of high res
			{ efx: -160, efy: -401 }, //r2c3 of high res
			{ efx: -196, efy: -458 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -140, efy: -289 }, //r3c1 of high res
			{ efx: -156, efy: -326 }, //r3c2 of high res
			{ efx: -206, efy: -360 }, //r3c3 of high res
			{ efx: -254, efy: -408 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -168, efy: -262 }, //r4c1 of high res
			{ efx: -194, efy: -296 }, //r4c2 of high res
			{ efx: -241, efy: -320 }, //r4c3 of high res
			{ efx: -292, efy: -355 }, //r4c4 of high res
		], //row: 4
	],
	r1c2: [
		[
			{ efx: -152, efy: -592 }, //r1c1 of high res
			{ efx: -232, efy: -729 }, //r1c2 of high res
			{ efx: -293, efy: -866 }, //r1c3 of high res
			{ efx: -324, efy: -984 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -222, efy: -529 }, //r2c1 of high res
			{ efx: -333, efy: -643 }, //r2c2 of high res
			{ efx: -431, efy: -774 }, //r2c3 of high res
			{ efx: -487, efy: -937 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -288, efy: -468 }, //r3c1 of high res
			{ efx: -413, efy: -570 }, //r3c2 of high res
			{ efx: -546, efy: -676 }, //r3c3 of high res
			{ efx: -680, efy: -777 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -350, efy: -404 }, //r4c1 of high res
			{ efx: -455, efy: -466 }, //r4c2 of high res
			{ efx: -578, efy: -519 }, //r4c3 of high res
			{ efx: -779, efy: -506 }, //r4c4 of high res
		], //row: 4
	],
	r1c3: [
		[
			{ efx: -462, efy: -1000 }, //r1c1 of high res
			{ efx: -616, efy: -1000 }, //r1c2 of high res
			{ efx: -807, efy: -1000 }, //r1c3 of high res
			{ efx: -1526, efy: -1000 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -684, efy: -1000 }, //r2c1 of high res
			{ efx: -899, efy: -1000 }, //r2c2 of high res
			{ efx: -1385, efy: -999 }, //r2c3 of high res
			{ efx: -2332, efy: -1000 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -884, efy: -760 }, //r3c1 of high res
			{ efx: -1134, efy: -820 }, //r3c2 of high res
			{ efx: -1407, efy: -978 }, //r3c3 of high res
			{ efx: -2405, efy: -776 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -897, efy: -435 }, //r4c1 of high res
			{ efx: -1126, efy: -390 }, //r4c2 of high res
			{ efx: -1401, efy: -354 }, //r4c3 of high res
			{ efx: -1947, efy: 1229 }, //r4c4 of high res
		], //row: 4
	],
	r1c4: [
		[
			{ efx: -2807, efy: -1000 }, //r1c1 of high res
			{ efx: -7099, efy: -1000 }, //r1c2 of high res
			{ efx: -10000, efy: -1000 }, //r1c3 of high res
			{ efx: -10000, efy: 7656 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -4097, efy: -1000 }, //r2c1 of high res
			{ efx: -8701, efy: -1000 }, //r2c2 of high res
			{ efx: -10000, efy: 5001 }, //r2c3 of high res
			{ efx: -10000, efy: 16639 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -3953, efy: 1185 }, //r3c1 of high res
			{ efx: -6028, efy: 3935 }, //r3c2 of high res
			{ efx: -7789, efy: 5001 }, //r3c3 of high res
			{ efx: -10000, efy: 13577 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -2291, efy: 5001 }, //r4c1 of high res
			{ efx: -3714, efy: 5001 }, //r4c2 of high res
			{ efx: -2877, efy: 7052 }, //r4c3 of high res
			{ efx: -3181, efy: 13222 }, //r4c4 of high res
		], //row: 4
	],
	r1c5: [
		[
			{ efx: -10000, efy: 50000 }, //r1c1 of high res
			{ efx: -10000, efy: 50000 }, //r1c2 of high res
			{ efx: -10000, efy: 50000 }, //r1c3 of high res
			{ efx: -10000, efy: 50000 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -10000, efy: 44409 }, //r2c1 of high res
			{ efx: -10000, efy: 50000 }, //r2c2 of high res
			{ efx: -10000, efy: 50000 }, //r2c3 of high res
			{ efx: -10000, efy: 50000 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -10000, efy: 26441 }, //r3c1 of high res
			{ efx: -10000, efy: 36504 }, //r3c2 of high res
			{ efx: -10000, efy: 45125 }, //r3c3 of high res
			{ efx: -10000, efy: 48381 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -8687, efy: 21888 }, //r4c1 of high res
			{ efx: -8976, efy: 29211 }, //r4c2 of high res
			{ efx: -9247, efy: 34603 }, //r4c3 of high res
			{ efx: -9540, efy: 40697 }, //r4c4 of high res
		], //row: 4
	],
	r1c6: [
		[
			{ efx: -8531, efy: 50000 }, //r1c1 of high res
			{ efx: -6932, efy: 50000 }, //r1c2 of high res
			{ efx: -6203, efy: 50000 }, //r1c3 of high res
			{ efx: -5886, efy: 50000 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -10000, efy: 50000 }, //r2c1 of high res
			{ efx: -8603, efy: 50000 }, //r2c2 of high res
			{ efx: -7294, efy: 50000 }, //r2c3 of high res
			{ efx: -6645, efy: 50000 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -10000, efy: 49902 }, //r3c1 of high res
			{ efx: -8490, efy: 49900 }, //r3c2 of high res
			{ efx: -7372, efy: 50000 }, //r3c3 of high res
			{ efx: -6544, efy: 50000 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -8287, efy: 43221 }, //r4c1 of high res
			{ efx: -6862, efy: 44470 }, //r4c2 of high res
			{ efx: -6956, efy: 46757 }, //r4c3 of high res
			{ efx: -6521, efy: 47124 }, //r4c4 of high res
		], //row: 4
	],
	r1c7: [
		[
			{ efx: -5835, efy: 50000 }, //r1c1 of high res
			{ efx: -5929, efy: 50000 }, //r1c2 of high res
			{ efx: -6107, efy: 50000 }, //r1c3 of high res
			{ efx: -6364, efy: 50000 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -6442, efy: 50000 }, //r2c1 of high res
			{ efx: -6508, efy: 50000 }, //r2c2 of high res
			{ efx: -6731, efy: 50000 }, //r2c3 of high res
			{ efx: -7094, efy: 50000 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -6424, efy: 50000 }, //r3c1 of high res
			{ efx: -6646, efy: 50000 }, //r3c2 of high res
			{ efx: -6899, efy: 50000 }, //r3c3 of high res
			{ efx: -7339, efy: 50000 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -6335, efy: 46808 }, //r4c1 of high res
			{ efx: -6858, efy: 48017 }, //r4c2 of high res
			{ efx: -7341, efy: 47773 }, //r4c3 of high res
			{ efx: -8051, efy: 46699 }, //r4c4 of high res
		], //row: 4
	],
	r1c8: [
		[
			{ efx: -6685, efy: 50000 }, //r1c1 of high res
			{ efx: -7051, efy: 50000 }, //r1c2 of high res
			{ efx: -7470, efy: 50000 }, //r1c3 of high res
			{ efx: -7962, efy: 50000 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -7569, efy: 50000 }, //r2c1 of high res
			{ efx: -8118, efy: 50000 }, //r2c2 of high res
			{ efx: -8761, efy: 50000 }, //r2c3 of high res
			{ efx: -9530, efy: 50000 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -8107, efy: 50000 }, //r3c1 of high res
			{ efx: -8879, efy: 49869 }, //r3c2 of high res
			{ efx: -9514, efy: 49936 }, //r3c3 of high res
			{ efx: -10000, efy: 48877 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -8820, efy: 47420 }, //r4c1 of high res
			{ efx: -9399, efy: 46712 }, //r4c2 of high res
			{ efx: -10000, efy: 44911 }, //r4c3 of high res
			{ efx: -10000, efy: 45125 }, //r4c4 of high res
		], //row: 4
	],
	r1c9: [
		[
			{ efx: -8507, efy: 50000 }, //r1c1 of high res
			{ efx: -9121, efy: 50000 }, //r1c2 of high res
			{ efx: -9845, efy: 50000 }, //r1c3 of high res
			{ efx: -10000, efy: 49303 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -10000, efy: 50000 }, //r2c1 of high res
			{ efx: -10000, efy: 50000 }, //r2c2 of high res
			{ efx: -10000, efy: 48075 }, //r2c3 of high res
			{ efx: -10000, efy: 45298 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -10000, efy: 47657 }, //r3c1 of high res
			{ efx: -10000, efy: 46202 }, //r3c2 of high res
			{ efx: -10000, efy: 44024 }, //r3c3 of high res
			{ efx: -10000, efy: 41533 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -10000, efy: 43832 }, //r4c1 of high res
			{ efx: -10000, efy: 41215 }, //r4c2 of high res
			{ efx: -10000, efy: 40652 }, //r4c3 of high res
			{ efx: -10000, efy: 38536 }, //r4c4 of high res
		], //row: 4
	],
	r1c10: [
		[
			{ efx: -10000, efy: 45955 }, //r1c1 of high res
			{ efx: -10000, efy: 42013 }, //r1c2 of high res
			{ efx: -10000, efy: 37408 }, //r1c3 of high res
			{ efx: -10000, efy: 31979 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -10000, efy: 42036 }, //r2c1 of high res
			{ efx: -10000, efy: 38159 }, //r2c2 of high res
			{ efx: -10000, efy: 33488 }, //r2c3 of high res
			{ efx: -10000, efy: 27983 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -10000, efy: 38845 }, //r3c1 of high res
			{ efx: -10000, efy: 35279 }, //r3c2 of high res
			{ efx: -10000, efy: 31318 }, //r3c3 of high res
			{ efx: -10000, efy: 26770 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -10000, efy: 34905 }, //r4c1 of high res
			{ efx: -10000, efy: 33219 }, //r4c2 of high res
			{ efx: -10000, efy: 29913 }, //r4c3 of high res
			{ efx: -10000, efy: 24823 }, //r4c4 of high res
		], //row: 4
	],
	r1c11: [
		[
			{ efx: -10000, efy: 25694 }, //r1c1 of high res
			{ efx: -10000, efy: 18475 }, //r1c2 of high res
			{ efx: -10000, efy: 10000 }, //r1c3 of high res
			{ efx: -10000, efy: 2697 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -10000, efy: 21410 }, //r2c1 of high res
			{ efx: -10000, efy: 13366 }, //r2c2 of high res
			{ efx: -10000, efy: 5910 }, //r2c3 of high res
			{ efx: -10000, efy: -1000 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -10000, efy: 21006 }, //r3c1 of high res
			{ efx: -10000, efy: 14605 }, //r3c2 of high res
			{ efx: -10000, efy: 7249 }, //r3c3 of high res
			{ efx: -10000, efy: -707 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -10000, efy: 21734 }, //r4c1 of high res
			{ efx: -10000, efy: 16839 }, //r4c2 of high res
			{ efx: -10000, efy: 10121 }, //r4c3 of high res
			{ efx: -10000, efy: 7472 }, //r4c4 of high res
		], //row: 4
	],
	r1c12: [
		[
			{ efx: -9999, efy: -999 }, //r1c1 of high res
			{ efx: -10000, efy: -1000 }, //r1c2 of high res
			{ efx: -10000, efy: -1000 }, //r1c3 of high res
			{ efx: -10000, efy: -1000 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -10000, efy: -1000 }, //r2c1 of high res
			{ efx: -10000, efy: -1000 }, //r2c2 of high res
			{ efx: -10000, efy: -1000 }, //r2c3 of high res
			{ efx: -10000, efy: 1648 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -10000, efy: -999 }, //r3c1 of high res
			{ efx: -10000, efy: -1000 }, //r3c2 of high res
			{ efx: -10000, efy: -1000 }, //r3c3 of high res
			{ efx: -10000, efy: 946 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -10000, efy: 1766 }, //r4c1 of high res
			{ efx: -10000, efy: 1537 }, //r4c2 of high res
			{ efx: -10000, efy: 5001 }, //r4c3 of high res
			{ efx: -10000, efy: 8936 }, //r4c4 of high res
		], //row: 4
	],
	r1c13: [
		[
			{ efx: -10000, efy: 50000 }, //r1c1 of high res
			{ efx: -10000, efy: 50000 }, //r1c2 of high res
			{ efx: -10000, efy: 50000 }, //r1c3 of high res
			{ efx: -10000, efy: 36957 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -10000, efy: 42281 }, //r2c1 of high res
			{ efx: -10000, efy: 50000 }, //r2c2 of high res
			{ efx: -10000, efy: 49196 }, //r2c3 of high res
			{ efx: -10000, efy: 36506 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -10000, efy: 17012 }, //r3c1 of high res
			{ efx: -10000, efy: 31279 }, //r3c2 of high res
			{ efx: -10000, efy: 31344 }, //r3c3 of high res
			{ efx: -10000, efy: 23449 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -10000, efy: 18817 }, //r4c1 of high res
			{ efx: -10000, efy: 23180 }, //r4c2 of high res
			{ efx: -10000, efy: 22171 }, //r4c3 of high res
			{ efx: -10000, efy: 25698 }, //r4c4 of high res
		], //row: 4
	],
	r1c14: [
		[
			{ efx: -9687, efy: 18117 }, //r1c1 of high res
			{ efx: -7969, efy: 8685 }, //r1c2 of high res
			{ efx: -3855, efy: 5815 }, //r1c3 of high res
			{ efx: -1920, efy: 5001 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -10000, efy: 17144 }, //r2c1 of high res
			{ efx: -10000, efy: 9594 }, //r2c2 of high res
			{ efx: -7253, efy: 6488 }, //r2c3 of high res
			{ efx: -3970, efy: 5079 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -10000, efy: 13962 }, //r3c1 of high res
			{ efx: -9941, efy: 8643 }, //r3c2 of high res
			{ efx: -9267, efy: 6367 }, //r3c3 of high res
			{ efx: -6019, efy: 5103 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -10000, efy: 17051 }, //r4c1 of high res
			{ efx: -10000, efy: 7823 }, //r4c2 of high res
			{ efx: -9302, efy: 5864 }, //r4c3 of high res
			{ efx: -6899, efy: 5001 }, //r4c4 of high res
		], //row: 4
	],
	r1c15: [
		[
			{ efx: -804, efy: 5001 }, //r1c1 of high res
			{ efx: -320, efy: 5001 }, //r1c2 of high res
			{ efx: -140, efy: 5001 }, //r1c3 of high res
			{ efx: -112, efy: 5001 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -1499, efy: 5002 }, //r2c1 of high res
			{ efx: -846, efy: 5001 }, //r2c2 of high res
			{ efx: -425, efy: 5001 }, //r2c3 of high res
			{ efx: -195, efy: 5001 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -2572, efy: 5001 }, //r3c1 of high res
			{ efx: -1401, efy: 5001 }, //r3c2 of high res
			{ efx: -689, efy: 5001 }, //r3c3 of high res
			{ efx: -277, efy: 5001 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -3561, efy: 5001 }, //r4c1 of high res
			{ efx: -2160, efy: 5001 }, //r4c2 of high res
			{ efx: -1095, efy: 5001 }, //r4c3 of high res
			{ efx: -355, efy: 5001 }, //r4c4 of high res
		], //row: 4
	],
	r1c16: [
		[
			{ efx: -62, efy: 5001 }, //r1c1 of high res
			{ efx: -41, efy: 5001 }, //r1c2 of high res
			{ efx: -35, efy: 5002 }, //r1c3 of high res
			{ efx: -24, efy: 5001 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -129, efy: 5001 }, //r2c1 of high res
			{ efx: -85, efy: 5001 }, //r2c2 of high res
			{ efx: -60, efy: 5001 }, //r2c3 of high res
			{ efx: -44, efy: 5001 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -187, efy: 5001 }, //r3c1 of high res
			{ efx: -126, efy: 5001 }, //r3c2 of high res
			{ efx: -82, efy: 5001 }, //r3c3 of high res
			{ efx: -62, efy: 5001 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -248, efy: 5001 }, //r4c1 of high res
			{ efx: -164, efy: 5001 }, //r4c2 of high res
			{ efx: -103, efy: 5001 }, //r4c3 of high res
			{ efx: -80, efy: 5001 }, //r4c4 of high res
		], //row: 4
	],
	r2c1: [
		[
			{ efx: -192, efy: -233 }, //r1c1 of high res
			{ efx: -217, efy: -260 }, //r1c2 of high res
			{ efx: -268, efy: -275 }, //r1c3 of high res
			{ efx: -319, efy: -299 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -209, efy: -202 }, //r2c1 of high res
			{ efx: -240, efy: -223 }, //r2c2 of high res
			{ efx: -281, efy: -231 }, //r2c3 of high res
			{ efx: -331, efy: -245 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -220, efy: -169 }, //r3c1 of high res
			{ efx: -250, efy: -187 }, //r3c2 of high res
			{ efx: -289, efy: -186 }, //r3c3 of high res
			{ efx: -332, efy: -192 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -228, efy: -132 }, //r4c1 of high res
			{ efx: -258, efy: -150 }, //r4c2 of high res
			{ efx: -289, efy: -140 }, //r4c3 of high res
			{ efx: -330, efy: -140 }, //r4c4 of high res
		], //row: 4
	],
	r2c2: [
		[
			{ efx: -372, efy: -336 }, //r1c1 of high res
			{ efx: -461, efy: -328 }, //r1c2 of high res
			{ efx: -576, efy: -333 }, //r1c3 of high res
			{ efx: -726, efy: -363 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -392, efy: -266 }, //r2c1 of high res
			{ efx: -453, efy: -252 }, //r2c2 of high res
			{ efx: -541, efy: -239 }, //r2c3 of high res
			{ efx: -661, efy: -232 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -385, efy: -208 }, //r3c1 of high res
			{ efx: -433, efy: -179 }, //r3c2 of high res
			{ efx: -497, efy: -155 }, //r3c3 of high res
			{ efx: -595, efy: -144 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -377, efy: -148 }, //r4c1 of high res
			{ efx: -408, efy: -116 }, //r4c2 of high res
			{ efx: -455, efy: -83 }, //r4c3 of high res
			{ efx: -520, efy: -55 }, //r4c4 of high res
		], //row: 4
	],
	r2c3: [
		[
			{ efx: -816, efy: -194 }, //r1c1 of high res
			{ efx: -929, efy: 2663 }, //r1c2 of high res
			{ efx: -1160, efy: 4155 }, //r1c3 of high res
			{ efx: -1597, efy: 5001 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -661, efy: -96 }, //r2c1 of high res
			{ efx: -718, efy: 5001 }, //r2c2 of high res
			{ efx: -887, efy: 5001 }, //r2c3 of high res
			{ efx: 307, efy: 5001 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -491, efy: 2114 }, //r3c1 of high res
			{ efx: -438, efy: 5001 }, //r3c2 of high res
			{ efx: -537, efy: 5001 }, //r3c3 of high res
			{ efx: 1598, efy: 5001 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -347, efy: 5001 }, //r4c1 of high res
			{ efx: -207, efy: 5001 }, //r4c2 of high res
			{ efx: -150, efy: 5002 }, //r4c3 of high res
			{ efx: 2364, efy: 5001 }, //r4c4 of high res
		], //row: 4
	],
	r2c4: [
		[
			{ efx: -198, efy: 5001 }, //r1c1 of high res
			{ efx: -307, efy: 5001 }, //r1c2 of high res
			{ efx: 1122, efy: 7006 }, //r1c3 of high res
			{ efx: 2782, efy: 11794 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: 1696, efy: 5001 }, //r2c1 of high res
			{ efx: 3029, efy: 5001 }, //r2c2 of high res
			{ efx: 4849, efy: 7026 }, //r2c3 of high res
			{ efx: 6356, efy: 12166 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: 3702, efy: 5001 }, //r3c1 of high res
			{ efx: 5101, efy: 5001 }, //r3c2 of high res
			{ efx: 8588, efy: 6696 }, //r3c3 of high res
			{ efx: 9876, efy: 11021 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: 5051, efy: 5001 }, //r4c1 of high res
			{ efx: 7240, efy: 5001 }, //r4c2 of high res
			{ efx: 9910, efy: 6366 }, //r4c3 of high res
			{ efx: 10000, efy: 9751 }, //r4c4 of high res
		], //row: 4
	],
	r2c5: [
		[
			{ efx: -5206, efy: 20981 }, //r1c1 of high res
			{ efx: -5392, efy: 27142 }, //r1c2 of high res
			{ efx: -6245, efy: 30977 }, //r1c3 of high res
			{ efx: -7267, efy: 35641 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: 568, efy: 19740 }, //r2c1 of high res
			{ efx: -2052, efy: 24394 }, //r2c2 of high res
			{ efx: -3008, efy: 28173 }, //r2c3 of high res
			{ efx: -3957, efy: 32132 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: 5363, efy: 17165 }, //r3c1 of high res
			{ efx: 1840, efy: 21617 }, //r3c2 of high res
			{ efx: 212, efy: 24909 }, //r3c3 of high res
			{ efx: -744, efy: 28683 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: 8624, efy: 15035 }, //r4c1 of high res
			{ efx: 5967, efy: 18983 }, //r4c2 of high res
			{ efx: 3733, efy: 22099 }, //r4c3 of high res
			{ efx: 2356, efy: 25079 }, //r4c4 of high res
		], //row: 4
	],
	r2c6: [
		[
			{ efx: -5715, efy: 38567 }, //r1c1 of high res
			{ efx: -5928, efy: 40579 }, //r1c2 of high res
			{ efx: -6241, efy: 42579 }, //r1c3 of high res
			{ efx: -5957, efy: 43193 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -4301, efy: 34878 }, //r2c1 of high res
			{ efx: -4747, efy: 36909 }, //r2c2 of high res
			{ efx: -5288, efy: 39012 }, //r2c3 of high res
			{ efx: -5715, efy: 40001 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -2116, efy: 31164 }, //r3c1 of high res
			{ efx: -3380, efy: 33098 }, //r3c2 of high res
			{ efx: -3841, efy: 35140 }, //r3c3 of high res
			{ efx: -4811, efy: 36421 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: 694, efy: 27542 }, //r4c1 of high res
			{ efx: -1168, efy: 29537 }, //r4c2 of high res
			{ efx: -2306, efy: 31287 }, //r4c3 of high res
			{ efx: -3411, efy: 32587 }, //r4c4 of high res
		], //row: 4
	],
	r2c7: [
		[
			{ efx: -6474, efy: 43737 }, //r1c1 of high res
			{ efx: -7078, efy: 44463 }, //r1c2 of high res
			{ efx: -7649, efy: 44320 }, //r1c3 of high res
			{ efx: -8665, efy: 44127 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -6327, efy: 40596 }, //r2c1 of high res
			{ efx: -7101, efy: 41341 }, //r2c2 of high res
			{ efx: -7973, efy: 41519 }, //r2c3 of high res
			{ efx: -9000, efy: 41393 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -5933, efy: 37228 }, //r3c1 of high res
			{ efx: -6594, efy: 37868 }, //r3c2 of high res
			{ efx: -7729, efy: 38272 }, //r3c3 of high res
			{ efx: -9068, efy: 38462 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -4833, efy: 33569 }, //r4c1 of high res
			{ efx: -5908, efy: 34286 }, //r4c2 of high res
			{ efx: -7110, efy: 34736 }, //r4c3 of high res
			{ efx: -8659, efy: 35103 }, //r4c4 of high res
		], //row: 4
	],
	r2c8: [
		[
			{ efx: -9643, efy: 44200 }, //r1c1 of high res
			{ efx: -9990, efy: 43556 }, //r1c2 of high res
			{ efx: -10000, efy: 42749 }, //r1c3 of high res
			{ efx: -10000, efy: 42252 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -9822, efy: 41433 }, //r2c1 of high res
			{ efx: -10000, efy: 41109 }, //r2c2 of high res
			{ efx: -10000, efy: 40438 }, //r2c3 of high res
			{ efx: -10000, efy: 39879 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -9766, efy: 38403 }, //r3c1 of high res
			{ efx: -10000, efy: 38270 }, //r3c2 of high res
			{ efx: -10000, efy: 38023 }, //r3c3 of high res
			{ efx: -10000, efy: 37404 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -9908, efy: 35240 }, //r4c1 of high res
			{ efx: -10000, efy: 35197 }, //r4c2 of high res
			{ efx: -10000, efy: 35143 }, //r4c3 of high res
			{ efx: -10000, efy: 34843 }, //r4c4 of high res
		], //row: 4
	],
	r2c9: [
		[
			{ efx: -10000, efy: 41020 }, //r1c1 of high res
			{ efx: -10000, efy: 39496 }, //r1c2 of high res
			{ efx: -10000, efy: 38338 }, //r1c3 of high res
			{ efx: -10000, efy: 36311 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -10000, efy: 39041 }, //r2c1 of high res
			{ efx: -10000, efy: 37809 }, //r2c2 of high res
			{ efx: -10000, efy: 36555 }, //r2c3 of high res
			{ efx: -10000, efy: 35077 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -10000, efy: 36794 }, //r3c1 of high res
			{ efx: -10000, efy: 36140 }, //r3c2 of high res
			{ efx: -10000, efy: 34897 }, //r3c3 of high res
			{ efx: -9999, efy: 33773 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -10000, efy: 34384 }, //r4c1 of high res
			{ efx: -10000, efy: 33957 }, //r4c2 of high res
			{ efx: -10000, efy: 33238 }, //r4c3 of high res
			{ efx: -10000, efy: 32358 }, //r4c4 of high res
		], //row: 4
	],
	r2c10: [
		[
			{ efx: -10000, efy: 33873 }, //r1c1 of high res
			{ efx: -10000, efy: 31928 }, //r1c2 of high res
			{ efx: -9999, efy: 28813 }, //r1c3 of high res
			{ efx: -10000, efy: 25291 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -10000, efy: 33237 }, //r2c1 of high res
			{ efx: -10000, efy: 31150 }, //r2c2 of high res
			{ efx: -10000, efy: 28886 }, //r2c3 of high res
			{ efx: -10000, efy: 26511 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -10000, efy: 32759 }, //r3c1 of high res
			{ efx: -10000, efy: 30779 }, //r3c2 of high res
			{ efx: -10000, efy: 29139 }, //r3c3 of high res
			{ efx: -10000, efy: 27997 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -10000, efy: 31602 }, //r4c1 of high res
			{ efx: -10000, efy: 30496 }, //r4c2 of high res
			{ efx: -10000, efy: 29240 }, //r4c3 of high res
			{ efx: -10000, efy: 28362 }, //r4c4 of high res
		], //row: 4
	],
	r2c11: [
		[
			{ efx: -10000, efy: 22602 }, //r1c1 of high res
			{ efx: -10000, efy: 18229 }, //r1c2 of high res
			{ efx: -10000, efy: 14060 }, //r1c3 of high res
			{ efx: -10000, efy: 11724 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -10000, efy: 23686 }, //r2c1 of high res
			{ efx: -10000, efy: 20712 }, //r2c2 of high res
			{ efx: -9999, efy: 18475 }, //r2c3 of high res
			{ efx: -10000, efy: 16184 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -10000, efy: 25360 }, //r3c1 of high res
			{ efx: -10000, efy: 23439 }, //r3c2 of high res
			{ efx: -10000, efy: 22828 }, //r3c3 of high res
			{ efx: -10000, efy: 20651 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -10000, efy: 27099 }, //r4c1 of high res
			{ efx: -10000, efy: 25735 }, //r4c2 of high res
			{ efx: -10000, efy: 25359 }, //r4c3 of high res
			{ efx: -10000, efy: 24666 }, //r4c4 of high res
		], //row: 4
	],
	r2c12: [
		[
			{ efx: -10000, efy: 8213 }, //r1c1 of high res
			{ efx: -10000, efy: 6227 }, //r1c2 of high res
			{ efx: -10000, efy: 6470 }, //r1c3 of high res
			{ efx: -10000, efy: 13178 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -10000, efy: 14126 }, //r2c1 of high res
			{ efx: -10000, efy: 13564 }, //r2c2 of high res
			{ efx: -10000, efy: 13822 }, //r2c3 of high res
			{ efx: -10000, efy: 16623 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -10000, efy: 19376 }, //r3c1 of high res
			{ efx: -9999, efy: 20302 }, //r3c2 of high res
			{ efx: -10000, efy: 20440 }, //r3c3 of high res
			{ efx: -10000, efy: 21071 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -10000, efy: 23962 }, //r4c1 of high res
			{ efx: -10000, efy: 24966 }, //r4c2 of high res
			{ efx: -10000, efy: 25865 }, //r4c3 of high res
			{ efx: -10000, efy: 26853 }, //r4c4 of high res
		], //row: 4
	],
	r2c13: [
		[
			{ efx: -10000, efy: 22073 }, //r1c1 of high res
			{ efx: -10000, efy: 21487 }, //r1c2 of high res
			{ efx: -10000, efy: 21551 }, //r1c3 of high res
			{ efx: -10000, efy: 22270 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -10000, efy: 22615 }, //r2c1 of high res
			{ efx: -10000, efy: 22429 }, //r2c2 of high res
			{ efx: -10000, efy: 21181 }, //r2c3 of high res
			{ efx: -10000, efy: 21877 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -10000, efy: 25466 }, //r3c1 of high res
			{ efx: -10000, efy: 25544 }, //r3c2 of high res
			{ efx: -10000, efy: 24697 }, //r3c3 of high res
			{ efx: -10000, efy: 23163 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -9999, efy: 29264 }, //r4c1 of high res
			{ efx: -10000, efy: 29834 }, //r4c2 of high res
			{ efx: -9999, efy: 29627 }, //r4c3 of high res
			{ efx: -10000, efy: 28773 }, //r4c4 of high res
		], //row: 4
	],
	r2c14: [
		[
			{ efx: -10000, efy: 20563 }, //r1c1 of high res
			{ efx: -10000, efy: 11013 }, //r1c2 of high res
			{ efx: -10000, efy: 6544 }, //r1c3 of high res
			{ efx: -8518, efy: 5001 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -10000, efy: 19773 }, //r2c1 of high res
			{ efx: -10000, efy: 14565 }, //r2c2 of high res
			{ efx: -10000, efy: 10026 }, //r2c3 of high res
			{ efx: -9602, efy: 6966 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -10000, efy: 21491 }, //r3c1 of high res
			{ efx: -10000, efy: 19135 }, //r3c2 of high res
			{ efx: -10000, efy: 13655 }, //r3c3 of high res
			{ efx: -9552, efy: 9502 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -10000, efy: 26980 }, //r4c1 of high res
			{ efx: -10000, efy: 24449 }, //r4c2 of high res
			{ efx: -10000, efy: 19965 }, //r4c3 of high res
			{ efx: -10000, efy: 14056 }, //r4c4 of high res
		], //row: 4
	],
	r2c15: [
		[
			{ efx: -5076, efy: 5001 }, //r1c1 of high res
			{ efx: -2970, efy: 5001 }, //r1c2 of high res
			{ efx: -1467, efy: 5001 }, //r1c3 of high res
			{ efx: -432, efy: 5001 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -6516, efy: 5001 }, //r2c1 of high res
			{ efx: -4079, efy: 5001 }, //r2c2 of high res
			{ efx: -2080, efy: 5001 }, //r2c3 of high res
			{ efx: -507, efy: 5001 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -9340, efy: 5160 }, //r3c1 of high res
			{ efx: -5310, efy: 5171 }, //r3c2 of high res
			{ efx: -2751, efy: 5001 }, //r3c3 of high res
			{ efx: -838, efy: 5001 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -10000, efy: 8267 }, //r4c1 of high res
			{ efx: -7509, efy: 8096 }, //r4c2 of high res
			{ efx: -4365, efy: 6599 }, //r4c3 of high res
			{ efx: -1203, efy: 5001 }, //r4c4 of high res
		], //row: 4
	],
	r2c16: [
		[
			{ efx: -302, efy: 5001 }, //r1c1 of high res
			{ efx: -197, efy: 5001 }, //r1c2 of high res
			{ efx: -114, efy: 5002 }, //r1c3 of high res
			{ efx: -93, efy: 5001 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -368, efy: 5001 }, //r2c1 of high res
			{ efx: -240, efy: 5001 }, //r2c2 of high res
			{ efx: -124, efy: 5001 }, //r2c3 of high res
			{ efx: -105, efy: 5001 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -499, efy: 5001 }, //r3c1 of high res
			{ efx: -296, efy: 5001 }, //r3c2 of high res
			{ efx: -171, efy: 5001 }, //r3c3 of high res
			{ efx: -127, efy: 5001 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -908, efy: 5001 }, //r4c1 of high res
			{ efx: -555, efy: 5001 }, //r4c2 of high res
			{ efx: -223, efy: 5001 }, //r4c3 of high res
			{ efx: -219, efy: 5001 }, //r4c4 of high res
		], //row: 4
	],
	r3c1: [
		[
			{ efx: -231, efy: -84 }, //r1c1 of high res
			{ efx: -259, efy: -94 }, //r1c2 of high res
			{ efx: -287, efy: -87 }, //r1c3 of high res
			{ efx: -320, efy: -81 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -232, efy: 1236 }, //r2c1 of high res
			{ efx: -260, efy: -36 }, //r2c2 of high res
			{ efx: -279, efy: 2959 }, //r2c3 of high res
			{ efx: -308, efy: 1322 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -230, efy: 3856 }, //r3c1 of high res
			{ efx: -254, efy: 5001 }, //r3c2 of high res
			{ efx: -267, efy: 5001 }, //r3c3 of high res
			{ efx: -290, efy: 3766 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -217, efy: 5078 }, //r4c1 of high res
			{ efx: -247, efy: 5001 }, //r4c2 of high res
			{ efx: -233, efy: 5001 }, //r4c3 of high res
			{ efx: -251, efy: 5048 }, //r4c4 of high res
		], //row: 4
	],
	r3c2: [
		[
			{ efx: -362, efy: -82 }, //r1c1 of high res
			{ efx: -377, efy: -49 }, //r1c2 of high res
			{ efx: -405, efy: 3947 }, //r1c3 of high res
			{ efx: -457, efy: 4496 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -344, efy: -14 }, //r2c1 of high res
			{ efx: -336, efy: 3056 }, //r2c2 of high res
			{ efx: -352, efy: 5001 }, //r2c3 of high res
			{ efx: -389, efy: 5001 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -319, efy: 5001 }, //r3c1 of high res
			{ efx: -287, efy: 5001 }, //r3c2 of high res
			{ efx: -280, efy: 5001 }, //r3c3 of high res
			{ efx: -299, efy: 5001 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -291, efy: 5001 }, //r4c1 of high res
			{ efx: -180, efy: 5001 }, //r4c2 of high res
			{ efx: -161, efy: 5001 }, //r4c3 of high res
			{ efx: -198, efy: 5001 }, //r4c4 of high res
		], //row: 4
	],
	r3c3: [
		[
			{ efx: -190, efy: 5001 }, //r1c1 of high res
			{ efx: 42, efy: 5001 }, //r1c2 of high res
			{ efx: 153, efy: 5001 }, //r1c3 of high res
			{ efx: 3201, efy: 5001 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: 27, efy: 5001 }, //r2c1 of high res
			{ efx: 331, efy: 5001 }, //r2c2 of high res
			{ efx: 487, efy: 5001 }, //r2c3 of high res
			{ efx: 3866, efy: 5001 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: 291, efy: 5001 }, //r3c1 of high res
			{ efx: 776, efy: 5001 }, //r3c2 of high res
			{ efx: 1040, efy: 5001 }, //r3c3 of high res
			{ efx: 4711, efy: 5001 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: 675, efy: 5001 }, //r4c1 of high res
			{ efx: 1295, efy: 5262 }, //r4c2 of high res
			{ efx: 1678, efy: 5001 }, //r4c3 of high res
			{ efx: 5250, efy: 5151 }, //r4c4 of high res
		], //row: 4
	],
	r3c4: [
		[
			{ efx: 6426, efy: 5001 }, //r1c1 of high res
			{ efx: 8910, efy: 5001 }, //r1c2 of high res
			{ efx: 9943, efy: 5837 }, //r1c3 of high res
			{ efx: 10000, efy: 9415 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: 7543, efy: 5001 }, //r2c1 of high res
			{ efx: 10000, efy: 5001 }, //r2c2 of high res
			{ efx: 10000, efy: 6079 }, //r2c3 of high res
			{ efx: 10000, efy: 9178 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: 8778, efy: 5001 }, //r3c1 of high res
			{ efx: 9799, efy: 5001 }, //r3c2 of high res
			{ efx: 10000, efy: 6530 }, //r3c3 of high res
			{ efx: 10000, efy: 9839 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: 8973, efy: 5908 }, //r4c1 of high res
			{ efx: 10000, efy: 6433 }, //r4c2 of high res
			{ efx: 10000, efy: 8642 }, //r4c3 of high res
			{ efx: 10000, efy: 10643 }, //r4c4 of high res
		], //row: 4
	],
	r3c5: [
		[
			{ efx: 10000, efy: 13984 }, //r1c1 of high res
			{ efx: 8613, efy: 17060 }, //r1c2 of high res
			{ efx: 6901, efy: 19616 }, //r1c3 of high res
			{ efx: 5106, efy: 22662 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: 10000, efy: 13253 }, //r2c1 of high res
			{ efx: 9303, efy: 15928 }, //r2c2 of high res
			{ efx: 8409, efy: 18023 }, //r2c3 of high res
			{ efx: 7301, efy: 20364 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: 10000, efy: 13189 }, //r3c1 of high res
			{ efx: 10000, efy: 15055 }, //r3c2 of high res
			{ efx: 9567, efy: 16594 }, //r3c3 of high res
			{ efx: 8589, efy: 18807 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: 10000, efy: 13413 }, //r4c1 of high res
			{ efx: 10000, efy: 14716 }, //r4c2 of high res
			{ efx: 10000, efy: 15721 }, //r4c3 of high res
			{ efx: 9968, efy: 17112 }, //r4c4 of high res
		], //row: 4
	],
	r3c6: [
		[
			{ efx: 2961, efy: 24571 }, //r1c1 of high res
			{ efx: 867, efy: 26178 }, //r1c2 of high res
			{ efx: -589, efy: 28036 }, //r1c3 of high res
			{ efx: -2238, efy: 29212 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: 4941, efy: 22169 }, //r2c1 of high res
			{ efx: 2553, efy: 23512 }, //r2c2 of high res
			{ efx: 666, efy: 24986 }, //r2c3 of high res
			{ efx: -1110, efy: 26142 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: 6511, efy: 19967 }, //r3c1 of high res
			{ efx: 3970, efy: 20964 }, //r3c2 of high res
			{ efx: 1837, efy: 22373 }, //r3c3 of high res
			{ efx: -178, efy: 23239 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: 7706, efy: 18071 }, //r4c1 of high res
			{ efx: 5074, efy: 18756 }, //r4c2 of high res
			{ efx: 2719, efy: 19686 }, //r4c3 of high res
			{ efx: 636, efy: 20490 }, //r4c4 of high res
		], //row: 4
	],
	r3c7: [
		[
			{ efx: -3841, efy: 30048 }, //r1c1 of high res
			{ efx: -5050, efy: 30867 }, //r1c2 of high res
			{ efx: -6588, efy: 31470 }, //r1c3 of high res
			{ efx: -8266, efy: 31878 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -2899, efy: 26932 }, //r2c1 of high res
			{ efx: -4437, efy: 27678 }, //r2c2 of high res
			{ efx: -6026, efy: 28330 }, //r2c3 of high res
			{ efx: -7781, efy: 28835 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -2032, efy: 23906 }, //r3c1 of high res
			{ efx: -3687, efy: 24673 }, //r3c2 of high res
			{ efx: -5468, efy: 25327 }, //r3c3 of high res
			{ efx: -7275, efy: 25873 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -1267, efy: 21054 }, //r4c1 of high res
			{ efx: -3079, efy: 21697 }, //r4c2 of high res
			{ efx: -4845, efy: 22391 }, //r4c3 of high res
			{ efx: -6676, efy: 22977 }, //r4c4 of high res
		], //row: 4
	],
	r3c8: [
		[
			{ efx: -9450, efy: 32093 }, //r1c1 of high res
			{ efx: -10000, efy: 32309 }, //r1c2 of high res
			{ efx: -10000, efy: 32443 }, //r1c3 of high res
			{ efx: -10000, efy: 32222 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -9480, efy: 29158 }, //r2c1 of high res
			{ efx: -9999, efy: 29474 }, //r2c2 of high res
			{ efx: -10000, efy: 29798 }, //r2c3 of high res
			{ efx: -10000, efy: 29831 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -8998, efy: 26277 }, //r3c1 of high res
			{ efx: -9856, efy: 26779 }, //r3c2 of high res
			{ efx: -10000, efy: 27256 }, //r3c3 of high res
			{ efx: -10000, efy: 27412 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -8536, efy: 23497 }, //r4c1 of high res
			{ efx: -9833, efy: 24113 }, //r4c2 of high res
			{ efx: -10000, efy: 24719 }, //r4c3 of high res
			{ efx: -10000, efy: 25152 }, //r4c4 of high res
		], //row: 4
	],
	r3c9: [
		[
			{ efx: -10000, efy: 32126 }, //r1c1 of high res
			{ efx: -10000, efy: 32046 }, //r1c2 of high res
			{ efx: -10000, efy: 31415 }, //r1c3 of high res
			{ efx: -10000, efy: 31046 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -10000, efy: 29877 }, //r2c1 of high res
			{ efx: -10000, efy: 30059 }, //r2c2 of high res
			{ efx: -10000, efy: 29870 }, //r2c3 of high res
			{ efx: -10000, efy: 29707 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -10000, efy: 27786 }, //r3c1 of high res
			{ efx: -10000, efy: 28230 }, //r3c2 of high res
			{ efx: -10000, efy: 28186 }, //r3c3 of high res
			{ efx: -10000, efy: 28493 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -10000, efy: 25694 }, //r4c1 of high res
			{ efx: -10000, efy: 26327 }, //r4c2 of high res
			{ efx: -9999, efy: 26714 }, //r4c3 of high res
			{ efx: -10000, efy: 27235 }, //r4c4 of high res
		], //row: 4
	],
	r3c10: [
		[
			{ efx: -10000, efy: 30864 }, //r1c1 of high res
			{ efx: -10000, efy: 29857 }, //r1c2 of high res
			{ efx: -10000, efy: 29313 }, //r1c3 of high res
			{ efx: -10000, efy: 29317 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -10000, efy: 29835 }, //r2c1 of high res
			{ efx: -10000, efy: 29544 }, //r2c2 of high res
			{ efx: -10000, efy: 29296 }, //r2c3 of high res
			{ efx: -10000, efy: 29623 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -10000, efy: 29037 }, //r3c1 of high res
			{ efx: -10000, efy: 28900 }, //r3c2 of high res
			{ efx: -10000, efy: 29290 }, //r3c3 of high res
			{ efx: -10000, efy: 30235 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -10000, efy: 28010 }, //r4c1 of high res
			{ efx: -10000, efy: 28505 }, //r4c2 of high res
			{ efx: -10000, efy: 29162 }, //r4c3 of high res
			{ efx: -10000, efy: 30349 }, //r4c4 of high res
		], //row: 4
	],
	r3c11: [
		[
			{ efx: -10000, efy: 28159 }, //r1c1 of high res
			{ efx: -10000, efy: 27703 }, //r1c2 of high res
			{ efx: -10000, efy: 28441 }, //r1c3 of high res
			{ efx: -9999, efy: 27840 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -10000, efy: 29525 }, //r2c1 of high res
			{ efx: -10000, efy: 29487 }, //r2c2 of high res
			{ efx: -10000, efy: 30489 }, //r2c3 of high res
			{ efx: -10000, efy: 31137 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -10000, efy: 30282 }, //r3c1 of high res
			{ efx: -10000, efy: 31049 }, //r3c2 of high res
			{ efx: -10000, efy: 32886 }, //r3c3 of high res
			{ efx: -10000, efy: 33644 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -10000, efy: 31278 }, //r4c1 of high res
			{ efx: -10000, efy: 32388 }, //r4c2 of high res
			{ efx: -10000, efy: 34452 }, //r4c3 of high res
			{ efx: -10000, efy: 36294 }, //r4c4 of high res
		], //row: 4
	],
	r3c12: [
		[
			{ efx: -10000, efy: 27967 }, //r1c1 of high res
			{ efx: -10000, efy: 29781 }, //r1c2 of high res
			{ efx: -10000, efy: 30722 }, //r1c3 of high res
			{ efx: -10000, efy: 32150 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -10000, efy: 31780 }, //r2c1 of high res
			{ efx: -10000, efy: 33761 }, //r2c2 of high res
			{ efx: -9999, efy: 35495 }, //r2c3 of high res
			{ efx: -10000, efy: 37167 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -10000, efy: 35135 }, //r3c1 of high res
			{ efx: -9999, efy: 38083 }, //r3c2 of high res
			{ efx: -10000, efy: 39888 }, //r3c3 of high res
			{ efx: -10000, efy: 42593 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -10000, efy: 38208 }, //r4c1 of high res
			{ efx: -10000, efy: 41334 }, //r4c2 of high res
			{ efx: -10000, efy: 44285 }, //r4c3 of high res
			{ efx: -10000, efy: 47166 }, //r4c4 of high res
		], //row: 4
	],
	r3c13: [
		[
			{ efx: -10000, efy: 34264 }, //r1c1 of high res
			{ efx: -10000, efy: 35221 }, //r1c2 of high res
			{ efx: -10000, efy: 35485 }, //r1c3 of high res
			{ efx: -10000, efy: 35259 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -10000, efy: 39715 }, //r2c1 of high res
			{ efx: -10000, efy: 41329 }, //r2c2 of high res
			{ efx: -10000, efy: 42087 }, //r2c3 of high res
			{ efx: -10000, efy: 42617 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -10000, efy: 45886 }, //r3c1 of high res
			{ efx: -10000, efy: 48077 }, //r3c2 of high res
			{ efx: -10000, efy: 49106 }, //r3c3 of high res
			{ efx: -10000, efy: 49998 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -10000, efy: 50000 }, //r4c1 of high res
			{ efx: -10000, efy: 50000 }, //r4c2 of high res
			{ efx: -10000, efy: 50000 }, //r4c3 of high res
			{ efx: -10000, efy: 50000 }, //r4c4 of high res
		], //row: 4
	],
	r3c14: [
		[
			{ efx: -10000, efy: 33988 }, //r1c1 of high res
			{ efx: -10000, efy: 31826 }, //r1c2 of high res
			{ efx: -10000, efy: 27407 }, //r1c3 of high res
			{ efx: -10000, efy: 22302 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -10000, efy: 41298 }, //r2c1 of high res
			{ efx: -10000, efy: 40505 }, //r2c2 of high res
			{ efx: -10000, efy: 37253 }, //r2c3 of high res
			{ efx: -10000, efy: 32318 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -9999, efy: 48337 }, //r3c1 of high res
			{ efx: -10000, efy: 49091 }, //r3c2 of high res
			{ efx: -10000, efy: 48849 }, //r3c3 of high res
			{ efx: -9999, efy: 43800 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -10000, efy: 50000 }, //r4c1 of high res
			{ efx: -10000, efy: 50000 }, //r4c2 of high res
			{ efx: -10000, efy: 50000 }, //r4c3 of high res
			{ efx: -10000, efy: 50000 }, //r4c4 of high res
		], //row: 4
	],
	r3c15: [
		[
			{ efx: -10000, efy: 16724 }, //r1c1 of high res
			{ efx: -10000, efy: 12223 }, //r1c2 of high res
			{ efx: -6755, efy: 10093 }, //r1c3 of high res
			{ efx: -3006, efy: 7440 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -10000, efy: 26889 }, //r2c1 of high res
			{ efx: -9674, efy: 23538 }, //r2c2 of high res
			{ efx: -8042, efy: 18749 }, //r2c3 of high res
			{ efx: -5089, efy: 14081 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -10000, efy: 40335 }, //r3c1 of high res
			{ efx: -10000, efy: 36532 }, //r3c2 of high res
			{ efx: -8948, efy: 32264 }, //r3c3 of high res
			{ efx: -8636, efy: 27706 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -10000, efy: 50000 }, //r4c1 of high res
			{ efx: -10000, efy: 44590 }, //r4c2 of high res
			{ efx: -10000, efy: 43914 }, //r4c3 of high res
			{ efx: -10000, efy: 43182 }, //r4c4 of high res
		], //row: 4
	],
	r3c16: [
		[
			{ efx: -1608, efy: 5610 }, //r1c1 of high res
			{ efx: -1025, efy: 5463 }, //r1c2 of high res
			{ efx: -678, efy: 5010 }, //r1c3 of high res
			{ efx: -408, efy: 5037 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -3720, efy: 13811 }, //r2c1 of high res
			{ efx: -2313, efy: 11030 }, //r2c2 of high res
			{ efx: -1203, efy: 7831 }, //r2c3 of high res
			{ efx: -1068, efy: 10251 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -6021, efy: 24615 }, //r3c1 of high res
			{ efx: -4472, efy: 22573 }, //r3c2 of high res
			{ efx: -3080, efy: 20145 }, //r3c3 of high res
			{ efx: -2007, efy: 18341 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -7980, efy: 39170 }, //r4c1 of high res
			{ efx: -6620, efy: 35349 }, //r4c2 of high res
			{ efx: -5268, efy: 34713 }, //r4c3 of high res
			{ efx: -4024, efy: 34470 }, //r4c4 of high res
		], //row: 4
	],
	r4c1: [
		[
			{ efx: -190, efy: 5461 }, //r1c1 of high res
			{ efx: -210, efy: 5016 }, //r1c2 of high res
			{ efx: -175, efy: 5066 }, //r1c3 of high res
			{ efx: -175, efy: 5653 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -164, efy: 8670 }, //r2c1 of high res
			{ efx: -164, efy: 8659 }, //r2c2 of high res
			{ efx: -117, efy: 8930 }, //r2c3 of high res
			{ efx: -78, efy: 9000 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -166, efy: 13177 }, //r3c1 of high res
			{ efx: -163, efy: 13226 }, //r3c2 of high res
			{ efx: -44, efy: 13416 }, //r3c3 of high res
			{ efx: 1, efy: 13578 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -138, efy: 19717 }, //r4c1 of high res
			{ efx: -181, efy: 17847 }, //r4c2 of high res
			{ efx: 139, efy: 26175 }, //r4c3 of high res
			{ efx: 153, efy: 20325 }, //r4c4 of high res
		], //row: 4
	],
	r4c2: [
		[
			{ efx: -194, efy: 5052 }, //r1c1 of high res
			{ efx: -18, efy: 5119 }, //r1c2 of high res
			{ efx: 67, efy: 6138 }, //r1c3 of high res
			{ efx: 86, efy: 5138 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -73, efy: 9054 }, //r2c1 of high res
			{ efx: 159, efy: 9467 }, //r2c2 of high res
			{ efx: 349, efy: 9807 }, //r2c3 of high res
			{ efx: 435, efy: 10046 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: 36, efy: 13716 }, //r3c1 of high res
			{ efx: 400, efy: 14154 }, //r3c2 of high res
			{ efx: 627, efy: 14545 }, //r3c3 of high res
			{ efx: 803, efy: 14907 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: 144, efy: 18403 }, //r4c1 of high res
			{ efx: 818, efy: 27250 }, //r4c2 of high res
			{ efx: 1028, efy: 21465 }, //r4c3 of high res
			{ efx: 1207, efy: 19726 }, //r4c4 of high res
		], //row: 4
	],
	r4c3: [
		[
			{ efx: 1196, efy: 5932 }, //r1c1 of high res
			{ efx: 2084, efy: 7329 }, //r1c2 of high res
			{ efx: 2691, efy: 6613 }, //r1c3 of high res
			{ efx: 5879, efy: 7399 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: 1577, efy: 10840 }, //r2c1 of high res
			{ efx: 2838, efy: 11723 }, //r2c2 of high res
			{ efx: 3907, efy: 12443 }, //r2c3 of high res
			{ efx: 7171, efy: 12852 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: 1993, efy: 15909 }, //r3c1 of high res
			{ efx: 3276, efy: 16826 }, //r3c2 of high res
			{ efx: 4530, efy: 17706 }, //r3c3 of high res
			{ efx: 8425, efy: 17916 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: 2891, efy: 28898 }, //r4c1 of high res
			{ efx: 3819, efy: 23737 }, //r4c2 of high res
			{ efx: 5034, efy: 22833 }, //r4c3 of high res
			{ efx: 8749, efy: 29331 }, //r4c4 of high res
		], //row: 4
	],
	r4c4: [
		[
			{ efx: 9373, efy: 9129 }, //r1c1 of high res
			{ efx: 9876, efy: 10415 }, //r1c2 of high res
			{ efx: 10000, efy: 11168 }, //r1c3 of high res
			{ efx: 10000, efy: 13421 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: 9816, efy: 13846 }, //r2c1 of high res
			{ efx: 10000, efy: 15279 }, //r2c2 of high res
			{ efx: 10000, efy: 15936 }, //r2c3 of high res
			{ efx: 10000, efy: 16496 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: 10000, efy: 18537 }, //r3c1 of high res
			{ efx: 10000, efy: 19602 }, //r3c2 of high res
			{ efx: 10000, efy: 20142 }, //r3c3 of high res
			{ efx: 10000, efy: 19554 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: 9838, efy: 24389 }, //r4c1 of high res
			{ efx: 10000, efy: 23467 }, //r4c2 of high res
			{ efx: 10000, efy: 22953 }, //r4c3 of high res
			{ efx: 10000, efy: 21075 }, //r4c4 of high res
		], //row: 4
	],
	r4c5: [
		[
			{ efx: 10000, efy: 14197 }, //r1c1 of high res
			{ efx: 10000, efy: 14542 }, //r1c2 of high res
			{ efx: 10000, efy: 14828 }, //r1c3 of high res
			{ efx: 10000, efy: 15996 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: 10000, efy: 15513 }, //r2c1 of high res
			{ efx: 10000, efy: 14840 }, //r2c2 of high res
			{ efx: 10000, efy: 14396 }, //r2c3 of high res
			{ efx: 10000, efy: 14594 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: 10000, efy: 16689 }, //r3c1 of high res
			{ efx: 10000, efy: 14849 }, //r3c2 of high res
			{ efx: 10000, efy: 13793 }, //r3c3 of high res
			{ efx: 10000, efy: 13540 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: 10000, efy: 17214 }, //r4c1 of high res
			{ efx: 10000, efy: 14929 }, //r4c2 of high res
			{ efx: 10000, efy: 13065 }, //r4c3 of high res
			{ efx: 9774, efy: 11970 }, //r4c4 of high res
		], //row: 4
	],
	r4c6: [
		[
			{ efx: 8450, efy: 16246 }, //r1c1 of high res
			{ efx: 5873, efy: 16512 }, //r1c2 of high res
			{ efx: 3374, efy: 17316 }, //r1c3 of high res
			{ efx: 1296, efy: 17775 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: 8793, efy: 14611 }, //r2c1 of high res
			{ efx: 6273, efy: 14501 }, //r2c2 of high res
			{ efx: 3784, efy: 14730 }, //r2c3 of high res
			{ efx: 1723, efy: 15120 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: 8840, efy: 12841 }, //r3c1 of high res
			{ efx: 6363, efy: 12381 }, //r3c2 of high res
			{ efx: 3828, efy: 12417 }, //r3c3 of high res
			{ efx: 2023, efy: 12430 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: 8067, efy: 11209 }, //r4c1 of high res
			{ efx: 5978, efy: 10370 }, //r4c2 of high res
			{ efx: 3718, efy: 9807 }, //r4c3 of high res
			{ efx: 1960, efy: 9841 }, //r4c4 of high res
		], //row: 4
	],
	r4c7: [
		[
			{ efx: -573, efy: 18201 }, //r1c1 of high res
			{ efx: -2430, efy: 18804 }, //r1c2 of high res
			{ efx: -4236, efy: 19459 }, //r1c3 of high res
			{ efx: -6019, efy: 20122 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -56, efy: 15425 }, //r2c1 of high res
			{ efx: -1863, efy: 15840 }, //r2c2 of high res
			{ efx: -3605, efy: 16517 }, //r2c3 of high res
			{ efx: -5330, efy: 17233 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: 411, efy: 12609 }, //r3c1 of high res
			{ efx: -1383, efy: 12976 }, //r3c2 of high res
			{ efx: -2965, efy: 13582 }, //r3c3 of high res
			{ efx: -4537, efy: 14346 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: 633, efy: 9933 }, //r4c1 of high res
			{ efx: -879, efy: 10005 }, //r4c2 of high res
			{ efx: -2408, efy: 10645 }, //r4c3 of high res
			{ efx: -3796, efy: 11484 }, //r4c4 of high res
		], //row: 4
	],
	r4c8: [
		[
			{ efx: -7864, efy: 20674 }, //r1c1 of high res
			{ efx: -9454, efy: 21436 }, //r1c2 of high res
			{ efx: -10000, efy: 22246 }, //r1c3 of high res
			{ efx: -10000, efy: 22762 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -7167, efy: 17911 }, //r2c1 of high res
			{ efx: -8789, efy: 18742 }, //r2c2 of high res
			{ efx: -9717, efy: 19699 }, //r2c3 of high res
			{ efx: -9997, efy: 20521 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -6333, efy: 15038 }, //r3c1 of high res
			{ efx: -8226, efy: 16053 }, //r3c2 of high res
			{ efx: -9785, efy: 17188 }, //r3c3 of high res
			{ efx: -9972, efy: 18059 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -5381, efy: 12206 }, //r4c1 of high res
			{ efx: -7226, efy: 13257 }, //r4c2 of high res
			{ efx: -8940, efy: 14577 }, //r4c3 of high res
			{ efx: -10000, efy: 15742 }, //r4c4 of high res
		], //row: 4
	],
	r4c9: [
		[
			{ efx: -10000, efy: 23569 }, //r1c1 of high res
			{ efx: -10000, efy: 24487 }, //r1c2 of high res
			{ efx: -10000, efy: 24990 }, //r1c3 of high res
			{ efx: -10000, efy: 25889 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -10000, efy: 21417 }, //r2c1 of high res
			{ efx: -10000, efy: 22533 }, //r2c2 of high res
			{ efx: -9999, efy: 23466 }, //r2c3 of high res
			{ efx: -10000, efy: 24466 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -10000, efy: 19268 }, //r3c1 of high res
			{ efx: -9999, efy: 20609 }, //r3c2 of high res
			{ efx: -10000, efy: 21607 }, //r3c3 of high res
			{ efx: -10000, efy: 23006 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -10000, efy: 16984 }, //r4c1 of high res
			{ efx: -10000, efy: 18537 }, //r4c2 of high res
			{ efx: -10000, efy: 19940 }, //r4c3 of high res
			{ efx: -10000, efy: 21361 }, //r4c4 of high res
		], //row: 4
	],
	r4c10: [
		[
			{ efx: -10000, efy: 27045 }, //r1c1 of high res
			{ efx: -10000, efy: 27668 }, //r1c2 of high res
			{ efx: -10000, efy: 28835 }, //r1c3 of high res
			{ efx: -10000, efy: 30538 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -10000, efy: 25854 }, //r2c1 of high res
			{ efx: -10000, efy: 27049 }, //r2c2 of high res
			{ efx: -10000, efy: 28329 }, //r2c3 of high res
			{ efx: -10000, efy: 30281 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -10000, efy: 24654 }, //r3c1 of high res
			{ efx: -10000, efy: 25917 }, //r3c2 of high res
			{ efx: -10000, efy: 27689 }, //r3c3 of high res
			{ efx: -10000, efy: 29952 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -10000, efy: 23221 }, //r4c1 of high res
			{ efx: -10000, efy: 24969 }, //r4c2 of high res
			{ efx: -10000, efy: 26762 }, //r4c3 of high res
			{ efx: -10000, efy: 29217 }, //r4c4 of high res
		], //row: 4
	],
	r4c11: [
		[
			{ efx: -10000, efy: 31580 }, //r1c1 of high res
			{ efx: -10000, efy: 33345 }, //r1c2 of high res
			{ efx: -10000, efy: 36113 }, //r1c3 of high res
			{ efx: -10000, efy: 38048 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -10000, efy: 32070 }, //r2c1 of high res
			{ efx: -10000, efy: 33973 }, //r2c2 of high res
			{ efx: -10000, efy: 36974 }, //r2c3 of high res
			{ efx: -10000, efy: 39903 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -10000, efy: 31797 }, //r3c1 of high res
			{ efx: -10000, efy: 34290 }, //r3c2 of high res
			{ efx: -10000, efy: 37678 }, //r3c3 of high res
			{ efx: -10000, efy: 40631 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -10000, efy: 31645 }, //r4c1 of high res
			{ efx: -10000, efy: 34165 }, //r4c2 of high res
			{ efx: -10000, efy: 37682 }, //r4c3 of high res
			{ efx: -10000, efy: 41335 }, //r4c4 of high res
		], //row: 4
	],
	r4c12: [
		[
			{ efx: -10000, efy: 40716 }, //r1c1 of high res
			{ efx: -10000, efy: 44717 }, //r1c2 of high res
			{ efx: -10000, efy: 47737 }, //r1c3 of high res
			{ efx: -10000, efy: 49993 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -10000, efy: 42829 }, //r2c1 of high res
			{ efx: -10000, efy: 47104 }, //r2c2 of high res
			{ efx: -10000, efy: 49852 }, //r2c3 of high res
			{ efx: -10000, efy: 50000 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -10000, efy: 44352 }, //r3c1 of high res
			{ efx: -10000, efy: 49005 }, //r3c2 of high res
			{ efx: -10000, efy: 50000 }, //r3c3 of high res
			{ efx: -10000, efy: 50000 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -10000, efy: 44978 }, //r4c1 of high res
			{ efx: -10000, efy: 49674 }, //r4c2 of high res
			{ efx: -10000, efy: 50000 }, //r4c3 of high res
			{ efx: -10000, efy: 50000 }, //r4c4 of high res
		], //row: 4
	],
	r4c13: [
		[
			{ efx: -10000, efy: 50001 }, //r1c1 of high res
			{ efx: -10000, efy: 50000 }, //r1c2 of high res
			{ efx: -10000, efy: 50000 }, //r1c3 of high res
			{ efx: -10000, efy: 50000 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -10000, efy: 50000 }, //r2c1 of high res
			{ efx: -10000, efy: 50000 }, //r2c2 of high res
			{ efx: -10000, efy: 50000 }, //r2c3 of high res
			{ efx: -10000, efy: 50000 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -10000, efy: 50000 }, //r3c1 of high res
			{ efx: -10000, efy: 50000 }, //r3c2 of high res
			{ efx: -10000, efy: 50001 }, //r3c3 of high res
			{ efx: -10000, efy: 50000 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -10000, efy: 50000 }, //r4c1 of high res
			{ efx: -10000, efy: 50000 }, //r4c2 of high res
			{ efx: -10000, efy: 50000 }, //r4c3 of high res
			{ efx: -10000, efy: 50000 }, //r4c4 of high res
		], //row: 4
	],
	r4c14: [
		[
			{ efx: -10000, efy: 50000 }, //r1c1 of high res
			{ efx: -10000, efy: 50000 }, //r1c2 of high res
			{ efx: -10000, efy: 50000 }, //r1c3 of high res
			{ efx: -10000, efy: 50000 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -10000, efy: 50000 }, //r2c1 of high res
			{ efx: -10000, efy: 50000 }, //r2c2 of high res
			{ efx: -10000, efy: 50000 }, //r2c3 of high res
			{ efx: -10000, efy: 50000 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -10000, efy: 50000 }, //r3c1 of high res
			{ efx: -10000, efy: 50000 }, //r3c2 of high res
			{ efx: -10000, efy: 50000 }, //r3c3 of high res
			{ efx: -10000, efy: 50000 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -10000, efy: 50000 }, //r4c1 of high res
			{ efx: -10000, efy: 50000 }, //r4c2 of high res
			{ efx: -10000, efy: 50000 }, //r4c3 of high res
			{ efx: -10000, efy: 50000 }, //r4c4 of high res
		], //row: 4
	],
	r4c15: [
		[
			{ efx: -10000, efy: 50000 }, //r1c1 of high res
			{ efx: -10000, efy: 49984 }, //r1c2 of high res
			{ efx: -10000, efy: 49468 }, //r1c3 of high res
			{ efx: -10000, efy: 50000 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -10000, efy: 50000 }, //r2c1 of high res
			{ efx: -10000, efy: 50000 }, //r2c2 of high res
			{ efx: -10000, efy: 50000 }, //r2c3 of high res
			{ efx: -10000, efy: 50001 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -10000, efy: 50000 }, //r3c1 of high res
			{ efx: -10000, efy: 50000 }, //r3c2 of high res
			{ efx: -10000, efy: 50000 }, //r3c3 of high res
			{ efx: -10000, efy: 50000 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -10000, efy: 50000 }, //r4c1 of high res
			{ efx: -10000, efy: 50000 }, //r4c2 of high res
			{ efx: -10000, efy: 50000 }, //r4c3 of high res
			{ efx: -10000, efy: 50001 }, //r4c4 of high res
		], //row: 4
	],
	r4c16: [
		[
			{ efx: -10000, efy: 50000 }, //r1c1 of high res
			{ efx: -8701, efy: 47336 }, //r1c2 of high res
			{ efx: -7433, efy: 49813 }, //r1c3 of high res
			{ efx: -5846, efy: 49797 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -10000, efy: 50000 }, //r2c1 of high res
			{ efx: -10000, efy: 50000 }, //r2c2 of high res
			{ efx: -9574, efy: 50000 }, //r2c3 of high res
			{ efx: -7812, efy: 50000 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -10000, efy: 50000 }, //r3c1 of high res
			{ efx: -10000, efy: 50000 }, //r3c2 of high res
			{ efx: -9992, efy: 50000 }, //r3c3 of high res
			{ efx: -9449, efy: 50000 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -10000, efy: 50000 }, //r4c1 of high res
			{ efx: -10000, efy: 50000 }, //r4c2 of high res
			{ efx: -9983, efy: 50000 }, //r4c3 of high res
			{ efx: -9497, efy: 50000 }, //r4c4 of high res
		], //row: 4
	],
	r5c1: [
		[
			{ efx: 20, efy: 29127 }, //r1c1 of high res
			{ efx: 206, efy: 37406 }, //r1c2 of high res
			{ efx: 387, efy: 36376 }, //r1c3 of high res
			{ efx: 425, efy: 29767 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: 181, efy: 34697 }, //r2c1 of high res
			{ efx: 268, efy: 34949 }, //r2c2 of high res
			{ efx: 458, efy: 34664 }, //r2c3 of high res
			{ efx: 671, efy: 34850 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: 203, efy: 30751 }, //r3c1 of high res
			{ efx: 301, efy: 31132 }, //r3c2 of high res
			{ efx: 478, efy: 31033 }, //r3c3 of high res
			{ efx: 674, efy: 30827 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: 217, efy: 26443 }, //r4c1 of high res
			{ efx: 314, efy: 26480 }, //r4c2 of high res
			{ efx: 465, efy: 26420 }, //r4c3 of high res
			{ efx: 654, efy: 26387 }, //r4c4 of high res
		], //row: 4
	],
	r5c2: [
		[
			{ efx: 809, efy: 37360 }, //r1c1 of high res
			{ efx: 1263, efy: 37141 }, //r1c2 of high res
			{ efx: 1485, efy: 30709 }, //r1c3 of high res
			{ efx: 2403, efy: 37571 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: 889, efy: 35195 }, //r2c1 of high res
			{ efx: 1316, efy: 34915 }, //r2c2 of high res
			{ efx: 1820, efy: 35027 }, //r2c3 of high res
			{ efx: 2397, efy: 35476 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: 898, efy: 31225 }, //r3c1 of high res
			{ efx: 1251, efy: 31047 }, //r3c2 of high res
			{ efx: 1705, efy: 30792 }, //r3c3 of high res
			{ efx: 2245, efy: 31179 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: 867, efy: 26428 }, //r4c1 of high res
			{ efx: 1164, efy: 26261 }, //r4c2 of high res
			{ efx: 1535, efy: 26094 }, //r4c3 of high res
			{ efx: 2015, efy: 26070 }, //r4c4 of high res
		], //row: 4
	],
	r5c3: [
		[
			{ efx: 3483, efy: 37970 }, //r1c1 of high res
			{ efx: 4352, efy: 32037 }, //r1c2 of high res
			{ efx: 6696, efy: 37606 }, //r1c3 of high res
			{ efx: 8747, efy: 37066 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: 3328, efy: 35004 }, //r2c1 of high res
			{ efx: 4443, efy: 34782 }, //r2c2 of high res
			{ efx: 5967, efy: 35118 }, //r2c3 of high res
			{ efx: 7637, efy: 33261 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: 2871, efy: 30698 }, //r3c1 of high res
			{ efx: 3862, efy: 30145 }, //r3c2 of high res
			{ efx: 5106, efy: 30265 }, //r3c3 of high res
			{ efx: 5866, efy: 28948 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: 2542, efy: 25608 }, //r4c1 of high res
			{ efx: 3170, efy: 25043 }, //r4c2 of high res
			{ efx: 4159, efy: 24657 }, //r4c3 of high res
			{ efx: 4835, efy: 23458 }, //r4c4 of high res
		], //row: 4
	],
	r5c4: [
		[
			{ efx: 9757, efy: 30516 }, //r1c1 of high res
			{ efx: 10000, efy: 33369 }, //r1c2 of high res
			{ efx: 10000, efy: 26761 }, //r1c3 of high res
			{ efx: 10000, efy: 21648 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: 9309, efy: 31056 }, //r2c1 of high res
			{ efx: 10000, efy: 29471 }, //r2c2 of high res
			{ efx: 10000, efy: 24106 }, //r2c3 of high res
			{ efx: 9770, efy: 19929 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: 7252, efy: 26654 }, //r3c1 of high res
			{ efx: 9363, efy: 24578 }, //r3c2 of high res
			{ efx: 10000, efy: 22127 }, //r3c3 of high res
			{ efx: 9392, efy: 18050 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: 5482, efy: 21919 }, //r4c1 of high res
			{ efx: 6910, efy: 19841 }, //r4c2 of high res
			{ efx: 7377, efy: 17562 }, //r4c3 of high res
			{ efx: 7375, efy: 15144 }, //r4c4 of high res
		], //row: 4
	],
	r5c5: [
		[
			{ efx: 10000, efy: 17211 }, //r1c1 of high res
			{ efx: 10000, efy: 14210 }, //r1c2 of high res
			{ efx: 9929, efy: 12118 }, //r1c3 of high res
			{ efx: 8711, efy: 10585 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: 9987, efy: 16107 }, //r2c1 of high res
			{ efx: 9609, efy: 13084 }, //r2c2 of high res
			{ efx: 8612, efy: 10699 }, //r2c3 of high res
			{ efx: 7192, efy: 8668 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: 8872, efy: 14068 }, //r3c1 of high res
			{ efx: 8041, efy: 11671 }, //r3c2 of high res
			{ efx: 6890, efy: 9292 }, //r3c3 of high res
			{ efx: 5598, efy: 7025 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: 6868, efy: 11549 }, //r4c1 of high res
			{ efx: 6118, efy: 9257 }, //r4c2 of high res
			{ efx: 5301, efy: 7570 }, //r4c3 of high res
			{ efx: 4084, efy: 5562 }, //r4c4 of high res
		], //row: 4
	],
	r5c6: [
		[
			{ efx: 7267, efy: 9364 }, //r1c1 of high res
			{ efx: 5354, efy: 8465 }, //r1c2 of high res
			{ efx: 3212, efy: 7721 }, //r1c3 of high res
			{ efx: 1947, efy: 7389 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: 5841, efy: 7503 }, //r2c1 of high res
			{ efx: 4511, efy: 6580 }, //r2c2 of high res
			{ efx: 2741, efy: 5545 }, //r2c3 of high res
			{ efx: 1530, efy: 5661 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: 4722, efy: 5848 }, //r3c1 of high res
			{ efx: 3550, efy: 5224 }, //r3c2 of high res
			{ efx: 2047, efy: 5001 }, //r3c3 of high res
			{ efx: 1293, efy: 5001 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: 3305, efy: 5002 }, //r4c1 of high res
			{ efx: 2729, efy: 5001 }, //r4c2 of high res
			{ efx: 1553, efy: 5001 }, //r4c3 of high res
			{ efx: 863, efy: 5001 }, //r4c4 of high res
		], //row: 4
	],
	r5c7: [
		[
			{ efx: 793, efy: 7446 }, //r1c1 of high res
			{ efx: -621, efy: 7499 }, //r1c2 of high res
			{ efx: -1745, efy: 7925 }, //r1c3 of high res
			{ efx: -2957, efy: 8731 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: 779, efy: 5640 }, //r2c1 of high res
			{ efx: -248, efy: 5108 }, //r2c2 of high res
			{ efx: -1330, efy: 5958 }, //r2c3 of high res
			{ efx: -2247, efy: 6652 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: 661, efy: 5025 }, //r3c1 of high res
			{ efx: -188, efy: 5001 }, //r3c2 of high res
			{ efx: -814, efy: 5001 }, //r3c3 of high res
			{ efx: -1602, efy: 5443 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: 564, efy: 5001 }, //r4c1 of high res
			{ efx: -19, efy: 5001 }, //r4c2 of high res
			{ efx: -606, efy: 5001 }, //r4c3 of high res
			{ efx: -1061, efy: 5001 }, //r4c4 of high res
		], //row: 4
	],
	r5c8: [
		[
			{ efx: -4462, efy: 9494 }, //r1c1 of high res
			{ efx: -6066, efy: 10616 }, //r1c2 of high res
			{ efx: -7761, efy: 11996 }, //r1c3 of high res
			{ efx: -9078, efy: 13221 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -3374, efy: 6902 }, //r2c1 of high res
			{ efx: -4928, efy: 8061 }, //r2c2 of high res
			{ efx: -6597, efy: 9498 }, //r2c3 of high res
			{ efx: -8441, efy: 10817 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -2595, efy: 5467 }, //r3c1 of high res
			{ efx: -3704, efy: 5761 }, //r3c2 of high res
			{ efx: -5213, efy: 7131 }, //r3c3 of high res
			{ efx: -6972, efy: 8499 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -1723, efy: 5001 }, //r4c1 of high res
			{ efx: -2791, efy: 5366 }, //r4c2 of high res
			{ efx: -3965, efy: 5749 }, //r4c3 of high res
			{ efx: -5351, efy: 6314 }, //r4c4 of high res
		], //row: 4
	],
	r5c9: [
		[
			{ efx: -10000, efy: 14764 }, //r1c1 of high res
			{ efx: -10000, efy: 16466 }, //r1c2 of high res
			{ efx: -10000, efy: 17924 }, //r1c3 of high res
			{ efx: -10000, efy: 19706 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -9508, efy: 12396 }, //r2c1 of high res
			{ efx: -9887, efy: 14275 }, //r2c2 of high res
			{ efx: -10000, efy: 16029 }, //r2c3 of high res
			{ efx: -10000, efy: 17839 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -8927, efy: 10145 }, //r3c1 of high res
			{ efx: -10000, efy: 12061 }, //r3c2 of high res
			{ efx: -10000, efy: 13876 }, //r3c3 of high res
			{ efx: -10000, efy: 15952 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -7219, efy: 7981 }, //r4c1 of high res
			{ efx: -8927, efy: 9910 }, //r4c2 of high res
			{ efx: -10000, efy: 11805 }, //r4c3 of high res
			{ efx: -10000, efy: 13895 }, //r4c4 of high res
		], //row: 4
	],
	r5c10: [
		[
			{ efx: -10000, efy: 21726 }, //r1c1 of high res
			{ efx: -10000, efy: 23518 }, //r1c2 of high res
			{ efx: -10000, efy: 25703 }, //r1c3 of high res
			{ efx: -10000, efy: 28325 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -10000, efy: 20026 }, //r2c1 of high res
			{ efx: -10000, efy: 22153 }, //r2c2 of high res
			{ efx: -10000, efy: 24346 }, //r2c3 of high res
			{ efx: -10000, efy: 27094 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -10000, efy: 18221 }, //r3c1 of high res
			{ efx: -10000, efy: 20379 }, //r3c2 of high res
			{ efx: -10000, efy: 22842 }, //r3c3 of high res
			{ efx: -10000, efy: 25638 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -10000, efy: 16277 }, //r4c1 of high res
			{ efx: -10000, efy: 18630 }, //r4c2 of high res
			{ efx: -10000, efy: 21084 }, //r4c3 of high res
			{ efx: -10000, efy: 23948 }, //r4c4 of high res
		], //row: 4
	],
	r5c11: [
		[
			{ efx: -10000, efy: 30765 }, //r1c1 of high res
			{ efx: -10000, efy: 33704 }, //r1c2 of high res
			{ efx: -10000, efy: 37393 }, //r1c3 of high res
			{ efx: -10000, efy: 40981 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -9999, efy: 29903 }, //r2c1 of high res
			{ efx: -10000, efy: 32809 }, //r2c2 of high res
			{ efx: -10000, efy: 36530 }, //r2c3 of high res
			{ efx: -10000, efy: 40520 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -10000, efy: 28434 }, //r3c1 of high res
			{ efx: -10000, efy: 31569 }, //r3c2 of high res
			{ efx: -10000, efy: 35250 }, //r3c3 of high res
			{ efx: -10000, efy: 39160 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -10000, efy: 26888 }, //r4c1 of high res
			{ efx: -10000, efy: 29978 }, //r4c2 of high res
			{ efx: -10000, efy: 33616 }, //r4c3 of high res
			{ efx: -10000, efy: 37511 }, //r4c4 of high res
		], //row: 4
	],
	r5c12: [
		[
			{ efx: -10000, efy: 45408 }, //r1c1 of high res
			{ efx: -10000, efy: 49702 }, //r1c2 of high res
			{ efx: -10000, efy: 50000 }, //r1c3 of high res
			{ efx: -10000, efy: 50000 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -10000, efy: 44446 }, //r2c1 of high res
			{ efx: -10000, efy: 48558 }, //r2c2 of high res
			{ efx: -10000, efy: 49943 }, //r2c3 of high res
			{ efx: -10000, efy: 50000 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -10000, efy: 43403 }, //r3c1 of high res
			{ efx: -10000, efy: 47808 }, //r3c2 of high res
			{ efx: -10000, efy: 49846 }, //r3c3 of high res
			{ efx: -10000, efy: 50000 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -10000, efy: 41646 }, //r4c1 of high res
			{ efx: -10000, efy: 46378 }, //r4c2 of high res
			{ efx: -10000, efy: 50000 }, //r4c3 of high res
			{ efx: -10000, efy: 50000 }, //r4c4 of high res
		], //row: 4
	],
	r5c13: [
		[
			{ efx: -9999, efy: 50000 }, //r1c1 of high res
			{ efx: -10000, efy: 50000 }, //r1c2 of high res
			{ efx: -10000, efy: 50001 }, //r1c3 of high res
			{ efx: -10000, efy: 50000 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -10000, efy: 50000 }, //r2c1 of high res
			{ efx: -10000, efy: 50000 }, //r2c2 of high res
			{ efx: -10000, efy: 50000 }, //r2c3 of high res
			{ efx: -10000, efy: 50000 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -10000, efy: 50000 }, //r3c1 of high res
			{ efx: -10000, efy: 50000 }, //r3c2 of high res
			{ efx: -10000, efy: 50000 }, //r3c3 of high res
			{ efx: -10000, efy: 50000 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -10000, efy: 50001 }, //r4c1 of high res
			{ efx: -10000, efy: 50000 }, //r4c2 of high res
			{ efx: -10000, efy: 50000 }, //r4c3 of high res
			{ efx: -10000, efy: 50000 }, //r4c4 of high res
		], //row: 4
	],
	r5c14: [
		[
			{ efx: -10000, efy: 50000 }, //r1c1 of high res
			{ efx: -10000, efy: 50000 }, //r1c2 of high res
			{ efx: -10000, efy: 50000 }, //r1c3 of high res
			{ efx: -10000, efy: 50000 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -10000, efy: 50001 }, //r2c1 of high res
			{ efx: -10000, efy: 50000 }, //r2c2 of high res
			{ efx: -10000, efy: 50000 }, //r2c3 of high res
			{ efx: -10000, efy: 50000 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -10000, efy: 50000 }, //r3c1 of high res
			{ efx: -10000, efy: 50000 }, //r3c2 of high res
			{ efx: -10000, efy: 50000 }, //r3c3 of high res
			{ efx: -10000, efy: 50000 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -10000, efy: 50000 }, //r4c1 of high res
			{ efx: -10000, efy: 50000 }, //r4c2 of high res
			{ efx: -10000, efy: 50000 }, //r4c3 of high res
			{ efx: -10000, efy: 50000 }, //r4c4 of high res
		], //row: 4
	],
	r5c15: [
		[
			{ efx: -10000, efy: 50000 }, //r1c1 of high res
			{ efx: -10000, efy: 50000 }, //r1c2 of high res
			{ efx: -10000, efy: 50000 }, //r1c3 of high res
			{ efx: -9999, efy: 50001 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -10000, efy: 50001 }, //r2c1 of high res
			{ efx: -10000, efy: 50000 }, //r2c2 of high res
			{ efx: -10000, efy: 50000 }, //r2c3 of high res
			{ efx: -10000, efy: 50000 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -10000, efy: 50000 }, //r3c1 of high res
			{ efx: -10000, efy: 50000 }, //r3c2 of high res
			{ efx: -10000, efy: 50000 }, //r3c3 of high res
			{ efx: -10000, efy: 50000 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -10000, efy: 50000 }, //r4c1 of high res
			{ efx: -10000, efy: 50000 }, //r4c2 of high res
			{ efx: -10000, efy: 50001 }, //r4c3 of high res
			{ efx: -10000, efy: 50000 }, //r4c4 of high res
		], //row: 4
	],
	r5c16: [
		[
			{ efx: -10000, efy: 50000 }, //r1c1 of high res
			{ efx: -10000, efy: 50000 }, //r1c2 of high res
			{ efx: -10000, efy: 50000 }, //r1c3 of high res
			{ efx: -9901, efy: 50000 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -10000, efy: 50000 }, //r2c1 of high res
			{ efx: -10000, efy: 50000 }, //r2c2 of high res
			{ efx: -10000, efy: 50001 }, //r2c3 of high res
			{ efx: -10000, efy: 50000 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -10000, efy: 50000 }, //r3c1 of high res
			{ efx: -10000, efy: 50000 }, //r3c2 of high res
			{ efx: -10000, efy: 50000 }, //r3c3 of high res
			{ efx: -10000, efy: 50000 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -10000, efy: 50000 }, //r4c1 of high res
			{ efx: -10000, efy: 50000 }, //r4c2 of high res
			{ efx: -9999, efy: 50000 }, //r4c3 of high res
			{ efx: -10000, efy: 50000 }, //r4c4 of high res
		], //row: 4
	],
	r6c1: [
		[
			{ efx: 197, efy: 21780 }, //r1c1 of high res
			{ efx: 298, efy: 21799 }, //r1c2 of high res
			{ efx: 415, efy: 21709 }, //r1c3 of high res
			{ efx: 573, efy: 21649 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: 166, efy: 17131 }, //r2c1 of high res
			{ efx: 253, efy: 17089 }, //r2c2 of high res
			{ efx: 345, efy: 17144 }, //r2c3 of high res
			{ efx: 468, efy: 16945 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: 131, efy: 12913 }, //r3c1 of high res
			{ efx: 202, efy: 12749 }, //r3c2 of high res
			{ efx: 260, efy: 12753 }, //r3c3 of high res
			{ efx: 362, efy: 12727 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: 82, efy: 8993 }, //r4c1 of high res
			{ efx: 142, efy: 8902 }, //r4c2 of high res
			{ efx: 186, efy: 9056 }, //r4c3 of high res
			{ efx: 234, efy: 8794 }, //r4c4 of high res
		], //row: 4
	],
	r6c2: [
		[
			{ efx: 781, efy: 21634 }, //r1c1 of high res
			{ efx: 987, efy: 21410 }, //r1c2 of high res
			{ efx: 1293, efy: 21224 }, //r1c3 of high res
			{ efx: 1718, efy: 21072 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: 638, efy: 16842 }, //r2c1 of high res
			{ efx: 798, efy: 16778 }, //r2c2 of high res
			{ efx: 1008, efy: 16427 }, //r2c3 of high res
			{ efx: 1333, efy: 16162 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: 492, efy: 12473 }, //r3c1 of high res
			{ efx: 587, efy: 12364 }, //r3c2 of high res
			{ efx: 758, efy: 12232 }, //r3c3 of high res
			{ efx: 985, efy: 11782 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: 337, efy: 8644 }, //r4c1 of high res
			{ efx: 412, efy: 8730 }, //r4c2 of high res
			{ efx: 483, efy: 8378 }, //r4c3 of high res
			{ efx: 654, efy: 8046 }, //r4c4 of high res
		], //row: 4
	],
	r6c3: [
		[
			{ efx: 2027, efy: 20564 }, //r1c1 of high res
			{ efx: 2548, efy: 20032 }, //r1c2 of high res
			{ efx: 3292, efy: 19432 }, //r1c3 of high res
			{ efx: 3605, efy: 18418 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: 1579, efy: 15873 }, //r2c1 of high res
			{ efx: 1861, efy: 15193 }, //r2c2 of high res
			{ efx: 2388, efy: 14508 }, //r2c3 of high res
			{ efx: 2670, efy: 13845 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: 1116, efy: 11488 }, //r3c1 of high res
			{ efx: 1352, efy: 11135 }, //r3c2 of high res
			{ efx: 1660, efy: 10269 }, //r3c3 of high res
			{ efx: 1785, efy: 9727 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: 764, efy: 8065 }, //r4c1 of high res
			{ efx: 840, efy: 7529 }, //r4c2 of high res
			{ efx: 1063, efy: 6844 }, //r4c3 of high res
			{ efx: 1184, efy: 7005 }, //r4c4 of high res
		], //row: 4
	],
	r6c4: [
		[
			{ efx: 4167, efy: 17065 }, //r1c1 of high res
			{ efx: 4935, efy: 15259 }, //r1c2 of high res
			{ efx: 5029, efy: 13767 }, //r1c3 of high res
			{ efx: 5149, efy: 11586 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: 2860, efy: 12628 }, //r2c1 of high res
			{ efx: 3344, efy: 11015 }, //r2c2 of high res
			{ efx: 3517, efy: 9984 }, //r2c3 of high res
			{ efx: 3373, efy: 8507 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: 1995, efy: 9030 }, //r3c1 of high res
			{ efx: 2172, efy: 7466 }, //r3c2 of high res
			{ efx: 2199, efy: 6747 }, //r3c3 of high res
			{ efx: 2234, efy: 6075 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: 1208, efy: 6068 }, //r4c1 of high res
			{ efx: 1345, efy: 5214 }, //r4c2 of high res
			{ efx: 1409, efy: 5395 }, //r4c3 of high res
			{ efx: 1326, efy: 5001 }, //r4c4 of high res
		], //row: 4
	],
	r6c5: [
		[
			{ efx: 4908, efy: 8706 }, //r1c1 of high res
			{ efx: 4575, efy: 7332 }, //r1c2 of high res
			{ efx: 3857, efy: 5821 }, //r1c3 of high res
			{ efx: 2806, efy: 5001 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: 3198, efy: 6146 }, //r2c1 of high res
			{ efx: 3070, efy: 5615 }, //r2c2 of high res
			{ efx: 2675, efy: 5001 }, //r2c3 of high res
			{ efx: 1865, efy: 5001 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: 1960, efy: 5084 }, //r3c1 of high res
			{ efx: 1826, efy: 5001 }, //r3c2 of high res
			{ efx: 1682, efy: 5001 }, //r3c3 of high res
			{ efx: 1083, efy: 5001 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: 1188, efy: 5001 }, //r4c1 of high res
			{ efx: 1134, efy: 5001 }, //r4c2 of high res
			{ efx: 1001, efy: 5001 }, //r4c3 of high res
			{ efx: 665, efy: 5001 }, //r4c4 of high res
		], //row: 4
	],
	r6c6: [
		[
			{ efx: 2311, efy: 5001 }, //r1c1 of high res
			{ efx: 1834, efy: 5001 }, //r1c2 of high res
			{ efx: 987, efy: 5001 }, //r1c3 of high res
			{ efx: 609, efy: 5001 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: 1504, efy: 5001 }, //r2c1 of high res
			{ efx: 1255, efy: 5001 }, //r2c2 of high res
			{ efx: 683, efy: 5001 }, //r2c3 of high res
			{ efx: 385, efy: 5001 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: 862, efy: 5001 }, //r3c1 of high res
			{ efx: 754, efy: 5001 }, //r3c2 of high res
			{ efx: 376, efy: 5001 }, //r3c3 of high res
			{ efx: 220, efy: 5001 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: 525, efy: 5001 }, //r4c1 of high res
			{ efx: 452, efy: 5001 }, //r4c2 of high res
			{ efx: 240, efy: 5001 }, //r4c3 of high res
			{ efx: 131, efy: 5001 }, //r4c4 of high res
		], //row: 4
	],
	r6c7: [
		[
			{ efx: 363, efy: 5001 }, //r1c1 of high res
			{ efx: -42, efy: 5001 }, //r1c2 of high res
			{ efx: -324, efy: 5001 }, //r1c3 of high res
			{ efx: -723, efy: 5001 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: 268, efy: 5001 }, //r2c1 of high res
			{ efx: 7, efy: 5001 }, //r2c2 of high res
			{ efx: -237, efy: 5001 }, //r2c3 of high res
			{ efx: -428, efy: 5001 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: 149, efy: 5001 }, //r3c1 of high res
			{ efx: -15, efy: 5001 }, //r3c2 of high res
			{ efx: -124, efy: 5001 }, //r3c3 of high res
			{ efx: -293, efy: 5001 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: 94, efy: 5001 }, //r4c1 of high res
			{ efx: -3, efy: 5001 }, //r4c2 of high res
			{ efx: -94, efy: 5001 }, //r4c3 of high res
			{ efx: -165, efy: 5001 }, //r4c4 of high res
		], //row: 4
	],
	r6c8: [
		[
			{ efx: -1230, efy: 5001 }, //r1c1 of high res
			{ efx: -1817, efy: 5001 }, //r1c2 of high res
			{ efx: -2868, efy: 5261 }, //r1c3 of high res
			{ efx: -4106, efy: 5349 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -758, efy: 5001 }, //r2c1 of high res
			{ efx: -1305, efy: 5001 }, //r2c2 of high res
			{ efx: -1943, efy: 5001 }, //r2c3 of high res
			{ efx: -2825, efy: 5001 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -507, efy: 5001 }, //r3c1 of high res
			{ efx: -758, efy: 5001 }, //r3c2 of high res
			{ efx: -1334, efy: 5001 }, //r3c3 of high res
			{ efx: -2013, efy: 5001 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -306, efy: 5001 }, //r4c1 of high res
			{ efx: -543, efy: 5001 }, //r4c2 of high res
			{ efx: -814, efy: 5002 }, //r4c3 of high res
			{ efx: -1278, efy: 5001 }, //r4c4 of high res
		], //row: 4
	],
	r6c9: [
		[
			{ efx: -5530, efy: 5935 }, //r1c1 of high res
			{ efx: -7205, efy: 7786 }, //r1c2 of high res
			{ efx: -8836, efy: 9702 }, //r1c3 of high res
			{ efx: -10000, efy: 11829 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -4188, efy: 5471 }, //r2c1 of high res
			{ efx: -5767, efy: 6374 }, //r2c2 of high res
			{ efx: -7591, efy: 7619 }, //r2c3 of high res
			{ efx: -8956, efy: 9735 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -2816, efy: 5001 }, //r3c1 of high res
			{ efx: -4257, efy: 5587 }, //r3c2 of high res
			{ efx: -5896, efy: 6379 }, //r3c3 of high res
			{ efx: -7624, efy: 7651 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -2051, efy: 5001 }, //r4c1 of high res
			{ efx: -2938, efy: 5001 }, //r4c2 of high res
			{ efx: -4180, efy: 5169 }, //r4c3 of high res
			{ efx: -5865, efy: 6281 }, //r4c4 of high res
		], //row: 4
	],
	r6c10: [
		[
			{ efx: -10000, efy: 14211 }, //r1c1 of high res
			{ efx: -10000, efy: 16597 }, //r1c2 of high res
			{ efx: -10000, efy: 19183 }, //r1c3 of high res
			{ efx: -10000, efy: 22023 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -9504, efy: 12114 }, //r2c1 of high res
			{ efx: -10000, efy: 14522 }, //r2c2 of high res
			{ efx: -10000, efy: 17076 }, //r2c3 of high res
			{ efx: -10000, efy: 19937 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -8744, efy: 9940 }, //r3c1 of high res
			{ efx: -9519, efy: 12341 }, //r3c2 of high res
			{ efx: -10000, efy: 14882 }, //r3c3 of high res
			{ efx: -10000, efy: 17663 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -7636, efy: 8006 }, //r4c1 of high res
			{ efx: -9209, efy: 10074 }, //r4c2 of high res
			{ efx: -9987, efy: 12593 }, //r4c3 of high res
			{ efx: -9916, efy: 15272 }, //r4c4 of high res
		], //row: 4
	],
	r6c11: [
		[
			{ efx: -10000, efy: 24953 }, //r1c1 of high res
			{ efx: -10000, efy: 28088 }, //r1c2 of high res
			{ efx: -10000, efy: 31584 }, //r1c3 of high res
			{ efx: -10000, efy: 35411 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -10000, efy: 22866 }, //r2c1 of high res
			{ efx: -10000, efy: 25922 }, //r2c2 of high res
			{ efx: -10000, efy: 29353 }, //r2c3 of high res
			{ efx: -10000, efy: 32974 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -10000, efy: 20567 }, //r3c1 of high res
			{ efx: -10000, efy: 23584 }, //r3c2 of high res
			{ efx: -10000, efy: 26851 }, //r3c3 of high res
			{ efx: -10000, efy: 30377 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -10000, efy: 18098 }, //r4c1 of high res
			{ efx: -9999, efy: 21078 }, //r4c2 of high res
			{ efx: -10000, efy: 24172 }, //r4c3 of high res
			{ efx: -10000, efy: 27489 }, //r4c4 of high res
		], //row: 4
	],
	r6c12: [
		[
			{ efx: -10000, efy: 39364 }, //r1c1 of high res
			{ efx: -10000, efy: 43688 }, //r1c2 of high res
			{ efx: -10000, efy: 47026 }, //r1c3 of high res
			{ efx: -10000, efy: 50000 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -10000, efy: 36780 }, //r2c1 of high res
			{ efx: -10000, efy: 40861 }, //r2c2 of high res
			{ efx: -10000, efy: 45298 }, //r2c3 of high res
			{ efx: -10000, efy: 48963 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -10000, efy: 33958 }, //r3c1 of high res
			{ efx: -10000, efy: 37718 }, //r3c2 of high res
			{ efx: -10000, efy: 41977 }, //r3c3 of high res
			{ efx: -10000, efy: 46146 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -10000, efy: 30990 }, //r4c1 of high res
			{ efx: -10000, efy: 34455 }, //r4c2 of high res
			{ efx: -10000, efy: 38231 }, //r4c3 of high res
			{ efx: -10000, efy: 42263 }, //r4c4 of high res
		], //row: 4
	],
	r6c13: [
		[
			{ efx: -10000, efy: 50000 }, //r1c1 of high res
			{ efx: -10000, efy: 50000 }, //r1c2 of high res
			{ efx: -10000, efy: 50000 }, //r1c3 of high res
			{ efx: -10000, efy: 50000 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -9999, efy: 49219 }, //r2c1 of high res
			{ efx: -10000, efy: 50000 }, //r2c2 of high res
			{ efx: -10000, efy: 50000 }, //r2c3 of high res
			{ efx: -10000, efy: 50000 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -10000, efy: 48367 }, //r3c1 of high res
			{ efx: -10000, efy: 49317 }, //r3c2 of high res
			{ efx: -10000, efy: 50000 }, //r3c3 of high res
			{ efx: -10000, efy: 50000 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -10000, efy: 45814 }, //r4c1 of high res
			{ efx: -10000, efy: 49102 }, //r4c2 of high res
			{ efx: -10000, efy: 50000 }, //r4c3 of high res
			{ efx: -10000, efy: 49886 }, //r4c4 of high res
		], //row: 4
	],
	r6c14: [
		[
			{ efx: -10000, efy: 50001 }, //r1c1 of high res
			{ efx: -10000, efy: 50000 }, //r1c2 of high res
			{ efx: -10000, efy: 50000 }, //r1c3 of high res
			{ efx: -10000, efy: 50000 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -10000, efy: 50000 }, //r2c1 of high res
			{ efx: -10000, efy: 50000 }, //r2c2 of high res
			{ efx: -10000, efy: 50000 }, //r2c3 of high res
			{ efx: -10000, efy: 50000 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -10000, efy: 50000 }, //r3c1 of high res
			{ efx: -10000, efy: 50000 }, //r3c2 of high res
			{ efx: -10000, efy: 50000 }, //r3c3 of high res
			{ efx: -10000, efy: 50000 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -10000, efy: 50000 }, //r4c1 of high res
			{ efx: -10000, efy: 50000 }, //r4c2 of high res
			{ efx: -10000, efy: 50000 }, //r4c3 of high res
			{ efx: -10000, efy: 50000 }, //r4c4 of high res
		], //row: 4
	],
	r6c15: [
		[
			{ efx: -10000, efy: 50000 }, //r1c1 of high res
			{ efx: -9999, efy: 50000 }, //r1c2 of high res
			{ efx: -10000, efy: 50000 }, //r1c3 of high res
			{ efx: -10000, efy: 50000 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -10000, efy: 50000 }, //r2c1 of high res
			{ efx: -10000, efy: 50000 }, //r2c2 of high res
			{ efx: -9999, efy: 50000 }, //r2c3 of high res
			{ efx: -10000, efy: 50000 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -10000, efy: 50000 }, //r3c1 of high res
			{ efx: -10000, efy: 50000 }, //r3c2 of high res
			{ efx: -10000, efy: 50000 }, //r3c3 of high res
			{ efx: -10000, efy: 50000 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -10000, efy: 50000 }, //r4c1 of high res
			{ efx: -10000, efy: 50000 }, //r4c2 of high res
			{ efx: -10000, efy: 50000 }, //r4c3 of high res
			{ efx: -10000, efy: 50000 }, //r4c4 of high res
		], //row: 4
	],
	r6c16: [
		[
			{ efx: -10000, efy: 50000 }, //r1c1 of high res
			{ efx: -10000, efy: 50000 }, //r1c2 of high res
			{ efx: -10000, efy: 50000 }, //r1c3 of high res
			{ efx: -10000, efy: 50000 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -10000, efy: 50000 }, //r2c1 of high res
			{ efx: -10000, efy: 50000 }, //r2c2 of high res
			{ efx: -10000, efy: 50000 }, //r2c3 of high res
			{ efx: -10000, efy: 50000 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -10000, efy: 50000 }, //r3c1 of high res
			{ efx: -10000, efy: 50000 }, //r3c2 of high res
			{ efx: -10000, efy: 50000 }, //r3c3 of high res
			{ efx: -10000, efy: 50000 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -10000, efy: 50000 }, //r4c1 of high res
			{ efx: -10000, efy: 50000 }, //r4c2 of high res
			{ efx: -9999, efy: 50000 }, //r4c3 of high res
			{ efx: -10000, efy: 50000 }, //r4c4 of high res
		], //row: 4
	],
	r7c1: [
		[
			{ efx: 60, efy: 6340 }, //r1c1 of high res
			{ efx: 91, efy: 5687 }, //r1c2 of high res
			{ efx: 118, efy: 5915 }, //r1c3 of high res
			{ efx: 163, efy: 6276 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: 30, efy: 5001 }, //r2c1 of high res
			{ efx: 57, efy: 5002 }, //r2c2 of high res
			{ efx: 72, efy: 5001 }, //r2c3 of high res
			{ efx: 86, efy: 5001 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: 20, efy: 5001 }, //r3c1 of high res
			{ efx: 30, efy: 5002 }, //r3c2 of high res
			{ efx: 41, efy: 5001 }, //r3c3 of high res
			{ efx: 55, efy: 5002 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: 9, efy: 5001 }, //r4c1 of high res
			{ efx: 18, efy: 5001 }, //r4c2 of high res
			{ efx: 22, efy: 5001 }, //r4c3 of high res
			{ efx: 27, efy: 5001 }, //r4c4 of high res
		], //row: 4
	],
	r7c2: [
		[
			{ efx: 213, efy: 5501 }, //r1c1 of high res
			{ efx: 256, efy: 5747 }, //r1c2 of high res
			{ efx: 327, efy: 6089 }, //r1c3 of high res
			{ efx: 398, efy: 5119 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: 132, efy: 5001 }, //r2c1 of high res
			{ efx: 155, efy: 5001 }, //r2c2 of high res
			{ efx: 175, efy: 5001 }, //r2c3 of high res
			{ efx: 242, efy: 5001 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: 69, efy: 5001 }, //r3c1 of high res
			{ efx: 87, efy: 5001 }, //r3c2 of high res
			{ efx: 108, efy: 5001 }, //r3c3 of high res
			{ efx: 125, efy: 5001 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: 41, efy: 5001 }, //r4c1 of high res
			{ efx: 47, efy: 5001 }, //r4c2 of high res
			{ efx: 52, efy: 5001 }, //r4c3 of high res
			{ efx: 73, efy: 5001 }, //r4c4 of high res
		], //row: 4
	],
	r7c3: [
		[
			{ efx: 458, efy: 5432 }, //r1c1 of high res
			{ efx: 551, efy: 5704 }, //r1c2 of high res
			{ efx: 619, efy: 5077 }, //r1c3 of high res
			{ efx: 679, efy: 5206 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: 272, efy: 5001 }, //r2c1 of high res
			{ efx: 294, efy: 5001 }, //r2c2 of high res
			{ efx: 368, efy: 5001 }, //r2c3 of high res
			{ efx: 392, efy: 5001 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: 150, efy: 5001 }, //r3c1 of high res
			{ efx: 176, efy: 5001 }, //r3c2 of high res
			{ efx: 190, efy: 5001 }, //r3c3 of high res
			{ efx: 211, efy: 5001 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: 80, efy: 5001 }, //r4c1 of high res
			{ efx: 85, efy: 5001 }, //r4c2 of high res
			{ efx: 106, efy: 5001 }, //r4c3 of high res
			{ efx: 112, efy: 5001 }, //r4c4 of high res
		], //row: 4
	],
	r7c4: [
		[
			{ efx: 763, efy: 5182 }, //r1c1 of high res
			{ efx: 749, efy: 5001 }, //r1c2 of high res
			{ efx: 772, efy: 5001 }, //r1c3 of high res
			{ efx: 808, efy: 5001 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: 404, efy: 5001 }, //r2c1 of high res
			{ efx: 437, efy: 5001 }, //r2c2 of high res
			{ efx: 433, efy: 5001 }, //r2c3 of high res
			{ efx: 425, efy: 5001 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: 234, efy: 5001 }, //r3c1 of high res
			{ efx: 227, efy: 5001 }, //r3c2 of high res
			{ efx: 228, efy: 5001 }, //r3c3 of high res
			{ efx: 238, efy: 5001 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: 113, efy: 5001 }, //r4c1 of high res
			{ efx: 120, efy: 5001 }, //r4c2 of high res
			{ efx: 120, efy: 5001 }, //r4c3 of high res
			{ efx: 116, efy: 5001 }, //r4c4 of high res
		], //row: 4
	],
	r7c5: [
		[
			{ efx: 632, efy: 5002 }, //r1c1 of high res
			{ efx: 595, efy: 5001 }, //r1c2 of high res
			{ efx: 594, efy: 5001 }, //r1c3 of high res
			{ efx: 342, efy: 5001 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: 365, efy: 5001 }, //r2c1 of high res
			{ efx: 327, efy: 5001 }, //r2c2 of high res
			{ efx: 308, efy: 5001 }, //r2c3 of high res
			{ efx: 200, efy: 5001 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: 196, efy: 5001 }, //r3c1 of high res
			{ efx: 168, efy: 5001 }, //r3c2 of high res
			{ efx: 169, efy: 5001 }, //r3c3 of high res
			{ efx: 116, efy: 5001 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: 98, efy: 5001 }, //r4c1 of high res
			{ efx: 88, efy: 5001 }, //r4c2 of high res
			{ efx: 83, efy: 5001 }, //r4c3 of high res
			{ efx: 54, efy: 5001 }, //r4c4 of high res
		], //row: 4
	],
	r7c6: [
		[
			{ efx: 269, efy: 5001 }, //r1c1 of high res
			{ efx: 259, efy: 5001 }, //r1c2 of high res
			{ efx: 121, efy: 5001 }, //r1c3 of high res
			{ efx: 68, efy: 5001 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: 149, efy: 5001 }, //r2c1 of high res
			{ efx: 136, efy: 5001 }, //r2c2 of high res
			{ efx: 72, efy: 5001 }, //r2c3 of high res
			{ efx: 37, efy: 5001 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: 77, efy: 5001 }, //r3c1 of high res
			{ efx: 76, efy: 5001 }, //r3c2 of high res
			{ efx: 44, efy: 5001 }, //r3c3 of high res
			{ efx: 19, efy: 5001 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: 41, efy: 5001 }, //r4c1 of high res
			{ efx: 37, efy: 5001 }, //r4c2 of high res
			{ efx: 20, efy: 5001 }, //r4c3 of high res
			{ efx: 10, efy: 5001 }, //r4c4 of high res
		], //row: 4
	],
	r7c7: [
		[
			{ efx: 50, efy: 5001 }, //r1c1 of high res
			{ efx: -9, efy: 5001 }, //r1c2 of high res
			{ efx: -50, efy: 5001 }, //r1c3 of high res
			{ efx: -113, efy: 5001 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: 27, efy: 5001 }, //r2c1 of high res
			{ efx: -5, efy: 5001 }, //r2c2 of high res
			{ efx: -37, efy: 5001 }, //r2c3 of high res
			{ efx: -62, efy: 5001 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: 14, efy: 5002 }, //r3c1 of high res
			{ efx: -2, efy: 5001 }, //r3c2 of high res
			{ efx: -20, efy: 5001 }, //r3c3 of high res
			{ efx: -42, efy: 5001 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: 7, efy: 5001 }, //r4c1 of high res
			{ efx: -4, efy: 5001 }, //r4c2 of high res
			{ efx: -14, efy: 5001 }, //r4c3 of high res
			{ efx: -23, efy: 5001 }, //r4c4 of high res
		], //row: 4
	],
	r7c8: [
		[
			{ efx: -195, efy: 5001 }, //r1c1 of high res
			{ efx: -294, efy: 5001 }, //r1c2 of high res
			{ efx: -548, efy: 5001 }, //r1c3 of high res
			{ efx: -847, efy: 5001 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -118, efy: 5001 }, //r2c1 of high res
			{ efx: -210, efy: 5001 }, //r2c2 of high res
			{ efx: -312, efy: 5001 }, //r2c3 of high res
			{ efx: -519, efy: 5001 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -71, efy: 5001 }, //r3c1 of high res
			{ efx: -113, efy: 5001 }, //r3c2 of high res
			{ efx: -208, efy: 5001 }, //r3c3 of high res
			{ efx: -318, efy: 5001 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -44, efy: 5001 }, //r4c1 of high res
			{ efx: -77, efy: 5001 }, //r4c2 of high res
			{ efx: -113, efy: 5001 }, //r4c3 of high res
			{ efx: -196, efy: 5001 }, //r4c4 of high res
		], //row: 4
	],
	r7c9: [
		[
			{ efx: -1201, efy: 5002 }, //r1c1 of high res
			{ efx: -2040, efy: 5001 }, //r1c2 of high res
			{ efx: -3002, efy: 5001 }, //r1c3 of high res
			{ efx: -4035, efy: 5001 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -863, efy: 5001 }, //r2c1 of high res
			{ efx: -1253, efy: 5001 }, //r2c2 of high res
			{ efx: -1938, efy: 5001 }, //r2c3 of high res
			{ efx: -2941, efy: 5001 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -471, efy: 5002 }, //r3c1 of high res
			{ efx: -840, efy: 5001 }, //r3c2 of high res
			{ efx: -1259, efy: 5001 }, //r3c3 of high res
			{ efx: -1756, efy: 5001 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -324, efy: 5001 }, //r4c1 of high res
			{ efx: -469, efy: 5001 }, //r4c2 of high res
			{ efx: -780, efy: 5001 }, //r4c3 of high res
			{ efx: -1228, efy: 5001 }, //r4c4 of high res
		], //row: 4
	],
	r7c10: [
		[
			{ efx: -5722, efy: 6292 }, //r1c1 of high res
			{ efx: -7574, efy: 8107 }, //r1c2 of high res
			{ efx: -9378, efy: 10197 }, //r1c3 of high res
			{ efx: -9806, efy: 12790 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -4011, efy: 5002 }, //r2c1 of high res
			{ efx: -5473, efy: 5929 }, //r2c2 of high res
			{ efx: -7242, efy: 8059 }, //r2c3 of high res
			{ efx: -8925, efy: 10312 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -2787, efy: 5004 }, //r3c1 of high res
			{ efx: -3906, efy: 5144 }, //r3c2 of high res
			{ efx: -5061, efy: 5785 }, //r3c3 of high res
			{ efx: -6714, efy: 7970 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -1713, efy: 5001 }, //r4c1 of high res
			{ efx: -2562, efy: 5001 }, //r4c2 of high res
			{ efx: -3657, efy: 5381 }, //r4c3 of high res
			{ efx: -4726, efy: 6153 }, //r4c4 of high res
		], //row: 4
	],
	r7c11: [
		[
			{ efx: -9943, efy: 15557 }, //r1c1 of high res
			{ efx: -10000, efy: 18371 }, //r1c2 of high res
			{ efx: -10000, efy: 21355 }, //r1c3 of high res
			{ efx: -10000, efy: 24569 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -9976, efy: 12857 }, //r2c1 of high res
			{ efx: -10000, efy: 15625 }, //r2c2 of high res
			{ efx: -10000, efy: 18396 }, //r2c3 of high res
			{ efx: -10000, efy: 21423 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -8385, efy: 10298 }, //r3c1 of high res
			{ efx: -9935, efy: 12737 }, //r3c2 of high res
			{ efx: -9976, efy: 15417 }, //r3c3 of high res
			{ efx: -9930, efy: 18263 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -6140, efy: 7751 }, //r4c1 of high res
			{ efx: -7717, efy: 10086 }, //r4c2 of high res
			{ efx: -9074, efy: 12410 }, //r4c3 of high res
			{ efx: -9816, efy: 15046 }, //r4c4 of high res
		], //row: 4
	],
	r7c12: [
		[
			{ efx: -10000, efy: 27780 }, //r1c1 of high res
			{ efx: -10000, efy: 31068 }, //r1c2 of high res
			{ efx: -10000, efy: 34673 }, //r1c3 of high res
			{ efx: -10000, efy: 38206 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -10000, efy: 24557 }, //r2c1 of high res
			{ efx: -10000, efy: 27553 }, //r2c2 of high res
			{ efx: -9999, efy: 30844 }, //r2c3 of high res
			{ efx: -10000, efy: 34266 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -10000, efy: 21174 }, //r3c1 of high res
			{ efx: -10000, efy: 24048 }, //r3c2 of high res
			{ efx: -10000, efy: 27108 }, //r3c3 of high res
			{ efx: -10000, efy: 30213 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -10000, efy: 17831 }, //r4c1 of high res
			{ efx: -9815, efy: 20440 }, //r4c2 of high res
			{ efx: -10000, efy: 23328 }, //r4c3 of high res
			{ efx: -10000, efy: 26278 }, //r4c4 of high res
		], //row: 4
	],
	r7c13: [
		[
			{ efx: -10000, efy: 41547 }, //r1c1 of high res
			{ efx: -10000, efy: 45225 }, //r1c2 of high res
			{ efx: -10000, efy: 48776 }, //r1c3 of high res
			{ efx: -10000, efy: 49496 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -10000, efy: 37275 }, //r2c1 of high res
			{ efx: -10000, efy: 40545 }, //r2c2 of high res
			{ efx: -10000, efy: 43986 }, //r2c3 of high res
			{ efx: -10000, efy: 46697 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -10000, efy: 33081 }, //r3c1 of high res
			{ efx: -10000, efy: 36125 }, //r3c2 of high res
			{ efx: -10000, efy: 39178 }, //r3c3 of high res
			{ efx: -9999, efy: 41777 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -10000, efy: 28857 }, //r4c1 of high res
			{ efx: -10000, efy: 31694 }, //r4c2 of high res
			{ efx: -10000, efy: 34603 }, //r4c3 of high res
			{ efx: -10000, efy: 36950 }, //r4c4 of high res
		], //row: 4
	],
	r7c14: [
		[
			{ efx: -10000, efy: 49626 }, //r1c1 of high res
			{ efx: -10000, efy: 50000 }, //r1c2 of high res
			{ efx: -10000, efy: 50000 }, //r1c3 of high res
			{ efx: -10000, efy: 50000 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -10000, efy: 48971 }, //r2c1 of high res
			{ efx: -10000, efy: 50000 }, //r2c2 of high res
			{ efx: -10000, efy: 49487 }, //r2c3 of high res
			{ efx: -10000, efy: 50000 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -10000, efy: 44499 }, //r3c1 of high res
			{ efx: -10000, efy: 47169 }, //r3c2 of high res
			{ efx: -10000, efy: 47668 }, //r3c3 of high res
			{ efx: -10000, efy: 48142 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -10000, efy: 39459 }, //r4c1 of high res
			{ efx: -10000, efy: 42057 }, //r4c2 of high res
			{ efx: -10000, efy: 44002 }, //r4c3 of high res
			{ efx: -10000, efy: 46008 }, //r4c4 of high res
		], //row: 4
	],
	r7c15: [
		[
			{ efx: -10000, efy: 50000 }, //r1c1 of high res
			{ efx: -10000, efy: 50001 }, //r1c2 of high res
			{ efx: -10000, efy: 50000 }, //r1c3 of high res
			{ efx: -10000, efy: 50000 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -10000, efy: 50000 }, //r2c1 of high res
			{ efx: -10000, efy: 50000 }, //r2c2 of high res
			{ efx: -10000, efy: 50000 }, //r2c3 of high res
			{ efx: -10000, efy: 50001 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -10000, efy: 50000 }, //r3c1 of high res
			{ efx: -10000, efy: 50000 }, //r3c2 of high res
			{ efx: -10000, efy: 50000 }, //r3c3 of high res
			{ efx: -10000, efy: 50000 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -10000, efy: 47924 }, //r4c1 of high res
			{ efx: -10000, efy: 48242 }, //r4c2 of high res
			{ efx: -10000, efy: 49945 }, //r4c3 of high res
			{ efx: -10000, efy: 50000 }, //r4c4 of high res
		], //row: 4
	],
	r7c16: [
		[
			{ efx: -10000, efy: 50000 }, //r1c1 of high res
			{ efx: -10000, efy: 50000 }, //r1c2 of high res
			{ efx: -10000, efy: 50000 }, //r1c3 of high res
			{ efx: -10000, efy: 50000 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -10000, efy: 50000 }, //r2c1 of high res
			{ efx: -10000, efy: 50000 }, //r2c2 of high res
			{ efx: -9994, efy: 50000 }, //r2c3 of high res
			{ efx: -9810, efy: 50000 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -10000, efy: 50000 }, //r3c1 of high res
			{ efx: -10000, efy: 50000 }, //r3c2 of high res
			{ efx: -9982, efy: 50000 }, //r3c3 of high res
			{ efx: -9271, efy: 50000 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -10000, efy: 49417 }, //r4c1 of high res
			{ efx: -9897, efy: 50000 }, //r4c2 of high res
			{ efx: -9190, efy: 50000 }, //r4c3 of high res
			{ efx: -8517, efy: 50001 }, //r4c4 of high res
		], //row: 4
	],
	r8c1: [
		[
			{ efx: 6, efy: 5001 }, //r1c1 of high res
			{ efx: 9, efy: 5001 }, //r1c2 of high res
			{ efx: 12, efy: 5001 }, //r1c3 of high res
			{ efx: 16, efy: 5001 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: 3, efy: 5001 }, //r2c1 of high res
			{ efx: 5, efy: 5001 }, //r2c2 of high res
			{ efx: 6, efy: 5001 }, //r2c3 of high res
			{ efx: 8, efy: 5001 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: 2, efy: 5001 }, //r3c1 of high res
			{ efx: 2, efy: 5001 }, //r3c2 of high res
			{ efx: 3, efy: 5001 }, //r3c3 of high res
			{ efx: 4, efy: 5001 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: 1, efy: 5001 }, //r4c1 of high res
			{ efx: 2, efy: 5001 }, //r4c2 of high res
			{ efx: 2, efy: 5001 }, //r4c3 of high res
			{ efx: 2, efy: 5001 }, //r4c4 of high res
		], //row: 4
	],
	r8c2: [
		[
			{ efx: 19, efy: 5001 }, //r1c1 of high res
			{ efx: 26, efy: 5001 }, //r1c2 of high res
			{ efx: 31, efy: 5001 }, //r1c3 of high res
			{ efx: 33, efy: 5001 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: 11, efy: 5001 }, //r2c1 of high res
			{ efx: 13, efy: 5001 }, //r2c2 of high res
			{ efx: 14, efy: 5001 }, //r2c3 of high res
			{ efx: 19, efy: 5001 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: 5, efy: 5001 }, //r3c1 of high res
			{ efx: 7, efy: 5002 }, //r3c2 of high res
			{ efx: 8, efy: 5001 }, //r3c3 of high res
			{ efx: 9, efy: 5001 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: 3, efy: 5001 }, //r4c1 of high res
			{ efx: 3, efy: 5001 }, //r4c2 of high res
			{ efx: 4, efy: 5001 }, //r4c3 of high res
			{ efx: 5, efy: 5001 }, //r4c4 of high res
		], //row: 4
	],
	r8c3: [
		[
			{ efx: 43, efy: 5001 }, //r1c1 of high res
			{ efx: 49, efy: 5001 }, //r1c2 of high res
			{ efx: 49, efy: 5001 }, //r1c3 of high res
			{ efx: 58, efy: 5001 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: 21, efy: 5001 }, //r2c1 of high res
			{ efx: 23, efy: 5001 }, //r2c2 of high res
			{ efx: 28, efy: 5001 }, //r2c3 of high res
			{ efx: 29, efy: 5001 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: 11, efy: 5001 }, //r3c1 of high res
			{ efx: 13, efy: 5001 }, //r3c2 of high res
			{ efx: 12, efy: 5001 }, //r3c3 of high res
			{ efx: 15, efy: 5001 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: 5, efy: 5001 }, //r4c1 of high res
			{ efx: 6, efy: 5001 }, //r4c2 of high res
			{ efx: 7, efy: 5001 }, //r4c3 of high res
			{ efx: 7, efy: 5001 }, //r4c4 of high res
		], //row: 4
	],
	r8c4: [
		[
			{ efx: 62, efy: 5001 }, //r1c1 of high res
			{ efx: 55, efy: 5001 }, //r1c2 of high res
			{ efx: 61, efy: 5001 }, //r1c3 of high res
			{ efx: 62, efy: 5001 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: 29, efy: 5001 }, //r2c1 of high res
			{ efx: 31, efy: 5001 }, //r2c2 of high res
			{ efx: 30, efy: 5001 }, //r2c3 of high res
			{ efx: 29, efy: 5001 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: 16, efy: 5001 }, //r3c1 of high res
			{ efx: 14, efy: 5001 }, //r3c2 of high res
			{ efx: 16, efy: 5001 }, //r3c3 of high res
			{ efx: 15, efy: 5001 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: 7, efy: 5001 }, //r4c1 of high res
			{ efx: 8, efy: 5001 }, //r4c2 of high res
			{ efx: 7, efy: 5001 }, //r4c3 of high res
			{ efx: 7, efy: 5001 }, //r4c4 of high res
		], //row: 4
	],
	r8c5: [
		[
			{ efx: 45, efy: 5001 }, //r1c1 of high res
			{ efx: 45, efy: 5001 }, //r1c2 of high res
			{ efx: 43, efy: 5001 }, //r1c3 of high res
			{ efx: 26, efy: 5001 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: 25, efy: 5001 }, //r2c1 of high res
			{ efx: 22, efy: 5001 }, //r2c2 of high res
			{ efx: 21, efy: 5002 }, //r2c3 of high res
			{ efx: 14, efy: 5001 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: 12, efy: 5001 }, //r3c1 of high res
			{ efx: 11, efy: 5001 }, //r3c2 of high res
			{ efx: 11, efy: 5001 }, //r3c3 of high res
			{ efx: 7, efy: 5001 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: 6, efy: 5001 }, //r4c1 of high res
			{ efx: 6, efy: 5001 }, //r4c2 of high res
			{ efx: 5, efy: 5001 }, //r4c3 of high res
			{ efx: 4, efy: 5001 }, //r4c4 of high res
		], //row: 4
	],
	r8c6: [
		[
			{ efx: 21, efy: 5001 }, //r1c1 of high res
			{ efx: 20, efy: 5001 }, //r1c2 of high res
			{ efx: 10, efy: 5001 }, //r1c3 of high res
			{ efx: 5, efy: 5001 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: 11, efy: 5001 }, //r2c1 of high res
			{ efx: 10, efy: 5001 }, //r2c2 of high res
			{ efx: 5, efy: 5001 }, //r2c3 of high res
			{ efx: 3, efy: 5001 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: 6, efy: 5001 }, //r3c1 of high res
			{ efx: 5, efy: 5001 }, //r3c2 of high res
			{ efx: 3, efy: 5001 }, //r3c3 of high res
			{ efx: 1, efy: 5001 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: 3, efy: 5001 }, //r4c1 of high res
			{ efx: 3, efy: 5001 }, //r4c2 of high res
			{ efx: 1, efy: 5001 }, //r4c3 of high res
			{ efx: 1, efy: 5001 }, //r4c4 of high res
		], //row: 4
	],
	r8c7: [
		[
			{ efx: 3, efy: 5001 }, //r1c1 of high res
			{ efx: -3, efy: 5001 }, //r1c2 of high res
			{ efx: -8, efy: 5001 }, //r1c3 of high res
			{ efx: -16, efy: 5001 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: 2, efy: 5001 }, //r2c1 of high res
			{ efx: -2, efy: 5001 }, //r2c2 of high res
			{ efx: -5, efy: 5002 }, //r2c3 of high res
			{ efx: -8, efy: 5001 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: 1, efy: 5001 }, //r3c1 of high res
			{ efx: -1, efy: 5001 }, //r3c2 of high res
			{ efx: -3, efy: 5001 }, //r3c3 of high res
			{ efx: -5, efy: 5001 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: 0, efy: 5002 }, //r4c1 of high res
			{ efx: -1, efy: 5001 }, //r4c2 of high res
			{ efx: -2, efy: 5001 }, //r4c3 of high res
			{ efx: -3, efy: 5001 }, //r4c4 of high res
		], //row: 4
	],
	r8c8: [
		[
			{ efx: -26, efy: 5001 }, //r1c1 of high res
			{ efx: -42, efy: 5001 }, //r1c2 of high res
			{ efx: -75, efy: 5001 }, //r1c3 of high res
			{ efx: -116, efy: 5001 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -16, efy: 5001 }, //r2c1 of high res
			{ efx: -27, efy: 5001 }, //r2c2 of high res
			{ efx: -39, efy: 5001 }, //r2c3 of high res
			{ efx: -70, efy: 5001 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -9, efy: 5001 }, //r3c1 of high res
			{ efx: -15, efy: 5001 }, //r3c2 of high res
			{ efx: -26, efy: 5001 }, //r3c3 of high res
			{ efx: -40, efy: 5001 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -5, efy: 5001 }, //r4c1 of high res
			{ efx: -9, efy: 5001 }, //r4c2 of high res
			{ efx: -13, efy: 5001 }, //r4c3 of high res
			{ efx: -24, efy: 5001 }, //r4c4 of high res
		], //row: 4
	],
	r8c9: [
		[
			{ efx: -175, efy: 5001 }, //r1c1 of high res
			{ efx: -310, efy: 5001 }, //r1c2 of high res
			{ efx: -470, efy: 5001 }, //r1c3 of high res
			{ efx: -675, efy: 5001 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -114, efy: 5001 }, //r2c1 of high res
			{ efx: -163, efy: 5001 }, //r2c2 of high res
			{ efx: -284, efy: 5001 }, //r2c3 of high res
			{ efx: -445, efy: 5001 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -62, efy: 5001 }, //r3c1 of high res
			{ efx: -107, efy: 5001 }, //r3c2 of high res
			{ efx: -160, efy: 5001 }, //r3c3 of high res
			{ efx: -239, efy: 5001 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -38, efy: 5001 }, //r4c1 of high res
			{ efx: -54, efy: 5001 }, //r4c2 of high res
			{ efx: -97, efy: 5001 }, //r4c3 of high res
			{ efx: -149, efy: 5001 }, //r4c4 of high res
		], //row: 4
	],
	r8c10: [
		[
			{ efx: -1134, efy: 5001 }, //r1c1 of high res
			{ efx: -1654, efy: 5001 }, //r1c2 of high res
			{ efx: -2217, efy: 5038 }, //r1c3 of high res
			{ efx: -3264, efy: 5559 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -619, efy: 5001 }, //r2c1 of high res
			{ efx: -1009, efy: 5001 }, //r2c2 of high res
			{ efx: -1502, efy: 5001 }, //r2c3 of high res
			{ efx: -1986, efy: 5001 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -402, efy: 5001 }, //r3c1 of high res
			{ efx: -587, efy: 5001 }, //r3c2 of high res
			{ efx: -822, efy: 5001 }, //r3c3 of high res
			{ efx: -1296, efy: 5001 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -203, efy: 5001 }, //r4c1 of high res
			{ efx: -350, efy: 5001 }, //r4c2 of high res
			{ efx: -521, efy: 5001 }, //r4c3 of high res
			{ efx: -685, efy: 5001 }, //r4c4 of high res
		], //row: 4
	],
	r8c11: [
		[
			{ efx: -4362, efy: 6352 }, //r1c1 of high res
			{ efx: -5411, efy: 7322 }, //r1c2 of high res
			{ efx: -6779, efy: 9571 }, //r1c3 of high res
			{ efx: -8122, efy: 11981 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -2841, efy: 5154 }, //r2c1 of high res
			{ efx: -3847, efy: 5684 }, //r2c2 of high res
			{ efx: -4725, efy: 7157 }, //r2c3 of high res
			{ efx: -5860, efy: 8935 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -1791, efy: 5001 }, //r3c1 of high res
			{ efx: -2322, efy: 5114 }, //r3c2 of high res
			{ efx: -3219, efy: 5971 }, //r3c3 of high res
			{ efx: -4079, efy: 6967 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -1079, efy: 5001 }, //r4c1 of high res
			{ efx: -1528, efy: 5001 }, //r4c2 of high res
			{ efx: -1907, efy: 5001 }, //r4c3 of high res
			{ efx: -2612, efy: 5388 }, //r4c4 of high res
		], //row: 4
	],
	r8c12: [
		[
			{ efx: -9323, efy: 14377 }, //r1c1 of high res
			{ efx: -9257, efy: 16902 }, //r1c2 of high res
			{ efx: -9458, efy: 19593 }, //r1c3 of high res
			{ efx: -10000, efy: 22260 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -7075, efy: 11241 }, //r2c1 of high res
			{ efx: -8017, efy: 13382 }, //r2c2 of high res
			{ efx: -8812, efy: 15828 }, //r2c3 of high res
			{ efx: -9631, efy: 18387 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -4883, efy: 8051 }, //r3c1 of high res
			{ efx: -5883, efy: 10135 }, //r3c2 of high res
			{ efx: -6773, efy: 12327 }, //r3c3 of high res
			{ efx: -7519, efy: 14463 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -3393, efy: 5861 }, //r4c1 of high res
			{ efx: -3979, efy: 7323 }, //r4c2 of high res
			{ efx: -4765, efy: 8958 }, //r4c3 of high res
			{ efx: -5586, efy: 11014 }, //r4c4 of high res
		], //row: 4
	],
	r8c13: [
		[
			{ efx: -10000, efy: 24754 }, //r1c1 of high res
			{ efx: -10000, efy: 27391 }, //r1c2 of high res
			{ efx: -10000, efy: 30001 }, //r1c3 of high res
			{ efx: -10000, efy: 32281 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -9501, efy: 20629 }, //r2c1 of high res
			{ efx: -10000, efy: 23092 }, //r2c2 of high res
			{ efx: -10000, efy: 25599 }, //r2c3 of high res
			{ efx: -9756, efy: 27656 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -7972, efy: 16646 }, //r3c1 of high res
			{ efx: -8717, efy: 18933 }, //r3c2 of high res
			{ efx: -9227, efy: 21167 }, //r3c3 of high res
			{ efx: -8974, efy: 23184 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -6141, efy: 12773 }, //r4c1 of high res
			{ efx: -6706, efy: 14822 }, //r4c2 of high res
			{ efx: -7230, efy: 16985 }, //r4c3 of high res
			{ efx: -7541, efy: 18770 }, //r4c4 of high res
		], //row: 4
	],
	r8c14: [
		[
			{ efx: -10000, efy: 34646 }, //r1c1 of high res
			{ efx: -10000, efy: 36971 }, //r1c2 of high res
			{ efx: -10000, efy: 38887 }, //r1c3 of high res
			{ efx: -10000, efy: 40832 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -10000, efy: 29875 }, //r2c1 of high res
			{ efx: -10000, efy: 32138 }, //r2c2 of high res
			{ efx: -9831, efy: 33887 }, //r2c3 of high res
			{ efx: -10000, efy: 35715 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -9201, efy: 25266 }, //r3c1 of high res
			{ efx: -9693, efy: 27307 }, //r3c2 of high res
			{ efx: -9246, efy: 29040 }, //r3c3 of high res
			{ efx: -9228, efy: 30792 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -7766, efy: 20707 }, //r4c1 of high res
			{ efx: -7906, efy: 22696 }, //r4c2 of high res
			{ efx: -7941, efy: 24269 }, //r4c3 of high res
			{ efx: -7865, efy: 25927 }, //r4c4 of high res
		], //row: 4
	],
	r8c15: [
		[
			{ efx: -10000, efy: 42709 }, //r1c1 of high res
			{ efx: -10000, efy: 44020 }, //r1c2 of high res
			{ efx: -10000, efy: 45687 }, //r1c3 of high res
			{ efx: -10000, efy: 47081 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -10000, efy: 37591 }, //r2c1 of high res
			{ efx: -9744, efy: 38981 }, //r2c2 of high res
			{ efx: -9817, efy: 40387 }, //r2c3 of high res
			{ efx: -9227, efy: 41828 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -9171, efy: 32497 }, //r3c1 of high res
			{ efx: -8891, efy: 33894 }, //r3c2 of high res
			{ efx: -8543, efy: 35280 }, //r3c3 of high res
			{ efx: -8032, efy: 36606 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -7688, efy: 27621 }, //r4c1 of high res
			{ efx: -7524, efy: 28905 }, //r4c2 of high res
			{ efx: -7253, efy: 30230 }, //r4c3 of high res
			{ efx: -6872, efy: 31582 }, //r4c4 of high res
		], //row: 4
	],
	r8c16: [
		[
			{ efx: -9764, efy: 47060 }, //r1c1 of high res
			{ efx: -9163, efy: 47436 }, //r1c2 of high res
			{ efx: -8347, efy: 50001 }, //r1c3 of high res
			{ efx: -7771, efy: 49252 }, //r1c4 of high res
		], //row: 1
		[
			{ efx: -8764, efy: 42869 }, //r2c1 of high res
			{ efx: -8193, efy: 43896 }, //r2c2 of high res
			{ efx: -7479, efy: 44935 }, //r2c3 of high res
			{ efx: -6995, efy: 45675 }, //r2c4 of high res
		], //row: 2
		[
			{ efx: -7663, efy: 37674 }, //r3c1 of high res
			{ efx: -7202, efy: 38716 }, //r3c2 of high res
			{ efx: -6616, efy: 39687 }, //r3c3 of high res
			{ efx: -6214, efy: 40466 }, //r3c4 of high res
		], //row: 3
		[
			{ efx: -6596, efy: 32577 }, //r4c1 of high res
			{ efx: -6232, efy: 33583 }, //r4c2 of high res
			{ efx: -5754, efy: 34606 }, //r4c3 of high res
			{ efx: -5435, efy: 35342 }, //r4c4 of high res
		], //row: 4
	],
};
