class Charge {
	constructor(x, y, type, id, age) {
		this.x = x;
		this.y = y;
		this.id = id;
		this.position = createVector(x, y);
		this.bandPosition = createVector(x, y);
		this.bandOrigin = createVector(0, 0);
		this.diameter = 8; // diameter of active charge
		this.recomDiameter = 40; // diameter of recombination effect cirle
		this.maxspeed = 5;
		this.velocity = createVector(0, 0);
		this.maxforce = 1;
		this.accel = createVector(0, 0);
		this.type = type; // "e: electron", "h: hole", "ge: generation effect", "re: recombination effect"
		this.location; // "s: source, "d: drain""
		this.show = true; // showing on screen
		this.botz = 1;
		this.direction = createVector(random(-1, 1), random(-1, 1));
		this.movingVelocity = 0;
		this.appear = 0; // opacity to slowly fade in at beginning of scene
		this.target = createVector(0, 0);
		this.opacity = 255; // opacity for generation, recombination effects and temporary electron/holes for effects
		this.chargeCreated = false;
	}

	hide() {
		this.show = false;
	}

	opacity() {
		this.appear -= 20;
	}

	stop() {
		this.velocity = createVector(0, 0);
		this.acceleartion = createVector(0, 0);
		this.movingVelocity = 0;
		this.maxspeed = 0;
	}

	// find charge's closest y value on band diagram
	findClosestValue(array, target) {
		// Initialize closest diff with a very large value
		let closestDiff = 1000;
		// Initialize closestYValue as undefined
		let closestYValue;

		for (let i = 0; i < array.length; i++) {
			// Calculate absolute difference between target and current value
			let diff = Math.abs(target - array[i][0]);
			// If this difference is less than closest diff found so far
			if (diff < closestDiff) {
				// Update closest diff and closestYValue
				closestDiff = diff;
				closestYValue = array[i][1];
			}
		}

		return closestYValue;
	}
	draw() {
		// draw charges in transistor
		let size = 8; // for fixed charges
		if (this.show) {
			if (this.type == "e") {
				//electron
				fill(...color.electron, this.appear);
				noStroke();
				ellipse(this.position.x, this.position.y, this.diameter);
			} else if (this.type == "h") {
				//hole
				noFill();
				stroke(...color.hole, this.appear);
				strokeWeight(1);
				ellipse(this.position.x, this.position.y, this.diameter);
			} else if (this.type == "te") {
				// temp electron for recombination effect
				fill(...color.electron, this.opacity);
				noStroke();
				ellipse(this.position.x, this.position.y, this.diameter);
			} else if (this.type == "th") {
				// temp hole for recombination effect
				noFill();
				stroke(...color.hole, this.opacity);
				strokeWeight(1);
				ellipse(this.position.x, this.position.y, this.diameter);
			} else if (this.type == "fp") {
				// fixed positive charge
				stroke(...color.white, 60);
				strokeWeight(5);
				line(this.x - size, this.y, this.x + size, this.y);
				line(this.x, this.y - size, this.x, this.y + size);
				noStroke();
				strokeWeight(1);
			} else if (this.type == "mp") {
				// fixed positive charge in metal
				stroke(...color.white, 160);
				strokeWeight(4);
				line(
					this.x - size / 1.2,
					this.y + size / 1.2,
					this.x + size / 1.2,
					this.y + size / 1.2
				);
				line(this.x, this.y, this.x, this.y + (size * 2) / 1.2); // up and down
				noStroke();
			} else if (this.type == "fn") {
				// fixed negative charge
				stroke(...color.white, 60);
				strokeWeight(5);
				line(this.x - size, this.y, this.x + size, this.y);
				noStroke();
				strokeWeight(1);
			} else if (this.type == "ge") {
				// generation effect circle
				strokeWeight(1);
				fill(...color.generation, this.opacity);
				stroke(...color.generation, this.opacity);
				ellipse(this.position.x, this.position.y, this.diameter);
			} else if (this.type == "re" && this.recomDiameter > 0) {
				// recombination effect circle
				stroke(...color.recom, this.opacity);
				fill(...color.recom, this.opacity / 4);
				strokeWeight(1);
				ellipse(this.position.x, this.position.y, this.recomDiameter);
			}
			this.drawOnBand();
		}
	}

