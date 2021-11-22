//====== show menu ====//
const showMenu = (toggleId, navId) => {
	const toggle = document.getElementById(toggleId);
	nav = document.getElementById(navId);

	if (toggle && nav) {
		toggle.addEventListener("click", () => {
			console.log("click");
			nav.classList.toggle("show_menu");
		});
	}
};

showMenu("nav-toggle", "nav-menu");

// ==== close menu === //
let menu_links = document.querySelectorAll('.menu_link');
menu_links.forEach((link) => {
	link.addEventListener('click', () => {
		nav.classList.toggle("show_menu");
	})
})

//====== Dark mode ====//
let storage_key = "portfolio_dark_theme";
let darkmode = localStorage.getItem(storage_key);
const darkModeToggle = document.querySelector("#theme_btn");

const enableDarkMode = () => {
	document.body.classList.add("dark_theme");
	darkModeToggle.checked = true;
	localStorage.setItem(storage_key, "enabled");
};

const disableDarkMode = () => {
	document.body.classList.remove("dark_theme");
	darkModeToggle.checked = false;
	localStorage.setItem(storage_key, null);
};

if (darkmode === "enabled") {
	enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
	let darkmode = localStorage.getItem(storage_key);
	if (darkmode !== "enabled") {
		enableDarkMode();
	} else {
		disableDarkMode();
	}
});

//===== Scroll Library == //
ScrollReveal().reveal(".rotate", {
	delay: 300,
	duration: 500,
	reset: true,
	rotate: {
		x: 20,
		z: 20,
	},
});

ScrollReveal().reveal(".scale", {
	delay: 300,
	duration: 500,
	reset: true,
	scale: 0.85,
	
});

//==== SCROLL TOP === //
let scrollBtn = document.getElementById("scrollBtn");

window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
		scrollBtn.style.display = "block";
	} else {
		scrollBtn.style.display = "none";
	}
}

scrollBtn.addEventListener('click', () => {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
})