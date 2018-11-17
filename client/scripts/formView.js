var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
    FormView.toggleFriend();
    FormView.addRoom();
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    
    var $input = $('#message').val();
    
    Parse.create($input, MessagesView.renderMessage($input));

    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  },

  toggleFriend: function() {
    $('.username').click(function(event){
      // var username = $(this).data()
      Friends.toggleStatus();
    })
  },

  addRoom: function() {
    $('button').click(function(event) {
      Rooms.add();
    })
  }
};