class Charge {
	constructor(x, y, diameter, type, age) {
		this.x = x;
		this.y = y;
		this.position = createVector(x, y);
		this.positionBand = createVector(x, y);
		this.diameter = diameter;
		this.maxspeed = 15;
		this.velocity = createVector(0, 0);
		this.maxforce = 1;
		this.acceleration = createVector(0, 0);
		this.desired = createVector(0, 0);
		this.steer = createVector(0, 0);
		this.type = type; // "e: electron", "h: hole"
		this.age = age; // "i: initial, g: generated"
		this.location; // "s: source, "d: drain""
		this.show = 1;
		this.botz = 1;
		this.direction = createVector(random(-1, 1), random(-1, 1));
		this.movingVelocity = 0;
		this.starting_p = createVector(x, y);
		this.alpha = 255;
		this.appear = 0;
		this.target = createVector(0, 0);
		this.dead = 0;
		this.box = 0;
		this.chargeCreated = false; // add a flag variable
		this.origin = createVector(0, 0);
		this.within = 0;
		this.straight = 0;
		this.transitionTime = 100; // for example, transition over 60 frames
		this.elapsedTime = 0; // initialize this somewhere in your object

		setTimeout(() => {
			this.checkProperties();
		}, 8000);
	}

	checkProperties() {
		// Check if the top is 1 and origin is {x: 0, y: 0}

		// if (appliedVoltage <= 0) { // UNCOMMENT!!!
		if (this.type == "e") {
			if (this.position.x < (550 + (400 / 8) * voltageDepletionWidth) * sx) {
				this.show = 0;
			}
			this.origin.x = 0;
			this.origin.y = 0;
			// console.log("The conditions are met for a vehicle instance.");
		} else if (this.type == "h") {
			//electron

			if (this.position.x > (550 - (400 / 8) * voltageDepletionWidth) * sx) {
				this.show = 0;
			}
			this.origin.x = 0;
			this.origin.y = 0;
		}
		// }
	}

	noShow() {
		this.show = 0;
	}

	deadd() {
		this.dead = 1;
	}

	zap() {
		this.appear -= 20;
	}

	stop() {
		this.velocity = createVector(0, 0);
		this.acceleartion = createVector(0, 0);
		this.movingVelocity = 0;
		this.maxspeed = 0;
	}

	// restart() {
	// 	this.velocity = createVector(0, 0);
	// 	this.acceleartion = createVector(0, 0);
	// 	this.movingVelocity = ((5 * parseInt(scattering_velocity)) / 5) * this.botz;
	// 	this.maxspeed = 5;
	// }

	applyForce(force) {
		this.acceleration.add(force);
	}

	// seek(target) {
	// 	this.target = target;
	// 	this.desired = p5.Vector.sub(target, this.position);

	// 	this.desired.setMag(this.maxspeed);

	// 	this.steer = p5.Vector.sub(this.desired, this.velocity);
	// 	this.steer.limit(this.maxforce);

	// 	this.applyForce(this.steer);
	// }

	// easy_seek() {
	// 	this.velocity = createVector(0, 0);
	// 	this.acceleartion = createVector(0, 0);
	// 	this.movingVelocity = 0;
	// 	var m = createVector(
	// 		this.target.x - this.position.x,
	// 		this.target.y - this.position.y
	// 	);
	// 	m.normalize();
	// 	this.position.x += 20 * m.x;
	// 	this.position.y += 20 * m.y;
	// }

	// update() {
	// 	// this.velocity.add(this.acceleration);
	// 	this.velocity.limit(this.maxspeed);
	// 	// this.position.add(this.velocity);
	// 	// this.position.add(createVector(10, 10));
	// 	this.acceleartion = createVector(0, 0);
	// }

	findClosestValue(array, targetX) {
		let closestDiff = 1000;
		let closestBValue;

		for (let i = 0; i < array.length; i++) {
			let diff = Math.abs(targetX - array[i][0]);
			if (diff < closestDiff) {
				closestDiff = diff;
				closestBValue = array[i][1];
			}
		}

		return closestBValue;
	}

