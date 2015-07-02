Template.sfdcQueue.helpers({
  sfdcQueue: function(){
    return QueueItems.find({'status': 'Requested'});
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
    Meteor.call('sendEmail');
    console.log('success!');
  }
}); 


