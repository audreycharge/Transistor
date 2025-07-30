/* ------------------------------- 
Authors: Ren Zheng, Azad Naeemi
Contact: renzheng112@gmail.com
Modified by: Audrey Chung
------------------------------- */

// Tools ============================================================
function qs(selector) {
	// Function: shorthand for querySelector
	return document.querySelector(selector);
}

function scene(num) {
	// Function: shorthand to check current sceneCount
	return sceneCount == num;
}

// [vars] Canvas ============================================================
// P5 canvas
let context;

// factors for scaling drawing to fit various screen sizing
let scale_x = 1366;
let scale_y = 768;
let sx = 0;
let sy = 0;

// [vars] Colors -============================================================
let color = {
	bg: [18, 18, 18],
	white: [255, 255, 255],
	hole: [213, 94, 0],
	electron: [86, 180, 233],
	efx: [230, 159, 0],
	efz: [0, 114, 178],
	graph: [102, 194, 255],
	generation: [0, 158, 115],
	recom: [152, 152, 152],
	brand: [255, 247, 174],
	CDColor: [2, 104, 255], // charge density
	EFColor: [218, 112, 214],
};

// [vars] Dimensions ============================================================
// base dimensions
const unit = 8;
const dim = {
	x: unit * 32, // left edge of transistor
	y: unit * 44, // top edge of transistor

	width: unit * 80, // 640
	height: unit * 40, // 320

	// used for metal + oxide (width)
	metalWidth: unit * 40,
	metalHeight: unit * 5,

	// used for source + drain
	sourceWidth: unit * 20,
	sourceHeight: unit * 20,

	batteryHeight: 20,

	vgY: unit * 26, // inner wire
	vdY: unit * 19, // outer wire
};

// [vars] Transfer charges on wires ============================================================
// all sizing + measurements (dependent on base dimensions)
const base = {
	x: dim.x,
	y: dim.y,
	midX: dim.x + dim.width / 2, // middle of transistor
	endX: dim.x + dim.width, // right of transistor
	endY: dim.y + dim.height, // bottom of transistor

	vgY: dim.vgY,
	vdY: dim.vdY,

	width: dim.width,
	height: dim.height,

	graphX: dim.x - 140, // Z axis
	graphY: dim.y, // X axis

	// gate metal + oxide
	metalX: dim.x + (dim.width - dim.metalWidth) / 2,

	metalWidth: dim.metalWidth,
	metalHeight: dim.metalHeight,
	bottomMetalHeight: 40,

	// source + drain
	sourceWidth: dim.sourceWidth,
	sourceHeight: dim.sourceWidth,

	// rectangle corner radius
	smallRadius: unit,
	largeRadius: unit,

	bandY: 120,

	drainX: dim.x + dim.width - dim.sourceWidth,
	drainEndX: dim.x + dim.width,
	drainEndY: dim.y + dim.sourceHeight,
	sourceEndX: dim.x + dim.sourceWidth,
	sourceEndY: dim.y + dim.sourceHeight,

	batteryWidth: 65,

	leftGroundX: dim.x + dim.sourceWidth / 2 - 40,
	oxideLabelY: dim.y - (dim.metalHeight / 2) * 0.75,

	wire: {
		leftMetal: {
			x: dim.x + dim.sourceWidth / 2,
			y: dim.y - dim.metalHeight,
		},

		vg: {
			x: dim.x + dim.width / 2 - 32,
			y: dim.vgY - 16,
		}, // gate - inner battery

		vd: {
			x: dim.x + dim.width / 2 - 32,
			y: dim.vdY - 16,
		}, // drain - outer battery

		vgLeft: { x: dim.x + dim.sourceWidth / 2, y: dim.vgY },
		vgRight: { x: dim.x + 420, y: dim.vgY },
		topMetal: { x: dim.x + 420, y: dim.y - dim.metalHeight * 2 + 16 },
		vdLeft: { x: dim.x + dim.sourceWidth / 2, y: dim.vdY },
		vdRight: {
			x: dim.x + dim.width - dim.sourceWidth / 2,
			y: dim.vdY,
		},
		rightMetal: {
			x: dim.x + dim.width - dim.sourceWidth / 2,
			y: dim.y - dim.metalHeight,
		},
	},

	bandThreshold: 30, // only charges on top surface (above threshold line) get plotted on band diagram
};

// [vars] Charges + Electrons + Holes ============================================================
let fixedCharges = []; // fixed positive + negative charges
let electrons = []; // all active electrons
let holes = []; // all active holes
let chargeID = 0; // unique ID for charges
let botzDistribution = [];

let scatterCount = 20; // count down to next scatter
let scatterInterval; // how often charges scatter
let willScatter; // used for charge.js to tell charges to scatter or not at current time

let initHoleCount = 200; // initial hole count at beginning of scene
let initElectronCount = 100; // source and drain each

let switchGraph = false; //turn on or off the switch between charge density and electric field graph

// [vars] Effects for generation & recombination ===============================================

let generationEffects = []; // circle that appears around a generated pair
let generationInterval; // how often generation happens
let recomInterval; // how often recombination happens
let intervalRate = 4000; // rate for gen & recom
let recomOn = true; // recombine at current time or not
let recomDistance = 12; //distance for recom
let recomEffectsPositions = []; // stores position of recombination
let recomCount = 0; // track indexes of recombination instances
let recomEffects = []; // stores instances of recombination effect circle
let recomTempElectrons = []; // electron that appears briefly at recombination location
let recomTempHoles = []; // hole that appears briefly at recombination location

let intervals = []; // array to store all intervals to help clear them on reset

// [vars] Battery ============================================================
// images for battery (both directions + on/off)
let batteryPosOff;
let batteryNegOff;
let batteryPosOn;
let batteryNegOn;

// [vars] Transfer charges on wires ============================================================

// on / off
let vgOn; // gate on/off
let vdOn; // drain on/off
let vgCharge; // actual vg charge amount in V
let vdCharge; // actual vd charge amount in mA

let exOn; // electric field on/off

let dopants = 0; // value controlling the gradient of fixed charges distribution
let dopantBuckets = []; // array to store number of fixed negative charges per column
let holeBuckets = []; // aray to store number of holes per column;
let chargeBuckets = []; // array to store resultant charge per column;
let electricFIeldBuckets = []; // array to store electric field per column

let dis1 = base.wire.leftMetal.y - base.wire.vdLeft.y; // vg left wire length
let dis2 = base.wire.vdRight.x - base.wire.vdLeft.x; // vg middle wire length
let dis3 = base.wire.rightMetal.y - base.wire.vdRight.y; // vg right wire length
let disTotal = dis1 + dis2 + dis3;

