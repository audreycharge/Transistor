class Charge {
	//the class to change electron hole pairs movements
	constructor(x, y, id, chargeType) {
		this.chargeType = chargeType;
		this.x = x;
		this.y = y;
		this.id = id;
		this.position = createVector(x, y);
		this.bandPosition = createVector(x, y);
		this.diameter = 10;
		this.time = 0;
		this.maxspeed = 5;
		this.velocity = createVector(0, 0);
		this.maxforce = 1;
		this.acceleration = createVector(0, 0);
		this.desired = createVector(0, 0);
		this.steer = createVector(0, 0);
		this.showing = true;
		this.botz = 1;
		this.direction = createVector(random(-1, 1), random(-1, 1));
		this.movingVelocity = 1;
		this.generationOpacity = 255;
		this.opacity = 0;
		this.override = 0;
		this.target = createVector(0, 0);
		this.assigned = 0;
		this.match;
		this.swap = 0;
		this.active = true;
		this.box = 0;
		this.vehicleCreated = false; // add a flag variable
		this.bandOrigin = createVector(0, 0);
		this.near_index = 100;
		this.top = 0;
		this.factor = 1;
		this.notScatter = false; //Used for inversion layer carriers that need to be sent into the bulk region

		this.transitionTime = 100; // for example, transition over 60 frames
		this.elapsedTime = 0; // initialize this somewhere in your object

		setTimeout(() => {
			this.checkProperties();
		}, 8000);
	}

	// display the electron / hole on band diagram
	display() {
		if (this.showing) {
			if (this.chargeType == "e") {
				//electron
				fill(...color.negative, this.opacity);
				stroke(...color.negative, this.opacity);
			} else {
				//hole
				noFill();
				stroke(...color.positive, this.opacity); //positive
				strokeWeight(2);
			}

			// draw charges in capacitor
			ellipse(this.position.x, this.position.y, this.diameter);

			let buffer = 16;
			if (this.chargeType == "e") {
				// draw electrons on band diagram

				//this.bandOrigin.x and this.bandOrigin.y is the baseline based on the curves calculated in the sketch.js with each scattering
				if (this.bandOrigin.x == 0 && this.bandOrigin.y == 0) {
				} else {
					//  added pairs electron
					fill(...color.negative, 200);
					noStroke();
					// don't draw until it has botz calculated and has snapped to band
					if (this.bandPosition.y > 10 && this.position.x < xMax + buffer) {
						ellipse(this.position.x, this.bandPosition.y, 6);
					}
					this.bandPosition.y =
						this.bandOrigin.y - ((this.botz * 8.8 * 2 * 0.1) / 3) * sy; // subtracting bc electron is above band
				}
			} else {
				// draw holes on band diagram
				//added pairs senario
				noFill();
				stroke(...color.positive, 200); //positive
				strokeWeight(1.5);

				// don't draw until it has botz calculated and has snapped to band

				if (this.bandPosition.y > 20 && this.position.x < xMax + buffer) {
					ellipse(this.position.x, this.bandPosition.y, 6);
				}
				this.bandPosition.y =
					this.bandOrigin.y + ((this.botz * 8.8 * 2 * 0.1) / 3) * sy; // adding bc hole is below band
			}

			stroke("white");
		}
	}

	checkBoundaries() {
		// Charges bounce off boundaries
		const buffer = 5;
		// top
		if (this.position.y < yMin * sy) {
			this.position.y += buffer;
			this.velocity.y = -this.velocity.y;
		}

		// bottom
		if (this.position.y > yMax * sy) {
			this.position.y -= buffer;
			this.velocity.y = -this.velocity.y;
		}

		// left
		if (this.position.x < (xMin-4) * sx) {
			this.position.x += buffer-3;
			this.velocity.x = Math.abs(this.velocity.x);
		}

		// right
		if (this.position.x > (xMax - buffer) * sx) {
			if (this.chargeType == "h" && !this.vehicleCreated) {
				// if hole goes out of capacitor on the right, put back another hole from the right side
				const buffer = 14;
				var vehicle = new Charge(
					(xMax - buffer) * sx,
					random(yMin + buffer, yMax - buffer) * sy,
					"h"
				);
				vehicle.direction = createVector(-1, random(-1, 1));
				vehicle.movingVelocity = this.movingVelocity;
				vehicle.velocity = createVector(-10, 0);
				vehicle.botz = this.botz;
				initHoles.push(vehicle);
				this.vehicleCreated = true;

				this.direction.x = 10;
				this.showing = false;
				this.velocity = createVector(0, 0);
			} else if (this.chargeType == "e") {
				this.position.x -= buffer;
				this.velocity.x = -this.velocity.x;
			}
		}
	}

	////*** update the electron or hole's locations (bounce back or come back to capacitor) */
	randomWalk() {
		this.accelerate(); // accelerate() will update this.velocity

		this.position.add(this.velocity);

		////////////////////// avoid going into the bandgap (added by Azad)

		if (this.chargeType == "e") {
			// electron
			let zz = findClosestValue(electronBand, this.position.x);
			if (this.bandPosition.y > zz) {
				this.velocity.x = -this.velocity.x;
				this.position.add(this.velocity.x);
			}
		} else if (this.chargeType == "h") {
			//hole
			let zz = findClosestValue(holeBand, this.position.x);
			if (this.bandPosition.y < zz) {
				this.velocity.x = -this.velocity.x;
				this.position.add(this.velocity.x);
			}
		}

		this.checkBoundaries();

		if (this.chargeType == "e") {
			//electron
			///////find the near_index: find where the electron appear (on which line they should bounce back when hit the band diagram)
			let smallestDifference = Math.abs(
				electronBand_data[0].y - this.bandPosition.y
			);
			for (let i = 0; i < electronBand_data.length; i++) {
				let difference = Math.abs(electronBand_data[i].y - this.bandPosition.y);

				if (difference < smallestDifference) {
					smallestDifference = difference;
					this.near_index = i;
				}
			}
		}
		if (this.chargeType == "h") {
			//hole
			///////find the near_index: find where the hole appear  (on which line they should bounce back when hit the band diagram)
			let smallestDifference = Math.abs(
				holeBand_data[0].y - this.bandPosition.y
			);
			for (let i = 0; i < holeBand_data.length; i++) {
				let difference = Math.abs(holeBand_data[i].y - this.bandPosition.y);
				if (difference < smallestDifference) {
					smallestDifference = difference;
					this.near_index = i;
				}
			}
		}
	}

	checkProperties() {
		// Check if the top is 1 and origin is {x: 0, y: 0}
		if (this.top == 1 && appliedVoltage <= 0) {
			// if (this.chargeType == "e"){    //electron

			if (this.chargeType == "e") {
				// The conditions are met for a vehicle instance
				this.bandOrigin.x = 0;
				this.bandOrigin.y = 0;
			} else if (this.chargeType == "h") {
				//electron
				this.bandOrigin.x = 0;
				this.bandOrigin.y = 0;
			}
		}
	}

	addTime() {
		this.time += 1;
	}

	deactivate() {
		this.active = false;
	}

	stop() {
		this.velocity = createVector(0, 0);
		this.acceleration = createVector(0, 0);
		this.movingVelocity = 0;
		this.maxspeed = 0;
	}

	restart() {
		this.velocity = createVector(0, 0);
		this.acceleration = createVector(0, 0);
		this.movingVelocity = ((5 * parseInt(scatteringVelocity)) / 5) * this.botz;
		this.maxspeed = 5;
	}

	applyForce(force) {
		this.acceleration.add(force);
	}

	seek(target) {
		this.target = target;
		this.desired = p5.Vector.sub(target, this.position);

		this.desired.setMag(this.maxspeed);

		this.steer = p5.Vector.sub(this.desired, this.velocity);
		this.steer.limit(this.maxforce);

		this.applyForce(this.steer);
	}

	easy_seek() {
		this.velocity = createVector(0, 0);
		this.acceleration = createVector(0, 0);
		this.movingVelocity = 0;
		var m = createVector(
			this.target.x - this.position.x,
			this.target.y - this.position.y
		);
		m.normalize();
		this.position.x += 20 * m.x;
		this.position.y += 20 * m.y;
	}

	update() {
		this.velocity.add(this.acceleration);
		this.velocity.limit(this.maxspeed);
		this.position.add(this.velocity);
		this.acceleration = createVector(0, 0);
		this.checkBoundaries();
	}

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

	opposite_walk() {
		let uPOS = p5.Vector.mult(this.direction, this.movingVelocity);
		this.position.add(uPOS);

		const r = floor(random(10));
		const r2 = floor(random(10));

		if (floor(this.position.x) % r == 0 && floor(this.position.y) % r2 == 0) {
			this.direction = createVector(random(-1, 1), random(-1, 1));
		}

		if (
			this.position.x < this.diameter ||
			this.position.x > 950 * sx - this.diameter
		) {
			this.direction.x *= -1;
		}
		if (
			this.position.y < this.diameter ||
			this.position.y > 950 * sy - this.diameter
		) {
			this.direction.y *= -1;
		}
	}

	straight_walk() {
		try {
			let uPOS = p5.Vector.mult(this.direction, this.movingVelocity);
			this.position.add(uPOS);
		} catch (error) {
			//
			this.position.add(createVector(0, 0));
		}

		if (this.position.y < 50 * sy) {
			this.direction = createVector(0, 1);
		}
	}

	accelerate() {
		///////// temp variable for calculating acceleration
		// let newAcceleration = 0;

		////////////////////////////////////////// Calculate electric Field at this position/////////////////
		let Lowestdif = 1000;

		for (let i = 0; i < bandLength - 1; i++) {
			//   // Calculate the difference between this position and the x position of the i-th element of the E-field
			let dif = Math.abs(this.position.x - E_field_temp_data[i].x);

			//   // If this difference is less than the lowest diff found so far
			if (dif < Lowestdif) {
				//       // Update the lowest dif and and the corresponding electric field
				Lowestdif = dif;
				newAcceleration = E_field_temp_data[i].y / 100000 / 3; // Assuming 'b' is represented as second element in sub-array
			}
		}
		//////////////////////////////////////////////// If electron, accelration in the opposite direction of the field.
		if (this.chargeType == "e") {
			//             //electron
			newAcceleration = -newAcceleration;
		}

		//////////////////Exeagerate the electric field when the applied voltage is negateive to better visualize accumlation of holes

		newAcceleration = AccelerationFactor * newAcceleration;

		// if (scene(1)) {
		// 	if (appliedVoltage / 20 < -0.3) {
		// 		// newAcceleration = newAcceleration * 10;  // original
		// 		newAcceleration = newAcceleration * 5;
		// 	}

		// 	if (dopingConcen_new == 5e13) {
		// 		if (appliedVoltage / 20 == 0.4) {
		// 			newAcceleration = newAcceleration * 2;
		// 		}

		// 		if (appliedVoltage / 20 == 1.2) {
		// 			newAcceleration = newAcceleration * 0.8;
		// 		}

		// 		if (appliedVoltage / 20 > 1.4) {
		// 			newAcceleration = newAcceleration * 1.5;
		// 		}
		// 	}

		// 	if (dopingConcen_new > 5e13) {
		// 		if (appliedVoltage / 20 == 0.4) {
		// 			newAcceleration = newAcceleration * 2;
		// 		}

		// 		if (appliedVoltage / 20 == 0.8) {
		// 			newAcceleration = newAcceleration * 1.1;
		// 		}

		// 		if (appliedVoltage / 20 == 1.2) {
		// 			newAcceleration = newAcceleration * 0.8;
		// 		}

		// 		if (appliedVoltage / 20 > 1.4) {
		// 			newAcceleration = newAcceleration * 1.5;
		// 		}
		// 	}
		// } else if (scene(2)) {
		// 	if (appliedVoltage / 20 > 0.3) {
		// 		// newAcceleration = newAcceleration * 10; // original

		// 		newAcceleration = newAcceleration * 5;
		// 	}

		// 	if (dopingConcen_new == 5e13) {
		// 		if (appliedVoltage / 20 == -0.4) {
		// 			newAcceleration = newAcceleration * 3;
		// 		}

		// 		if (appliedVoltage / 20 == -1.2) {
		// 			newAcceleration = newAcceleration * 0.8;
		// 		}

		// 		if (appliedVoltage / 20 < -1.4) {
		// 			newAcceleration = newAcceleration * 1.5;
		// 		}
		// 	}

		// 	if (dopingConcen_new > 5e13) {
		// 		if (appliedVoltage / 20 == -0.4) {
		// 			newAcceleration = newAcceleration * 2;
		// 		}

		// 		if (appliedVoltage / 20 == -0.8) {
		// 			newAcceleration = newAcceleration * 1.5;
		// 		}

		// 		if (appliedVoltage / 20 == -1.2) {
		// 			newAcceleration = newAcceleration * 0.8;
		// 		}

		// 		if (appliedVoltage / 20 < -1.4) {
		// 			newAcceleration = newAcceleration * 1.5;
		// 		}
		// 	}
		// }

		if (this.notScatter == false){
		this.acceleration = createVector(-newAcceleration, 0);
		this.velocity = p5.Vector.add(this.acceleration, this.velocity);
		}
		this.checkBoundaries();

		// if (this.position.y < yMin * sy) {
		// 	this.velocity.y = -this.velocity.y;
		// }

		// // bottom
		// if (this.position.y > yMax * sy) {
		// 	this.velocity.y = -this.velocity.y;
		// }

		// // left
		// if (this.position.x < xMin * sx) {
		// 	this.velocity.x = Math.abs(this.velocity.x);
		// }

		// right
		// if hole goes out of capacitor on the right, put back another hole from the right side
		// if (this.position.x > xMax * sx) {
		// 	if (this.id == "h" && !this.vehicleCreated) {
		// 		const buffer = 14;
		// 		var vehicle = new Charge(
		// 			(xMax - buffer) * sx,
		// 			random(yMin + buffer, yMax - buffer) * sy,
		// 			10,
		// 			"h",
		// 			1
		// 		);
		// 		vehicle.direction = createVector(-1, random(-1, 1));
		// 		vehicle.movingVelocity = this.movingVelocity;
		// 		vehicle.velocity = createVector(-10, 0);
		// 		vehicle.botz = this.botz;
		// 		initHoles.push(vehicle);
		// 		this.vehicleCreated = true;
		// 	}

		// 	this.direction.x = 10;
		// 	this.showing = false;
		// 	this.velocity = createVector(0, 0);
		// }
	}

	tube_walk() {
		let uPOS = p5.Vector.mult(this.direction, this.movingVelocity);
		this.position.add(uPOS);

		if (this.time < 100) {
			this.direction = createVector(0, 1);
			this.time++;
		}
	}

	updateOpacity() {
		this.opacity += 20;
	}
	hide() {
		this.showing = false;
	}
}

