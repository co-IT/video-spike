(function () {
  var intro= $('.intro');

  intro.on('init', function(event, slick) {
    // play first video
   var video = slick.$slides[0].querySelector('video');

   slick.slickSetOption('autoplaySpeed', video.duration * 1000);
   slick.slickPlay();
   video.play();
  });

  intro.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
   var video = slick.$slides[nextSlide].querySelector('video');

   slick.slickSetOption('autoplaySpeed', video.duration * 1000);
   slick.slickPause();
  });

  intro.on('afterChange', function(event, slick, currentSlide) {
   var video =  slick.$slides[currentSlide].querySelector('video');

   slick.slickPlay();
   video.play();
  });

  intro.slick();

})();