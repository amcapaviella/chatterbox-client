var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {

  },

  grabRooms: function(data) {
    // console.log(data.results);
    // console.log('data results', data.results);
    console.log(data);

    for (var i = 0; i < data.results.length; i++) {
      var room = data.results[i].roomname || 'lobby';
      Rooms.add(room);

    }
    console.log(Rooms);
  },

  renderRoom: function(room) {
    this.$select.append('<option value="' + room + '">' + room + '</option>');

  },

  addRoom: function () {
    //checks if the room is in the set
    this.$button.on('click', function() {
      var newRoom = window.prompt('Add a Room!');
      Rooms.add(newRoom);
      console.log(Rooms, newRoom);
    });

  }


};
