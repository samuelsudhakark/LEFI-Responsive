/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}

function resize() {
	if (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		if (window.matchMedia("(orientation: landscape)").matches) {
			$('.carousel-parent').height(511);
			$('.carousel-control-prev').css('top', '95%');
			$('.carousel-control-next').css('top', '95%');
		}

		if (window.matchMedia("(orientation: portrait)").matches) {
		   $('.carousel-parent').height(458);
		   $('.carousel-control-prev').css('top', '80%');
		   $('.carousel-control-next').css('top', '80%');
		}
	}
}