var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    Friends.addFriend();
  },

  renderMessage: function(message) {
    var html = '';

    if (Array.isArray(message)) {
      for (var i = 0; i < message.length; i++) {
        if (message[i].username) {
          html += MessageView.render(message[i]);
        }
      }
    } else {
      html += MessageView.render(message);
    }
    
    MessagesView.$chats.prepend(html);
  }
};