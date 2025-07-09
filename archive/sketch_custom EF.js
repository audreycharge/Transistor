/* ------------------------------- 
Authors: Ren Zheng, Azad Naeemi
Contact: renzheng112@gmail.com
------------------------------- */

// KEY
// !!! go back to, need to revisit
// ? question

// Variables ============================================================
// P5 canvas
let context;

// factors for scaling drawing to fit various screen sizing
let scale_x = 1296;
let scale_y = 710;
let sx = 0;
let sy = 0;
let localElectricFldx = 0;
let localElectricFldy = 0;
let Epeak = 10;

// color variables for drawing
let color = {
	bg: [18, 18, 18],
	white: [255, 255, 255],
	red2: [255, 40, 0],
	electron: [254, 246, 182],
	hole: [125, 241, 148],
	// electron: [255, 255, 0],
	// grey: [175, 175, 175],
	// pos: [125, 241, 148],
	// posDim: [65, 46, 46],
	// posDim: [65, 46, 46],
	// neg: [255, 247, 174],
	// negDim: [18, 66, 104],
	// sign: [31, 145, 54],
	// signDim: [50, 31, 31],
	// battery: [230, 226, 188],
	// net: [117, 190, 255],
	// neutral: [79, 79, 79],
	// scanner: [218, 107, 107],
};

// Intervals  ===================================================================
let generationRateInterval;
let run45;
let interval_45 = 2000;

// Charges + Electrons + Holes ============================================================
let fixedCharges = []; // fixed positive + negative charges
let electrons = [];
let holes = [];
// let initialHoles = []; // holes that exist when scene starts
// let initialElectrons = []; // electrons that exist when scene starts
// let generatedElectrons = []; // electrons that are generated
// let generatedHoles = []; // holes that are generated
let generationRate = 500; // generation rate, the smaller the more frequent
let electronCount;
let holeCount;

// Effects for generation & recombination ===============================================

let generationEffects = []; // circle that appears around a generated pair
let recombineEffects = []; // circle that appears around a recombined pair
let recombinedElectrons = []; // electron that appears briefly at recombination location
let recombinedHoles = []; // hole that appears briefly at recombination location
let recombinePositions = []; //middle position store
let recombineCount = 0; //disappear numChargesber count

//
let botzDistribution = [];

// !!!
let willScatter; // is this needed?
let voltageDepletionWidth = 1; // need to change, from PN
let bandDiagramHeight = 1; // need to change, from PN

const unit = 8;
// dimensions
const base = {
	x: unit * 1,
	y: unit * 16,

	width: unit * 85,
	height: unit * 50,

	// metal + insulator
	metalWidth: unit * 52,
	metalHeight: unit * 6,

	// source + drain
	sourceWidth: unit * 20,
	sourceHeight: unit * 20,
	depletionPadding: unit * 4,

	// rectangle corner radius
	smallRadius: unit,
	largeRadius: unit,
};

// dependent on initial base
const base2 = {
	drainX: base.x + base.width - base.sourceWidth,
	drainEndX: base.x + base.width,
	drainEndY: base.y + base.sourceHeight,
	sourceEndX: base.x + base.sourceWidth,
	sourceEndY: base.y + base.sourceHeight,
	baseEndX: base.x + base.width,
	baseEndY: base.y + base.height,
};

// Tools ============================================================
function qs(selector) {
	return document.querySelector(selector);
}

function scene(numCharges) {
	return sceneCount == numCharges;
}
/**
 * Default text style
 */
function styleText() {
	noStroke();
	fill(...color.white);
	textSize(12);

	textStyle(NORMAL);
	textFont("Sans-serif");
}

function scaleWindow() {
	sx = windowWidth / scale_x;
	sy = windowHeight / scale_y;
}

// Initial Function Calls ============================================================

// Updating Functions ============================================================

function setup() {
	sx = windowWidth / scale_x;
	sy = windowHeight / scale_y;
	canvas = createCanvas((2 * windowWidth) / 4 + 40, windowHeight);
	canvas.parent("visualization");
	context = canvas.drawingContext;
	frameRate(10);
	scaleWindow();

	// reset all variables
	resetScene();

	// regenerate();
}