	drawOnBand() {
		if (this.type == "e") {
			// draw electrons on band
			fill(...color.electron, 160);
			noStroke();
			this.bandPosition.y = this.bandOrigin.y - (this.botz * 8.8 * 2 * 0.1) / 3;
			if (
				this.bandPosition.y > 10 &&
				this.position.y < base.y + base.bandThreshold
			) {
				ellipse(this.position.x, this.bandPosition.y, 5);
			}
		} else if (this.type == "h") {
			// draw holes on band
			noFill();
			stroke(...color.hole, 160); //
			strokeWeight(1);
			this.bandPosition.y = this.bandOrigin.y + (this.botz * 8.8 * 2 * 0.1) / 3;
			if (
				this.bandPosition.y > 10 &&
				this.position.y < base.y + base.bandThreshold
			) {
				ellipse(this.position.x, this.bandPosition.y, 5);
			}
		}
	}

	updateOpacity() {
		if (this.type == "e" || this.type == "h") {
			// slowly appear at beginning
			if (this.appear < 255) {
				this.appear += 20;
			}
		} else if (this.type == "te") {
			// fade temp electron
			this.opacity -= 10;
		} else if (this.type == "th") {
			// fade temp hole
			this.opacity -= 10;
		} else if (this.type == "ge") {
			// fade generation effect circle
			this.opacity -= 20;
			this.diameter += 3;
		} else if (this.type == "re") {
			// fade recombination effect circle
			this.opacity -= 20;
			this.recomDiameter -= 3;
		}
	}

	moveBandDiagram() {
		// Function: snap charge's band position to band lines
		let band;
		this.type == "e" ? (band = electronBand) : (band = holeBand);
		let closestToBand = this.findClosestValue(band, this.position.x);
		this.bandOrigin.y = closestToBand;

		if (this.chargeType == "e") {
			// electron
			// find the near_index: find where the electron appear (on which line they should bounce back when hit the band diagram)
			let smallestDifference = Math.abs(
				electronBand[0].y - this.bandPosition.y
			);
			for (let i = 0; i < electronBand.length; i++) {
				let difference = Math.abs(electronBand[i].y - this.bandPosition.y);

				if (difference < smallestDifference) {
					smallestDifference = difference;
					this.near_index = i;
				}
			}
		}
		if (this.chargeType == "h") {
			//hole
			// find the near_index: find where the hole appear  (on which line they should bounce back when hit the band diagram)
			let smallestDifference = Math.abs(holeBand[0].y - this.bandPosition.y);
			for (let i = 0; i < holeBand.length; i++) {
				let difference = Math.abs(holeBand[i].y - this.bandPosition.y);
				if (difference < smallestDifference) {
					smallestDifference = difference;
					this.near_index = i;
				}
			}
		}
	}

	moveToSource() {
		// move charge from drain to source and flip direction
		this.position.x -= base.width - base.sourceWidth;
		this.velocity.y = -this.velocity.y;
	}

	tempHide() {
		// temporarily hide it so it doesn't show up on the wrong position on left side of band diagram (takes time to update)
		this.show = false;
		setTimeout(() => {
			this.show = true;
		}, 200);
	}

