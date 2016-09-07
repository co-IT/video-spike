(function() {
  var intro = $('.intro');

  intro.on('init', function(event, slick) {
    var video = getVideoFromSlide(slick, 0);

    slick.slickSetOption('autoplaySpeed', video.duration * 1000);
    slick.slickPlay();
    video.play();
  });

  intro.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    var nextVideo = getVideoFromSlide(slick, nextSlide);

    slick.slickSetOption('autoplaySpeed', nextVideo.duration * 1000);
    slick.slickPause();
  });

  intro.on('afterChange', function(event, slick, currentSlide) {
    var currentVideo = getVideoFromSlide(slick, currentSlide);

    slick.slickPlay();
    currentVideo.play();

    var previousVideo = getVideoFromSlide(slick, currentSlide - 1);
    previousVideo.currentTime = 0;
  });

  function getVideoFromSlide(slick, index) {
    var slide;

    index >= 0 ? slide = index
               : slide = slick.$slides.length - 1;

    return slick.$slides[slide].querySelector('video');
  }

  intro.slick({
    arrows: false
  });
})();