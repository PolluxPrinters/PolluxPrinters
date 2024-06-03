
'use strict'

// --- rotate thumbnails ---
document.addEventListener('DOMContentLoaded', function() {
    const productImage = document.getElementById('productImage');
    const thumbnails = document.querySelectorAll('.thumbnail');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const imageUrl = this.getAttribute('data-image');
            productImage.innerHTML = `<img src="${imageUrl}" alt="Product Image">`;
        });
    });
});


