var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {

  },

  renderAll: function (data) {
    for (var i = 0; i < data.results.length; i++) {
      // console.log(data)
      var message = data.results[i];
      // console.log(message, 'message');
      if (message.username === undefined) {
        message.username = ' ';
      }
      if (message.text === undefined) {
        message.text = ' '
      }

      this.renderMessage(message);

    }

  },
  //puts each html message into a span and returns it to be added
  renderMessage: function (msg) {
    // var username = msg.username;
    // var text = msg.text;
    // var roomname = msg.roomname;
    this.$chats.append(MessageView.render(msg));


    //<input type="submit" name="submit" class="submit"/>








    // var messages = _.map(data.results, function (item) {
    //   return MessageView.render(item);
    // });
    // for (var i = 0)




  }
};


// for (var i = 0; i < data.results.length; i++) {
//   var message = data.results[i];//   this.$chats.append(`<span class=text>${message.username}<br>${message.text}</span><br>`);//   //this.$chats.append(`<span class=text>${message.text}</span><br>`);

