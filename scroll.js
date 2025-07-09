totalScenes = 1;
sceneCount = 0;
let scenes = [];

StartScroll = () => {
	let controller = new ScrollMagic.Controller();
	let scene_0 = new ScrollMagic.Scene({
		triggerElement: "#scene0",
	})
		.setClassToggle("#scene0", "fade-in")

		.on("start", () => {
			if (sceneCount == 0) {
				sceneCount = 0.5;
				opening = 0;
			} else {
				sceneCount = 0;
			}
		})
		.addTo(controller);

	let scene1 = new ScrollMagic.Scene({
		triggerElement: "#scene1",
	})
		.setClassToggle("#scene1", "fade-in")
		.on("start", () => {
			if (sceneCount == 0.5) {
				sceneCount = 1;
				resetScene();
			} else {
				sceneCount = 0.5;
				resetScene();
			}
		})
		.addTo(controller);

	let scene2 = new ScrollMagic.Scene({
		triggerElement: "#scene2",
	})
		.setClassToggle("#scene2", "fade-in")
		.on("start", () => {
			if (sceneCount == 1) {
				sceneCount = 2;
				resetScene();
			} else {
				sceneCount = 1;
				resetScene();
			}
		})
		.addTo(controller);

	let scene3 = new ScrollMagic.Scene({
		triggerElement: "#scene3",
	})
		.setClassToggle("#scene3", "fade-in")
		.on("start", () => {
			if (sceneCount == 2) {
				sceneCount = 3;
				resetScene();
			} else {
				sceneCount = 2;
				resetScene();
			}
		})
		.addTo(controller);
};
