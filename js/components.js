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
    video.muted = false;
    video.play();
  });

  card.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
    video.style.opacity = '0';
    img.style.opacity = '1';
    video.muted = true;
  });

  card.addEventListener("click", () => {
    img.style.opacity = "0";
    video.style.display = "block";
    video.style.opacity = "1";
    video.muted = false;
    video.setAttribute("controls", "controls");

    video.play().then(() => {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      }
    }).catch(() => {});

    const exitHandler = () => {
      if (!document.fullscreenElement && video === currentVideo) {
        resetVideo(video);
        img.style.opacity = "1";
        currentVideo = null;
        document.removeEventListener("fullscreenchange", exitHandler);
      }
    };
    document.addEventListener("fullscreenchange", exitHandler);
  });

  return card;
}