export function createVideoCard({ title, thumbnail, videoSrc }) {
    const card = document.createElement('div');
    card.className = 'card';
  
    card.innerHTML = `
      <div class="card-media">
        <img src="${thumbnail}" alt="${title}">
        <video muted loop>
          <source src="${videoSrc}" type="video/mp4">
          Votre navigateur ne supporte pas la vidéo.
        </video>
        <div class="card-title">
          <h2>${title}</h2>
        </div>
      </div>
    `;
  
    const video = card.querySelector('video');
    const img = card.querySelector('img');
  
    card.addEventListener('mouseenter', () => {
      img.style.opacity = '0';
      video.style.opacity = '1';
      video.play();
    });
  
    card.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = 0;
      video.style.opacity = '0';
      img.style.opacity = '1';
    });
  
    return card;
  }