	display() {
		// if (this.show == 1) {
		if (this.type == "e") {
			//electron

			fill(...color.electron, this.appear);
			stroke(...color.electron, this.appear);
		} else {
			//hole
			noFill();
			stroke(...color.hole, this.appear);
			strokeWeight(1);
		}
		ellipse(this.position.x, this.position.y, this.diameter);

		// if (this.type == "e") {
		// 	//middle part

		// 	if (this.origin.x == 0) {
		// 	} else {
		// 		if (this.straight == 0) {
		// 			fill(...color.electron, 100);
		// 			stroke(...color.electron, 100);
		// 			ellipse(this.position.x, this.positionBand.y, 5);
		// 			this.positionBand.x = this.position.x;
		// 		} else {
		// 			fill(...color.electron, 100);
		// 			stroke(...color.electron, 100);
		// 			ellipse(this.position.x, this.positionBand.y, 5);
		// 			this.positionBand.x = this.position.x;
		// 		}
		// 	}
		// } else if (sceneCount != 3) {
		// 	//hole
		// 	let k = 0;
		// 	let s = 0;
		// 	if (scene(2) || scene(3)) {
		// 		k = -30;
		// 	}

		// 	if (scene(1)) {
		// 		s = 0;
		// 	}

		// 	if (this.origin.x == 0 && this.origin.y == 0) {
		// 	} else {
		// 		if (this.straight == 0) {
		// 			noFill();
		// 			stroke(...color.hole, 100);
		// 			strokeWeight(1);

		// 			ellipse(this.position.x, this.positionBand.y, 5);
		// 			this.positionBand.x = this.position.x;
		// 		} else {
		// 			noFill();
		// 			stroke(...color.hole, 100);
		// 			strokeWeight(1);

		// 			ellipse(this.position.x, this.positionBand.y, 5);
		// 			this.positionBand.x = this.position.x;
		// 		}
		// 	}
		// }
		// }
	}

	// opposite_walk() {
	// 	let uPOS = p5.Vector.mult(this.direction, this.movingVelocity);
	// 	this.position.add(uPOS);

	// 	const r = floor(random(10));
	// 	const r2 = floor(random(10));

	// 	if (floor(this.position.x) % r == 0 && floor(this.position.y) % r2 == 0) {
	// 		this.direction = createVector(random(-1, 1), random(-1, 1));
	// 	}

	// 	if (
	// 		this.position.x < this.diameter ||
	// 		this.position.x > 950 * sx - this.diameter
	// 	) {
	// 		this.direction.x *= -1;
	// 	}
	// 	if (
	// 		this.position.y < this.diameter ||
	// 		this.position.y > 950 * sy - this.diameter
	// 	) {
	// 		this.direction.y *= -1;
	// 	}
	// }

	straight_walk() {
		// try {
		// 	let uPOS = p5.Vector.mult(this.direction, this.movingVelocity);
		// 	this.position.add(uPOS);
		// } catch (error) {
		// 	//
		// 	this.position.add(createVector(0, 0));
		// }
		// if (this.position.y < 50 * sy) {
		// 	this.direction = createVector(0, 1);
		// }
	}

