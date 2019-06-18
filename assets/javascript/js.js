document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.parallax').parallax();
  });

  $("#contact_form_submit").click(function(e){
    e.preventDefault();
    var name = $("#contact_name").val();
    var email = $("#contact_email").val();
    var msg = $("#contact_message").val();

    $.ajax({
      type: "POST",
      url: "contact.php",
      data: {
        'name':name,
        'email':email,
        'message':msg,
      },
      success: function(data){
        $("#contact_name").val("");
        $("#contact_email").val("");
        $("#contact_message").val("");
        $("#contact-success").openModal();
      },
    });
});