var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.click(RoomsView.addRoom);
  },

  renderRoom: function(list) {
    
    for (var i = 0; i < list.length; i++) {
      if (list[i].roomname) {
        Rooms.add(list[i].roomname);
      }
    }
  
    for (var key in Rooms.roomsList) {
      RoomsView.$select.append($('<option>', {value: key, text: key}));
    }
  },

  addRoom: function() {
    var $message = $('#message').val();
    RoomsView.$select.append($('<option>', {value: $message, text: $message}));
    Rooms.add($('#message').val());
  },

  roomChange: function(list) {

    RoomsView.$select.on('change', function() {

      var currentRoom = RoomsView.$select.val();

      var roomMessages = list.filter(function(message) {
        if (message.roomname === currentRoom) {
          return message;
        }
      });
      MessagesView.$chats.empty();
      MessagesView.renderMessage(roomMessages);
      console.log(roomMessages);
      
    });
  }
};