let drainCurrent = 0;
let triedVDChange = 0; // if user has used vd slider 3 times in scene 1
// drainCurrentMap: each object -> index 0 = distance between each electron, index 1 = number of electrons (spread out over distance to be continuous loop)
// if distance values are edited, they should still keep relationship between each other
// currently -> distance = 1/drainCurrent * 120
let drainCurrentMap = {
	0: 0,
	7.9: [240, Math.floor(disTotal / 240)],
	11: [120, Math.floor(disTotal / 120)],
	12: [100, Math.floor(disTotal / 100)],
	23: [60, Math.floor(disTotal / 60)],
	49: [26, Math.floor(disTotal / 24)],
	59: [21, Math.floor(disTotal / 20)], // set to 21 instead of 20 (animation speed) so it appears to be animating (if same distance = speed, animation appears to be still)
};

let vgLoopDirection = 0; // left - pos to neg
let vgChargeScreen = 0; // number of charges for animation for vg wire - visual representation
let prevVGChargeScreen; // number of gate charges to animate
let currentVGChargeScreen = 0; // previously animated gate charge
// maps actual vg amount to vg to # electrons animated on the screen
let vgChargeMap = {
	0.0: 0,
	0.5: 8,
	1.0: 16,
	1.3: 20,
};

let vgLoop = []; // contains electrons for animation
let vdLoop = []; // contains electrons for animation
let vgLoopOn = false; // toggles vg battery electron transfer
let vdLoopOn = true; // toggles vd battery electron transfer
let vgLoopAnimated = true; // not currently animating

let metalCharges = []; // positive charges on gate (right above oxide) when vg battery is on
let metalChargesPositions = []; // positions of positive charges at gate
let showmetalCharges = false; // show positive charges on gate

// Band Diagram ============================================================
let bandData = band_vd00_vg00; // set band to initial voltage profile
let bandScale = 1; // change the verticle distribution scale of band diagram
let electronBand = []; // graph negative line
let holeBand = []; // graph green line

// Data for electric field ============================================================
let efGrid = efGrid_vd00_vg00; // set ef data to a initial voltage profile
let hoverColumn = 0; // column of ef data that mouse hover correlates to
let EFData = []; // current electric field data

let graphMode = "both"; // graph ef in x direction, ef in z direction, or both (selected by html ToggleGroup)
let scaleGraphOn = true; // scale graph to highest peak (selected by html switch)

let graphTextSize = 12;

// Displayed parameters ============================================================
let parameters = {
	"Source/Drain Doping Density": "",
	"Substrate Doping Density": "",
	"Oxide thickness": "2nm",
	"Oxide dielectric constant": "3.9",
	"Gate Workfunction": "5.0 eV",
};

/**
 * Default text style
 */
function styleText() {
	noStroke();
	fill(...color.white);
	textSize(12);

	textStyle(NORMAL);
	textAlign(LEFT);
	textFont("Sans-serif");
}

function scaleWindow() {
	sx = windowWidth / scale_x;
	sy = windowHeight / scale_y;
}

// Updating Functions ============================================================

function setup() {
	sx = windowWidth / scale_x;
	sy = windowHeight / scale_y;
	canvas = createCanvas(windowWidth / 2 + 200, windowHeight);
	canvas.parent("visualization");
	context = canvas.drawingContext;
	frameRate(10);
	scaleWindow();
	resetScene();
	batteryPosOff = loadImage("batteryPosOff.png");
	batteryNegOff = loadImage("batteryNegOff.png");
	batteryPosOn = loadImage("batteryPosOn.png");
	batteryNegOn = loadImage("batteryNegOn.png");
	groundImg = loadImage("ground.png");
	leftGroundImg = loadImage("leftGround.png");
}

function scaleToWindow() {
	// Function: scale to window size
	if (windowWidth > 1600) {
		sx = (windowWidth * 0.85) / scale_x;
		sy = (windowHeight * 0.85) / scale_y;
	} else {
		sx = (windowWidth * 0.95) / scale_x;
		sy = (windowHeight * 0.95) / scale_y;
	}
}

function draw() {
	if (sceneCount >= 1) {
		scaleToWindow(); // set scale based on current window size
		scale(sx); // p5.js function (automatically scales canvas)
		background(...color.bg); // start with blank

		if (sceneCount > 0) {
			drawBase();
			// drawParameters();
			drawVDExplain();
			updateCharges();
			// drawWires();
			drawBandDiagram();
			drawGraph();
			// updateWireElectrons();
			drawMetalCharges();
			stabilizeChargeCount();
		}
	}
}

function stabilizeChargeCount() {
	// Function: stabilize numbers of charges

	// stabilize hole count =======================================================================================
	// constantly count number of holes in transistor
	// if number dips lower than original amount, bring some holes from bottom metal into transistor (create new holes to represent existing holes)

	// clean out holes that are below transistor - for code performance
	for (let index = 0; index < holes.length; index++) {
		const hole = holes[index];
		let buffer = 50; // allow holes to leave first before getting spliced, allows code in charge.js that brings hole back up for each hole that leaves transistor
		if (hole.position.y > base.endY + buffer) {
			holes.splice(index, 1);
		}
	}

	// count number of holes
	let numHolesInTransistor = holes.filter(
		(hole) => hole.position.y < base.endY
	).length; // currently stabilizes around 215

	// if hole count drops below original hole count, bring some holes from bottom metal
	if (numHolesInTransistor < initHoleCount) {
		var newCharge = new Charge(
			random(base.x, base.endX),
			base.endY,
			"h",
			chargeID,
			"g"
		);
		newCharge.direction = createVector(random(-1, 1), -1);
		// newCharge.movingVelocity = this.movingVelocity;
		newCharge.velocity = createVector(0, -10);
		newCharge.botz =
			botzDistribution[Math.floor(Math.random() * botzDistribution.length)];
		newCharge.chargeCreated = true;
		chargeID++;
		holes.push(newCharge);
	}

	// stabilize electron count =======================================================================================

	// constantly count number of electrons in source / drain
	// if number dips lower than original amount, bring some electrons from left / right metal into source / drain (create new electrons to represent existing electrons)

	// SOURCE
	// count number of electrons in source
	let numElectronsInSource = electrons.filter(
		(electron) => electron.position.x < base.sourceEndX
	).length;

	// if it dips below the initial count, reinsert more from the metal above
	if (numElectronsInSource < initElectronCount) {
		var newCharge = new Charge(
			// random(base.x, base.sourceEndX),
			random(base.x, base.x),
			base.y,
			"e",
			chargeID,
			"g"
		);
		newCharge.direction = createVector(random(-1, 1), 1);
		newCharge.velocity = createVector(0, 10);
		newCharge.botz =
			botzDistribution[Math.floor(Math.random() * botzDistribution.length)];
		newCharge.chargeCreated = true;
		chargeID++;
		electrons.push(newCharge);
	}

	// DRAIN
	// count number of electrons in drain
	let numElectronsInDrain = electrons.filter(
		(electron) => electron.position.x > base.drainX
	).length;

	// if it dips below the initial count, reinsert more from the metal above
	if (numElectronsInDrain < initElectronCount) {
		var newCharge = new Charge(
			random(base.drainX, base.drainEndX),
			base.y,
			"e",
			chargeID,
			"g"
		);
		newCharge.direction = createVector(random(-1, 1), 1);
		newCharge.velocity = createVector(0, 10);
		newCharge.botz =
			botzDistribution[Math.floor(Math.random() * botzDistribution.length)];
		newCharge.chargeCreated = true;
		chargeID++;
		electrons.push(newCharge);
	}
}

