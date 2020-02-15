var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {

  },

  //puts each html message into a span and returns it to be added
  renderMessage: function (data) {
    var messages = [];
    for (var i = 0; i < data.results.length; i++) {
      var message = data.results[i];
      messages.push(MessageView.render(message));
      console.log(message);
      this.$chats.append(`<span>${messages[i]}</span>`);

    }



    // var messages = _.map(data.results, function (item) {
    //   return MessageView.render(item);
    // });
    // for (var i = 0)




  }
};


 // for (var i = 0; i < data.results.length; i++) {

    //   var message = data.results[i];
    //   this.$chats.append(`<span class=text>${message.username}<br>${message.text}</span><br>`);
    //   //this.$chats.append(`<span class=text>${message.text}</span><br>`);