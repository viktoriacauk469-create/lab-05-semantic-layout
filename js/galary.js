document.addEventListener('DOMContentLoaded', function () {
  if (typeof Fancybox === 'undefined') return;

  Fancybox.bind('[data-fancybox]', {
    Toolbar: {
      display: {
        left: [],
        middle: ['prev', 'infobar'],
        right: ['slideshow', 'zoom', 'fullscreen', 'close'],
      },
    },
    zoom: true,
    openAnimation: 'fade',
    closeAnimation: 'fade',
    Images: {
      zoom: true,
      click: 'zoom',
      PanZoom: { maxScale: 3 },
    },
  });
});
