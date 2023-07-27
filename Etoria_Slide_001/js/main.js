$(function () {
  $('*[data-slide]').on('touchend click', function (e) {
    var dataSlide = $(this).attr('data-slide');
    var dataSlideName = dataSlide.substring(0, dataSlide.length - 4); // for IPA  // Comment when convert to veeva files
    window.open('../' + dataSlideName + '/index.html', '_self'); // for IPA  // Comment when convert to veeva files
    if (
      typeof $(this).attr('data-presentation') !== typeof undefined ||
      $(this).attr('data-presentation') !== false
    ) {
      // var dataPresentation = $(this).attr("data-presentation");
      // com.veeva.clm.gotoSlide(dataSlide, dataPresentation); // for Veeva files // uncomment when convert to veeva files
    } else {
      // com.veeva.clm.gotoSlide(dataSlide); // for Veeva files  // uncomment when convert to veeva files
    }
  });
});

var reference = 0;

//================== REFERENCE BUTTON HANDLER ==========================//
$('[data-ref]').on('touchend click', function () {
  var refId = '#' + $(this).attr('data-ref');
  $(refId).removeClass('hidden');
  $(refId).addClass('visible');
  reference = 1;
});

$('.btnClose').on('touchend click', function () {
  $('.refDiv').removeClass('visible');
  $('.refDiv').addClass('hidden');
  reference = 0;
});
$('#infoBtn').on('touchend', function () {
  $('#infoDiv').removeClass('hidden');
  $('#infoDiv').addClass('visible');
  reference = 1;
});
$('#infoDiv').on('touchend', function () {
  $(this).addClass('hidden');
  $(this).removeClass('visible');
  reference = 0;
});

$('#openMenu').on('touchend click', function () {
  $('#menu').toggleClass('hidden');
});
