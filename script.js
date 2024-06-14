
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
			const containerWidth = document.querySelector('.offer-img-container').clientWidth;
			const containerHeight = document.querySelector('.offer-img-container').clientHeight;
			const naturalWidth = img.naturalWidth;
			const naturalHeight = img.naturalHeight;

			// Calculate scale based on container and image natural dimensions
			const scaleX = containerWidth / naturalWidth;
			const scaleY = containerHeight / naturalHeight;
			const scale = Math.min(scaleX, scaleY); // Use the smaller scale to fit both dimensions

			img.style.transform = `scale(${scale})`;
		}
}
// Initial zoom update
updateZoom();

// Update zoom on window resize
window.addEventListener('resize', updateZoom);
});