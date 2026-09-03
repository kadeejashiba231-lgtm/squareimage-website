const current = document.getElementById('current');
const thumbs = document.querySelectorAll('.thumbnails img');
let index = 0;

// highlight first image
thumbs[0].classList.add('active');

// automatic slideshow every 3 seconds
setInterval(() => {
  index = (index + 1) % thumbs.length; // go to next image
  changeImage(index);
}, 3000);

function changeImage(i) {
  current.style.opacity = 0; // fade out
  setTimeout(() => {
    current.src = thumbs[i].src;
    thumbs.forEach(t => t.classList.remove('active'));
    thumbs[i].classList.add('active');
    current.style.opacity = 1; // fade in
  }, 500);
}

// if user clicks a thumbnail, show that image instantly
thumbs.forEach((img, i) => {
  img.addEventListener('click', () => {
    index = i;
    changeImage(i);
  });
});
