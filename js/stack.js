

(function() {
    var rotate, timeline;
  
    rotate = function() {
      return $('.stack-card:first-child').fadeOut(400, 'swing', function() {
        return $('.stack-card:first-child').appendTo('.stack-container').hide();
      }).fadeIn(400, 'swing');
    };
  
    timeline = setInterval(rotate, 1200);
  
    $('body').hover(function() {
      return clearInterval(timeline);
    });
  
    $('.stack-card').click(function() {
      return rotate();
    });
  
  }).call(this);