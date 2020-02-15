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
      var room = data.results[i].roomname;
      if (room === undefined) {
        room = 'lobby';
        console.log('the undefined room', room);
      }
      console.log('room inside the loop!!', room);
      // console.log(room, 'room');
      Rooms.add(room);
    }

  },

  renderRoom: function(room) {
    // console.log('room', room);
    this.$select.append('<option>' + room + '</option>');


  }

};
