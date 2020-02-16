var FormView = {

  $form: $('form'),


  initialize: function () {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function (event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    console.log('click!');


    var txt = document.getElementById('message').value;


    var message = {
      username: App.username,
      text: txt,
      roomname: ' '
    };

    Parse.create(message, Parse.create.success, Parse.create.error);

    MessagesView.renderMessage(message);

    console.log('data', App.data);

    App.initialize();

  },

  setStatus: function (active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};