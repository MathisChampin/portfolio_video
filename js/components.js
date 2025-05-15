let currentVideo = null; // une seule vidéo active à la fois

export function createVideoCard({ title, thumbnail, videoSrc }) {
  const card = document.createElement('div');
  card.className = 'card';

  const isIframe = videoSrc.startsWith('iframe:');
  const src = isIframe ? videoSrc.replace('iframe:', '') : videoSrc;

  card.innerHTML = `
    <div class="card-media">
      <img src="${thumbnail}" alt="${title}">
      ${isIframe
        ? `<iframe src="${src}" frameborder="0" allow="autoplay; fullscreen" allowfullscreen style="display:none; width:100%; height:100%; border-radius: 14px;"></iframe>`
        : `<video muted loop playsinline style="display: none; opacity: 0;">
             <source src="${src}" type="video/mp4">
             Votre navigateur ne supporte pas la vidéo.
           </video>`
      }
      <div class="card-title"><h2>${title}</h2></div>
    </div>
  `;

  const media = isIframe ? card.querySelector('iframe') : card.querySelector('video');
  const img = card.querySelector('img');

  // Hover preview only for MP4
  if (!isIframe) {
    card.addEventListener('mouseenter', () => {
      // Stop the current video if different
      if (currentVideo && currentVideo !== media) {
        currentVideo.pause();
        currentVideo.currentTime = 0;
        currentVideo.style.opacity = '0';
        currentVideo.style.display = 'none';
        currentVideo.removeAttribute('controls');
      }

      currentVideo = media;
      img.style.opacity = '0';
      media.style.display = 'block';
      media.style.opacity = '1';
      media.play();
    });

    card.addEventListener('mouseleave', () => {
      if (media === currentVideo) {
        media.pause();
        media.currentTime = 0;
        media.style.opacity = '0';
        media.style.display = 'none';
        img.style.opacity = '1';
        currentVideo = null;
      }
    });
  }

  // Click to fullscreen
  card.addEventListener('click', () => {
    if (!isIframe) {
      media.setAttribute('controls', 'controls');
      media.requestFullscreen?.();
      media.play();
      currentVideo = media;

      // Sortie du plein écran = on stoppe
      const handleExit = () => {
        if (!document.fullscreenElement) {
          media.pause();
          media.currentTime = 0;
          media.style.display = 'none';
          media.removeAttribute('controls');
          img.style.display = 'block';
          img.style.opacity = '1';
          currentVideo = null;
          document.removeEventListener('fullscreenchange', handleExit);
        }
      };

      document.addEventListener('fullscreenchange', handleExit);
    } else {
      media.style.display = 'block';
      media.requestFullscreen?.();
    }
  });

  return card;
}
