import { createVideoCard } from './components.js';

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.display = "none";
});

const videoData = [
    {
      title: 'Bande-annonce de l’Histoire de la ventilation mécanique à domicile',
      thumbnail: 'thumbnails/thumb_homeventilation_card.jpg',
      videoSrc: 'iframe:https://streamable.com/e/kqoaqb?autoplay=1&muted=1',
    },
    {
      title: 'Oxynov',
      thumbnail: 'thumbnails/thumb_oxynov_card.png',
      videoSrc: 'iframe:https://streamable.com/e/bw48ld?autoplay=1&muted=1',
    },
    {
      title: 'Salon du Bourget UMANN 2023',
      thumbnail: 'thumbnails/thumb_bourget_card.png',
      videoSrc: 'iframe:https://streamable.com/e/h485b4?autoplay=1&muted=1',
    },
  ];
  

const carousel = document.getElementById('carousel');
const cardWidth = 320;

videoData.forEach(video => {
  const card = createVideoCard(video);
  carousel.appendChild(card);
});

document.getElementById('arrow-left').addEventListener('click', () => {
  carousel.scrollBy({ left: -cardWidth, behavior: 'smooth' });
});

document.getElementById('arrow-right').addEventListener('click', () => {
  carousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
});