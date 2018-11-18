var Friends = {

  friendsList: {},

  addFriend: function(username) {
    MessagesView.$chats.on('click', '.username', function(event) {
      event.preventDefault();
      var username = $(this).data('username');
    });
  
    Friends.friendsList[username] = true;
    return true;
  },
  
  showFriends: function(list) {

    MessagesView.$chats.on('click', '.username', function(event) {

      var username = $(this).data('username');

      var friendMessages = list.filter(function(message) {
        if (message.username === username) {
          $(this).css('color', 'navy');
          return message;
        }
      });
      console.log(friendMessages);
      MessagesView.$chats.empty();
      MessagesView.renderMessage(friendMessages);
      
    });
  }
};
