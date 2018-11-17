var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  //   FormView.$form.on('submit', MessagesView.renderMessage());
  },

  renderMessage: function(message) {
    // var html = '';

    // html += MessageView.render(message);

    // if (message.results) {
    //   for (var i = 0; i < results.length; i++) {
    //     var message = results[i];
    //     html += MessagesView.render(message);
    //   }
    // }

    // //else 
    //   html = MessageView.render(message)
    
    MessagesView.$chats.append(MessageView.render(message));
  }

};