Template.sfdcQueue.helpers({
  sfdcQueue: function(){
    return QueueItems.find({'status': "In Queue"});
    }
});

Template.queueItem.helpers({
  executeDate: function(){
  	if (moment().date() > 15) {
  		return parseInt(moment().format('MM')) + 1 + "/" + 1 + "/" + moment().format('YYYY')
  	}
  	else{
  	return moment().format('DD') + "/" + 15 + moment().year()} 
  }
});

Template.sfdcQueue.events({
  'click button': function(e){
    e.preventDefault();
    if(QueueItems.find({userId: Meteor.userId(), status:"In Queue"}).count() === 0){
         AntiModals.alert("Add items into your Queue before requesting them to be executed!"); 
    }
    else{
         if(confirm("You have " + QueueItems.find({userId: Meteor.userId(), status:"In Queue"}).count() + " Items in your Queue. Send them for approval?"))
         { 
          Meteor.call('sendEmail');
          AntiModals.alert("Congrats! All itmes in your queue are awaiting confirmation. Your queue has been cleared");
        }
      }
    }
}); 


