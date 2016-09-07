(function() {
  var intro = $('.intro');

  intro.on('init', function(event, slick) {
    var video = getVideoFromSlide(slick, 0);

    video.play();
    triggerNextSlideAfterPlaying(slick, video);
  });

  intro.on('afterChange', function(event, slick, currentSlide) {
    var video = getVideoFromSlide(slick, currentSlide);

    video.play();
    triggerNextSlideAfterPlaying(slick, video);
  });

  function getVideoFromSlide(slick, index) {
    return slick.$slides[index].querySelector('video');
  }

  function triggerNextSlideAfterPlaying(slick, video) {
    video.addEventListener('ended', function(event) {
      event.target.removeEventListener(event.target, arguments.callee);
      slick.slickNext();

      setTimeout( rewind.bind(this, video), 700);
    });
  }

  function rewind(video) {
    video.currentTime = 0
  }

  intro.slick({
    arrows: false
  });
})();