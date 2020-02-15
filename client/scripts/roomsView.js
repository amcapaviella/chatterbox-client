var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  renderRoom: function(message) {
    this.$select.append('<p>message.roomname</p>');


  }

};
