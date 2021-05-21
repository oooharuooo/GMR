// Scrolling Fade-in Slide up effect
window.addEventListener("scroll", () => {
	// Loop through all scrolling classes
	document.querySelectorAll(".scrolling-effect").forEach((scroll) => {
		// top viewport base on user scrolling
		const top = scroll.getBoundingClientRect().top;
		// Compare to window height , add effect if it smaller then window height
		if (top < window.innerHeight) {
			scroll.classList.add("slide-up-effect");
			scroll.classList.remove("opacity");
		}
	});
});