	update() {
		this.accelerate(); // update this.velocity based on EF
		this.position.add(this.velocity); // Update this.position based on its velocity
		this.x = this.position.x;
		this.y = this.position.y;
		// this.moveBandDiagram();

		// Bounce off boundaries
		let buffer = 3;

		if (this.position.x - this.diameter < base.x + buffer) {
			// bounce off left
			this.velocity.x = -this.velocity.x;
			this.position.x += 8;
		}
		if (this.position.x + this.diameter > base.endX - buffer) {
			// bounce off right
			this.velocity.x = -this.velocity.x;
			this.position.x -= 8;
		}

		if (this.position.y + this.diameter > base.endY - buffer) {
			// bounce off bottom
			this.velocity.y = -this.velocity.y;
			this.position.y -= 8;
		}


		if (this.position.y - this.diameter < base.y + buffer) {
			// if outside of drain
			if (this.position.x < base.drainX) {
				// bounce off top
				this.velocity.y = -this.velocity.y;
				this.position.y += 8;
			} else if (this.position.x > base.drainX) {
				// if inside drain

				let vdFlowConditions = [
					vdCharge == 0.1 && vgCharge == 1.0, // 0
					vdCharge == 0.3 && vgCharge == 1.0, // 1
					vdCharge == 1.0 && vgCharge == 1.0, // 2
					vdCharge == 0.1 && vgCharge == 1.3, // 3
					vdCharge == 0.3 && vgCharge == 1.3, // 4
					vdCharge == 1.0 && vgCharge == 1.3, // 5
				];

				// probability of leaving drain and moving to source (based on drain current)
				let multiplier = 1;
				let vdFlowProb = [
					Math.random() * 6 < multiplier * 0.5, // 0 - for flow = .5
					Math.random() * 6 < multiplier * 1, // 1 - for flow = 1
					Math.random() * 6 < multiplier * 1.2, // 2 - for flow = 1.2
					Math.random() * 6 < multiplier * 2, // 3 - for flow = 2
					Math.random() * 6 < multiplier * 5, // 4 - for flow = 5
					Math.random() * 6 < multiplier * 6, // 5 - for flow = 6
				]; // flow = x used old numbers for drain current, but work for visual purposes

				// if vd on & vg voltage is large enough, move electron to source
				if (vdFlowConditions[0] && vdFlowProb[0]) {
					this.moveToSource();
					this.tempHide();
				} else if (vdFlowConditions[1] && vdFlowProb[1]) {
					this.moveToSource();
					this.tempHide();
				} else if (vdFlowConditions[2] && vdFlowProb[2]) {
					this.moveToSource();
					this.tempHide();
				} else if (vdFlowConditions[3] && vdFlowProb[3]) {
					this.moveToSource();
					this.tempHide();
				} else if (vdFlowConditions[4] && vdFlowProb[4]) {
					this.moveToSource();
					this.tempHide();
				} else if (vdFlowConditions[5] && vdFlowProb[5]) {
					this.moveToSource();
					this.tempHide();
				} else {
					// drainCurrent = 0
					// bounce off top of drain
					this.velocity.y = -this.velocity.y;
					this.position.y += 8;
				}
			}
		}

		// Bounce off bottom
		// if (this.position.y > base.endY) {
		// 	this.direction.y = 10;
		// 	this.show = 0;

		// 	// if holes leave the bottom into the metal, bring some back to keep the number of holes consistent (create new charges that represent existing charges coming from metal)
		// 	if (this.type == "h" && !this.chargeCreated) {
		// 		// holes
		// 		var newCharge = new Charge(
		// 			random(base.x, base.endX),
		// 			base.endY,
		// 			"h",
		// 			chargeID,
		// 			"g"
		// 		);
		// 		newCharge.direction = createVector(random(-1, 1), -1);
		// 		newCharge.movingVelocity = this.movingVelocity;
		// 		newCharge.velocity = createVector(0, -10);
		// 		newCharge.botz = this.botz;
		// 		this.chargeCreated = true;
		// 		chargeID++;
		// 		holes.push(newCharge);
		// 	}
		// }

		// Scatter directions of charges randomly according to scatter interval defined in sketch.js
		if (willScatter && random(1)) {
			this.direction = createVector(random(-1, 1), random(-1, 1));
			this.botz =
				botzDistribution[Math.floor(Math.random() * botzDistribution.length)];
			this.movingVelocity = this.botz;
			this.velocity = p5.Vector.mult(this.direction, this.movingVelocity);

			let band;
			this.type == "e" ? (band = electronBand) : (band = holeBand);

			let closestToBand = this.findClosestValue(band, this.position.x);
			this.bandOrigin.y = closestToBand;
		}
	}

	accelerate() {
		// Read electric field data from Voltage Profiles files ==============================================================
		let Ex;
		let Ez; //Ez is the electric field in the vertical direction and here it will be zero. I Keep it if we need it in the future.  

		let x = this.x - base.x;
		let y = this.y - base.y;

		if (x < base.width && x > 0 && y < base.height && y > 0 && exOn) {
			// width of transistor = 640, height = 320 
			let width = base.width/20 //calculate width of each section
			let col = Math.floor(x / width); // Assuming we have obtained electric field in 20 regions
			// print(col)

			// Assign Ex and Ez to data
			Ez = 0

			Ex = electricFIeldBuckets[col]; //This is the calculated electric field
			
		} else {
			Ex = 0;
			Ez = 0;
		}

		// Multpliy the electric field by a constant to convert it to accelration on screen. Find best value with trial and error.
		let accelFactor = 0.01;
		this.accel.x = Ex * accelFactor;
		this.accel.y = Ez * accelFactor;

		if (this.type == "e") {
			// if an electron, accel in in the opposite direction of the electric field
			this.accel.x = -this.accel.x;
			this.accel.y = -this.accel.y;
		}

		if (this.type == "h") {
			// if a hole, accel in in the direction of the electric field
			this.accel.x = this.accel.x;
			this.accel.y = this.accel.y;
		}

		this.velocity.add(this.accel);
	}
}