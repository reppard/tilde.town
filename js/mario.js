var colors = Array('#000000', '#DC2A04', '#FFFFFF', '#FC9A3C');
var negColors = Array('#FFFFFF', '#03A42D', '#000000', '#28899B');
var sprite = Array(
    0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0,
    0, 0, 0, 1, 1, 1, 1, 3, 3, 1, 3, 0, 0, 0, 0, 0,
    0, 0, 1, 1, 3, 1, 3, 3, 3, 1, 3, 3, 3, 0, 0, 0,
    0, 0, 1, 1, 3, 1, 1, 3, 3, 3, 1, 3, 3, 3, 0, 0,
    0, 0, 1, 1, 1, 3, 3, 3, 3, 1, 1, 1, 1, 0, 0, 0,
    0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0,
    0, 0, 0, 1, 1, 1, 2, 1, 1, 1, 0, 0, 0, 0, 0, 0,
    0, 0, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 0, 0, 0,
    0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 0, 0,
    0, 3, 3, 3, 1, 2, 3, 2, 2, 3, 2, 1, 3, 3, 0, 0,
    0, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 3, 3, 3, 0, 0,
    0, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 0, 0,
    0, 0, 0, 2, 2, 2, 2, 0, 2, 2, 2, 2, 0, 0, 0, 0,
    0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0,
    0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0),
    length = sprite.length;

for (var i = 0; i < length; i++) {
  var color = colors[sprite[i]];
  $('.sprite').append('<div class="box" color="' + sprite[i] + '"></div>');
  $('.box:last').css('background', color);
}

$('.sprite').hover(function () {
  $('.box').each(function () {
    var thisColor = $(this).attr("color");
    $(this).css({
      backgroundColor: negColors[thisColor]
    });
  });
},

function () {
  $('.box').each(function () {
    var thisColor = $(this).attr("color");
    $(this).css({
      backgroundColor: colors[thisColor]
    });
  });
});
