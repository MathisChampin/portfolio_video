import { createVideoCard } from './components.js';

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.display = "none";
});

const videoData = [
    {
      title: 'Bande-annonce de l’Histoire de la ventilation mécanique à domicile',
      thumbnail: 'thumbnails/thumb_homeventilation_card.jpg',
      videoSrc: 'https://myruesezfkyrfbvyigbg.supabase.co/storage/v1/object/public/videos/bo_ventilation.mp4',
    },
    {
      title: 'Oxynov',
      thumbnail: 'thumbnails/thumb_oxynov_card.png',
      videoSrc: 'https://myruesezfkyrfbvyigbg.supabase.co/storage/v1/object/public/videos/oxynov.mp4',
    },
    {
      title: 'Salon du Bourget UMANN 2023',
      thumbnail: 'thumbnails/thumb_bourget_card.png',
      videoSrc: 'https://myruesezfkyrfbvyigbg.supabase.co/storage/v1/object/public/videos/salon_du_bourget.mp4',
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