function getElectricField(xx, yy) {
	//xx and yy are in micrometer

	localElectricFldx = 0;
	localElectricFldy = 0;
	
	///////// On the Source side
	if (yy < 0.94 && xx > 0.94 && xx <= 1){
		localElectricFldx = (xx - 0.94)/(1-0.94)*Epeak;
		localElectricFldy = 0;
	}
	if (yy < 0.94 && xx > 1 && xx <= 1.3){
		localElectricFldx = (1.3 - xx)/(1.3 - 1)*Epeak;
		localElectricFldy = 0;
	}
	if (xx <0.94 && yy >0.94 && yy <= 1){
		localElectricFldx = 0;
		localElectricFldy = (yy - 0.94)/(1-0.94)*Epeak;
	}
	if (xx <0.94 && yy >1 && yy <= 1.3){
		localElectricFldx = 0;
		localElectricFldy = (1.3 - yy)/(1.3 - 1)*Epeak;
	}
		if (xx > 1 && xx <1.3 && yy >1 && yy < 1.3){
			localElectricFldx = (1.3 - xx)/(1.3 - 1)*Epeak;
			localElectricFldy = (1.3 - yy)/(1.3 - 1)*Epeak;
}
////////////////////// On the Drain side
	if (yy < 0.94 && xx > 3 && xx <= 3.06){
		localElectricFldx = -(xx - 3.06)/(3-3.06)*Epeak;
		localElectricFldy = 0;
	}
	if (yy < 0.94 && xx > 2.7 && xx <= 3){
		localElectricFldx = -(2.7 - xx)/(2.7 - 3)*Epeak;
		localElectricFldy = 0;
	}
	if (xx > 0.306 && yy > 0.94 && yy <= 1){
		localElectricFldx = 0;
		localElectricFldy = (yy - 0.94)/(1-0.94)*Epeak;
	}
	if (xx > 0.306 && yy >1 && yy <= 1.3){
		localElectricFldx = 0;
		localElectricFldy = (1.3 - yy)/(1.3 - 1)*Epeak;
	}
	if (xx > 2.7 && xx <3 && yy >1 && yy < 1.3){
		localElectricFldx = -(xx - 3.06)/(3-3.06)*Epeak;
		localElectricFldy = (1.3 - yy)/(1.3 - 1)*Epeak;
}


//console.log('yy', yy);
console.log('localElectricFldx', localElectricFldx);
console.log('localElectricFldy', localElectricFldy);

}

function draw() {
	sx = (windowWidth / scale_x) * 0.95;
	sy = (windowHeight / scale_y) * 0.95;
	scale(sx);
	background(...color.bg);

	if (sceneCount > 0) {
		drawBase(base);
		drawCharges();
		getElectricField(2.8, 0.5 );

	}
}

function resetScene() {
	background(...color.bg);
	fixedCharges = [];
	initCharges();
}

// Updating Functions ============================================================

