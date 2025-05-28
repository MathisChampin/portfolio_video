import { createVideoCard } from './components.js';

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.display = "none";
});

const videoData = [
    {
      title: 'Film l’Histoire de la ventilation mécanique à domicile',
      thumbnail: 'thumbnails/thumb_homeventilation_card.jpg',
      videoSrc: 'https://greatalexandria.s3.eu-north-1.amazonaws.com/film_FR.mp4',
    },
    {
      title: 'Oxynov',
      thumbnail: 'thumbnails/thumb_oxynov_card.png',
      videoSrc: 'https://myruesezfkyrfbvyigbg.supabase.co/storage/v1/object/public/videos/oxynov.mp4',
    },
    {
      title: 'Salon du Bourget UMANN 2023',
      thumbnail: 'thumbnails/thumb_bourget_card.png',
    },
    {
      title: 'Congrès Orlando CHEST ventilation noninvasive',
      thumbnail: 'thumbnails/thumb_intro_card.jpg',
    },
    {
      title: 'Respironics CNN',
      thumbnail: 'thumbnails/Respiration_CNN.png',
    },
    {
      title: 'Childhood Asthma: New ETAC Data Berlin 2001',
      thumbnail: 'thumbnails/Asthma_Berlin.png',
    },
    {
      title: 'Childhood Asthma: New ETAC Data Prague 2001',
      thumbnail: 'thumbnails/Asthma_Prague.png',
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