function resetScene() {
	background(...color.bg);

	// reset all variables
	fixedCharges = [];
	electrons = [];
	holes = [];
	electronBand = [];
	holeBand = [];
	chargeID = 0;
	botzDistribution = [];
	scatterCount = 20;
	willScatter = false;
	EFData = [];
	generationInterval = 0;
	generationEffects = [];
	recomEffects = [];
	recomEffectsPositions = [];
	recomCount = 0;
	recomTempHoles = [];
	recomTempElectrons = [];
	metalCharges = [];
	showmetalCharges = false;
	vdOn = false;
	vgCharge = 0;
	vdCharge = 0;
	drainCurrent = 0;
	vgLoop = [];
	vdLoop = [];
	vgLoopOn = false;
	vdLoopOn = false;
	vgChargeScreen = 0;
	prevVGChargeScreen = 0;
	currentVGChargeScreen = 0;
	addToMetalCharges = 0;
	removeFromMetalCharges = 0;
	vgLoopAnimated = true;
	triedVDChange = 0;
	vgLoopDirection = 0;

	// initialize charges + other params
	initCharges();
	updateBotz();
	setIntervals();
	updateProfile(vdCharge, vgCharge);

	// reset animations
	if (sceneCount != 2) {
		resetVDLoop();
	}

	if (sceneCount != 1) {
		resetVGLoop();
	}

	// reset html sliders
	if (sceneCount >= 1) {
		let vdSlider = document.querySelector(`.vdSlider${sceneCount}`);
		if (vdSlider) {
			vdSlider.value = 0;
		}

		let vgSlider = document.querySelector(`.vgSlider${sceneCount}`);
		if (vgSlider) {
			vgSlider.value = 0;
		}

		// let dopeSlider = document.querySelector(`.dopeSlider${sceneCount}`);
		// if (dopeSlider) {
		// 	dopeSlider.value = 0;
		// }

		toggleVGSlider("on");
	}

	// reset html toggles
	if (sceneCount >= 1) {
		scaleGraphOn = true;
		let scaleGraphToggle = document.querySelector(
			`#scaleGraphToggle${sceneCount}`
		);
		scaleGraphToggle.checked = true;

		// reset toggleGroup and graphMode to both x & z
		graphMode = "both";
		let toggleGroup = document.querySelector(`#toggleBoth${sceneCount}`);
		toggleGroup.checked = true;
	}
}

// Updating Functions ============================================================

function resetVGLoop(direction) {
	// Function: Resets gate electrons to initial animating position depending on direction
	prevVGCharge = 0;
	vgLoop = []; // clear all electrons in array
	for (let i = 0; i < vgChargeScreen; i++) {
		let x, y;
		let distance = 20;
		if (direction == 0) {
			x = base.wire.vgRight.x;
			y = base.wire.topMetal.y + i * distance;
		} else {
			x = base.wire.vgLeft.x + i * distance;
			y = base.wire.vgLeft.y;
		}

		// add all electrons to animate to the array
		vgLoop.push(new wireCharge(x, y, "vg"));
	}
}

function initCharges() {
	// Function: Initialize charges at beginning of scene

	// Fixed charges halved only for visual purposes and keep less crowded (in reality they are the same amount), visually you can't tell if they match in number
	let fixedNegCharges = initHoleCount;
	let fixedPosCharges = initElectronCount / 2;
	let buffer = 12; // draw inside box borders

	// initialize fixed positive charges in source
	// for (let i = 0; i < fixedPosCharges; i++) {
	// 	let x = random(base.x + buffer, base.sourceEndX - buffer);
	// 	let y = random(base.y + buffer, base.sourceEndY - buffer);
	// 	fixedCharges.push(new Charge(x, y, "fp", chargeID));
	// }

	// initialize fixed positive charges in source
	// for (let i = 0; i < fixedPosCharges; i++) {
	// 	let x = random(base.drainX + buffer, base.drainEndX - buffer);
	// 	let y = random(base.y + buffer, base.drainEndY - buffer);
	// 	fixedCharges.push(new Charge(x, y, "fp", chargeID));
	// }

	// initialize fixed negative charges in substrate
	let sections = 5;
	let dotCount = []
	// let d = 16; //0-16
	let sec = base.width/sections;
	let a1 = (fixedNegCharges*2/sections - (sections - 1)*dopants)/2;
	// let an = a1 + (sections-1)*d;
	dotCount.push(a1);

	for (let n = 1; n < sections; n++) {
		an = a1 + n*dopants
		dotCount.push(an);
	}

	for (let i = 0; i < sections;i++) {
		for (let fn = 0; fn < dotCount[i]; fn++) {
			let x = 0;
			let y = 0;
			x = random(sec*i + base.x + buffer, sec*(i+1)+ base.x - buffer)
			y = random(base.y + buffer, base.y + base.height)
			fixedCharges.push(new Charge(x, y, "fn", chargeID));
			
			let newCharge = new Charge(x, y, "h", chargeID, "i");
			newCharge.botz =
				botzDistribution[Math.floor(Math.random() * botzDistribution.length)];
			holes.push(newCharge);
			chargeID++;
		}
	}

	let tempholes = holes.slice();
	let bucketwidth = base.width/20;
	dopantBuckets = [];

	for (let b = 0; b < 20; b++) {
		dopantBuckets.push(0);
		let bucketX = base.x + bucketwidth*(b+1)
		for (let h = 0; h < tempholes.length;h++) {
			if (tempholes[h].x < bucketX) {
				dopantBuckets[b]++;
				tempholes.splice(h,1);
				h--;
			}
		}
	}
	// print(dopantBuckets)


	// for (let i = 0; i < recomEffects.length; i++) {
	// 	if (recomEffects[i].opacity < 1) {
	// 		recomEffects.splice(i, 1);
	// 	}
	// }

	// for (let i = 0; i < fixedNegCharges; i++) {
	// 	let x = 0;
	// 	let y = 0;
	// 	// regenerate position if in source OR drain
	// 	while (
	// 		//extend boundary to whole box
	// 		(x < base.x + buffer && y < base.sourceEndY) ||
	// 		(x > base.drainEndX - buffer && y < base.sourceEndY)
	// 	) {
	// 		x = random(base.x + buffer, base.endX);
	// 		y = random(base.y + buffer, base.y + base.height);
	// 	}
	// 	fixedCharges.push(new Charge(x, y, "fn", chargeID));
	// }

	// initialize holes in substrate
	// for (let i = 0; i < initHoleCount; i++) {
	// 	let x = 0;
	// 	let y = 0;
	// 	// regenerate position if in source OR drain
	// 	while (
	// 		(x < base.x + buffer && y < base.sourceEndY) ||
	// 		(x > base.drainEndX - buffer && y < base.sourceEndY)
	// 	) {
	// 		x = random(base.x + buffer, base.endX);
	// 		y = random(base.y + buffer, base.y + base.height);
	// 	}
	// 	let newCharge = new Charge(x, y, "h", chargeID, "i");
	// 	newCharge.botz =
	// 		botzDistribution[Math.floor(Math.random() * botzDistribution.length)];
	// 	holes.push(newCharge);
	// 	chargeID++;
	// }

	// initialize electrons
	for (let i = 0; i < initElectronCount; i++) {
		// in source
		let x = random(base.x + buffer, base.x + base.sourceWidth - buffer);
		let y = random(base.y + buffer, base.y + base.sourceHeight - buffer);

		let newCharge = new Charge(x, y, "e", chargeID, "i");

		newCharge.botz =
			botzDistribution[Math.floor(Math.random() * botzDistribution.length)];
		electrons.push(newCharge);
		chargeID++;

		// in drain
		x = random(
			base.x + base.width - base.sourceWidth + buffer,
			base.x + base.width - buffer
		);
		y = random(base.y + buffer, base.y + base.sourceHeight - buffer);
		newCharge = new Charge(x, y, "e", chargeID, "i");
		newCharge.botz =
			botzDistribution[Math.floor(Math.random() * botzDistribution.length)];
		electrons.push(newCharge);
		chargeID++;
	}
}