function initCharges() {
	let fixedPosChargesLeft = 15;
	let fixedPosChargesRight = 15;
	let fixedNegCharges = 40;

	holeCount = 40;
	electronCount = 20; // source and drain each

	let buffer = 12; // draw inside box borders
	// let electronCount =
	// 	Math.pow(100, (Math.log10(Math.round(addedDopants / 5)) - 8) / 2) / 1000;

	// source fixed positive charges
	for (let i = 0; i < fixedPosChargesLeft; i++) {
		let x = random(base.x + buffer, base2.sourceEndX - buffer);
		let y = random(base.y + buffer, base2.sourceEndY - buffer);
		fixedCharges.push(new Appear(x, y, 10, "p"));
	}

	// drain fixed positive charges
	for (let i = 0; i < fixedPosChargesRight; i++) {
		let x = random(base2.drainX + buffer, base2.drainEndX - buffer);
		let y = random(base.y + buffer, base2.drainEndY - buffer);
		fixedCharges.push(new Appear(x, y, 10, "p"));
	}

	for (let i = 0; i < fixedNegCharges; i++) {
		let x = 0;
		let y = 0;

		// regenerate position if in source OR drain
		while (
			(x < base2.sourceEndX + buffer && y < base2.sourceEndY) ||
			(x > base2.drainX - buffer && y < base2.sourceEndY)
		) {
			x = random(base.x + buffer, base2.baseEndX);
			y = random(base.y + buffer, base.y + base.height);
		}

		fixedCharges.push(new Appear(x, y, 10, "n"));
	}

	random_botz = botzDistribution;

	// initiate substrate holes
	for (let i = 0; i < holeCount; i++) {
		// regenerate position if in source OR drain
		let x = 0;
		let y = 0;
		while (
			(x < base2.sourceEndX + buffer && y < base2.sourceEndY) ||
			(x > base2.drainX - buffer && y < base2.sourceEndY)
		) {
			x = random(base.x + buffer, base2.baseEndX);
			y = random(base.y + buffer, base.y + base.height);
		}

		let newCharge = new Charge(x, y, 10, "h", "i");
		newCharge.botz =
			random_botz[Math.floor(Math.random() * random_botz.length)];
		holes.push(newCharge);
	}

	for (let i = 0; i < electronCount; i++) {
		// initiate source electrons
		let x = random(base.x + buffer, base.x + base.sourceWidth - buffer);
		// let b = random(30*sy,730*sy);
		let y = random(base.y + buffer, base.y + base.sourceHeight - buffer);

		let newCharge = new Charge(x, y, 10, "e", "i");

		newCharge.botz =
			random_botz[Math.floor(Math.random() * random_botz.length)];
		electrons.push(newCharge);

		// initiate drain electrons
		x = random(
			base.x + base.width - base.sourceWidth + buffer,
			base.x + base.width - buffer
		);
		// let b = random(30*sy,730*sy);
		y = random(base.y + buffer, base.y + base.sourceHeight - buffer);
		newCharge = new Charge(x, y, 10, "e", "i");
		newCharge.botz =
			random_botz[Math.floor(Math.random() * random_botz.length)];
		electrons.push(newCharge);
	}
}

function regenerate() {
	// // Regenerate pairs at time intervals
	// setInterval(time_graph, 0.00000000002);
	// // allow for recombine during interval
	// setInterval(toggleRecombine, 2000);

	// generate balls based on frequency
	run45 = setInterval(function () {
		generateCharges(1);
	}, interval_45); // scene changing T

	// run_outer = setInterval(function () {
	// 	generateCharges_outer(1);
	// }, 1000 / generateScene3); // scene changing T

	// count_pn = setInterval(function () {
	// 	count_pn_f();
	// }, interval_pn);

	// scatteringInterval = setInterval(function () {
	// 	scattering();
	// }, 50); // scattring time
}

//generate electron hole pairs based on frequency
function generateCharges(numCharges) {
	// reset interval
	clearInterval(run45);
	interval_45 = 4000 / generationRateInterval;

	run45 = setInterval(function () {
		generateCharges(1);
	}, generationRate);

	// if (scene(1) || scene(2) || scene(3)) {
	// if (electronCount > 0) {
	// 	generatedElectrons = [];
	// 	generatedHoles = [];
	// 	recombinationRate = 0;
	// } else if (electronCount == 0) {
	for (let i = 0; i < numCharges; i++) {
		let x = random(base.x, base2.baseEndX);
		let y = random(base.y, base2.baseEndY);

		console.log("gen xy", x, y);

		generationEffects.push(new Appear(x, y, 10, 2));

		//let xx = findClosestValue(electronLine, a);
		// let xx = findClosestValue(electronBand, a);

		let newElectron = new Charge(x, y, 10, "e", "g");
		// aa.origin.x = xx;
		// aa.top = 1;
		electrons.push(newElectron);

		// let yy = findClosestValue(holeBand, a);

		let newHole = new Charge(x, y, 10, "h", "g");
		// bb.origin.y = yy;
		// bb.top = 1;
		holes.push(newHole);
	}
	// }
	// }
}

function findClosestValue(array, targetX) {
	// Initialize closest diff with a very large value
	let closestDiff = 1000;
	// Initialize closestBValue as undefined
	let closestBValue;

	for (let i = 0; i < array.length; i++) {
		// Calculate absolute difference between targetX and current x value
		let diff = Math.abs(targetX - array[i][0]);
		// If this difference is less than closest diff found so far
		if (diff < closestDiff) {
			// Update closest diff and closestBValue
			closestDiff = diff;
			closestBValue = array[i][1]; // Assuming 'b' is represented as second element in sub-array
		}
	}

	// Return the 'b' value of the element with the x value closest to targetX
	return closestBValue;
}

