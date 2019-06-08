$(function() {

  function formHandler() {

    var form = $('#contactForm');
    var name = $('#nameInput');
    var email = $('#emailInput');
    var message = $('#messageInput');
    var error = $('.error');


    form.on('submit', function(e) {

      e.preventDefault();

      var nameInputValue = name.val();
      var emailInputValue = email.val();
      var messageInputValue = message.val();

      var errorArr = [];


      function validateEmail(emailInputValue) {
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email.val());
      }

      if (validateEmail() === false) {
        //e.preventDefault();
        errorArr.push('Email musi posiadać znak @ oraz .');
        email.addClass('marked');
      } else {
        email.removeClass('marked');
      }

      if (nameInputValue.length <= 5) {
        //e.preventDefault();
        errorArr.push('Twoje imię musi być dłuższe niż 5 liter.');
        name.addClass('marked');
      } else {
        name.removeClass('marked');
      }

      if (messageInputValue.length <= 10) {
        //e.preventDefault();
        errorArr.push('Wiadomośc musi mieć więcej niż 10 znaków.');
        message.addClass('marked');
      } else {
        message.removeClass('marked');
      }

      if (errorArr.length > 0) {
        e.preventDefault(); //aby nie wysyłać formularza z błędem
        error.text(errorArr.join('\n'));
      } else {
        error.text('Nie popędzaj - robim co możem...');
      }
    })
  }

  formHandler();

});
