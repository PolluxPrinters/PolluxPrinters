function scaleImages() {
	const containers = document.querySelectorAll('.offer-img-container');
	containers.forEach(container => {
		const img = container.querySelector('.offer-img');
		if (img) {
			const imgNaturalWidth = img.naturalWidth;
			const imgNaturalHeight = img.naturalHeight;
			const containerWidth = container.clientWidth;
			const containerHeight = container.clientHeight;

			const widthRatio = containerWidth / imgNaturalWidth;
			const heightRatio = containerHeight / imgNaturalHeight;
			const scale = Math.max(widthRatio, heightRatio);

			img.style.width = `${imgNaturalWidth * scale}px`;
			img.style.height = `${imgNaturalHeight * scale}px`;
		}
	});
}

window.addEventListener('resize', scaleImages);
window.addEventListener('DOMContentLoaded', scaleImages);