function setIntervals() {
	// intervals set how often an action happens, needs to reset when a scene starts

	// clear all intervals
	intervals.map((a) => {
		clearInterval(a);
		arr = [];
	});

	// set generation interval
	// intervals.push(
	// 	setInterval(function () {
	// 		generateCharges(1);
	// 	}, intervalRate)
	// );

	// set recombination interval
	intervals.push(
		setInterval(function () {
			if (recomOn) {
				recomOn = false;
			} else {
				recomOn = true;
			}
		}, intervalRate)
	);

	// set scatter interval
	intervals.push(
		setInterval(function () {
			scatter();
		}, 100)
	);
}

function generateCharges(numCharges) {
	// Function: generate electron and hole
	for (let i = 0; i < numCharges; i++) {
		let x = random(base.x, base.endX);
		let y = random(base.y, base.endY);
		generationEffects.push(new Charge(x, y, "ge", chargeID));

		let newElectron = new Charge(x, y, "e", chargeID, "g");
		electrons.push(newElectron);

		let newHole = new Charge(x, y, "h", chargeID, "g");
		holes.push(newHole);

		chargeID += 1;
	}
}

function updateBotz() {
	const normVelocity = [
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

	for (let i = 0; i < normVelocity.length; i++) {
		let count = 0;
		while (count < normVelocity[i].quantity) {
			botzDistribution.push(3 * normVelocity[i].nv);
			count++;
		}
	}
}

function recom(electrons, holes) {
	// Function: check for electrons and holes that are within recombination distance and recombine
	for (let i = 0; i < electrons.length; i++) {
		for (let k = 0; k < holes.length; k++) {
			if (
				abs(electrons[i].position.x - holes[k].position.x) < recomDistance &&
				abs(electrons[i].position.y - holes[k].position.y) < recomDistance &&
				electrons[i].id != holes[k].id &&
				electrons[i].show &&
				holes[k].show
			) {
				// if hole and electron within recom distance, disable them
				electrons[i].stop();
				holes[k].stop();
				electrons[i].hide();
				holes[k].hide();

				recomEffectsPositions.push(
					p5.Vector.div(
						p5.Vector.add(holes[k].position, electrons[i].position),
						2
					)
				);

				// initialize recombination effect and temp hole + electron
				recomEffects.push(
					new Charge(
						recomEffectsPositions[recomCount].x,
						recomEffectsPositions[recomCount].y,
						"re",
						recomCount
					)
				);
				recomTempElectrons.push(
					new Charge(
						electrons[i].position.x,
						electrons[i].position.y,
						"te",
						recomCount
					)
				);
				recomTempHoles.push(
					new Charge(holes[k].position.x, holes[k].position.y, "th", recomCount)
				);

				recomCount++;

				let b = electrons[i].position.y;

				// remove the recombined holes and electrons from arrays
				electrons.splice(i, 1);
				holes.splice(k, 1);

				break;
			}
		}
	}
}

function animateVDLoop() {
	// Function: animate drain electrons
	for (let i = 0; i < vdLoop.length; i++) {
		let electron = vdLoop[i];
		electron.draw();

		// conditions for moving in directions
		let Up =
			electron.position.x > base.wire.vdRight.x - 8 &&
			electron.position.y > base.wire.vdRight.y;
		let Left =
			electron.position.x > base.wire.vdLeft.x + 8 &&
			electron.position.y < base.wire.vdRight.y + 20;
		let Down =
			electron.position.x < base.wire.vdLeft.x + 8 &&
			electron.position.y < base.wire.leftMetal.y;
		let Right =
			electron.position.x < base.wire.vdRight.x + 8 &&
			electron.position.y > base.wire.leftMetal.y - 8;

		if (Up) {
			let speed = 20;
			// leftover tracks how much distance is left to animate
			let leftover = electron.position.y - base.wire.vdRight.y;
			if (leftover < speed) {
				// move according to speed
				electron.updatePosition(
					electron.position.x,
					electron.position.y - leftover
				);
			} else {
				// if leftover is less than speed, only travel the leftover distance (so it doesn't overshoot)
				electron.updatePosition(
					electron.position.x,
					electron.position.y - speed
				);
			}
		} else if (Left) {
			// move to top left corner
			electron.move(createVector(base.wire.vdLeft.x, base.wire.vdLeft.y));
		} else if (Down) {
			// move to left metal
			electron.move(createVector(base.wire.leftMetal.x, base.y));
		} else if (Right) {
			//  jump back to right metal, avoid gap in flow
			electron.updatePosition(base.wire.vdRight.x, base.wire.rightMetal.y);
		}
	}
}

function animateVGLoop() {
	// Function: animate gate electrons

	showmetalCharges = true;
	// initialize new metal pos charges if any
	for (let i = 0; i < addToMetalCharges; i++) {
		// x = random(base.x + base.sourceWidth, base.endX - base.sourceWidth);
		x = getMetalX(metalChargesPositions);
		y = base.y - base.metalHeight - 14;
		let newCharge = new Charge(x, y, "mp", chargeID, "g");
		metalCharges.push(newCharge);
		chargeID++;
		addToMetalCharges -= 1;
	}

	for (let i = 0; i < vgLoop.length; i++) {
		let electron = vgLoop[i];
		electron.draw();

		// move from top metal to left ground terminal
		if (vgLoopDirection == 0) {
			if (
				electron.position.x > base.wire.vg.x + 8 &&
				electron.position.y > base.wire.vgRight.y + 0
			) {
				// up
				electron.move(createVector(base.wire.vgRight.x, base.wire.vgRight.y));
			} else if (electron.position.x > base.wire.vdLeft.x + 8) {
				// left
				electron.move(createVector(base.wire.vgLeft.x, base.wire.vgLeft.y));
			}
			if (electron.position.x < base.wire.vgLeft.x + 8) {
				// stops at left ground terminal
				onFowardAnimationFinish(i); // waits certain amount of time to finish animating, then carries out code on animation finish
			}
		} else {
			if (
				electron.position.x < base.wire.vgRight.x + 8 &&
				electron.position.y < base.wire.vgLeft.y + 8
			) {
				// move right
				electron.move(createVector(base.wire.vgRight.x, base.wire.vgRight.y));
			}
			if (electron.position.x > base.wire.vgRight.x - 8) {
				// move down
				electron.move(createVector(base.wire.topMetal.x, base.y));
			}
			if (electron.position.y > base.y - base.metalHeight - 8) {
				// reached metal
				onBackAnimationFinish(i); // waits certain amount of time to finish animating, then carries out code on animation finish
			}
		}
	}

	function onBackAnimationFinish(i) {
		//  disable slider during animation
		setTimeout(() => {
			if (i == vgLoop.length - 1) {
				// remove from metal charges the difference in charge amount
				resetMetalCharges();
			}
			vgLoopAnimated = true;
			toggleVGSlider("on"); // turn slider back on
		}, vgChargeScreen * 120); // set wait time according to number of charges being animated
	}

	function onFowardAnimationFinish(i) {
		//  disable slider during animation
		setTimeout(() => {
			if (i == vgLoop.length - 1) {
				vgLoopAnimated = true;
				toggleVGSlider("on"); // turn slider back on
			}
		}, vgChargeScreen * 30); // set wait time according to number of charges being animated
	}
}

function drawMetalCharges() {
	// draw pos charges at gate (right above oxide)
	if (showmetalCharges) {
		for (let i = 0; i < metalCharges.length; i++) {
			metalCharges[i].draw();
		}
	}
}

function toggleVGSlider(state) {
	// Function: toggle vg slider on or off
	const chargeSliders = document.querySelectorAll(`.vgSlider${sceneCount}`);
	if (state == "on") {
		chargeSliders.forEach((slider) => {
			slider.disabled = false;
		});
	} else {
		chargeSliders.forEach((slider) => {
			slider.disabled = true;
		});
	}
}

function toggleEx() {
	let toggleVal = document.querySelector("#fieldToggle").checked;
	print(toggleVal)
	exOn = toggleVal;
}

function setBand(band) {
	// Function: set band array based on voltage profile
	bandData = [];
	for (let i = 0; i < band.length - 1; i++) {
		bandData[i] = band[i].cband;
	}
}

function updateProfile(vd, vg) {
	// Function: set electric field data and band data according to selected vg and vd
	vdCharge = vd;
	vgCharge = vg;

	// vd 0, vary vg
	if (vd == 0 && vg == 0) {
		efGrid = efGrid_vd00_vg00;
		setBand(band_vd00_vg00);
	} else if (vd == 0 && vg == 0.5) {
		efGrid = efGrid_vd00_vg05;
		setBand(band_vd00_vg05);
	} else if (vd == 0 && vg == 1.0) {
		efGrid = efGrid_vd00_vg10;
		setBand(band_vd00_vg10);
	} else if (vd == 0 && vg == 1.3) {
		efGrid = efGrid_vd00_vg13;
		setBand(band_vd00_vg13);
	}

	// vd .1, vary vg
	else if (vd == 0.1 && vg == 0) {
		efGrid = efGrid_vd01_vg00;
		setBand(band_vd01_vg00);
	} else if (vd == 0.1 && vg == 0.5) {
		efGrid = efGrid_vd01_vg05;
		setBand(band_vd01_vg05);
	} else if (vd == 0.1 && vg == 1.0) {
		efGrid = efGrid_vd01_vg10;
		setBand(band_vd01_vg10);
	} else if (vd == 0.1 && vg == 1.3) {
		efGrid = efGrid_vd01_vg13;
		setBand(band_vd01_vg13);
	}

	// vd .3, vary vg
	else if (vd == 0.3 && vg == 0) {
		efGrid = efGrid_vd03_vg00;
		setBand(band_vd03_vg00);
	} else if (vd == 0.3 && vg == 0.5) {
		efGrid = efGrid_vd03_vg05;
		setBand(band_vd03_vg05);
	} else if (vd == 0.3 && vg == 1.0) {
		efGrid = efGrid_vd03_vg10;
		setBand(band_vd03_vg10);
	} else if (vd == 0.3 && vg == 1.3) {
		efGrid = efGrid_vd03_vg13;
		setBand(band_vd03_vg13);
	}

	// vd 1.0, vary vg
	else if (vd == 1.0 && vg == 0) {
		efGrid = efGrid_vd10_vg00;
		setBand(band_vd10_vg00);
	} else if (vd == 1.0 && vg == 0.5) {
		efGrid = efGrid_vd10_vg05;
		setBand(band_vd10_vg05);
	} else if (vd == 1.0 && vg == 1.0) {
		efGrid = efGrid_vd10_vg10;
		setBand(band_vd10_vg10);
	} else if (vd == 1.0 && vg == 1.3) {
		efGrid = efGrid_vd10_vg13;
		setBand(band_vd10_vg13);
	}
}

function updateVD(value) {
	// Function: handles vd slider change
	if (scene(1)) {
		triedVDChange += 1; // increments each time a user changes vd in scene 1
	}
	// vd slider has value range [0-3], map it to actual numbers
	let valueToChargeMap = [0.0, 0.1, 0.3, 1.0];
	vdCharge = valueToChargeMap[value];
	updateProfile(vdCharge, vgCharge);
	updateDrainCurrent();
}

function updateDopants(value) {
	// Function: handles doping slider change
	//higher the slide, the larger the gradient
	// print(value)
	let valuetoDopeMap = [0, 4, 8, 12, 16];
	dopants = valuetoDopeMap[value];
	resetScene()

}

function updateDrainCurrent() {
	if (vgCharge == 0 || vgCharge == 0.5 || vdCharge == 0) {
		drainCurrent = 0;
	} else if (vdCharge == 0.1 && vgCharge == 1.0) {
		drainCurrent = 7.9;
	} else if (vdCharge == 0.3 && vgCharge == 1.0) {
		drainCurrent = 11;
	} else if (vdCharge == 1.0 && vgCharge == 1.0) {
		drainCurrent = 12;
	} else if (vdCharge == 0.1 && vgCharge == 1.3) {
		drainCurrent = 23;
	} else if (vdCharge == 0.3 && vgCharge == 1.3) {
		drainCurrent = 49;
	} else if (vdCharge == 1.0 && vgCharge == 1.3) {
		drainCurrent = 59;
	}

	resetVDLoop();
}

function resetVDLoop() {
	// Function: resets drain electrons

	// clears out current array
	vdLoop = [];

	let distance = drainCurrentMap[drainCurrent][0]; // distance between each animating electron
	let amount = drainCurrentMap[drainCurrent][1]; // number of electrons to animate

	// initialize electrons to animate
	if (drainCurrent > 0) {
		for (let i = 0; i < amount; i++) {
			let x = base.wire.rightMetal.x;
			y = base.wire.rightMetal.y + i * distance;
			vdLoop.push(new wireCharge(x, y, "vd"));
		}
	}
}

function resetMetalCharges() {
	// Function: reset positive charges positions at gate (above oxide)
	let numMetalCharges = vgChargeMap[vgCharge];
	metalCharges = [];
	for (let i = 0; i < numMetalCharges; i++) {
		// initialize wire electrons
		let x = base.wire.vgRight.x;
		let y = base.wire.leftMetal.y + i * 50;
		vgLoop.push(new wireCharge(x, y, "vd"));

		// initialize positive charges
		let metalWidth = base.width - base.sourceWidth / 2;
		let scaleWidth = 1.78; // tested number to scaleWidth width to fit entire width of metal

		let distance = metalWidth / numMetalCharges / scaleWidth; // get distance between each pos charge

		x = 12 + base.sourceEndX + distance * i; // place at distance apart across metal
		y = base.y - base.metalHeight - 14;
		let newCharge = new Charge(x, y, "mp", chargeID, "g");
		metalCharges.push(newCharge);
		chargeID++;
	}
}

function updateVG(value) {
	// Function: handle when user updates VG slider

	addToMetalCharges = 0;
	removeFromMetalCharges = 0;
	prevVGChargeScreen = currentVGChargeScreen;

	let valueToChargeMap = [0.0, 0.5, 1.0, 1.3];
	vgCharge = valueToChargeMap[value];
	updateProfile(vdCharge, vgCharge);

	vgChargeScreen = vgChargeMap[vgCharge];
	vgLoop = [];
	vgLoopAnimated = false;
	currentVGChargeScreen = vgChargeScreen;

	if (prevVGChargeScreen == 0) {
		// previously 0, now > 0
		//1 on paper
		vgLoopDirection = 0;
	} else if (prevVGChargeScreen > 0 && currentVGChargeScreen == 0) {
		// previously vg > 0, now 0
		vgLoopDirection = 1;
		vgChargeScreen = prevVGChargeScreen;
	} else if (prevVGChargeScreen < currentVGChargeScreen) {
		// previously vg was smaller, now larger
		vgLoopDirection = 0;
		vgChargeScreen = vgChargeScreen - prevVGChargeScreen;
		// add positive charges to gate
	} else if (prevVGChargeScreen > currentVGChargeScreen) {
		// previously vg was larger, now smaller
		vgLoopDirection = 1;
		vgChargeScreen = prevVGChargeScreen - vgChargeScreen;
	}

	if (vgLoopDirection == 0) {
		resetMetalCharges();
	}
	// toggleVGSlider("off");
	resetVGLoop(vgLoopDirection);
	updateDrainCurrent();
}
function updateWireElectrons() {
	// Functions: controls if gate and drain electrons are animating
	if (sceneCount != 2) {
		if (vdCharge > 0) {
			animateVDLoop();
		}
	}
	if (!vgLoopAnimated) {
		animateVGLoop();
	}
}

function updateCharges() {
	// Function: display and update charges

	// Display fixed charges
	for (let i = 0; i < fixedCharges.length; i++) {
		fixedCharges[i].draw();
	}

	// Display electrons
	// for (let i = 0; i < electrons.length; i++) {
	// 	electrons[i].draw();
	// 	electrons[i].updateOpacity();

	// 	if (electrons[i].appear > 20) {
	// 		electrons[i].update();
	// 	}
	// }

	//reset holeBuckets array
	for (let i = 0; i < 20; i++) {
		holeBuckets[i] = 0;
	}

	// Display holes
	for (let i = 0; i < holes.length; i++) {
		holes[i].draw();
		holes[i].updateOpacity();

		if (holes[i].appear > 20) {
			holes[i].update();
		}

		let bucketwidth = base.width/20;
		let bucketID = Math.floor((holes[i].x - base.x)/bucketwidth);
		holeBuckets[bucketID]++;
	}

	//update chargeBuckets
	// for (let i = 0; i < 20; i++) {
	// 	chargeBuckets[i] = holeBuckets[i] - dopantBuckets[i];
	// }

	//update electricFieldBuckets
	let chargeTotal = 0;
	for (let i = 0; i < 20; i++) {
		let chargeBucket = holeBuckets[i] - dopantBuckets[i];
		chargeTotal += chargeBucket;
		electricFIeldBuckets[i] = chargeTotal;
	}
	// print(electricFIeldBuckets)

	// Check for recombination
	// if (recomOn) {
	// 	recom(electrons, holes);
	// }

	// Show generation effects
	for (let i = 0; i < generationEffects.length; i++) {
		generationEffects[i].draw();
		generationEffects[i].updateOpacity();
	}

	// Show recombination effects
	for (let i = 0; i < recomEffects.length; i++) {
		recomEffects[i].draw();
		recomEffects[i].updateOpacity();
	}

	// Get rid of generation effect circle when it reaches 0 opacity
	for (let i = 0; i < generationEffects.length; i++) {
		if (generationEffects[i].opacity < 1) {
			generationEffects.splice(i, 1);
		}
	}

	// Get rid of recom effect circle when it reaches 0 opacity
	for (let i = 0; i < recomEffects.length; i++) {
		if (recomEffects[i].opacity < 1) {
			recomEffects.splice(i, 1);
		}
	}

	// update effects
	// (recombination visual effect, electron fading )
	for (let i = 0; i < recomTempElectrons.length; i++) {
		if (typeof recomTempElectrons[i] != "undefined") {
			recomTempElectrons[i].draw();
			recomTempElectrons[i].updateOpacity();
		}
	}

	//(recombination visual effect, hole fading)
	for (let i = 0; i < recomTempHoles.length; i++) {
		if (typeof recomTempHoles[i] != "undefined") {
			recomTempHoles[i].draw();
			recomTempHoles[i].updateOpacity();
		}
	}
}

function scatter() {
	// Function: allow scatter periodically
	if (scatterCount > 2) {
		willScatter = false;
	} else if (scatterCount <= 2) {
		willScatter = true;
	}
	scatterCount -= 1;
	if (scatterCount == 0) {
		scatterCount = parseInt(20) + 2;
	}
}

// switch graph
function mouseClicked() {
	timeSinceLastInteraction = 0; // reset for checkTimeout function
	let xCondition = (base.x + 120 - mouseX/sx); // left border of right button aka the grid
	let yCondition = abs(base.vdY + 6 - mouseY/sx); // top border of right button
	print(yCondition)
	if (xCondition < 100 && xCondition < 0 && yCondition < 28) { //if the mouse is on the right button?
		switchGraph = true; // show charge density graph
		print(switchGraph)
	} else if (abs(base.x + 4 - mouseX) < 100 && yCondition < 28) {
		switchGraph = false; // show electric field graph
	}
}

// Drawing Functions ============================================================
function drawBase() {
	// Function: Draws transistor
	// style
	fill(...color.bg);
	stroke(...color.white);
	strokeWeight(1);
	canvas.drawingContext.setLineDash([]);

	noFill();

	// charge density electric field
	rect(
		base.x,
		base.vdY,
		base.width,
		base.y - base.vdY,
		base.smallRadius
	)

	// substrate
	rect(base.x, base.y, base.width, base.height, base.largeRadius);

	// bottom metal
	noFill();

	// drain current label + number
	styleText();
	fill(...color.white, 200);
	if (sceneCount != 2) {
		text(
			`Drain Current: ${drainCurrent} \u00B5A`,
			base.wire.rightMetal.x - 130,
			base.wire.vdRight.y + 20
		);
	}

	textSize(16);
	// labels
	styleText();
	textAlign(CENTER);
	text("Substrate", base.midX, base.y + base.height / 2);
}

function drawWires() {
	// Function: draws gate and drain wires + battery

	if (sceneCount != 1) {
		drawVG();
	}

	if (sceneCount != 2) {
		drawVD();
	}

	function drawVD() {
		// vd battery
		if (vdCharge > 0) {
			// vd battery on
			image(
				batteryNegOn,
				base.wire.vd.x,
				base.wire.vd.y,
				batteryNegOn.width / 1.5,
				batteryNegOn.height / 1.5
			);
		} else {
			// vd battery off
			image(
				batteryNegOff,
				base.wire.vd.x,
				base.wire.vd.y,
				batteryNegOff.width / 1.5,
				batteryNegOff.height / 1.5
			);
		}

		stroke(...color.white, 160);
		noFill();
		// wire from source to vd battery
		beginShape();
		vertex(base.x + base.sourceWidth / 2, base.y - base.metalHeight); // source
		vertex(base.x + base.sourceWidth / 2, base.vdY); // top left corner
		vertex(base.wire.vd.x, base.vdY);
		endShape(); // vd battery

		// wire from vd battery to drain metal
		beginShape();
		vertex(base.wire.vd.x + base.batteryWidth, base.vdY); // vd battery
		vertex(base.endX - base.sourceWidth / 2, base.vdY); // corner
		vertex(base.endX - base.sourceWidth / 2, base.y - base.metalHeight); // drain metal
		endShape(); // battery
	}

	function drawVG() {
		if (vgCharge > 0) {
			// vg battery on
			image(
				batteryNegOn,
				base.wire.vg.x,
				base.wire.vg.y,
				batteryNegOn.width / 1.5,
				batteryNegOn.height / 1.5
			);
		} else {
			// vg battery off
			image(
				batteryNegOff,
				base.wire.vg.x,
				base.wire.vg.y,
				batteryNegOff.width / 1.5,
				batteryNegOff.height / 1.5
			);
		}

		// wires

		stroke(...color.white, 160);
		noFill();
		// wire from source metal to vg battery
		beginShape();
		vertex(base.x + base.sourceWidth / 2, base.y - base.metalHeight); // source
		vertex(base.x + base.sourceWidth / 2, base.vgY); // top left corner
		vertex(base.wire.vg.x, base.vgY);
		endShape(); // battery

		// wire from vg battery to gate metal
		beginShape();
		vertex(base.wire.vg.x + base.batteryWidth, base.vgY);
		vertex(base.wire.vgRight.x, base.vgY);
		vertex(base.wire.vgRight.x, base.y - base.metalHeight * 2);
		endShape(); // battery
	}
}

function switchGraphMode(mode) {
	// Function: based on HTML toggle - swithes graph mode to plot EF in directions X, Z, or X&Z
	graphMode = mode;
}

function toggleScaleGraph() {
	// Function: based on HTML switch - turns on/off scaling to highest peak
	scaleGraphOn = !scaleGraphOn;
}

function drawGraph() {
	textAlign(LEFT)
	stroke(...color.graph, 180);
	// x axis line
	line(base.x+10, 270, 890, 270);
	// y axis line
	let xStart = base.x + 10;
	line(xStart, 204, xStart, 335);

	let numXTicks = 7;

	// x axis ticks
	for (let i = 0; i < numXTicks; i++) {
		stroke(...color.graph, 180);
		let x = (xStart + 100 * i);
		let y = 270;
		line(x, y, x, y - 5); // Draw the line

		// tick label
		if (i < numXTicks - 1) {
			noStroke();
			fill(102, 194, 255, 180);
			textSize(graphTextSize);

			text(`${50 * (i + 1)} nm`, (80 + (xStart + 101 * i)), 288);
		}
	}
	stroke(...color.graph, 180);
	if (switchGraph == false) {
		// negative charge density y axis ticks
		for (let i = 0; i < 4; i++) {
			stroke(...color.graph, 180);
			let x = base.x + 10;
			let y = (340 / 2 + 98) + 12.5 + 12.5 * i;
			line(x, y, x + 5, y); // Draw the line

			noStroke();
			fill(102, 194, 255, 180);
			textSize(graphTextSize);
			// only show units at end points
			if (i == 3) {
				text(`${-10 * (i + 1)} mC/cm`, x + 10, y - 4, x + 5, y);
				textSize(graphTextSize - 2);
				text(`3`, x + 68, y - 5, x + 5, y); // cubed superscript
			} else {
				text(`${-10 * (i + 1)}`, x + 10, y - 4, x + 5, y);
			}
		}
		//positive charge density y axis ticks
		for (let i = 0; i < 4; i++) {
			stroke(...color.graph, 180);
			let x = base.x + 10;
			let y = (340 / 2 + 98) - 12.5 - 12.5 * i;
			line(x, y, x + 5, y); // Draw the line

			noStroke();
			fill(102, 194, 255, 180);
			textSize(graphTextSize);
			// only show units at end points
			if (i == 3) {
				text(`${10 * (i + 1)} mC/cm`, x + 10, y - 4, x + 5, y);
				textSize(graphTextSize - 2);
				text(`3`, x + 64, y - 5, x + 5, y);
			} else {
				text(`${10 * (i + 1)}`, x + 10, y - 4, x + 5, y);
			}
		}
	} else {
		// negative electric field y axis ticks
		for (let i = 0; i < 4; i++) {
			stroke(...color.graph, 180);
			let x = base.x + 10;
			let y =
				(340 / 2 + 98) +
				(40 / 1530) * 500 +
				(40 / 1530) * 500 * i;
			line(x, y, x + 5, y); // Draw the line
			noStroke();
			fill(...color.graph, 180);
			textSize(graphTextSize);
			// only show units at end points
			if (i == 3) {
				text(
					`${(0.1 * (i + 1)).toFixed(1)} MV/cm`,
					x + 10,
					y - 4,
					x + 5,
					y
				);
			} else {
				text(`${(0.1 * (i + 1)).toFixed(1)}`, x + 10, y - 4, x + 5, y);
			}
		}
		// positive electric field y axis ticks
		for (let i = 0; i < 4; i++) {
			stroke(...color.graph, 180);
			let x = base.x+10;
			let y =
				(340 / 2 + 98) -
				(40 / 1530) * 500 -
				(40 / 1530) * 500 * i;
			line(x, y, x + 5, y); // Draw the line
			noStroke();
			fill(...color.graph, 180);
			textSize(graphTextSize);
			// only show units at end points
			if (i == 3) {
				text(
					`${(0.1 * (i + 1)).toFixed(1)} MV/cm`,
					x + 10,
					y - 4,
					x + 5,
					y
				);
			} else {
				text(`${(0.1 * (i + 1)).toFixed(1)}`, x + 10, y - 4, x + 5, y);
			}
		}
	}

	// Buttons to swtich between E-field / charge density
	noFill();
	noStroke();
	if (switchGraph) {
		// electric field is showing
		stroke(...color.EFColor);
		fill(...color.EFColor, 80);
		rect(
			base.x + 120,
			(base.vdY + 6),
			94,
			24,
			5,
			5
		);

		// charge density outline when not active
		stroke(...color.graph);
		noFill();
		rect(
			base.x + 6,
			(base.vdY + 6),
			108,
			24,
			5,
			5
		);
	} else {
		// charge density is showing
		stroke(...color.CDColor);
		fill(...color.CDColor, 80);
		rect(
			base.x + 6,
			(base.vdY + 6),
			108,
			24,
			5,
			5
		);
		// electric field outline
		stroke(...color.graph);
		noFill();
		rect(
			base.x + 120,
			(base.vdY + 6),
			94,
			24,
			5,
			5
		);
	}

	// text

	fill(...color.graph);

	// strokeWeight(1);
	fill(102, 194, 255, 180);
	textSize(14);
	textAlign(CENTER)

	text("Band Diagram", 160, 30);
	text("Charge Density", base.x + 10 + 50, (base.vdY + 22));
	text("Electric Field", base.x + 116 + 50, (base.vdY + 22));
}

function drawBandDiagram() {
	let subscriptAddY = 2; // distance of subscript y from text
	let subscriptAddX = 8; // distance of subscript x from text
	let eTextSize = 14;
	let subscriptTextSize = 12;

	// draw band diagram labels
	textAlign(CENTER);
	noStroke();

	// Ec label
	fill(...color.electron);
	textSize(eTextSize);
	text("E", 250, 66);
	textSize(subscriptTextSize);
	text("c", 250 + subscriptAddX, 66 + subscriptAddY);

	// Ev label
	fill(...color.hole);
	textSize(eTextSize);
	text("E", 250, 106);
	textSize(subscriptTextSize);
	text("v", 250 + subscriptAddX, 106 + subscriptAddY);

	textSize(12);
	noFill();
	stroke(...color.electron);
	strokeWeight(1.5);

	let bandLength = 62;

	// draw electron curve
	beginShape();
	for (var k = 0; k < bandLength; k++) {
		let columns = 64;
		let vertexX = base.x + (base.width * k) / columns;
		let vertexY = base.bandY - bandData[k] * 40 - 100;
		curveVertex(vertexX, vertexY);
		electronBand[k] = [vertexX, vertexY];
	}
	endShape();

	// draw hole curve
	stroke(...color.hole);
	beginShape();

	for (var k = 0; k < bandLength; k++) {
		//hole curve
		let columns = 64;
		let vertexX = base.x + (base.width * k) / columns;
		let vertexY = base.bandY - bandData[k] * 40;
		let bandGap = -60;

		curveVertex(vertexX, vertexY + bandGap);
		holeBand[k] = [vertexX, vertexY + bandGap];
	}
	endShape();

	noStroke();
	strokeWeight(1);
}

function drawParameters() {
	// Function: Draws parameters box on upper left
	noFill();
	stroke(...color.white, 80);
	rect(0, 0, 200, 220, 8);

	let y = 20;

	for (item in parameters) {
		let name = item;
		let amount = parameters[item];

		styleText();
		fill(...color.white, 180);
		text(name, 12, y);

		fill(...color.white);
		if (item == "Source/Drain Doping Density") {
			// custom text with superscripts
			text("5x10", 12, y + 18);
			textSize(10);
			text("17", 38, y + 12);
			textSize(12);
			text("cm", 50, y + 18);
			textSize(10);
			text("-3", 66, y + 12);
		} else if (item == "Substrate Doping Density") {
			// custom text with superscripts
			text("10", 12, y + 18);
			textSize(10);
			text("16", 24, y + 12);
			textSize(12);
			text("cm", 38, y + 18);
			textSize(10);
			text("-3", 54, y + 12);
		} else {
			text(amount, 12, y + 18);
		}

		y += 42; // distance between each parameter
	}
}

function drawVDExplain() {
	/* Function: On scene 1, Draws explaination bubble after user tries to change VD 3 times  */
	if (scene(1) && triedVDChange >= 3) {
		// style bases
		fill(...color.brand, 100);
		stroke(...color.white);
		strokeWeight(1);
		canvas.drawingContext.setLineDash([]);

		rect(base.wire.leftMetal.x + 16, base.wire.leftMetal.y - 140, 184, 80, 8);
		textSize(16);
		// labels
		styleText();

		// source metal
		text(
			"The large energy barrier blocks \n the flow of electrons between \n the source and drain. ",
			base.wire.leftMetal.x + 24,
			base.wire.leftMetal.y - 140 + 24
		);
	}
}
