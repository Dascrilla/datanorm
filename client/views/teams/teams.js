Template.teamList.helpers({
  team: function(){
    return teams = _.uniq(Payees.find().map(function(x) {return x.team;}));
  }
});

Template.teamItem.helpers({
  teamName: function(){
    return Payees.find().team
  },
  teamCount: function(){
    return Payee.
  }
});