	move() {
		this.accelerate(); // accelerate() will update this.velocity
		this.velocity.limit(this.maxspeed);
		this.position.add(this.velocity); // add the effect of acceleration to position
		// }

		// const r = floor(random(10));
		// const r2 = floor(random(10));

		// if (scene(1) || scene(2) || scene(3)) {
		// UNCOMMENT !!!!
		// if (
		// 	this.position.x > (550 - (400 / 8) * voltageDepletionWidth) * sx &&
		// 	this.position.x <
		// 		(550 -
		// 			(400 / 8) * voltageDepletionWidth +
		// 			(400 / 8) * voltageDepletionWidth * 2) *
		// 			sx
		// ) {
		// 	this.within = 1;
		// } else {
		// 	this.within = 0;
		// }

		// if (willScatter == false) { // UNCOMMENT ?
		// 	//if false no scatter
		// } else {
		// console.log("setting random v and dire");
		// UNCOMMENT - scatter
		// this.direction = createVector(random(-1, 1), random(-1, 1));
		this.movingVelocity = 1.6;

		// random_botz[Math.floor(Math.random() * random_botz.length)]; // UNCOMMENT!
		this.botz = this.movingVelocity;

		this.velocity = this.direction.mult(this.movingVelocity);
		// console.log("direction", this.direction);
		// console.log("movingVelocity", this.movingVelocity);
		// console.log("velocity", this.velocity);
		// this.velocity = createVector(10, 10);
		// UNCOMMENT ONCE YOU HAVE BANDS!!!
		// if (this.type == "e") {
		// 	//electron
		// 	this.origin.x = findClosestValue(electronBand, this.position.x);
		// 	this.positionBand.y =
		// 		this.origin.x - (this.botz * this.botz * sy * 8.8 * 0.2) / 6;
		// }
		// if (this.type == "h") {
		// 	//hole
		// 	this.origin.y = findClosestValue(holeBand, this.position.x);
		// 	this.positionBand.y =
		// 		this.origin.y + (this.botz * this.botz * sy * 8.8 * 0.2) / 6;
		// }
		// }

		////////////////////// avoid going into the bandgap (added by Azad)

		// UNCOMMENT ONCE YOU HAVE BANDS!!!
		// if (this.type == "e") {
		// 	//             //electron
		// 	let zz = findClosestValue(electronBand, this.position.x);
		// 	if (this.positionBand.y > zz) {
		// 		this.velocity.x = Math.abs(this.velocity.x);
		// 		this.position.add(this.velocity.x);
		// 	}
		// } else {
		// 	//hole
		// 	let zz = findClosestValue(holeBand, this.position.x);
		// 	if (this.positionBand.y < zz) {
		// 		this.velocity.x = -Math.abs(this.velocity.x);
		// 		this.position.add(this.velocity.x);
		// 	}
		// }
		////////////////////////////////////////////////

		// UNCOMMENT !!! ?
		// if (this.position.x > 940 * sx && opening == 1 && this.straight == 0) {
		// 	this.direction.x = 10;
		// 	this.show = 0;
		// 	if (this.type == "e" && !this.chargeCreated) {
		// 		var newCharge = new Charge(950 * sx, random(400, 760) * sy, 10, "e");
		// 		newCharge.direction = createVector(-1, random(-1, 1));
		// 		newCharge.movingVelocity = this.movingVelocity;
		// 		newCharge.velocity = createVector(-10, 0);
		// 		newCharge.botz = this.botz;
		// 		generatedElectrons.push(newCharge);
		// 		this.chargeCreated = true;
		// 	}
		// }
		// Bounce off boundaries
		let buffer = 24;

		let boundary = []; // l, r, t, b

		if (this.type == "h") {
			boundary = [base.x, base.x + base.width, base.y, base2.baseEndY];
		} else if (this.type == "e" && this.age == "i") {
			boundary = [base.x, base2.sourceEndX, base.y, base2.sourceEndY];
		}

		// bounce holes off source
		if (this.type == "h") {
			// if hole within source x, bounce off source y
			if (this.position.x < base2.sourceEndX) {
				if (this.position.y < base2.sourceEndY + buffer) {
					this.direction.y *= -1;
				}
			}

			// if hole within source y, bounce off source x
			if (this.position.y < base2.sourceEndY) {
				if (this.position.x < base2.sourceEndX + buffer) {
					this.direction.x *= -1;
				}
			}
		}

		// bounce holes off drain
		if (this.type == "h") {
			// if hole within drain x, bounce off drain y
			if (this.position.x > base2.drainX) {
				if (this.position.y < base2.drainEndY + buffer) {
					this.direction.y *= -1;
				}
			}
			// if hole within drain y, bounce off drain x
			if (this.position.y < base2.drainEndY) {
				if (this.position.x > base2.drainX - buffer) {
					this.direction.x *= -1;
				}
			}
		}

		if (this.position.x - this.diameter < boundary[0] + buffer) {
			// l
			this.direction.x *= -1;
		}
		if (this.position.x + this.diameter > boundary[1] - buffer) {
			// r
			this.direction.x *= -1;
		}
		if (this.position.y < boundary[2] + buffer) {
			// t
			this.direction.y *= -1;
		}
		if (this.position.y + this.diameter > boundary[3] - buffer) {
			// b
			this.direction.y *= -1;
		}
	}

