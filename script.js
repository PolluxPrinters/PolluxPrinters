function scaleImages() {
	const containers = document.querySelectorAll('.offer-img-container');
	containers.forEach(container => {
		const img = container.querySelector('.offer-img');
		if (img.complete) {
			// Image already loaded
			const imgWidth = img.offsetWidth;
			const imgHeight = img.offsetHeight;
			console.log(`Image displayed with dimensions: ${imgWidth}x${imgHeight}`);
			
			const containerWidth = container.clientWidth;
			const containerHeight = container.clientHeight;
			console.log(`Container has with dimensions: ${containerWidth}x${containerHeight}`);
			
			const widthRatio = imgWidth / containerWidth;
			const heightRatio = imgHeight / containerHeight;
			console.log(`Ratios: ${widthRatio}x${heightRatio}`);
			
			if (widthRatio <= heightRatio) //Scale horizontally
			{
				console.log("horizontal");
				scaledWidth = imgWidth / widthRatio;
				scaledHeight = imgHeight / widthRatio;
				img.style.width = `${scaledWidth}px`;
				img.style.height = `${scaledHeight}px`;
				console.log("New Height: " + img.style.height);
				console.log("New Width: " + img.style.width);
			}
			else //Scake vertically
			{
				console.log("vertical");
				scaledWidth = imgWidth / heightRatio;
				scaledHeight = imgHeight / heightRatio;
				img.style.width = `${scaledWidth}px`;
				img.style.height = `${scaledHeight}px`;
				console.log("New Height: " + img.style.height);
				console.log("New Width: " + img.style.width);
			}
		} else {
			img.addEventListener('load', function() {
				const imgWidth = img.offsetWidth;
				const imgHeight = img.offsetHeight;
				console.log(`Image displayed with dimensions: ${imgWidth}x${imgHeight}`);
				
				const containerWidth = container.clientWidth;
				const containerHeight = container.clientHeight;
				console.log(`Container has with dimensions: ${containerWidth}x${containerHeight}`);
				
				const widthRatio = imgWidth / containerWidth;
				const heightRatio = imgHeight / containerHeight;
				console.log(`Ratios: ${widthRatio}x${heightRatio}`);
				
				if (widthRatio <= heightRatio) //Scale horizontally
				{
					console.log("horizontal");
					scaledWidth = imgWidth / widthRatio;
					scaledHeight = imgHeight / widthRatio;
					img.style.width = `${scaledWidth}px`;
					img.style.height = `${scaledHeight}px`;
					console.log("New Height: " + img.style.height);
					console.log("New Width: " + img.style.width);
				}
				else //Scake vertically
				{
					console.log("vertical");
					scaledWidth = imgWidth / heightRatio;
					scaledHeight = imgHeight / heightRatio;
					img.style.width = `${scaledWidth}px`;
					img.style.height = `${scaledHeight}px`;
					console.log("New Height: " + img.style.height);
					console.log("New Width: " + img.style.width);
				}
			});
		}
	});
}

window.addEventListener('resize', scaleImages);
window.addEventListener('DOMContentLoaded', scaleImages);