// Banner slider logic
const bannerImages = [
    'images/7.jpg',
    'images/5.jpg',
    'images/9.jpg',
    'images/8.jpg'
];

let currentBanner = 0;
let bannerInterval = null;

// Create image elements dynamically
function showBannerImage(index) {
    let container = document.querySelector('.banner-container');
    let oldImg = container.querySelector('img');
    if (oldImg) oldImg.remove();

    let img = document.createElement('img');
    img.src = bannerImages[index];
    img.alt = "Charity Project Banner";
    img.style.opacity = 0;
    container.insertBefore(img, container.firstChild);

    setTimeout(() => { img.style.opacity = 1; }, 50);
}

// Slide automatically every 3 seconds
function startBannerAutoSlide() {
    if (bannerInterval) clearInterval(bannerInterval);
    bannerInterval = setInterval(() => {
        currentBanner = (currentBanner + 1) % bannerImages.length;
        showBannerImage(currentBanner);
    }, 3000);
}

// Initial banner
document.addEventListener('DOMContentLoaded', function() {
    showBannerImage(currentBanner);
    startBannerAutoSlide();

    document.getElementById('bannerPrev').onclick = function() {
        currentBanner = (currentBanner - 1 + bannerImages.length) % bannerImages.length;
        showBannerImage(currentBanner);
        startBannerAutoSlide();
    };
    document.getElementById('bannerNext').onclick = function() {
        currentBanner = (currentBanner + 1) % bannerImages.length;
        showBannerImage(currentBanner);
        startBannerAutoSlide();
    };
});