	accelerate() {
		this.acceleration = 5;
		// let a = (voltageDepletionWidth * bandDiagramHeight) / 20;
		// let x_depletion_start = (550 - (400 / 8) * voltageDepletionWidth) * sx;
		// let x_depletion_middle = 550 * sx;
		// let x_depletion_end = (550 + (400 / 8) * voltageDepletionWidth) * sx;
		// let x_depletion_width = x_depletion_end - x_depletion_start;
		// //console.log("a",a)
		// if (
		// 	this.position.x > x_depletion_start &&
		// 	this.position.x < x_depletion_middle
		// ) {
		// 	if (this.type == "e") {
		// 		this.acceleration =
		// 			(a * (this.position.x - x_depletion_start)) /
		// 			(0.5 * x_depletion_width);
		// 	} else if (this.type == "h") {
		// 		this.acceleration =
		// 			(-a * (this.position.x - x_depletion_start)) /
		// 			(0.5 * x_depletion_width);
		// 	} else {
		// 	}
		// } else if (
		// 	this.position.x > x_depletion_middle &&
		// 	this.position.x < x_depletion_end
		// ) {
		// 	if (this.type == "e") {
		// 		this.acceleration =
		// 			(a * (x_depletion_end - this.position.x)) / (0.5 * x_depletion_width);
		// 	} else if (this.type == "h") {
		// 		this.acceleration =
		// 			(-a * (x_depletion_end - this.position.x)) /
		// 			(0.5 * x_depletion_width);
		// 	} else {
		// 	}
		// } else {
		// 	this.acceleration = 0;
		// }
	}

	// tube_walk() {
	// 	let uPOS = p5.Vector.mult(this.direction, this.movingVelocity);
	// 	this.position.add(uPOS);

	// 	if (this.time < 100) {
	// 		this.direction = createVector(0, 1);
	// 		this.time++;
	// 	}
	// }

	// alpha_update() {
	// 	this.alpha -= 10;
	// }

	updateAppear() {
		if (this.appear < 255) {
			this.appear += 20;
		}
	}
}

class Appear {
	constructor(x, y, length, type, id) {
		this.x = x;
		this.y = y;
		this.position = createVector(x, y);
		this.length = length;
		this.time = 0;
		this.type = type; // "p: fixed positive", "n: fixed negative"
		this.show = 1;
		this.starting_p = createVector(x, y);
		this.alpha = 135; //appear opacity
		this.beta = 0;
		this.zap = 255;
		this.d = 1;
		this.dd = 50;
		this.occupied = 0;
		this.dead = 0;

		this.acceleration = createVector(0, 0);
		this.desired = createVector(0, 0);
		this.steer = createVector(0, 0);
		this.velocity = createVector(0, 0);
		this.maxforce = 0.1;
		this.maxspeed = 0.8;
	}

