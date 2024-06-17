/*function scaleImages() {
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
		} /*else {
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
		}*//*
	});
}
/*
window.addEventListener('resize', scaleImages);
window.addEventListener('DOMContentLoaded', scaleImages);*/

document.addEventListener('DOMContentLoaded', function() {
    function onAllImagesLoaded(callback) {
        const images = document.querySelectorAll('img');
        let loadedImagesCount = 0;

        images.forEach((img) => {
            if (img.complete) {
                loadedImagesCount++;
                if (loadedImagesCount === images.length) {
                    callback();
                }
            } else {
                img.addEventListener('load', () => {
                    loadedImagesCount++;
                    if (loadedImagesCount === images.length) {
                        callback();
                    }
                });
                img.addEventListener('error', () => {
                    loadedImagesCount++;
                    if (loadedImagesCount === images.length) {
                        callback();
                    }
                });
            }
        });

        // Handle case where there are no images
        if (images.length === 0) {
            callback();
        }
    }

    onAllImagesLoaded(function() {
        const images = document.querySelectorAll('.offer-img');
        let smallestWidth = Infinity;

        images.forEach((img) => {
            const width = img.offsetWidth;
            if (width < smallestWidth) {
                smallestWidth = width;
            }
        });
		const offerMaxWidth = smallestWidth * 2;
		if (offerMaxWidth > 700)
		{
			const elementsToAdjust = document.querySelectorAll('.offer');
			elementsToAdjust.forEach((element) => {
				element.style.maxWidth = `${offerMaxWidth}px`;
			});
			//console.log(`All images loaded. Smallest width is ${smallestWidth}px.`);
		}
    });
});
