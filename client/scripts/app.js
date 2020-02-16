var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',


  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();
    RoomsView.addRoom();


    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    App.data = App.fetch();





  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      MessagesView.renderAll(data);
      console.log(data);
      RoomsView.grabRooms(data);


      callback();
      return data;
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