	display() {
		if (this.show == 1) {
			if (this.type == "e") {
				noStroke();
				fill(...color.electron, this.alpha);

				ellipse(this.position.x, this.position.y, this.d);
			} else if (this.type == "h") {
				stroke(...color.hole, this.alpha);
				strokeWeight(2);
				noFill();

				ellipse(this.position.x, this.position.y, this.dd);
			} else if (this.type == 2) {
				// recombination?
				strokeWeight(1);
				fill(...color.electron, this.zap);
				stroke(...color.electron, this.zap);
				ellipse(this.position.x, this.position.y, 10);
			} else if (this.type == 3) {
				// recombination?
				//hollow
				strokeWeight(1);
				noFill();
				stroke(...color.hole, this.zap);
				ellipse(this.position.x, this.position.y, 10);
			} else if (this.type == "p") {
				//plus sign add electron
				stroke(255, this.beta);
				strokeWeight(5);
				line(this.x - 10, this.y, this.x + 10, this.y);
				line(this.x, this.y - 10, this.x, this.y + 10);
				noStroke();
				strokeWeight(1);
			} else if (this.type == "n") {
				//minus sign add electron
				stroke(255, this.beta);
				strokeWeight(5);
				line(this.x - 10, this.y, this.x + 10, this.y);
				noStroke();
				strokeWeight(1);
			}
		}
	}

	noShow() {
		this.show = 0;
	}

	dead() {
		this.dead = 1;
	}

	stop() {
		this.velocity = createVector(0, 0);
		this.acceleartion = createVector(0, 0);
		this.movingVelocity = 0;
		this.maxspeed = 0;
	}

	update() {
		if (this.type == "e") {
			this.alpha -= 15;
			this.d += 5;
		} else if (this.type == "h") {
			this.alpha -= 15;
			this.dd -= 3;
		} else if (this.type == "p" || this.type == "n") {
			if (this.beta < 100) {
				this.beta += 30;
				// this.d += 4;
			}
		}
	}

	update_location() {
		this.velocity.add(this.acceleration);
		this.velocity.limit(this.maxspeed);
		this.position.add(this.velocity);
		this.acceleartion = createVector(0, 0);
	}

	update_circle() {
		this.zap -= 20;
	}

	seek(target) {
		this.target = target;
		this.desired = p5.Vector.sub(target, this.position);

		this.desired.setMag(this.maxspeed);

		this.steer = p5.Vector.sub(this.desired, this.velocity);
		this.steer.limit(this.maxforce);

		this.applyForce(this.steer);
	}

	applyForce(force) {
		this.acceleration.add(force);
	}
}

class Disappear {
	constructor(x, y, length, type, target) {
		this.x = x;
		this.y = y;
		this.position = createVector(x, y);
		this.length = length;
		this.time = 0;
		this.maxspeed = 5;
		this.type = type;
		this.show = 1;
		this.starting_p = createVector(x, y);
		this.alpha = 255;
		this.zap = 255;
		this.d = 1;
		this.dd = 50;
		this, (target = target);
		this.occupied = 0;
	}

	display() {
		if (this.show == 1) {
			if (this.type == "e") {
				noStroke();
				fill(...color.electron, this.alpha);

				ellipse(this.position.x, this.position.y, this.d);
			} else if (this.type == "h") {
				stroke(...color.hole, this.alpha);
				strokeWeight(2);
				noFill();
				ellipse(this.position.x, this.position.y, this.dd);
			} else if (this.type == 2) {
				strokeWeight(1);
				fill(...color.electron, this.zap);
				stroke(...color.electron, this.zap);
				ellipse(this.position.x, this.position.y, 10);
			}
		}
	}

	update() {
		if (this.type == "e") {
			this.alpha -= 15;
			this.d += 5;
		} else if (this.type == "h") {
			this.alpha -= 15;
			this.dd -= 3;
		}
	}

	update_circle() {
		this.zap -= 20;
	}
}

class Concentration {
	constructor(v, t) {
		this.v = v;
		this.t = t;
		this.counting = 1;
		this.x = 0;
	}

	update() {
		if (this.counting == 1 && count_graph == 0) {
			this.x = this.v * Math.pow(this.t * con_count * test_x_scale, 1 / 2);
		}
	}

	stop_count() {
		this.counting = 0;
	}
}
