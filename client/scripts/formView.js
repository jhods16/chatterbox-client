var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    
    var message = {
      username: window.location.search.slice(10),
      text: $('#message').val(),
      roomname: RoomsView.$select.val()
    };
    
    Parse.create(message, console.log(message));
    Parse.readAll(MessagesView.renderMessage(message));

    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  },


};