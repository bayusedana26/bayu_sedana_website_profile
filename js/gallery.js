/**
 * Bayu Sedana - Training Documentation Lightbox
 * Simple, accessible, and fast.
 */

document.addEventListener('DOMContentLoaded', () => {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-image');
  const lightboxHeading = document.getElementById('lightbox-heading');
  const lightboxSubheading = document.getElementById('lightbox-subheading');
  const closeBtn = document.getElementById('lightbox-close-btn');

  if (!lightbox || !lightboxImg) return;

  const clickableItems = document.querySelectorAll('[data-full]');

  clickableItems.forEach(item => {
    item.addEventListener('click', () => {
      const fullSrc = item.getAttribute('data-full');
      const title = item.getAttribute('data-title') || '';
      const desc = item.getAttribute('data-desc') || '';

      lightboxImg.src = fullSrc;
      lightboxImg.alt = title;
      lightboxHeading.textContent = title;
      lightboxSubheading.textContent = desc;

      lightbox.classList.add('is-active');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeLightbox = () => {
    lightbox.classList.remove('is-active');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  if (closeBtn) {
    closeBtn.addEventListener('click', closeLightbox);
  }

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('is-active')) {
      closeLightbox();
    }
  });
});