function updateBotz() {
	const norm_vel = [
		{ nv: 0.1, quantity: 3 },
		{ nv: 0.2, quantity: 10 },
		{ nv: 0.3, quantity: 21 },
		{ nv: 0.4, quantity: 35 },
		{ nv: 0.5, quantity: 49 },
		{ nv: 0.6, quantity: 63 },
		{ nv: 0.7, quantity: 74 },
		{ nv: 0.8, quantity: 82 },
		{ nv: 0.9, quantity: 86 },
		{ nv: 1.0, quantity: 86 },
		{ nv: 1.1, quantity: 83 },
		{ nv: 1.2, quantity: 77 },
		{ nv: 1.3, quantity: 69 },
		{ nv: 1.4, quantity: 59 },
		{ nv: 1.5, quantity: 50 },
		{ nv: 1.6, quantity: 40 },
		{ nv: 1.7, quantity: 32 },
		{ nv: 1.8, quantity: 24 },
		{ nv: 1.9, quantity: 18 },
		{ nv: 3.0, quantity: 13 },
		{ nv: 2.1, quantity: 9 },
		{ nv: 2.2, quantity: 6 },
		{ nv: 2.3, quantity: 4 },
		{ nv: 3.5, quantity: 3 },
		{ nv: 3, quantity: 2 },
		{ nv: 3, quantity: 1 },
		{ nv: 3, quantity: 1 },
	];

	for (let i = 0; i < norm_vel.length; i++) {
		let count = 0;
		while (count < norm_vel[i].quantity) {
			botzDistribution.push(3 * norm_vel[i].nv);
			count++;
		}
	}
}

function drawCharges() {
	for (let i = 0; i < fixedCharges.length; i++) {
		fixedCharges[i].display();
		fixedCharges[i].update();
	}

	for (let i = 0; i < electrons.length; i++) {
		electrons[i].display();
		electrons[i].updateAppear();
		// electrons[i].update();

		if (electrons[i].appear > 255) {
			// electrons[i].straight_walk();
			// if (electrons[i].position.y > 49 * sy) {
			electrons[i].move();
			// }
		}
	}

	for (let i = 0; i < holes.length; i++) {
		holes[i].display();
		holes[i].updateAppear();
		// holes[i].update();

		if (holes[i].appear > 255) {
			// holes[i].straight_walk();
			// if (holes[i].position.y > 49 * sy) {
			holes[i].move();
			// }
		}
	}

	for (let i = 0; i < generationEffects.length; i++) {
		if (generationEffects[i].alpha < 1) {
			generationEffects.splice(i, 1);
		}
	}

	// Show appear effect when electron is generated
	for (let i = 0; i < generationEffects.length; i++) {
		generationEffects[i].display();
		generationEffects[i].update();
	}
}

function scattering() {
	//timebetween scatter
	if (scatteringCount_c > 2) {
		//time when straight line no scatter

		willScatter = false;
	} else if (scatteringCount_c <= 2) {
		//time to scatter 2s
		willScatter = true;
	}

/////////Note from Azad
///We need to add the code that once scatteringCount == 0 randomizes the velocity for all electreons and holes from scattering() in MOSCAP here. I have copied the code here in comments
//// Christina had intial and generated electrons and holes in different arrays
//// movingVelocity is the speed without direction (just a number)
//// direction is a vector that shows the relative values of the speeds in the x and y direction. For example, (1,1) means velocity in 45 degree angle. Although I just notice that we need to normalize this vector so that it does not affect the speed. 
//////////////
// function moveCharges(chargeArray, band) {
// 	for (let i = 0; i < chargeArray.length; i++) {
// 		chargeArray[i].botz =
// 			getRandomBotz[Math.floor(Math.random() * getRandomBotz.length)];
// 		let closestToBand = findClosestValue(band, chargeArray[i].position.x);
// 		chargeArray[i].bandOrigin.y = closestToBand;
// 		chargeArray[i].movingVelocity = chargeArray[i].botz;
// 		chargeArray[i].direction = createVector(random(-1, 1), random(-1, 1));
// 		chargeArray[i].velocity = p5.Vector.mult(
// 			chargeArray[i].direction,
// 			chargeArray[i].movingVelocity
// 		);
// 	}
// }

// if (scatteringCount == 0) {
// 	moveCharges(initElectrons, electronBand);
// 	moveCharges(genElectrons, electronBand);
// 	moveCharges(initHoles, holeBand);
// 	moveCharges(genHoles, holeBand);
// 	scatteringCount = parseInt(scatteringCountInput) + 2;
// }


///////////////



	scatteringCount_c -= 1;

	if (scatteringCount_c == 0) {
		scatteringCount_c = parseInt(scatteringCount) + 2;
	}
}

