$(document).ready(function(){
  var list = []
  $('a.btn').each(function () { 
    var id = $(this).attr('id');
    var link = "url(https://constitutioncenter.org/assets/ic/images/illustrations/ncc_amendment" + id + ".svg)";
    list.push(link);
  });
  $('a.btn').hover(function () {
      // over
      $('.container').css('background-image', list[Number($(this).attr('id')) - 1]);
    }, function () {
      // out
      $('.container').css('background-image', 'none');
    }
  );
  });