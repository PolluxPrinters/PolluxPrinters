
'use strict'

const menuToggle = document.querySelector('.menu-toggle');
const bxMenu = document.querySelector('.bx-menu');
const bxX = document.querySelector('.bx-x');

const navBar = document.querySelector('.navbar');

// --- open menu ---

bxMenu.addEventListener('click', (e)=> {
    if(e.target.classList.contains('bx-menu')){
        navBar.classList.add('show-navbar');
        bxMenu.classList.add('hide-bx');
        bxX.classList.add('show-bx');
    }
})

// --- close menu ---

bxX.addEventListener('click', (e)=> {
    if(e.target.classList.contains('bx-x')){
        navBar.classList.remove('show-navbar');
        bxMenu.classList.remove('hide-bx');
        bxX.classList.remove('show-bx');
    }
})

document.addEventListener('DOMContentLoaded', function() {
	function updateZoom() {
		const img = document.querySelector('.offer-img');
		if (img) {
			const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
			const baseScale = 1;
			const maxScale = 1.3; // Maximum zoom scale

			// Calculate scale based on viewport width
			const scale = baseScale + (1200 - vw) / 1200 * (maxScale - baseScale);
			img.style.transform = `scale(${scale})`;
		}
}
// Initial zoom update
updateZoom();

// Update zoom on window resize
window.addEventListener('resize', updateZoom);
});