class wireCharge {
	constructor(x, y, loop) {
		this.position = createVector(x, y);
		this.velocity = createVector(10, 0); // Initial random velocity
		this.show = true;
		this.passedDest = [0];
		this.speed = 20; // at this speed, the charges move consistently on the wires, at lower or hire speeds sometimes it goes outside the wire due to dimensions
		this.loop = loop;
		this.gateStop = random(0, 360);
	}

	draw() {
		noStroke();
		let show = false;

		// outer loop - only show if above top metals (metal is treated as visual black box)
		if (this.loop == "vd") {
			if (this.position.y < base.y - base.metalHeight) {
				show = true;
			}
		}

		// inner loop
		if (this.loop == "vg") {
			show = true;
			// insulator
			if (
				this.position.x > base.wire.leftMetal.x + 24 &&
				this.position.y > base.y - base.metalHeight * 2
			) {
				show = false;
			} else if (
				this.position.x < base.wire.leftMetal.x + 24 &&
				this.position.y > base.y - base.metalHeight
			) {
				show = false;
			}
		}

		if (show) {
			fill(...color.electron);
			ellipse(this.position.x, this.position.y, 8);
		}
	}

	update() {
		this.position.add(this.velocity);

		let buffer = 18;
		if (
			this.position.x < base.x + base.sourceWidth + buffer ||
			this.position.x > base.endX - base.sourceWidth - buffer
		) {
			this.velocity.x *= -1;
		}
	}

	updatePosition(x, y) {
		this.position.x = x;
		this.position.y = y;
	}

	updatePassed(value) {
		this.passedDest.push(value);
	}

	clearPassed() {
		this.passedDest = [0];
	}

	hide() {
		this.show = false;
	}

	move(destination) {
		// Calculate the vector pointing from the current position to the destination
		let direction = createVector(
			destination.x - this.position.x,
			destination.y - this.position.y
		);

		// Normalize the direction vector to have a length of 1
		direction.normalize();

		// Scale the direction vector by the ball's speed
		if (this.loop == "vd") {
			direction.mult(this.speed);
		} else {
			direction.mult(this.speed); // if above 10, will go above wire (height is divisble by 10?)
		}

		// Update the position based on the direction vector
		this.position.add(direction);
	}
}
