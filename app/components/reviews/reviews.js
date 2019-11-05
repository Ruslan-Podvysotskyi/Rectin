// $(document).on("click", function () {
//   $('.reviews .wrapper .leave-review-form #rev:focus').css('border', '1px solid #dfe1e2');
//   $('.reviews .wrapper .leave-review-form #rev:focus').css('box-shadow', 'inset 0px 0px 5px rgba(255,0,0,0)');
// });
//$(document).ready(function () {
  $('.modal-empty').hide();
  $('.modal-success').hide();
//});

function show_msg(){

  if( $('#rev').val() && $('#rev1').val() &&  $('#rev2').val()  && $('#rev3').val() ){
    $('.modal-success').show();
    $('form input[type="text"], form input[type="number"], form textarea').val('');
      
  } else if (!$('#rev1').val()){
    $('.modal-empty span').html('Имя');
    $('.modal-empty').show();
    setTimeout(function () {$('.modal-empty').hide()}, 40000);
  }
  else if (!$('#rev2').val()){
    $('.modal-empty span').html('Возраст');
    $('.modal-empty').show();
    setTimeout(function () {$('.modal-empty').hide()}, 40000);
  }
  else if (!$('#rev3').val()){
    $('.modal-empty span').html('Город');
    $('.modal-empty').show();
    setTimeout(function () {$('.modal-empty').hide()}, 40000);
  }

  else if (!$('#rev').val()){
    $('.modal-empty span').html('Отзыв');
    $('.modal-empty').show();
    setTimeout(function () {$('.modal-empty').hide()}, 40000);
  }

}

$('#cross').on('click', function () {
  $('.modal-empty').hide();
});

$('#cross2').on('click', function () {
  $('.modal-success').hide();
});

$('.backgroundM').on('click', function () {
  $('.modal-empty').hide();
  $('.modal-success').hide();
});

$("#rev4").change(function() {
  filename = this.files[0].name
  $(".filename").html(filename);
});