// Drawing Functions ============================================================
function drawSourceBaseDepletionRegion() {
	strokeWeight(1.2);
	stroke(...color.red2, 210);
	fill(...color.red2, 20);
	canvas.drawingContext.setLineDash([7, 3]);
	// source depletion region
	rect(
		base.x + base.width - base.sourceWidth - base.depletionPadding,
		base.y,
		base.sourceWidth + base.depletionPadding,
		base.sourceHeight + base.depletionPadding,
		base.smallRadius
	);
	// drain depletion region
	rect(
		base.x,
		base.y,
		base.sourceWidth + base.depletionPadding,
		base.sourceHeight + base.depletionPadding,
		base.smallRadius
	);
}

function drawFullDepletionRegion() {
	// source + drain + channel depletion region
	strokeWeight(1.2);
	stroke(...color.red2, 210);
	fill(...color.red2, 20);
	canvas.drawingContext.setLineDash([7, 3]);
	beginShape();
	vertex(base.x, base.y);
	vertex(base.x + base.width, base.y);
	vertex(
		base.x + base.width,
		base.y + base.sourceHeight + base.depletionPadding
	);
	vertex(
		base.x + base.width - base.sourceWidth - base.depletionPadding,
		base.y + base.sourceHeight + base.depletionPadding
	);
	vertex(
		base.x + base.width - base.sourceWidth - base.depletionPadding,
		base.y + base.depletionPadding
	);
	vertex(
		base.x + base.sourceWidth + base.depletionPadding,
		base.y + base.depletionPadding
	);
	vertex(
		base.x + base.sourceWidth + base.depletionPadding,
		base.y + base.sourceHeight + base.depletionPadding
	);
	vertex(base.x, base.y + base.sourceHeight + base.depletionPadding);

	endShape(CLOSE);
}

function drawChannel() {
	// source + drain + channel depletion region
	strokeWeight(1.2);
	stroke(...color.yellow, 210);
	fill(...color.yellow, 20);
	canvas.drawingContext.setLineDash([7, 3]);

	rect(base.x, base.y, base.width, base.depletionPadding, base.smallRadius);
}

function drawBase(base) {
	// style depletion regions

	// drawSourceBaseDepletionRegion();
	drawFullDepletionRegion();
	// drawChannel();

	// style bases
	fill(...color.bg);
	stroke(...color.white);
	strokeWeight(1.2);
	canvas.drawingContext.setLineDash([]);

	// source
	rect(base.x, base.y, base.sourceWidth, base.sourceHeight, base.smallRadius);

	// drain
	rect(
		base.x + base.width - base.sourceWidth,
		base.y,
		base.sourceWidth,
		base.sourceHeight,
		base.smallRadius
	);

	// insulator
	rect(
		base.x + (base.width - base.metalWidth) / 2,
		base.y - base.metalHeight,
		base.metalWidth,
		base.metalHeight,
		base.smallRadius
	);

	// metal
	rect(
		base.x + (base.width - base.metalWidth) / 2,
		base.y - base.metalHeight * 2,
		base.metalWidth,
		base.metalHeight,
		base.smallRadius
	);

	noFill();

	// substrate
	rect(base.x, base.y, base.width, base.height, base.largeRadius);

	// text
	styleText();
	textAlign(CENTER);
	text("Substrate", base.x + base.width / 2, base.y + base.height / 2);
	text("Source", base.x + base.sourceWidth / 2, base.y + base.sourceHeight / 2);
	text(
		"Drain",
		base.x + base.width - base.sourceWidth / 2,
		base.y + base.sourceHeight / 2
	);
	text("Metal", base.x + base.width / 2, base.y - base.metalHeight * 1.35);
	text(
		"Insulator",
		base.x + base.width / 2,
		base.y - (base.metalHeight / 2) * 0.75
	);
}