class Effect {
	//the class to change appearing animation
	constructor(x, y, length, chargeType, id) {
		this.x = x;
		this.y = y;
		this.position = createVector(x, y);
		this.length = length;
		this.time = 0;
		this.chargeType = chargeType;
		this.showing = true;
		this.generationOpacity = 135; //appear opacity
		this.opacity = 0;
		this.recombineOpacity = 255;
		this.d = 1;
		this.effectDiameter = 50;
		this.id = id;
		this.occupied = 0;
		this.active = true;
		this.acceleration = createVector(0, 0);
		this.desired = createVector(0, 0);
		this.steer = createVector(0, 0);
		this.velocity = createVector(0, 0);
		this.maxforce = 0.1;
		this.maxspeed = 0.8;
	}

	display() {
		if (this.showing) {
			if (this.chargeType == "e") {
				noStroke();
				fill(...color.negative, this.generationOpacity);
				//fill(...color.positive, this.generationOpacity);

				ellipse(this.position.x, this.position.y, this.d);
			} else if (this.chargeType == "h") {
				stroke(...color.positive, this.generationOpacity);
				strokeWeight(2);
				noFill();
				ellipse(this.position.x, this.position.y, this.effectDiameter);
			} else if (this.chargeType == "gen") {
				// 2
				strokeWeight(1);
				fill(...color.negative, this.recombineOpacity);
				stroke(...color.negative, this.recombineOpacity);
				ellipse(this.position.x, this.position.y, 10);
			} else if (this.chargeType == "recom") {
				// 3
				//hollow
				strokeWeight(1);
				noFill();
				stroke(...color.positive, this.recombineOpacity);
				ellipse(this.position.x, this.position.y, 10);
			} else if (this.chargeType == "fixpos") {
				// 4
				//plus sign add electron
				stroke(255, this.opacity);
				strokeWeight(5);
				line(this.x - 10, this.y, this.x + 10, this.y);
				line(this.x, this.y - 10, this.x, this.y + 10);
				noStroke();
				strokeWeight(1);
			} else if (this.chargeType == "fixneg") {
				// 5
				//minus sign add electron
				stroke(255, this.opacity);
				strokeWeight(5);
				line(this.x - 10, this.y, this.x + 10, this.y);
				noStroke();
				strokeWeight(1);
			}
		}
	}

	hide() {
		this.showing = false;
	}
	stop() {
		this.velocity = createVector(0, 0);
		this.acceleration = createVector(0, 0);
		this.movingVelocity = 0;
		this.maxspeed = 0;
	}

	update() {
		if (this.chargeType == "e") {
			this.generationOpacity -= 15;
			this.d += 5;
		} else if (this.chargeType == "h") {
			this.generationOpacity -= 15;
			this.effectDiameter -= 3;
		} else if (this.chargeType == "fixpos" || this.chargeType == "fixneg") {
			if (this.opacity < 60) {
				this.opacity += 10;
				// this.d += 4;
			}
		}
	}

	update_location() {
		this.velocity.add(this.acceleration);
		this.velocity.limit(this.maxspeed);
		this.position.add(this.velocity);
		this.acceleration = createVector(0, 0);
	}

	update_circle() {
		this.recombineOpacity -= 20;
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
