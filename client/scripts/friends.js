var Friends = {
  
  friendsList: {},

  toggleStatus: function(username) {
    Friends.friendsList[username] = true;
    return true;
  },
  
  // toggleStatus[restore] = function(username) {
  //   friendsList[username] = false;
  // }
};
