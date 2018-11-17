var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="username"></div>
        <div><%= username + ': ' + text %></div>
      </div>
    `)

};