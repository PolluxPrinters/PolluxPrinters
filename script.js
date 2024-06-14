
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
                    const containerWidth = document.querySelector('.image-container').clientWidth;
                    const containerHeight = document.querySelector('.image-container').clientHeight;
                    const naturalWidth = img.naturalWidth;
                    const naturalHeight = img.naturalHeight;

                    // Determine visibility based on container and image dimensions
                    const isVisibleHorizontally = containerWidth >= naturalWidth;
                    const isVisibleVertically = containerHeight >= naturalHeight;

                    // Adjust image visibility
                    img.style.opacity = isVisibleHorizontally && isVisibleVertically ? 1 : 0;

                    // Adjust image dimensions to fill container if it exceeds image size
                    if (containerWidth > naturalWidth || containerHeight > naturalHeight) {
                        img.style.width = '100%';
                        img.style.height = '100%';
                    } else {
                        img.style.width = 'auto';
                        img.style.height = 'auto';
                    }
                }
}
// Initial zoom update
updateZoom();

// Update zoom on window resize
window.addEventListener('resize', updateZoom);
});