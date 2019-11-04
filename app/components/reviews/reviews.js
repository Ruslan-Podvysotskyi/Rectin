// $(document).on("click", function () {
//   $('.reviews .wrapper .leave-review-form #rev:focus').css('border', '1px solid #dfe1e2');
//   $('.reviews .wrapper .leave-review-form #rev:focus').css('box-shadow', 'inset 0px 0px 5px rgba(255,0,0,0)');
// });

function show_msg(){

  if( $('#rev').val()){
      $('#otz').fadeIn(100, function() { $('#otz').css('display', 'none') });
      $('#popup_otz').fadeIn(400, function() { $('#popup_otz').css('display', 'flex') });
      
  }else{
    $('#rev').focus();
    $('.reviews .wrapper .leave-review-form #rev:focus').css('border', '1px solid rgba(255,0,0,0.5)');
    $('.reviews .wrapper .leave-review-form #rev:focus').css('box-shadow', 'inset 0px 0px 5px rgba(255,0,0,0.5)');
  }

}

