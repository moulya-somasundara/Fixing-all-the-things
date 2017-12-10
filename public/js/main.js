(function($) {
  const theForm = $("#email-form");
  const theEmail = $("#the-email");
  const theMessage = $("#the-message");
  const theResult = $("#the-result");

  theForm.submit(e => {
    e.preventDefault();

    const formData = {
      email: theEmail.val(),
      message: theMessage.val()
    };

    $.ajax({
      type: "POST",
      url: "/",
      data: JSON.stringify(formData),
      success: function(data) {
        theResult.text(data);
      },
      contentType: "application/json",
      dataType: "json"
    }).done(function (data) {
      let x = JSON.parse(data);
      let mail = x.email;
      let msg = x.message;
      let result = "<p>Email: " + mail + "</p><p>Message: " + msg + "</p>";
      $('#the-result').html(result);
    });
  });
})(jQuery); // jQuery is exported as $ and jQuery
