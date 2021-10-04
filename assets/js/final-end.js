
var liftOff = new Date('2021-11-02T00:00:01-0500')
var endButtonId = '#trigger-end-button'

function theEnd() {
  if (!$ || !$.countdown) {
    console.error('Unable to find JQuery Countdown. Ensure it is installed and loaded');
    return;
  }
  console.log('END')

  var imageIndices = [1,2,3,4,5,6]

  imageIndices
    .map(i => '.image' + i)
    .map(className => {
      console.log(className)
      $(className).addClass('theEndOrb')
        .addClass(className.slice(1) + 'Final')
        .removeClass(className.slice(1))
    })

  $('#countdown-container').fadeOut(11000)
  $('.centered-back').fadeOut(6000)
  $(endButtonId).fadeOut(3000)
}

function makeReplayVisibleIfPastTime() {
  if (!$) {
    console.error('Unable to find JQuery. Ensure it is installed and loaded');
    return;
  }
  var now = (new Date()).toISOString()
  if (now > liftOff.toISOString()) {
    $(endButtonId).removeClass('bg-transparent').removeClass('hidden-end-button')
  }
}

function startCountdown() {
  $('#countdown-text').countdown({until: liftOff});
}

$(document).ready(() => {
  makeReplayVisibleIfPastTime();
  startCountdown();
  $('#trigger-end-button').click(() => {
    theEnd();
    var tenSecondsRemaining = new Date(new Date().getTime() + 10 * 1000);
    console.log('when', tenSecondsRemaining)
    $('#countdown-text').countdown('destroy')
    $('#countdown-text').countdown({until: tenSecondsRemaining});
  })
})