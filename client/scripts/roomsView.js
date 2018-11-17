var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  renderRoom: function(message) {
    
    RoomsView.$select.append(MessageView.render(message));  
  
  }

};
