(() => {
  const trigger = document.querySelector('.add-event-enlarge');
  const lightbox = document.querySelector('#add-event-lightbox');
  const closeButton = lightbox?.querySelector('.image-lightbox-close');

  if (!trigger || !lightbox || !closeButton) return;

  const closeLightbox = () => {
    lightbox.close();
  };

  trigger.addEventListener('click', () => {
    lightbox.showModal();
    document.body.classList.add('lightbox-open');
    closeButton.focus();
  });

  closeButton.addEventListener('click', closeLightbox);

  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) closeLightbox();
  });

  lightbox.addEventListener('close', () => {
    document.body.classList.remove('lightbox-open');
    trigger.focus();
  });
})();
