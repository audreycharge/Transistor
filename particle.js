class Particle {
	constructor(squareSize, initialProgress, speed) {
		this.squareSize = squareSize;
		this.speed = speed;
		this.progress = initialProgress;

		// Calculate center of canvas
		this.centerX = windowWidth / 2;
		this.centerY = windowHeight / 2;

		// Initialize position
		this.x = this.centerX - squareSize / 2;
		this.y = this.centerY - squareSize / 2;

		this.updatePosition();
	}

	update() {
		this.progress += this.speed;

		// Reset progress when complete circuit
		if (this.progress >= 4 * this.squareSize) {
			this.progress = 0;
		}

		this.updatePosition();
	}

	updatePosition() {
		const halfSize = this.squareSize / 2;

		// Calculate position based on progress around square
		if (this.progress < this.squareSize) {
			// Bottom edge: left to right
			this.x = this.centerX - halfSize + this.progress;
			this.y = this.centerY + halfSize;
		} else if (this.progress < 2 * this.squareSize) {
			// Right edge: bottom to top
			this.x = this.centerX + halfSize;
			this.y = this.centerY + halfSize - (this.progress - this.squareSize);
		} else if (this.progress < 3 * this.squareSize) {
			// Top edge: right to left
			this.x = this.centerX + halfSize - (this.progress - 2 * this.squareSize);
			this.y = this.centerY - halfSize;
		} else {
			// Left edge: top to bottom
			this.x = this.centerX - halfSize;
			this.y = this.centerY - halfSize + (this.progress - 3 * this.squareSize);
		}
	}

	display() {
		noStroke();
		fill(64, 96, 255);
		circle(this.x, this.y, 8);
	}
}
